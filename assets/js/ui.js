// ui.js — UI rendering functions

function renderWelcome() {
  return `
  <div id="screen-welcome" class="screen active">
    <div class="welcome-icon">📶</div>
    <h1 class="welcome-title">ConectaVelandia</h1>
    <p class="welcome-sub">Tu guía educativa sobre redes domésticas, diseñada para las familias de la vereda Velandia.</p>
    <div class="welcome-badge">🎓 Proyecto UNAD · TRL5 · Fase 4</div>
    <div class="welcome-features">
      <div class="feature-item"><span class="feature-icon">🌐</span><div class="feature-text"><strong>5 Módulos Educativos</strong>Aprende sobre redes, configuración y seguridad</div></div>
      <div class="feature-item"><span class="feature-icon">📝</span><div class="feature-text"><strong>Quizzes Interactivos</strong>Pon a prueba tus conocimientos</div></div>
      <div class="feature-item"><span class="feature-icon">📲</span><div class="feature-text"><strong>Funciona Sin Internet</strong>Accede al contenido en cualquier momento</div></div>
    </div>
    <button class="btn btn-primary" id="btn-start">Comenzar ahora →</button>
    <button class="btn btn-outline" id="btn-progress-welcome" style="margin-top:12px">Ver mi progreso</button>
  </div>`;
}

function renderHome() {
  const allProgress = getAllProgress();
  const stats = getOverallStats();
  const progressMap = {};
  allProgress.forEach(p => progressMap[p.module_id] = p);

  const moduleColors = ['#6366f1','#06b6d4','#10b981','#f59e0b','#ef4444'];

  const cards = MODULES.map(m => {
    const p = progressMap[m.id];
    const done = p ? p.lessons_done : 0;
    const total = m.lessons.length;
    const pct = Math.round((done / total) * 100);
    const isComplete = p && p.completed;
    const inProgress = done > 0 && !isComplete;
    const badgeClass = isComplete ? 'badge-done' : inProgress ? 'badge-progress' : 'badge-pending';
    const badgeText = isComplete ? '✓ Completado' : inProgress ? '▶ En progreso' : '● Pendiente';
    return `
    <div class="module-card" data-module="${m.id}" style="--card-color:${m.color}">
      <div style="position:absolute;top:0;left:0;right:0;height:3px;background:${m.color};border-radius:16px 16px 0 0;"></div>
      <div class="module-card-top">
        <div class="module-card-icon" style="background:${m.color}22">${m.icon}</div>
        <div class="module-card-meta">
          <div class="module-card-rf">${m.rf}</div>
          <div class="module-card-title">${m.title}</div>
          <div class="module-card-desc">${m.subtitle}</div>
        </div>
      </div>
      <div class="progress-track" style="margin-bottom:10px"><div class="progress-fill" style="width:${pct}%;background:${m.color}"></div></div>
      <div class="module-card-footer">
        <span class="module-progress-text">${done}/${total} lecciones</span>
        <span class="module-badge ${badgeClass}">${badgeText}</span>
      </div>
    </div>`;
  }).join('');

  return `
  <div id="screen-home" class="screen active">
    <div class="home-header">
      <div class="home-greeting">👋 ¡Bienvenido de nuevo!</div>
      <div class="home-title">Mis <span>Módulos</span></div>
      <div class="home-progress-bar-wrap">
        <div class="home-progress-label"><span>Progreso total</span><span>${stats.pct}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width:${stats.pct}%"></div></div>
      </div>
    </div>
    <div class="modules-grid">${cards}</div>
  </div>`;
}

