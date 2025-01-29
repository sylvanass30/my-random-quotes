const quotes = [
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs'
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower.',
    author: 'Steve Jobs'
  },
  {
    quote: 'Your time is limited, so don\'t waste it living someone else\'s life.',
    author: 'Steve Jobs'
  },
  {
    quote: 'I\'m just a human, not a robot, I can make mistakes, so as you.',
    author: 'Sasha Junin'
  },
  {
    quote: 'I am so clever that sometimes I don’t understand a single word of what I am saying.',
    author: 'Oscar Wilde'
  },
  {
    quote: 'I refuse to join any club that would have me as a member.',
    author: 'Groucho Marx'
  },
  {
    quote: 'I have not failed. I’ve just found 10,000 ways that won’t work.',
    author: 'Thomas Edison'
  },
  {
    quote: 'I’m sick of following my dreams. I’m just going to ask them where they’re going and hook up with them later.',
    author: 'Mitch Hedberg'
  },
  {
    quote: 'I always wanted to be somebody, but now I realize I should have been more specific.',
    author: 'Lily Tomlin'
  },
  {
    quote: 'I’m not great at the advice. Can I interest you in a sarcastic comment?',
    author: 'Chandler Bing (Friends)'
  }
];
  
  const quoteElement = document.getElementById('quote');
  const authorElement= document.getElementById('author')
  const generateBtn = document.getElementById('generate-btn');
  let lastIndex=-1;
  function generateRandomQuote() {
    do{
      
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex===lastIndex)
   
    const randomQuote = quotes[randomIndex];
      quoteElement.textContent= randomQuote.quote;
      authorElement.textContent=randomQuote.author;
      authorElement.classList.remove('hidden');
      authorElement.classList.add('visible');
    
  }

  
  generateBtn.addEventListener('click', generateRandomQuote);
