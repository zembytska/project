// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form = document.forms[0];
form.onsubmit = function (eo){
    eo.preventDefault();
   console.log(form.username.value);
    console.log(form.surname.value);
    console.log(form.age.value);


};
// let headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// let newHeadingText = prompt("name:");
// let newHeadingText2 = prompt("age");
// headingElement.innerHTML = newHeadingText;
// headingElement.innerHTML = newHeadingText2;
let usernameInput = form.username;
usernameInput.addEventListener(
    'input',
    function (eo){
      console.log(usernameInput.value);
        target.innerText = usernameInput.value
    }
);

let ageInput = form.age;
ageInput.addEventListener(
    'input',
    function (eo){
      console.log(ageInput.value);
        target2.innerText = ageInput.value
    }
);
let surnameInput = form.surname;
surnameInput.addEventListener(
    'input',
    function (eo){
        console.log(surnameInput.value);
        target3.innerText = surnameInput.value
    }
);

        // ==========================


// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

