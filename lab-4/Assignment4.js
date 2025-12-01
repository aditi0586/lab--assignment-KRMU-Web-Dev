(function() {
  const questions = [
    { q: "What comes after 5", a: "6" },
    { q: "What full form of KRMU # initials should capital", a: "Kr Mangalam University"},
    { q: "What is the color of sky ", a: "blue" },
    { q: "What is full form of js", a: "JavaScript" },
    { q: "What is full form of CSS", a: "casscading style sheets" },
    { q: "What is the capital of France", a: "Paris" },
    { q: "How many continents are there", a: "7" },
    { q: "What is the largest planet in our solar system", a: "Jupiter" },
    { q: "What is the chemical symbol for Gold", a: "Au" },
    { q: "How many sides does a pentagon have", a: "5" },
    { q: "What is the smallest prime number", a: "2" },
    { q: "In what year did World War II end", a: "1945" },
    { q: "What is the boiling point of water in Celsius", a: "100" },
    { q: "Who wrote Romeo and Juliet", a: "Shakespeare" },
    { q: "What is the speed of light", a: "299792458" }
  ];

  let score = 0;

  
  function normalize(input) {
    if (input === null) return ""; 
    return String(input).toLowerCase().trim();
  }


  function askQuestion(item, index, total) {
    const raw = prompt(`Question ${index + 1} of ${total}:\n${item.q}`);
    const answer = normalize(raw);
    const correct = answer === normalize(item.a);

    if (correct) {
      score++;
      alert("Correct! ✅");
      console.log(`Q${index+1}: Correct (your answer: "${raw}")`);
    } else {
      alert(`Incorrect. ❌ The correct answer is: ${item.a}`);
      console.log(`Q${index+1}: Incorrect (your answer: "${raw}", correct: "${item.a}")`);
    }

    return correct;
  }

 
  for (let i = 0; i < questions.length; i++) {
    askQuestion(questions[i], i, questions.length);
  }


  alert(`Quiz finished! Your score: ${score} / ${questions.length}`);
  console.log(`Final score: ${score} / ${questions.length}`);
})();