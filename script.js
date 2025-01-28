const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Innovation distinguishes between a leader and a follower. - Steve Jobs',
    "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
    'Im just a human, not a robot, i can make mistakes, so as you - Sasha Junin', 
  ];
  
  const quoteElement = document.getElementById('quote');
  const generateBtn = document.getElementById('generate-btn');
  
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote;
  }

  
  generateBtn.addEventListener('click', generateRandomQuote);
  