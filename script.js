

const apiKey = 'a60fa55cb3d341dd95d140431240303';



// Элементы на странице

const header = document.querySelector('.header');
const form = document.querySelector('#form');
const input = document.querySelector('#inputCity');



function removeCard (){
    const prevCard = document.querySelector('.card');
    if (prevCard) prevCard.remove();
}


//Слушаем отправку формы
form.onsubmit = function (e) {
    //Отменяем отправку формы
    e.preventDefault();

    //Берем значение из инпута, обрезаем пробелы
    let city = input.value.trim();
    console.log (city);

    //Делаем запрос на сервер
    //Адрес запроса
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    //Выполняем запрос

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log (data);
        
        if (data.error) {
        // Если есть ошибка - выводим ее
        
        //Удаляем предыдущую карточку
        removeCard ();

        //Отобразить карточку с ошибкой
        const html = `<div class="card">${data.error.message}</div>`;
        header.insertAdjacentHTML('afterend', html);
        } else {
        // Если ошибки нет - выводим карточку

        //Удаляем предыдущую карточку
        removeCard ();

        //Отображаем полученные данные в карточке
        // Разметка для карточки

        const html = `<div class="card">
                        <h2 class="card-city">${data.location.name} <span>${data.location.country}</span></h2>

                        <div class="card-weather">
                            <div class="card-value">${data.current.temp_c}<sup>°C</sup></div>
                            <img  class="card-img"  src="./assets/style/images/5538410.png" alt="weather">
                        </div>

                        <div class="card-description">${data.current.condition.text}</div>

                    </div>`;

        //Отображаем карточку на странице
        header.insertAdjacentHTML('afterend', html);

        }


        


    })


}