function renderModuleDetail(moduleId) {
  const m = MODULES.find(x => x.id === moduleId);
  if (!m) return '';
  const p = getProgress(moduleId);
  const lastLesson = p ? p.last_lesson : -1;
  const quizResult = getLastQuizResult(moduleId);

  const lessonItems = m.lessons.map((l, i) => {
    const isDone = p && i <= p.last_lesson;
    return `
    <div class="lesson-item" data-module="${moduleId}" data-lesson="${i}">
      <div class="lesson-num ${isDone ? 'done' : ''}">${isDone ? '✓' : i + 1}</div>
      <div class="lesson-meta">
        <div class="lesson-title">${l.title}</div>
      </div>
      <span class="lesson-arrow">›</span>
    </div>`;
  }).join('');

  const quizSection = `
  <div class="quiz-cta">
    <div style="font-size:32px;margin-bottom:8px">📝</div>
    <h3>Quiz del Módulo</h3>
    <p>${quizResult ? `Último resultado: <strong>${quizResult.score}/${quizResult.total}</strong> · ${quizResult.passed ? '✅ Aprobado' : '⚠️ Intenta de nuevo'}` : 'Completa las lecciones y pon a prueba tus conocimientos.'}</p>
    <button class="btn btn-primary btn-sm" id="btn-start-quiz" data-module="${moduleId}" style="max-width:200px">Iniciar Quiz →</button>
  </div>`;

  return `
  <div id="screen-module" class="screen active">
    <div class="top-bar">
      <button class="btn btn-icon" id="btn-back-home">‹</button>
      <div><div class="top-bar-title">${m.icon} ${m.title}</div><div class="top-bar-sub">${m.rf} · ${m.lessons.length} lecciones</div></div>
    </div>
    <div class="module-hero" style="background:linear-gradient(135deg,${m.color}18,transparent)">
      <div class="module-hero-icon">${m.icon}</div>
      <div class="module-hero-title">${m.title}</div>
      <div class="module-hero-desc">${m.description}</div>
    </div>
    <div class="lessons-list">${lessonItems}</div>
    ${quizSection}
  </div>`;
}

function renderLesson(moduleId, lessonIndex) {
  const m = MODULES.find(x => x.id === moduleId);
  if (!m) return '';
  const l = m.lessons[lessonIndex];
  if (!l) return '';
  const isLast = lessonIndex === m.lessons.length - 1;
  const prevBtn = lessonIndex > 0
    ? `<button class="btn btn-outline" id="btn-prev-lesson" data-module="${moduleId}" data-lesson="${lessonIndex - 1}">‹ Anterior</button>`
    : '';
  const nextBtn = isLast
    ? `<button class="btn btn-primary" id="btn-go-quiz" data-module="${moduleId}">Ir al Quiz 📝</button>`
    : `<button class="btn btn-primary" id="btn-next-lesson" data-module="${moduleId}" data-lesson="${lessonIndex + 1}">Siguiente ›</button>`;

  return `
  <div id="screen-lesson" class="screen active">
    <div class="top-bar">
      <button class="btn btn-icon" id="btn-back-module" data-module="${moduleId}">‹</button>
      <div><div class="top-bar-title">${m.title}</div><div class="top-bar-sub">Lección ${lessonIndex + 1} de ${m.lessons.length}</div></div>
    </div>
    <div class="lesson-body">
      <div class="lesson-illustration">${l.icon}</div>
      <h2 class="lesson-title-main">${l.title}</h2>
      <div class="lesson-content">${l.content}</div>
      <div class="nav-lesson">${prevBtn}${nextBtn}</div>
    </div>
  </div>`;
}

function renderQuiz(moduleId) {
  const m = MODULES.find(x => x.id === moduleId);
  if (!m) return '';
  return `
  <div id="screen-quiz" class="screen active" data-module="${moduleId}" data-q="0" data-score="0" data-answered="false">
    <div class="top-bar">
      <button class="btn btn-icon" id="btn-back-module-quiz" data-module="${moduleId}">‹</button>
      <div><div class="top-bar-title">Quiz · ${m.title}</div><div class="top-bar-sub" id="quiz-progress-label">Pregunta 1 de ${m.quiz.length}</div></div>
    </div>
    <div class="quiz-body" id="quiz-body"></div>
  </div>`;
}

function renderQuizQuestion(moduleId, qIndex, score) {
  const m = MODULES.find(x => x.id === moduleId);
  const q = m.quiz[qIndex];
  const letters = ['A','B','C','D'];
  const opts = q.options.map((o, i) => `
    <div class="quiz-option" data-opt="${i}">
      <span class="option-letter">${letters[i]}</span>${o}
    </div>`).join('');
  return `
  <div class="quiz-header-bar">
    <div class="progress-track"><div class="progress-fill" style="width:${Math.round((qIndex/m.quiz.length)*100)}%"></div></div>
    <br>
    <div class="quiz-q-label">Pregunta ${qIndex + 1} de ${m.quiz.length}</div>
    <div class="quiz-question">${q.question}</div>
  </div>
  <div class="quiz-options" id="quiz-options">${opts}</div>
  <div id="quiz-explanation"></div>
  <button class="btn btn-primary" id="btn-next-q" style="display:none" data-module="${moduleId}" data-q="${qIndex}" data-score="${score}" data-total="${m.quiz.length}">
    ${qIndex < m.quiz.length - 1 ? 'Siguiente pregunta →' : 'Ver resultado 🏆'}
  </button>`;
}

