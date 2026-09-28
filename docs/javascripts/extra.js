// ========================================================
// 1. Limpieza de sintaxis matemática exclusiva de los tests
// ========================================================
function cleanLatexInTests() {
  const targets = document.querySelectorAll(
    ".quiz-option summary, .quiz-option .feedback, .quiz-option p, .quiz-fill-inline .feedback"
  );

  targets.forEach((el) => {
    if (el.innerHTML.includes("$") || el.innerHTML.includes("\\text")) {
      let txt = el.innerHTML;
      txt = txt.replace(/\\text\{([^}]+)\}/g, "$1");
      txt = txt.replace(/\\cdot/g, "·");
      txt = txt.replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>");
      txt = txt.replace(/\^(-?\d+)/g, "<sup>$1</sup>");
      txt = txt.replace(/\$/g, "");
      el.innerHTML = txt;
    }
  });
}

// ========================================================
// 2. Motor interactivo de Tests, Huecos y Marcador
// ========================================================
const initQuizAndTooltips = () => {
  cleanLatexInTests();

  // Tooltips para abreviaturas (<abbr>)
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

  // Localiza cada pregunta a partir de ### Pregunta X
  const questionHeaders = Array.from(
    document.querySelectorAll("article h3, .md-content h3")
  ).filter((h3) => h3.textContent.trim().toLowerCase().startsWith("pregunta"));

  if (!questionHeaders.length) return;

  const oldScoreboard = document.querySelector(".quiz-scoreboard");
  if (oldScoreboard) oldScoreboard.remove();

  // Estructura para almacenar preguntas (tanto tipo test como de rellenar hueco)
  const questions = [];

  questionHeaders.forEach((h3) => {
    let sibling = h3.nextElementSibling;
    const options = [];
    let fillContainer = null;

    while (sibling && sibling.tagName !== "H3") {
      if (sibling.classList && sibling.classList.contains("quiz-option")) {
        options.push(sibling);
      } else if (sibling.classList && sibling.classList.contains("quiz-fill-inline")) {
        fillContainer = sibling;
      } else {
        const nestedOptions = sibling.querySelectorAll(".quiz-option");
        nestedOptions.forEach((opt) => options.push(opt));
        const nestedFill = sibling.querySelector(".quiz-fill-inline");
        if (nestedFill) fillContainer = nestedFill;
      }
      sibling = sibling.nextElementSibling;
    }

    if (options.length > 0) {
      questions.push({ type: "choice", elements: options });
    } else if (fillContainer) {
      questions.push({ type: "fill", element: fillContainer });
    }
  });

  if (!questions.length) return;

  // Marcador flotante dinámico unificado
  let score = 0;
  let answeredCount = 0;
  const totalQuestions = questions.length;

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

  // Asignación de lógica interactiva por tipo de pregunta
  questions.forEach((q) => {
    if (q.type === "choice") {
      const group = q.elements;
      group.forEach((opt) => {
        const summary = opt.querySelector("summary");
        if (!summary) return;

        summary.addEventListener("click", (e) => {
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

          setTimeout(() => {
            group.forEach((o) => o.setAttribute("open", ""));
            cleanLatexInTests();
            updateScoreBoard();
          }, 50);
        });
      });
    } else if (q.type === "fill") {
      const container = q.element;
      const input = container.querySelector(".quiz-blank-input");
      const btn = container.querySelector(".quiz-btn-inline");
      const feedback = container.querySelector(".feedback");
      const feedbackTitle = feedback ? feedback.querySelector(".feedback-title") : null;

      const validateFill = () => {
        if (container.dataset.answered === "true") return;

        const val = input.value.trim().toLowerCase();
        if (!val) return;

        container.dataset.answered = "true";
        input.disabled = true;
        if (btn) btn.disabled = true;
        answeredCount++;

        const validAnswers = (container.dataset.answer || "")
          .split(",")
          .map((s) => s.trim().toLowerCase());

        const isCorrect = validAnswers.includes(val);

        if (feedback) feedback.style.display = "block";

        if (isCorrect) {
          score += 1.0;
          input.style.borderColor = "var(--md-code-hl-string-color, #4caf50)";
          input.style.backgroundColor = "rgba(76, 175, 80, 0.12)";
          if (feedbackTitle) {
            feedbackTitle.innerHTML = "✓ ¡Exacto!";
            feedbackTitle.style.color = "var(--md-code-hl-string-color, #4caf50)";
          }
        } else {
          score -= 0.33;
          input.style.borderColor = "var(--md-code-hl-special-color, #f44336)";
          input.style.backgroundColor = "rgba(244, 67, 54, 0.12)";
          if (feedbackTitle) {
            feedbackTitle.innerHTML = "✗ Incorrecto";
            feedbackTitle.style.color = "var(--md-code-hl-special-color, #f44336)";
          }
        }

        cleanLatexInTests();
        updateScoreBoard();
      };

      if (btn) {
        btn.addEventListener("click", validateFill);
      }
      if (input) {
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            validateFill();
          }
        });
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", initQuizAndTooltips);
if (typeof document$ !== "undefined") {
  document$.subscribe(initQuizAndTooltips);
}
