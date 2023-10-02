const board = document.querySelector('#board')
const colors = ['#F08080', '#6A5ACD', '#F0E68C', '	#FF1493', '#006400', '#00FF7F', '#008080', '#48D1CC', '#00008B', 'light blue']
const SQUARES_NUMBER = 882;

// Создаем цикл for, и мы будем пробегать по нему 450 раз, и на каждом шаге мы будем создавать переменную
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') // Для создания динамического html элемента применяется document.createElement (То что идет после . называется функцией (не путать с function))
    square.classList.add('square') // Добавляем класс для нашего квадратика

    

    square.addEventListener('mouseover', () => setColor(square)) // Добавляем событие для квадратика при наведении на него мышкой (курсором). А также в стрелочной функции указываем функцию смены цвета setColor
    square.addEventListener('mouseleave', () => removeColor(square)) //Добавляем событие для квадратика при котором, когда курсор убираем, пропадает и цвет




    board.append(square) // Метод, используемый здесь, добавляет нашу перменную в html
}

// Создаем функцию для смены цвета
function setColor(element) {
    const color = getRandomColor()

    
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
    
}


// Создаем функци. для генерации цвета наших квадратиков исходя из массива заданных нами цветов. Затем создает переменную, которая будет принимать то или иное знчение из массива, с округлением в большую сторону, 

function getRandomColor() {
const index = Math.floor(Math.random() * colors.length)
return colors[index]
}