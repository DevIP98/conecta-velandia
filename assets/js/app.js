// app.js — Main application controller
const app = document.getElementById('app');

function setView(html, navActive = null) {
  const nav = navActive ? renderNav(navActive) : '';
  app.innerHTML = html + nav;
  bindEvents();
}

function goHome() { setView(renderHome(), 'home'); }
function goProgress() { setView(renderProgress(), 'progress'); }
function goModule(id) { setView(renderModuleDetail(id), 'home'); }
function goLesson(moduleId, lessonIndex) {
  updateLessonProgress(moduleId, lessonIndex, MODULES.find(m=>m.id===moduleId).lessons.length);
  setView(renderLesson(moduleId, lessonIndex));
}
function goQuiz(moduleId) { 
  setView(renderQuiz(moduleId));
  renderCurrentQuestion(moduleId, 0, 0);
}
function goWelcome() { setView(renderWelcome()); }

function renderCurrentQuestion(moduleId, qIndex, score) {
  const body = document.getElementById('quiz-body');
  if (!body) return;
  body.innerHTML = renderQuizQuestion(moduleId, qIndex, score);
  const screen = document.getElementById('screen-quiz');
  if (screen) { screen.dataset.q = qIndex; screen.dataset.score = score; screen.dataset.answered = 'false'; }
  bindQuizEvents(moduleId, qIndex, score);
}

function bindQuizEvents(moduleId, qIndex, score) {
  const m = MODULES.find(x => x.id === moduleId);
  const q = m.quiz[qIndex];
  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const screen = document.getElementById('screen-quiz');
      if (screen.dataset.answered === 'true') return;
      screen.dataset.answered = 'true';
      const chosen = parseInt(opt.dataset.opt);
      const correct = q.correct;
      let newScore = score;
      document.querySelectorAll('.quiz-option').forEach(o => {
        const i = parseInt(o.dataset.opt);
        o.classList.add('disabled');
        if (i === correct) o.classList.add('correct');
        else if (i === chosen && chosen !== correct) o.classList.add('wrong');
      });
      if (chosen === correct) { newScore++; showToast('✅ ¡Correcto!'); }
      else { showToast('❌ Incorrecto'); }
      const exp = document.getElementById('quiz-explanation');
      if (exp) exp.innerHTML = `<div class="explanation-box"><strong>💡 Explicación:</strong> ${q.explanation}</div>`;
      const nextBtn = document.getElementById('btn-next-q');
      if (nextBtn) { nextBtn.style.display = 'flex'; nextBtn.dataset.score = newScore; }
    });
  });

  const nextBtn = document.getElementById('btn-next-q');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const s = parseInt(nextBtn.dataset.score);
      const qi = parseInt(nextBtn.dataset.q);
      const total = parseInt(nextBtn.dataset.total);
      if (qi + 1 < total) {
        renderCurrentQuestion(moduleId, qi + 1, s);
      } else {
        const result = saveQuizResult(moduleId, s, total);
        const body = document.getElementById('quiz-body');
        if (body) body.innerHTML = renderQuizResult(moduleId, s, total);
        bindResultEvents(moduleId);
      }
    });
  }

  const backBtn = document.getElementById('btn-back-module-quiz');
  if (backBtn) backBtn.addEventListener('click', () => goModule(moduleId));
}

function bindResultEvents(moduleId) {
  const homeBtn = document.getElementById('btn-result-home');
  const retryBtn = document.getElementById('btn-retry-quiz');
  const moduleBtn = document.getElementById('btn-result-module');
  if (homeBtn) homeBtn.addEventListener('click', goHome);
  if (retryBtn) retryBtn.addEventListener('click', () => goQuiz(parseInt(retryBtn.dataset.module)));
  if (moduleBtn) moduleBtn.addEventListener('click', () => goModule(parseInt(moduleBtn.dataset.module)));
}

function bindEvents() {
  // Welcome
  const btnStart = document.getElementById('btn-start');
  if (btnStart) btnStart.addEventListener('click', () => { localStorage.setItem('cv_visited','1'); goHome(); });
  const btnPW = document.getElementById('btn-progress-welcome');
  if (btnPW) btnPW.addEventListener('click', goProgress);

  // Nav
  const navHome = document.getElementById('nav-home');
  const navProg = document.getElementById('nav-progress');
  if (navHome) navHome.addEventListener('click', goHome);
  if (navProg) navProg.addEventListener('click', goProgress);

  // Home → module cards
  document.querySelectorAll('.module-card[data-module]').forEach(card => {
    card.addEventListener('click', () => goModule(parseInt(card.dataset.module)));
  });

  // Module detail → back
  const backHome = document.getElementById('btn-back-home');
  if (backHome) backHome.addEventListener('click', goHome);

  // Module detail → lessons
  document.querySelectorAll('.lesson-item[data-lesson]').forEach(item => {
    item.addEventListener('click', () => {
      goLesson(parseInt(item.dataset.module), parseInt(item.dataset.lesson));
    });
  });

  // Module detail → quiz
  const quizBtn = document.getElementById('btn-start-quiz');
  if (quizBtn) quizBtn.addEventListener('click', () => goQuiz(parseInt(quizBtn.dataset.module)));

  // Lesson → back to module
  const backMod = document.getElementById('btn-back-module');
  if (backMod) backMod.addEventListener('click', () => goModule(parseInt(backMod.dataset.module)));

  // Lesson navigation
  const nextL = document.getElementById('btn-next-lesson');
  if (nextL) nextL.addEventListener('click', () => goLesson(parseInt(nextL.dataset.module), parseInt(nextL.dataset.lesson)));
  const prevL = document.getElementById('btn-prev-lesson');
  if (prevL) prevL.addEventListener('click', () => goLesson(parseInt(prevL.dataset.module), parseInt(prevL.dataset.lesson)));
  const goQuizBtn = document.getElementById('btn-go-quiz');
  if (goQuizBtn) goQuizBtn.addEventListener('click', () => goQuiz(parseInt(goQuizBtn.dataset.module)));
}

async function main() {
  try {
    await initDB();
    const visited = localStorage.getItem('cv_visited');
    if (visited) goHome();
    else goWelcome();
  } catch(e) {
    console.error('Init error:', e);
    app.innerHTML = `<div style="padding:40px;text-align:center;color:#ef4444">
      <div style="font-size:48px">⚠️</div>
      <h2 style="margin:16px 0 8px">Error al cargar</h2>
      <p style="color:#94a3b8">Necesitas conexión a internet la primera vez para cargar los recursos.</p>
      <button onclick="location.reload()" style="margin-top:20px;padding:12px 24px;background:#6366f1;color:white;border:none;border-radius:12px;font-size:15px;cursor:pointer">Reintentar</button>
    </div>`;
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(e => console.warn('SW:', e));
}

main();