function renderQuizResult(moduleId, score, total) {
  const m = MODULES.find(x => x.id === moduleId);
  const passed = score >= Math.ceil(total * 0.6);
  const pct = Math.round((score / total) * 100);
  const emoji = passed ? (pct === 100 ? '🏆' : '🎉') : '💪';
  const title = passed ? (pct === 100 ? '¡Perfecto!' : '¡Aprobado!') : 'Sigue practicando';
  const msg = passed
    ? `Obtuviste ${score} de ${total} respuestas correctas. ¡Excelente trabajo! Has dominado este módulo.`
    : `Obtuviste ${score} de ${total}. Necesitas al menos ${Math.ceil(total * 0.6)} correctas para aprobar. ¡Repasa las lecciones e inténtalo de nuevo!`;
  return `
  <div class="quiz-result">
    <div class="result-circle ${passed ? 'pass' : 'fail'}">
      <div class="result-score">${score}/${total}</div>
      <div class="result-of">${pct}%</div>
    </div>
    <div class="result-emoji">${emoji}</div>
    <h2 class="result-title">${title}</h2>
    <p class="result-msg">${msg}</p>
    <div class="result-actions">
      ${passed ? `<button class="btn btn-primary" id="btn-result-home">Volver al inicio 🏠</button>` : `<button class="btn btn-primary" id="btn-retry-quiz" data-module="${moduleId}">Intentar de nuevo 🔄</button>`}
      <button class="btn btn-outline" id="btn-result-module" data-module="${moduleId}">Ver módulo</button>
    </div>
  </div>`;
}

function renderProgress() {
  const stats = getOverallStats();
  const allP = getAllProgress();
  const progressMap = {};
  allP.forEach(p => progressMap[p.module_id] = p);

  const moduleItems = MODULES.map(m => {
    const p = progressMap[m.id];
    const done = p ? p.lessons_done : 0;
    const total = m.lessons.length;
    const pct = Math.round((done / total) * 100);
    const isComplete = p && p.completed;
    const statusText = isComplete ? '✅ Completado' : done > 0 ? `${done}/${total} lecciones` : 'Sin iniciar';
    return `
    <div class="module-progress-item">
      <div class="module-pi-top">
        <span class="module-pi-icon">${m.icon}</span>
        <div class="module-pi-info">
          <div class="module-pi-title">${m.title}</div>
          <div class="module-pi-status">${statusText}</div>
        </div>
        <span class="module-pi-pct">${pct}%</span>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${m.color}"></div></div>
    </div>`;
  }).join('');

  return `
  <div id="screen-progress" class="screen active">
    <div class="progress-hero">
      <div class="progress-hero-title">📊 Mi Progreso</div>
      <div class="overall-circle">
        <div class="overall-pct">${stats.pct}%</div>
        <div class="overall-label">Completado</div>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card"><div class="stat-value" style="color:#6366f1">${stats.completedModules}</div><div class="stat-label">Módulos completados</div></div>
      <div class="stat-card"><div class="stat-value" style="color:#22d3ee">${stats.doneLessons}</div><div class="stat-label">Lecciones vistas</div></div>
      <div class="stat-card"><div class="stat-value" style="color:#10b981">${stats.totalModules}</div><div class="stat-label">Módulos totales</div></div>
    </div>
    <div class="module-progress-list">${moduleItems}</div>
  </div>`;
}

function renderNav(active) {
  return `
  <nav class="bottom-nav">
    <button class="nav-item ${active==='home'?'active':''}" id="nav-home">
      <span class="nav-icon">🏠</span><span class="nav-label">Inicio</span>
    </button>
    <button class="nav-item ${active==='progress'?'active':''}" id="nav-progress">
      <span class="nav-icon">📊</span><span class="nav-label">Progreso</span>
    </button>
  </nav>`;
}

function showToast(msg, duration = 2500) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), duration);
}
