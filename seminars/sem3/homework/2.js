/* 
2. Необходимо создать html-страницу с названием 2.html, в которой подключить 
файл 2.js (его тоже необходимо создать рядом с html-файлом). В js-файле необходимо 
создать следующий скрипт:

Cоздать функцию greeting, которая принимает в качестве аргумента имя человека и выводит 
приветствие, используя переданное ей имя, в консоль.

Необходимо у пользователя запросить имя и вызвать функцию greeting, 
передав туда полученное от пользователя значение.
*/



// Программа писала name is deprecated так как name являлся глобальной переменной 
// и плишлось объявлять переменную name локально, то есть внутри функции

function greeting() {
    const name = window.prompt("Hi there!) What is your name?");
    return `Hello ${name} nice to meet you!!!`;
}


console.log(greeting());