// ========================================================
// 1. Limpieza de sintaxis matemática exclusiva de los tests
// ========================================================
function cleanLatexInTests() {
  const targets = document.querySelectorAll(
    ".quiz-option summary, .quiz-option .feedback, .quiz-option p, .quiz-fill-inline .feedback, .quiz-multi-option .feedback"
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
// 2. Motor interactivo unificado (Tests, Huecos, Multirrespuesta)
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

  // Clasificación de preguntas según su tipología
  const questions = [];

  questionHeaders.forEach((h3) => {
    let sibling = h3.nextElementSibling;
    const choiceOptions = [];
    let fillContainer = null;
    let multiContainer = null;

    while (sibling && sibling.tagName !== "H3") {
      if (sibling.classList && sibling.classList.contains("quiz-option")) {
        choiceOptions.push(sibling);
      } else if (sibling.classList && sibling.classList.contains("quiz-fill-inline")) {
        fillContainer = sibling;
      } else if (sibling.classList && sibling.classList.contains("quiz-multi")) {
        multiContainer = sibling;
      } else {
        const nestedOptions = sibling.querySelectorAll(".quiz-option");
        nestedOptions.forEach((opt) => choiceOptions.push(opt));
        const nestedFill = sibling.querySelector(".quiz-fill-inline");
        if (nestedFill) fillContainer = nestedFill;
        const nestedMulti = sibling.querySelector(".quiz-multi");
        if (nestedMulti) multiContainer = nestedMulti;
      }
      sibling = sibling.nextElementSibling;
    }

    if (choiceOptions.length > 0) {
      questions.push({ type: "choice", elements: choiceOptions });
    } else if (fillContainer) {
      questions.push({ type: "fill", element: fillContainer });
    } else if (multiContainer) {
      questions.push({ type: "multi", element: multiContainer });
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

  // Asignación de controladores por tipo de pregunta
  questions.forEach((q) => {
    // ----------------------------------------------------
    // 1. TIPO TEST CLÁSICO (1 sola opción con <details>)
    // ----------------------------------------------------
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
    }

    // ----------------------------------------------------
    // 2. TIPO RELLENAR HUECO (Fill-in-the-blank)
    // ----------------------------------------------------
    else if (q.type === "fill") {
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
          input.style.borderColor = "var(--md-code-hl-special-color, #ef5350)";
          input.style.backgroundColor = "rgba(244, 67, 54, 0.12)";
          if (feedbackTitle) {
            feedbackTitle.innerHTML = "✗ Incorrecto";
            feedbackTitle.style.color = "var(--md-code-hl-special-color, #ef5350)";
          }
        }

        cleanLatexInTests();
        updateScoreBoard();
      };

      if (btn) btn.addEventListener("click", validateFill);
      if (input) {
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") validateFill();
        });
      }
    }

    // ----------------------------------------------------
    // 3. TIPO MULTIRRESPUESTA (Multi-choice con confirmación)
    // ----------------------------------------------------
    else if (q.type === "multi") {
      const container = q.element;
      const options = container.querySelectorAll(".quiz-multi-option");
      const btn = container.querySelector(".quiz-btn-confirm");

      // Selección visual (clic en la tarjeta)
      options.forEach((opt) => {
        opt.addEventListener("click", () => {
          if (container.dataset.answered === "true") return;
          opt.classList.toggle("selected");
        });
      });

      // Validar al pulsar botón "Confirmar"
      if (btn) {
        btn.addEventListener("click", () => {
          if (container.dataset.answered === "true") return;

          const selected = container.querySelectorAll(".quiz-multi-option.selected");
          if (selected.length === 0) return; // Exige marcar al menos una

          container.dataset.answered = "true";
          btn.disabled = true;
          answeredCount++;

          const totalExpectedCorrect = parseInt(container.dataset.expected || "2", 10);
          let correctSelected = 0;
          let incorrectSelected = 0;

          selected.forEach((opt) => {
            if (opt.classList.contains("correct")) {
              correctSelected++;
              opt.classList.add("user-selected-correct");
            } else {
              incorrectSelected++;
              opt.classList.add("user-selected-incorrect");
            }
          });

          // Cálculo proporcional: (+0.5 por cada acierto si se pedían 2)
          let points = (correctSelected / totalExpectedCorrect) * 1.0;
          // Resta por fallos
          points -= incorrectSelected * 0.33;
          
          score += Math.max(0, points);

          // Revela soluciones
          options.forEach((opt) => {
            const fb = opt.querySelector(".feedback");
            if (fb) fb.style.display = "block";
            if (opt.classList.contains("correct")) {
              opt.style.borderColor = "var(--md-code-hl-string-color, #4caf50)";
            } else if (opt.classList.contains("selected")) {
              opt.style.borderColor = "var(--md-code-hl-special-color, #ef5350)";
            }
          });

          cleanLatexInTests();
          updateScoreBoard();
        });
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", initQuizAndTooltips);
if (typeof document$ !== "undefined") {
  document$.subscribe(initQuizAndTooltips);
}
