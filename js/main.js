const products = [
    {id: 1, title: 'Notebook', price: 2000, imgSrc: 'img/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, imgSrc: 'img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, imgSrc: 'img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, imgSrc: 'img/gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (obj) => {
    return `<div class="product-item">
                <h3>${obj.title}</h3>
                <img src=${obj.imgSrc}>
                <p>${obj.price} \$</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = (list = products) => {
    const productsList = (list.map(item => renderProduct(item))).join('\n'); //превращаем массив в строку с разделителем - перенос строки
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(); // используется значение параметра по умолчанию