// db.js — SQLite local storage via sql.js + localStorage persistence
let db = null;
let SQL = null;

async function initDB() {
  SQL = await initSqlJs({
    locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${file}`
  });
  const saved = localStorage.getItem('cv_db');
  if (saved) {
    try {
      db = new SQL.Database(new Uint8Array(JSON.parse(saved)));
    } catch(e) {
      db = new SQL.Database();
      createSchema();
    }
  } else {
    db = new SQL.Database();
    createSchema();
  }
}

function createSchema() {
  db.run(`
    CREATE TABLE IF NOT EXISTS progress (
      module_id INTEGER PRIMARY KEY,
      lessons_done INTEGER DEFAULT 0,
      total_lessons INTEGER DEFAULT 0,
      completed INTEGER DEFAULT 0,
      last_lesson INTEGER DEFAULT -1,
      updated_at TEXT DEFAULT (datetime('now'))
    );
    CREATE TABLE IF NOT EXISTS quiz_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_id INTEGER,
      score INTEGER,
      total INTEGER,
      passed INTEGER,
      created_at TEXT DEFAULT (datetime('now'))
    );
  `);
  saveDB();
}

function saveDB() {
  if (!db) return;
  try {
    const data = db.export();
    localStorage.setItem('cv_db', JSON.stringify(Array.from(data)));
  } catch(e) { console.warn('DB save failed', e); }
}

function getProgress(moduleId) {
  const res = db.exec(`SELECT * FROM progress WHERE module_id = ${moduleId}`);
  if (!res.length || !res[0].values.length) return null;
  const [cols, vals] = [res[0].columns, res[0].values[0]];
  return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
}

function getAllProgress() {
  const res = db.exec(`SELECT * FROM progress`);
  if (!res.length) return [];
  const cols = res[0].columns;
  return res[0].values.map(row => Object.fromEntries(cols.map((c, i) => [c, row[i]])));
}

function updateLessonProgress(moduleId, lessonIndex, totalLessons) {
  const existing = getProgress(moduleId);
  const done = Math.max(existing ? existing.lessons_done : 0, lessonIndex + 1);
  if (existing) {
    db.run(`UPDATE progress SET lessons_done = ?, total_lessons = ?, last_lesson = ?, updated_at = datetime('now') WHERE module_id = ?`,
      [done, totalLessons, lessonIndex, moduleId]);
  } else {
    db.run(`INSERT INTO progress (module_id, lessons_done, total_lessons, last_lesson) VALUES (?, ?, ?, ?)`,
      [moduleId, done, totalLessons, lessonIndex]);
  }
  saveDB();
}

function markModuleComplete(moduleId) {
  db.run(`UPDATE progress SET completed = 1, updated_at = datetime('now') WHERE module_id = ?`, [moduleId]);
  saveDB();
}

function saveQuizResult(moduleId, score, total) {
  const passed = score >= Math.ceil(total * 0.6) ? 1 : 0;
  db.run(`INSERT INTO quiz_results (module_id, score, total, passed) VALUES (?, ?, ?, ?)`,
    [moduleId, score, total, passed]);
  if (passed) markModuleComplete(moduleId);
  saveDB();
  return { passed, score, total };
}

function getLastQuizResult(moduleId) {
  const res = db.exec(`SELECT * FROM quiz_results WHERE module_id = ${moduleId} ORDER BY id DESC LIMIT 1`);
  if (!res.length || !res[0].values.length) return null;
  const [cols, vals] = [res[0].columns, res[0].values[0]];
  return Object.fromEntries(cols.map((c, i) => [c, vals[i]]));
}

function getOverallStats() {
  const progress = getAllProgress();
  const totalModules = MODULES.length;
  const completedModules = progress.filter(p => p.completed).length;
  const totalLessons = MODULES.reduce((s, m) => s + m.lessons.length, 0);
  const doneLessons = progress.reduce((s, p) => s + (p.lessons_done || 0), 0);
  const pct = totalLessons > 0 ? Math.round((doneLessons / totalLessons) * 100) : 0;
  return { totalModules, completedModules, totalLessons, doneLessons, pct };
}

function resetAll() {
  db.run(`DELETE FROM progress; DELETE FROM quiz_results;`);
  saveDB();
}
