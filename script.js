const medicalQuestions = [
  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Lungs", correct: false },
      { text: "Skin", correct: true },
      { text: "Liver", correct: false }
    ]
  },
  {
    question: "What is the primary function of red blood cells?",
    answers: [
      { text: "Transport oxygen", correct: true },
      { text: "Fight infection", correct: false },
      { text: "Clot blood", correct: false },
      { text: "Remove waste products", correct: false }
    ]
  },
  {
    question: "Which part of the brain controls movement?",
    answers: [
      { text: "Cerebrum", correct: false },
      { text: "Cerebellum", correct: true },
      { text: "Brainstem", correct: false },
      { text: "Frontal lobe", correct: false }
    ]
  },
  {
    question: "What is the normal resting heart rate for an adult?",
    answers: [
      { text: "40-60 bpm", correct: false },
      { text: "60-100 bpm", correct: true },
      { text: "100-120 bpm", correct: false },
      { text: "120-140 bpm", correct: false }
    ]
  },
  {
    question: "Which vitamin is primarily responsible for blood clotting?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin K", correct: true },
      { text: "Vitamin D", correct: false }
    ]
  },
  {
    question: "What is the medical term for high blood pressure?",
    answers: [
      { text: "Hypotension", correct: false },
      { text: "Hypertension", correct: true },
      { text: "Arrhythmia", correct: false },
      { text: "Tachycardia", correct: false }
    ]
  },
  {
    question: "Which bone is known as the collarbone?",
    answers: [
      { text: "Femur", correct: false },
      { text: "Scapula", correct: false },
      { text: "Clavicle", correct: true },
      { text: "Humerus", correct: false }
    ]
  },
  {
    question: "What is the function of the pancreas?",
    answers: [
      { text: "Regulates blood sugar levels", correct: true },
      { text: "Produces bile", correct: false },
      { text: "Filters toxins from blood", correct: false },
      { text: "Stores vitamins and minerals", correct: false }
    ]
  },
  {
    question: "Which organ is primarily responsible for detoxifying chemicals and metabolizing drugs?",
    answers: [
      { text: "Kidneys", correct: false },
      { text: "Lungs", correct: false },
      { text: "Liver", correct: true },
      { text: "Pancreas", correct: false }
    ]
  },
  {
    question: "Which hormone is produced by the adrenal glands in response to stress?",
    answers: [
      { text: "Insulin", correct: false },
      { text: "Cortisol", correct: true },
      { text: "Glucagon", correct: false },
      { text: "Thyroxine", correct: false }
    ]
  },
  {
    question: "What is the largest muscle in the human body?",
    answers: [
      { text: "Humerus", correct: false },
      { text: "Trapezius", correct: false },
      { text: "Quadriceps", correct: false },
      { text: "Gluteus maximus", correct: true }
    ]
  }
];

const geographyQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: false },
      { text: "Nile", correct: true },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false }
    ]
  },
  {
    question: "In which continent is the Sahara Desert located?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: true },
      { text: "North America", correct: false },
      { text: "Australia", correct: false }
    ]
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Bangkok", correct: false }
    ]
  },
  {
    question: "Which ocean is the largest?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
      { text: "Arctic Ocean", correct: false }
    ]
  },
  {
    question: "Which country has the largest population in the world?",
    answers: [
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "United States", correct: false },
      { text: "Indonesia", correct: false }
    ]
  },
  {
    question: "Mount Everest is located in which country?",
    answers: [
      { text: "China", correct: false },
      { text: "Nepal", correct: true },
      { text: "India", correct: false },
      { text: "Bhutan", correct: false }
    ]
  },
  {
    question: "Which desert is the largest in the world?",
    answers: [
      { text: "Gobi Desert", correct: false },
      { text: "Sahara Desert", correct: false },
      { text: "Antarctic Desert", correct: true },
      { text: "Kalahari Desert", correct: false }
    ]
  },
  {
    question: "What is the smallest country in the world by area?",
    answers: [
      { text: "Monaco", correct: false },
      { text: "Vatican City", correct: true },
      { text: "San Marino", correct: false },
      { text: "Liechtenstein", correct: false }
    ]
  },
  {
    question: "Which European country is known as the Land of Fire and Ice?",
    answers: [
      { text: "Norway", correct: false },
      { text: "Sweden", correct: false },
      { text: "Iceland", correct: true },
      { text: "Finland", correct: false }
    ]
  }
];

