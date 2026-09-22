const initQuizAndTooltips = () => {
  // ========================================================
  // 1. Manejo táctil / clic para abreviaturas (<abbr>)
  // ========================================================
  const abbrElements = document.querySelectorAll("abbr");

  const closeAllTooltips = () => {
    abbrElements.forEach((el) => el.classList.remove("tooltip-active"));
  };

  abbrElements.forEach((abbr) => {
    abbr.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      const isActive = abbr.classList.contains("tooltip-active");
      closeAllTooltips();

      if (!isActive) {
        abbr.classList.add("tooltip-active");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("abbr")) {
      closeAllTooltips();
    }
  });

  // ========================================================
  // 2. Motor interactivo de Tests y Exámenes (NotebookLM style)
  // ========================================================
  // Localiza cada pregunta a partir de sus encabezados ### Pregunta X
  const questionHeaders = Array.from(
    document.querySelectorAll("article h3, .md-content h3")
  ).filter((h3) => h3.textContent.trim().toLowerCase().startsWith("pregunta"));

  if (!questionHeaders.length) return;

  // Evita duplicar el marcador al navegar con Material for MkDocs (instant loading)
  const oldScoreboard = document.querySelector(".quiz-scoreboard");
  if (oldScoreboard) oldScoreboard.remove();

  // Agrupa de forma aislada las opciones que pertenecen a cada pregunta
  const questionGroups = [];

  questionHeaders.forEach((h3) => {
    const group = [];
    let sibling = h3.nextElementSibling;

    while (sibling && sibling.tagName !== "H3") {
      if (sibling.classList && sibling.classList.contains("quiz-option")) {
        group.push(sibling);
      } else {
        const nestedOptions = sibling.querySelectorAll(".quiz-option");
        nestedOptions.forEach((opt) => group.push(opt));
      }
      sibling = sibling.nextElementSibling;
    }

    if (group.length > 0) {
      questionGroups.push(group);
    }
  });

  if (!questionGroups.length) return;

  // Marcador flotante dinámico (se adapta al número real de preguntas del test)
  let score = 0;
  let answeredCount = 0;
  const totalQuestions = questionGroups.length;

  const scoreBoard = document.createElement("div");
  scoreBoard.className = "quiz-scoreboard";
  scoreBoard.innerHTML = `
    <div class="score-title">Marcador Examen</div>
    <div class="score-stats">
      <span>Preguntas: <strong id="q-answered">0</strong>/${totalQuestions}</span>
      <span>Nota: <strong id="q-score">0.00</strong> / 10</span>
    </div>
  `;
  document.body.appendChild(scoreBoard);

  const updateScoreBoard = () => {
    const qAnsweredEl = document.getElementById("q-answered");
    const qScoreEl = document.getElementById("q-score");
    if (qAnsweredEl) qAnsweredEl.textContent = answeredCount;
    if (qScoreEl) {
      const rawScore = Math.max(0, score);
      const grade = ((rawScore / totalQuestions) * 10).toFixed(2);
      qScoreEl.textContent = grade;
    }
  };

  // Asigna el evento exclusivamente a su grupo de 4 opciones
  questionGroups.forEach((group) => {
    group.forEach((opt) => {
      const summary = opt.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", (e) => {
        // Bloquea cambios si esta pregunta concreta ya se respondió
        if (group[0].dataset.answered === "true") {
          e.preventDefault();
          return;
        }

        group.forEach((o) => (o.dataset.answered = "true"));
        answeredCount++;

        const isCorrect = opt.classList.contains("correct");
        if (isCorrect) {
          score += 1.0;
          opt.classList.add("user-selected-correct");
        } else {
          score -= 0.33;
          opt.classList.add("user-selected-incorrect");
        }

        // Abre y revela únicamente las opciones de esta pregunta
        setTimeout(() => {
          group.forEach((o) => {
            o.setAttribute("open", "");
          });
          updateScoreBoard();
        }, 50);
      });
    });
  });
};

// Carga tanto en carga normal como en la navegación instantánea de Material for MkDocs
document.addEventListener("DOMContentLoaded", initQuizAndTooltips);
if (typeof document$ !== "undefined") {
  document$.subscribe(initQuizAndTooltips);
}
