document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById('start');
  const questionsContainer = document.getElementById('questions');
  const choicesContainer = document.getElementById('choices');
  const feedbackContainer = document.getElementById('feedback');
  const endScreen = document.getElementById('end-screen');
  const submitButton = document.getElementById('submit');
  const initialsInput = document.getElementById('initials');
  const finalScoreElement = document.getElementById('final-score');
  const timerElement = document.getElementById('time');

  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;

  // Function to start the quiz
  function startQuiz() {
    startButton.style.display = 'none';
    questionsContainer.style.display = 'block';
    showQuestion();
    startTimer();
  }

  // Function to show a question
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent = currentQuestion.question;
    choicesContainer.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => {
        handleAnswer(choice);
      });
      choicesContainer.appendChild(button);
    });
  }

  // Function to handle user's answer
  function handleAnswer(choice) {
    const currentQuestion = questions[currentQuestionIndex];
    if (choice === currentQuestion.correctAnswer) {
      score++;
    } else {
      timeLeft -= 10; // Subtract 10 seconds for wrong answer
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

  // Function to end the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    questionsContainer.style.display = 'none';
    endScreen.style.display = 'block';
    finalScoreElement.textContent = score;
  }

  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(() => {
      timeLeft--;
      timerElement.textContent = timeLeft;
      if (timeLeft <= 0 || currentQuestionIndex >= questions.length) {
        endQuiz();
      }
    }, 1000);
  }

  // Event listener for the submit button
  submitButton.addEventListener('click', () => {
    const initials = initialsInput.value.trim();
    // Here you can save the initials and score to localStorage or send to server
    // For now, just log them to console
    console.log("Initials:", initials);
    console.log("Final Score:", score);
  });

  // Event listener for the start button
  startButton.addEventListener('click', startQuiz);
});