const historyQuestions = [
  {
    question: "Who was the first president of the United States?",
    answers: [
      { text: "Abraham Lincoln", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John Adams", correct: false }
    ]
  },
  {
    question: "In which year did World War II end?",
    answers: [
      { text: "1940", correct: false },
      { text: "1945", correct: true },
      { text: "1950", correct: false },
      { text: "1939", correct: false }
    ]
  },
  {
    question: "Who discovered America?",
    answers: [
      { text: "Christopher Columbus", correct: true },
      { text: "Leif Erikson", correct: false },
      { text: "Marco Polo", correct: false },
      { text: "Ferdinand Magellan", correct: false }
    ]
  },
  {
    question: "Which ancient civilization built the pyramids?",
    answers: [
      { text: "The Greeks", correct: false },
      { text: "The Romans", correct: false },
      { text: "The Egyptians", correct: true },
      { text: "The Persians", correct: false }
    ]
  },
  {
    question: "Who was known as the Iron Lady?",
    answers: [
      { text: "Queen Elizabeth I", correct: false },
      { text: "Indira Gandhi", correct: false },
      { text: "Margaret Thatcher", correct: true },
      { text: "Angela Merkel", correct: false }
    ]
  },
  {
    question: "Which empire was the largest in history?",
    answers: [
      { text: "Roman Empire", correct: false },
      { text: "British Empire", correct: true },
      { text: "Mongol Empire", correct: false },
      { text: "Ottoman Empire", correct: false }
    ]
  },
  {
    question: "In which year did the Titanic sink?",
    answers: [
      { text: "1910", correct: false },
      { text: "1912", correct: true },
      { text: "1914", correct: false },
      { text: "1920", correct: false }
    ]
  },
  {
    question: "Who was the first man to walk on the moon?",
    answers: [
      { text: "Yuri Gagarin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Buzz Aldrin", correct: false },
      { text: "John Glenn", correct: false }
    ]
  },
  {
    question: "Which war was fought between the North and South regions of the United States?",
    answers: [
      { text: "Revolutionary War", correct: false },
      { text: "Civil War", correct: true },
      { text: "World War I", correct: false },
      { text: "Vietnam War", correct: false }
    ]
  },
  {
    question: "Who was the first female Prime Minister of the United Kingdom?",
    answers: [
      { text: "Margaret Thatcher", correct: true },
      { text: "Theresa May", correct: false },
      { text: "Queen Victoria", correct: false },
      { text: "Elizabeth II", correct: false }
    ]
  }
];

const correctSound = new Audio('assets/mixkit-correct-positive-answer-949.wav');
const wrongSound = new Audio('assets/mixkit-wrong-answer-fail-notification-946.wav');

// Funcția pentru gestionarea răspunsurilor
function selectAnswer(button, answer) {
  clearInterval(timerInterval);
  const buttons = Array.from(answerButtonsElement.children);

  buttons.forEach(btn => {
    btn.disabled = true;

    if (btn.innerText === questions[currentQuestionIndex].answers.find(ans => ans.correct).text) {
      btn.classList.add('correct');
      correctSound.play(); // Redă sunetul corect
    } else {
      btn.classList.add('wrong');
      wrongSound.play(); // Redă sunetul greșit
    }
  });

  if (answer && answer.correct) {
    score++;
  }
  updateScore();
  nextButton.classList.remove('hidden'); // Afișează butonul pentru următoarea întrebare
}

// Funcție pentru adăugarea bulinelor de schimbare a temei
function addThemeIndicators() {
  if (!document.querySelector('.theme-indicator')) {
    const themeIndicator = document.createElement('div');
    themeIndicator.classList.add('theme-indicator');

    // Creează bulina pentru modul light
    const lightCircle = document.createElement('div');
    lightCircle.classList.add('circle', 'circle-light');
    lightCircle.addEventListener('click', () => setTheme('light'));

    // Creează bulina pentru modul dark
    const darkCircle = document.createElement('div');
    darkCircle.classList.add('circle', 'circle-dark');
    darkCircle.addEventListener('click', () => setTheme('dark'));

    themeIndicator.appendChild(lightCircle);
    themeIndicator.appendChild(darkCircle);

    document.body.appendChild(themeIndicator);
  }
}

addThemeIndicators();

// Funcție pentru schimbarea temei
function setTheme(theme) {
  const body = document.body;
  const quizContainer = document.querySelector('.quiz-container');
  const scoreElement = document.getElementById('score');

  // Elimină orice temă existentă
  body.classList.remove('dark-theme', 'light-theme');
  
  // Aplică tema selectată
  if (theme === 'dark') {
    body.classList.add('dark-theme');
    if (quizContainer) {
      quizContainer.style.backgroundColor = 'black'; // Schimbă background-ul containerului trivia pentru dark theme
      quizContainer.style.color = 'white'; // Textul devine alb pentru contrast
      
      // Schimbă și culoarea textului pentru toate elementele din quiz-container
      quizContainer.querySelectorAll('*').forEach(el => {
        el.style.color = 'white'; // Setează textul tuturor elementelor la alb
      });

      // Setează textul scorului la negru pe dark theme
      if (scoreElement) {
        scoreElement.style.color = 'black';
        scoreElement.style.backgroundColor = 'white'; // Oferă contrast cu textul
      }
    }
    localStorage.setItem('selectedTheme', 'dark');
  } else {
    body.classList.add('light-theme');
    if (quizContainer) {
      quizContainer.style.backgroundColor = 'white'; // Schimbă background-ul containerului trivia pentru light theme
      quizContainer.style.color = 'black'; // Textul revine la negru
      
      // Schimbă și culoarea textului pentru toate elementele din quiz-container
      quizContainer.querySelectorAll('*').forEach(el => {
        el.style.color = 'black'; // Setează textul tuturor elementelor la negru
      });

      // Setează textul scorului la alb pe light theme
      if (scoreElement) {
        scoreElement.style.color = 'white';
        scoreElement.style.backgroundColor = 'black'; // Contrast pentru light theme
      }
    }
    localStorage.setItem('selectedTheme', 'light');
  }
}

// Funcție pentru aplicarea temei selectate la încărcarea paginii
function applySavedTheme() {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    setTheme(savedTheme);
  }
}

