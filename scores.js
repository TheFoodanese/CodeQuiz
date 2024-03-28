submitButton.addEventListener('click', () => {
    const initials = initialsInput.value.trim();
    console.log("Initials:", initials);
    console.log("Final Score:", score);
    window.location.href = "highscores.html"; 
  });
  