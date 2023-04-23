// // alert('Hello')
// console.log('Hello')

// let num = 5
// // alert(num)
// console.log(num)

// num = 10
// // alert(num)
// console.log(num)

// let num2 = 20
// // alert(num2)
// console.log(num2)


// const num1 = parseInt(prompt("Input first number"));
// const num2 = parseInt(prompt("Input second number"));


// alert(`The result of operation is ${sumer(num1, num2).toFixed(2)}`);
// // alert(`The result of operation is ${math.round(sum(num1, num2))}`);

// function sumer(num1, num2) {
//     return num1 + num2;
// }


// const answer = confirm("Вам хорошо живётся?");

// // if (answer == true)
// if (answer) {
//     alert('Значит не платите налоги!');
// } else {
//     alert('Денег нет, но вы держитесь!');
// }

// const product = prompt("Что вы хотите купить?");
// switch (product) {
//     case "Бананы":
//         alert("It's $2");
//         break;
//     case "Мандарины":
//         alert("It's $5");
//         break;
//     case "Лимоны":  // два кейса также работают
//     case "Груши":
//         alert("It's $4");
//         break;
//     default:
//         alert('Нет такого продукта');
// }



function getMaxEvenEl(arr) {
    let maxEl = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > maxEl) {
            maxEl = arr[i]
        }
    } return maxEl
}

const arr = [1, 15, 104, 75, 30, 73]

console.log(getMaxEvenEl(arr))