applySavedTheme(); // Aplică tema salvată la încărcarea paginii

// Funcția pentru a începe quiz-ul
function startQuiz(questions, quizTitle, backgroundImage) {
  document.body.style.backgroundImage = `url(${backgroundImage})`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';

  document.body.innerHTML = `
    <div class="quiz-container">
      <h1>${quizTitle}</h1>
      <div id="score-container">
        <p id="score">Score: 0/${questions.length}</p>
      </div>
      <div id="question-container">
        <div id="question" class="question-text"></div>
        <div id="answer-buttons" class="btn-container"></div>
      </div>
      <div id="timer">
        <p>Time left: <span id="time-left">15</span></p>
      </div>
      <button id="next-btn" class="btn hidden">Next Question</button>
      <div id="score-display" class="hidden">
        <p id="final-score"></p>
        <button id="restart-btn" class="btn">Restart Quiz</button>
        <button id="main-menu-btn" class="btn">Back to Main Menu</button>
      </div>
    </div>
  `;

  addThemeIndicators(); // Adaugă bulinele pentru temă

  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 15;
  let timerInterval;
  const totalQuestions = questions.length;
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  const scoreElement = document.getElementById('score');
  const timeLeftElement = document.getElementById('time-left');

  showQuestion();

  nextButton.addEventListener('click', handleNextQuestion);

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = `${currentQuestionIndex + 1}/${totalQuestions}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(button, answer));
      answerButtonsElement.appendChild(button);
    });

    timeLeft = 15;
    timeLeftElement.innerText = timeLeft;
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    timeLeft--;
    timeLeftElement.innerText = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerInterval);
      selectAnswer(null, { correct: false });
    }
  }

  function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(button, answer) {
    clearInterval(timerInterval);
    const buttons = Array.from(answerButtonsElement.children);

    buttons.forEach(btn => {
      btn.disabled = true;

      if (btn.innerText === questions[currentQuestionIndex].answers.find(ans => ans.correct).text) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('wrong');
      }
    });

    if (answer && answer.correct) {
      correctSound.play();
      score++;
    } else {
      wrongSound.play();
    }

    updateScore();
    nextButton.classList.remove('hidden');
  }

  function updateScore() {
    scoreElement.innerText = `Score: ${score}/${totalQuestions}`;
  }

  function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
      showQuestion();
    } else {
      showFinalScore();
    }
  }

  function showFinalScore() {
    questionElement.innerText = `You've completed the quiz! Your final score is ${score}/${totalQuestions}.`;
    nextButton.classList.add('hidden');
    answerButtonsElement.classList.add('hidden');

    const restartQuizButton = document.getElementById('restart-btn');
    restartQuizButton.classList.remove('hidden');
    restartQuizButton.addEventListener('click', () => {
      startQuiz(questions, quizTitle, backgroundImage);
    });

    const mainMenuButton = document.getElementById('main-menu-btn');
    mainMenuButton.classList.remove('hidden');
    mainMenuButton.addEventListener('click', loadMainMenu);
    
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.classList.remove('hidden');
  }
}

// Funcția pentru a încărca meniul principal
function loadMainMenu() {
  document.body.style.backgroundImage = 'linear-gradient(to right, #cd6693, #452543)';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';

  document.body.innerHTML = `
    <div class="quiz-category-container">
      <h1>Select a Quiz Category</h1>
      <div class="btn-container">
        <button id="medical" class="btn">Medical</button>
        <button id="geography" class="btn">Geography</button>
        <button id="history" class="btn">History</button>
      </div>
    </div>
  `;

  document.getElementById('medical').addEventListener('click', () => {
    startQuiz(medicalQuestions, 'Medical Trivia Quiz', 'assets/medicine.jpg');
  });
  
  document.getElementById('geography').addEventListener('click', () => {
    startQuiz(geographyQuestions, 'Geography Trivia Quiz', 'assets/geography.jpg');
  });
  
  document.getElementById('history').addEventListener('click', () => {
    startQuiz(historyQuestions, 'History Trivia Quiz', 'assets/history.jpg');
  });  
}

loadMainMenu();
