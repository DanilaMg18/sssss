
// Напишите таймер, или просто отсчётчик, который будет прибавлять +1 каждую секунду. 
// Если Вы закроете вкладку, но потом вернётесь снова - он продолжит счётчик дальше.

// let x = 0
// let key = 'memory'

// let count = 0

// setInterval(function() {
//     console.log(i++);
//     count++
//     localStorage.setItem('memory', count);
// }, 1000);


// let i = localStorage.getItem('memory')
let button = document.querySelector('.start')
let key = 'memory'
let key2 ='memory2'
let input = document.querySelector('.tekst')
let inputText = input.value


button.addEventListener('click', function(){
    localStorage.setItem('memory', input.value)

    setInterval(() => {
        input.value++
        localStorage.setItem('memory2', input.value)
    }, 1000);
})

// save.addEventListener('click', function(){
//     localStorage.setItem('input', input.value)
// },1000)

// input.value = localStorage.getItem('input')
        