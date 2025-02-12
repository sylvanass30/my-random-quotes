import quotes from "./quotes.js";
  
  const quoteElement = document.getElementById('quote');
  const authorElement= document.getElementById('author')
  const generateBtn = document.getElementById('generate-btn');
  const addToFavBtn=document.getElementById('make-favorite-btn')
  const favoritesContainer=document.getElementById('farovites-container')

  let  currentQuoteIndex;


  function generateRandomQuote() {
  
     currentQuoteIndex = Math.floor(Math.random() * quotes.length);
     console.log(quotes.id)
     const randomQuote = quotes[currentQuoteIndex];
       quoteElement.textContent= randomQuote.quote;
       authorElement.textContent=randomQuote.author;
       authorElement.classList.remove('hidden');
       authorElement.classList.add('visible');
       addToFavBtn.classList.remove('hidden')
       randomQuote.isFavorite===true?addToFavBtn.classList.add('hidden'): addToFavBtn.classList.remove('hidden')
    
  }
const addToFav =()=>{
  const currentQuote= quotes[currentQuoteIndex]
  currentQuote.isFavorite=!currentQuote.isFavorite
  console.log(quotes)
  currentQuote.isFavorite===true? addToFavBtn.classList.add('hidden'): addToFavBtn.classList.remove('hidden')
  displayFavorites();
}
const displayFavorites = () => {
  // Очищаем контейнер
  favoritesContainer.innerHTML = '';
  // Фильтруем избранные цитаты
  const favoriteQuotes = quotes.filter(quote => quote.isFavorite);
  

  
  // Добавляем каждую избранную цитату в контейнер
  
  favoriteQuotes.forEach((quote,index)=> {
    const favoriteItem = document.createElement('div');
    favoriteItem.classList.add('favorite-item');
      
    // Добавляем кнопку удаления
  const removeButton = document.createElement('button');
  removeButton.textContent = '×'; // Иконка "крестик"
  removeButton.classList.add('remove-btn');
  removeButton.addEventListener('click', () => removeFromFavorites(index)); // Обработчик события
console.log(index)
    favoriteItem.innerHTML = `
      <p><strong>${quote.quote}</strong></p>
      <p>— ${quote.author}</p>
    `;
    favoriteItem.appendChild(removeButton);
    favoritesContainer.appendChild(favoriteItem);
   
  
  });
};
const removeFromFavorites = (index) => {

  const favoriteQuotes = quotes.filter(quote => quote.isFavorite); // Находим избранные цитаты

  const quoteToRemove = favoriteQuotes[index]; // Выбираем цитату по индексу
 quoteToRemove.quote
  // Находим эту цитату в основном массиве и снимаем флаг isFavorite
  const quoteInMainList = quotes.find(quote => quote.quote === quoteToRemove.quote);
  if (quoteInMainList) {
    quoteInMainList.isFavorite = false;
  }  
  console.log(quoteToRemove.quote,' = квот ту ремув.квот  ', quoteElement.textContent,' = квот элемент текст контент')
if (  quoteToRemove.quote===quoteElement.textContent){
  addToFavBtn.classList.remove('hidden')
}
  // Обновляем отображение избранных цитат
  displayFavorites();
};
  
  addToFavBtn.addEventListener('click', addToFav)
  generateBtn.addEventListener('click', generateRandomQuote);
