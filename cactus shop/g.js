function toggleLanguage() {
    var languageElement = document.getElementById('language');
    var currentLanguage = languageElement.innerText.trim();
    var russian = 'русский';
    var english = 'English';

    var titleElement = document.querySelector('title');
    var headerElements = document.querySelectorAll('#header, #header *');
    var bodyElements = document.querySelectorAll('body, #body-content, #body-content *');

    if (currentLanguage === russian) {
        languageElement.innerText = english;
        titleElement.textContent = 'Cactos';
        document.documentElement.lang = 'en';
        for (var i = 0; i < headerElements.length; i++) {
            headerElements[i].textContent = headerElements[i].textContent.replace(russian, english);
        }
        for (var j = 0; j < bodyElements.length; j++) {
            bodyElements[j].textContent = bodyElements[j].textContent.replace(russian, english);
        }
    } else if (currentLanguage === english) {
        languageElement.innerText = russian;
        titleElement.textContent = 'Cactos';
        document.documentElement.lang = 'ru';
        for (var k = 0; k < headerElements.length; k++) {
            headerElements[k].textContent = headerElements[k].textContent.replace(english, russian);
        }
        for (var l = 0; l < bodyElements.length; l++) {
            bodyElements[l].textContent = bodyElements[l].textContent.replace(english, russian);
        }
    }
}
// Функция для добавления товара в корзину
function addToCart() {
    // Получаем информацию о товаре
    var productName = document.querySelector('.product h2').innerText;
    var productDescription = document.querySelector('.product p').innerText;
    var productImage = document.querySelector('.product img').src;

    // Создаем элемент для отображения товара в корзине
    var cartItem = document.createElement('div');
    cartItem.classList.add('product');
    cartItem.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <h2>${productName}</h2>
        <p>${productDescription}</p>
    `;

    // Добавляем товар в корзину (в раздел "Корзина")
    var bodyContent = document.getElementById('body-content');
    bodyContent.appendChild(cartItem);
}
