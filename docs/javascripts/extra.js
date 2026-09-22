document.addEventListener("DOMContentLoaded", () => {
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
  const options = document.querySelectorAll(".quiz-option");
  if (!options.length) return;

  // Agrupar opciones por cada pregunta según la separación en el DOM
  const questions = [];
  let currentGroup = [];

  options.forEach((opt) => {
    if (
      currentGroup.length > 0 &&
      opt.previousElementSibling &&
      (opt.previousElementSibling.tagName === "H3" ||
        opt.previousElementSibling.tagName === "HR")
    ) {
      questions.push(currentGroup);
      currentGroup = [];
    }
    currentGroup.push(opt);
  });
  if (currentGroup.length) questions.push(currentGroup);

  // Crear marcador flotante en la esquina
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
    document.getElementById("q-answered").textContent = answeredCount;
    const rawScore = Math.max(0, score);
    const grade = ((rawScore / totalQuestions) * 10).toFixed(2);
    document.getElementById("q-score").textContent = grade;
  };

  // Asignar evento de selección a cada opción
  questions.forEach((group) => {
    group.forEach((opt) => {
      const summary = opt.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", (e) => {
        // Bloquear cambios si la pregunta ya fue contestada
        if (group[0].dataset.answered === "true") {
          e.preventDefault();
          return;
        }

        // Marcar la pregunta como respondida
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

        // Voltear / abrir simultáneamente todas las opciones para ver sus explicaciones
        setTimeout(() => {
          group.forEach((o) => {
            o.setAttribute("open", "");
          });
          updateScoreBoard();
        }, 50);
      });
    });
  });
});
