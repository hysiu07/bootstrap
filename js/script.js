// const x = 50
// const y = 30

// if (x > y){
//     console.log(`${x} jest większe niż ${y} `);
// }else {}

// const color = 'blue'
// const newColor = 'green'

// if (color == newColor){
// console.log(`Kolory się zgadzają`);

// }else {
//     console.log(`Kolory się nie zgadzają`);
// }

// const x = 100
// const y = 50

// if (x > y){
//     console.log(`x > y`);

// }else if (x == y) {
//     console.log(`x = y`);

// } else {
//     console.log(`x < y`);
// }

// const promo = '30%'

// switch (promo){
//     case '10%':
//     console.log(`Dziś mamy 10% obniżki`);
//     break

//     case '20%':
//         console.log(`Dziś mamy 20% obniżki`);
//         break

//     case '30%':
//     console.log(`Dziś mamy 30% obniżki`);
//     break

//     default:
//         console.log();
// // }

// const x = 11

// const newX = x % 2

// // if (newX == 1) {
// //     console.log(`Nie parzyste`);

// // } else {
// //     console.log('parzyste');
// // }

// const newX2 = newX == 1 ? `Nie parzyste` : ` Parzyste`
// console.log(newX2);

// const x = 50
// const mid = 'x jest średniakiem'
// const small = ' x jest mały'

// if ( x >= 100) {

//     console.log(`x > 100`);

// } else if (x < 100 && x > 30)
// {
//     console.log('x jest sredniakiem'.toUpperCase());

// } else  if(x <= 30 )
// {
//     console.log(small.toLocaleUpperCase());

// }else {}

// const fruits = ['apple', 'orange', 'cherry', 'plumb', 'strawberry', 12, 'dupa'];

// for
// const  i = 0; i < 5; i++){
//     console.log(i);
//

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);

// const colors = ['blue', 'red', 'black', 'white', 'orange', 'green', 'gray'];

// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// let i = 0;

// while (i < 5) {
//     i++
//     console.log(i)
// }

// petla do ... while

// let i = 0

// do {
//     i++
//     console.log(i);
// } while (i < 5)

// // const numbers = [1, 2, 3, 4, 5, 6]

// // for(let i = 0; i < numbers.length; i++){
// // console.log(numbers[i] * 2);
// // }

// // for (const number of numbers){
// //     console.log(number * 2);
// // }

// const cities = ['Kraków', 'Poznań', 'Warszawa', 'Gorzów', 'Gdańsk', 'Wrocław','Dobiegniew']

// for(let i = 0; i < cities.length ; i++){
//     console.log(`to jest miasto ${cities[i].toLocaleUpperCase()}` );
// }

// let x = 0

// while (x < 10){

//     x += 2
//     console.log(x);
// }

// let x = 20

// do {
//     x -= 3
// }while (x > 0)
// console.log(x);

// let y = 20

// while(y > 1){
// y = y - 3
// console.log(y);
// }

// pętla for of

// const numbers = [5, 8, 10, 23, 48, 60]

// for(const number of numbers){
//     console.log(number / 5);
// }

// for(const number of numbers)
// {
//     if( number % 2 === 0) {
//         console.log(`%cLiczba ${number} jest parzysta` , 'background: tomato; color:lime;');
//     } else{
//         console.log(`%cLiczba ${number} jest nie parzysta`, 'background: lime; color:black;');
//     }

// }

// const btn1 = document.querySelector('button:nth-of-type(1)')
// const btn2 = document.querySelector('button:nth-of-type(2)')
// const btn3 = document.querySelector('button:nth-of-type(3)')

// console.log(btn1, btn2, btn3);

// numbers.unshift(100, 200)
// console.log(numbers);

// numbers.shift()
// console.log(numbers);

// numbers.push('7', 8,'9')
// console.log(numbers);

// numbers.pop()
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5, 6]

// function multiply(x){
//     return x * 2
//     // console.log(x * 2);
// }

// multiply(3)

// const newNumber = numbers.map(multiply)
// console.log(numbers);
// console.log(newNumber);

// const abc = ['a', 'b','c']

// const newAbc = numbers.concat(abc,'daniel')

// console.log(newAbc);

// const drinks = ['pepsi','sok','woda']
// const meals = ['schabowy','kurczak','spagetti']

// console.log(...drinks);
// console.log(...meals);

// const menu = drinks.concat(meals)
// console.log(menu);

// const numbers = [0, 0, 1, 1, 2, 2, 2]

// const colors = ['red', 'green', 'blue', true, 123]

// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0,2)
// console.log(numbers2);

// const numbers3 = numbers.slice(4,7)
// console.log(numbers3);

// const randomStuff = colors.splice(3,2)
// console.log(randomStuff);

// const newCars = cars.splice(2,4,'test')
// console.log(newCars);
// console.log(cars);
// console.log(colors);

// const numbers = [0, 23, 48, 175, 2, 34, 11]

// function checkNumber (x){
//     return x % 2 === 0
// }

// // const newNumber = numbers.filter(checkNumber)
// // console.log(newNumber);

// numbers.forEach(number => console.log(number * 5))

// const array1 = ['a','b','c','d','e']
// console.log(array1.copyWithin(0, 3, 4));

// const numbers = [0, 1, 2, 3, 4, 5]

// const newNumber = numbers.forEach(number =>console.log(number * 2))
// console.log(newNumber);

// console.log('------');

// const mapNumbers = numbers.map(number => number * 2)
// console.log(mapNumbers);

// const letters = ['c','d']

// letters.unshift('a','b')
// letters.push('e','f')

// console.log(letters.includes('c'));

// console.log(letters);

// const numbers = [ 1, 2, 3]
// const foods = ['pizza','burger','hotdog']

// const newarr = numbers.concat(foods)
// console.log(newarr);

// const newArr = [...numbers,...foods ]
// console.log(newArr);

// const numbers = [1, 5, 13, 26, 48]

// const newMaps = numbers.map(number => number * 5)
// console.log(newMaps);

// for(let i = 0; i < newMaps.length; i++){
//     if(newMaps[i] % 2 === 0){
//         console.log(`Liczba parzysta to:${newMaps[i]}`);

//     }else{
//         console.log(`Liczba nieparzysta to: ${newMaps[i]}`);
//     }
// }

// for (const check of newMaps){
// if(check % 2 === 0){
//     console.log(`Liczba parzysta to: ${check}`);
// }else{
//     console.log(`Liczba nieparzysta to: ${check}`);
// }

// }
// POWTÓRZ ZADANIE NR 3

// const numbers = [1, 5, 13, 26,48]

// const newNumbers = numbers.map(number => number * 5)
// console.log(newNumbers);

// for(const newNumber of newNumbers) {
// if(newNumber % 2 === 0){
//     console.log(`Liczba parzysta to: ${newNumber}`);

// }else{console.log(`liczb nieparzysta to: ${newNumber}`);}
// }
// const colors = ['white']

// colors.unshift('black')
// colors.push('red')
// console.log(colors);

// for (let i = 0; i < colors.length; i++){
//     console.log(`Moj ulubiony kolor to: ${colors[i].charAt(0).toUpperCase() + colors[i].slice(1)}`);
// }

// for(const color of colors){
//     console.log(`moj ulubiony kolor to: ${color.charAt(0).toUpperCase() + color.slice(1)}`);
// }

// const cars = 'Audi Mercedes BMW Nissan Dodge';
// const arrCars = cars.split(' ');

// console.log(arrCars);

// const newArrCars = arrCars.length > 3 ? `Jest ok` : `Nie jest ok`;

// console.log(newArrCars);

// if (arrCars.includes('Audi')) {
// 	arrCars.unshift('Fiat');
// } else {
// 	arrCars.pop();
// }

// console.log(arrCars);

// test()
// function test () {
//     console.log(`Cześć`);
// }

// const helloWorld = function (){
//     console.log(`Cześc 123`);
// }

// helloWorld()

// function add (i){
//     console.log(`Podany argument to:` + i);
// }

// add('test')

// add2(12, 5)

// function add2(x, y){
// if (x < y) return
//    console.log(x + y);
// }

// function test (x, y){
// console.log(`Cześć mam na imie ` + x + ` i mam ` + y + ` lat`);
// }
// test('Daniel', 28)

// function test (name) {
//     console.log(`Mam na imie ${name}`);
// }

// test(`Daniel`)

// const test2 = (name) => {
//     console.log(`Mam na imie ${name}`);
// }

// test2('Eliza')

// const test3 = name => console.log(`Mam na imie ${name}`);
// test3('abc')

// const test4 = (name, age) => console.log(`Mam na imie ${name} i mam ${age} lat`);

// test4('Józek', 28)

// function add (num1, num2){
// console.log(num1 + num2);
// }
// add(2, 2)

// const add2 = (num1, num2) => console.log(num1 + num2);
// add2(2,2)

// function add3 (num1, num2){
//     return num1 * num2
// }

// const add4 = (num1, num2) => num1 * num2

// const days = ['poniedzialek', 'wtorek', 'sroda'];

// const days2 = days.forEach(function (day) {
// 	console.log(day);
// });

// console.log('----');
// const days3 = days.forEach((day) => console.log(day));

// const days4 = (x, y) => {
// 	if (x > y) {
// 		console.log(`Moc silnika dobra`);
// 	} else {
// 		console.log(`Moc slnika o zmiennej ${y} slaba`);
// 	}
// };

// days4(6, 5);

// const days5 = (x, y, z) => {
// 	console.log(x * z);
// 	console.log(y - x);
// }

// days5 (2, 4, 5)

// function add5 (age1, age2){
//     console.log(`Ania ma ${age1} lat`)
//     console.log(`Daria ma ${age2} lat`)
// }

// add5(8, 10)

// function add6 (age1, age2){
//   return age1 + age2
// }

// const add7 = (age1, age2) => age1 + age2

// const hello = (name = 'Drogi uzytkowniku')=> console.log(`Cześć ${name}, jak się masz?`);

// hello()

// function hello2 (name = 'Drogi uzytkowniku'){
//     console.log(`Witaj ${name}`);
// }

// hello2('Daniel')

// const add = (x = 10, y = 5 ) => {
//     console.log(x + y);
// }

// add(15)

// const test = (name = 'Drogi uzytkowniku') => {
//     console.log(`'witaj ${name}'`);
// }

// test()

// const numbers = (x, y , z) => { console.log(x , y, z);

// }

// const arr = [1, 2, 3, 4]
// console.log(arr)
// console.log(...arr)

// const numbers = (x, y, ...z) => {
//     console.log(x, y, z);
//     console.log(z.map(el => el *2));
// }
// numbers(1, 14, 20, 50, 90, 44, 87)

// const name = 'Eliza';

// const test = () => {
// 	const name = 'Daniel';
// 	console.log(`name w funkcji - ${name}`);
//     const age = 40

// 	const test2 = () => {
// 		const name = 'Daniel 2';
// 		console.log(`name w funkcji - ${name}`);
// 		console.log(age);
// 	};
// 	test2();

// 	const test3 = () => {
// 		const name = 'Daniel';
// 		console.log(`name w funkcji - ${name}`);
// 		// const age = 20;
//         console.log(age);
// 	};
// 	test3();
// };

// const age = 23;

// test();

// console.log(`name poza funkcją - ${name}`);

// const numbers = [0.5, 4, 'abc'];
// const names = ['Lisa', 'Lilly', 'Adam', 'Przemek'];

// numbers.forEach((num) => console.log(num * 2));

// const bigLetters = names.map(nam => console.log(nam.toUpperCase()));

// const showBigName = (name) => {
//     console.log(name.toUpperCase());

// }

// names.forEach(showBigName)

// names.forEach(el => console.log(el.toUpperCase()))

// let score

// let score;

// const add = (x, y) => {
// 	 const score = x + y ;

// 	// if (score % 2 === 0) {
// 	// 	even();
// 	// } else {
// 	// 	odd();
// 	// }
//    ( score % 2 === 0 ) ? even(score) : odd (score)

// };

// const even = (score) => {
// 	console.log(`Liczba ${score} jest parzysta`);
// };
// const odd = () => {
// 	console.log(`Liczba ${score} jest nie parzysta`);
// };

// add(10,2);

// let celsius
// let temp

// const farenheit = (c) => {

//     celsius = c
//     temp = c * 1.8 + 32
//     console.log(`${c}℃ = ${temp}℉`);
// }

// farenheit(20)

// const num = 10
// const numbers = []

// for (let i = 0; i < 10 ; i++){
//     numbers.push(i)
//     console.log([i]);

// }
// console.log(numbers);

// const test = (x) => {
//     if(x % 3 === 0 && x !== 0){
//         console.log(`${x} jest podzielne przez 3`);
//     } else {
//         console.log(`${x} nie jest podzielne przez 3 `);
//     }

// }

// test(6)

// numbers.forEach(test)

// pobieranie danych
// getElementById

// const test = document.getElementById('aaa')
// console.log(test);

// // getElementByTagName
// const test2 = document.getElementsByTagName('p')
// console.log(test2);
// // getElementByClassName

// const test3 = document.getElementsByClassName('button__second')
// console.log(test3);

// const test = document.querySelector('button')

// console.log(test);

// const heading = document.querySelector('h1')

// const arrP = document.querySelectorAll('p')
// console.log(arrP);

// const test = document.querySelector('div.test')
// console.log(test);

// const test2 = test.querySelector('#test')
// console.log(test2);

// const ulList = document.createElement('ul')
// const liList = document.createElement('li')

// liList.textContent = 'czesc'

// console.log(document.body);

// document.body.appendChild(ulList)
// ulList.appendChild(liList)

// const newDiv = document.querySelector('div')

// const newP = document.createElement('p.klasa__sama-w-sobie')

// newDiv.appendChild(newP)

// const div = document.createElement('div')
// const p = document.createElement('p')
// const heading = document.createElement('h2')

// div.textContent = 'czesc'
// p.textContent = 'test'
// heading.textContent = 'test2'

// document.body.appendChild(div)

// div.appendChild(p)
// div.append(p, heading)

// const btn = document.querySelector('button')

// console.log(btn.outerHTML)
// console.log(btn.innerHTML)

// // btn.outerHTML = '123'
// // btn.innerHTML = '123'

// btn.innerHTML = ''

// btn.textContent = '123'
// const div  = document.querySelector('div')
// const p = document.querySelector('p')

// // remove child
// // div.removeChild(p)

// // remove

// div.remove()

// const numbers = [2, 5, 8, 12, 36, 45, 88]

// numbers.forEach(num => console.log(num*2))

// const newNumbers = numbers.map(num => num *2)

// console.log(newNumbers);

// const btn1 = document.querySelector('.first')
// const btn2 = document.querySelector('.second')
// const btn3 = document.querySelector('.third')

// const test = () => {
//     console.log('double click')
// }

// btn1.addEventListener('click', function (){
//     console.log(`Kliknieto mnie`);
// })

// btn2.addEventListener('dblclick', test)

// btn3.addEventListener('mouseover', () => console.log(`najechano na mnie`))

// const btns = document.querySelectorAll('button')

// // console.log(btns);

// // const test = () => {
// //     console.log(`kliknieto `);
// // }

// // btns.addEventListener('click', test)

// // btns.forEach(btn => btn.addEventListener('click', test))

// btns.forEach(btn => btn.addEventListener('click', () => {
//     console.log('kliknieto mnie');
// }
// ))

// const btn = document.querySelector('button')

// const test = (e) => {
//     console.log(e);
//     // // console.log(e.target);
//     // console.log(e.target.classList);
//     // console.log(e.target.offsetTop);
// }

// btn.addEventListener('click', test)

// const msg = 'dzis bardzo ladna pogoda dzis'

// const test = 'Lubie placki'
// console.log(msg.toUpperCase());
// console.log(msg.charAt(0).toUpperCase());

// const date  = new Date()
// console.log(date);
// console.log(date.toLocaleDateString('en'));

// console.log(date.getHours());

// const liza = ' oraz Elize'

// console.log(test.concat(liza));

// console.log(test.concat(' oraz Elizkę'));

// console.log(msg.lastIndexOf('dzis'));

// let str1 = '5'

// console.log(str1.padStart(4,'1'));

// // console.log(str1.padEnd(10, '1'));

// const newA = str1.padEnd(10, '2')
// console.log(newA);

// const newB = newA.split('')
// console.log(newB);

// const newC = newB.slice(0,3)
// console.log(newC );

// const num1 = 23
// const num2 = '23'

// console.log(num1 + num2);

// const num3 = parseInt(num2)
// console.log(num3);

// console.log(num1 + num3);

// x = 2
// y = 3

// x = x + y

// console.log(x);

// x += y
// console.log(x);

// const day = 'środa'

// switch (day) {
//     case 'poniedziałek':
//     console.log(`Dziś jest poniedziałek`)
//     break

//     case 'wtorek':
//     console.log(`Dziś jest wtorek`)
//     break

//     case 'środa':
//     console.log(`Dziś jest środa`)
//     break

//     case 'czwartek':
//     console.log(`Dziś jest czwartek`)
//     break

//     case 'piątek':
//     console.log(`Dziś jest piątek`)
//     break

// }

// const x = 100

// // if(x > 20){
// // console.log(`${x} > 20`);
// // } else {
// //     console.log(`${x} < 20`);
// // }

// // operator warunkowy

//  const test = x > 20 ? `${x} > 20`: `${x} < 20`

//  console.log(test);

// for (let i = 0; i < 7 ; i++)
// console.log(fruits[i]);

// while

// let i = 0
// while (i < fruits.length){
//   i++
//   console.log(fruits[6]);
// }

// while do

// let i = 0

// do{
//     i++
//     console.log(fruits[i]);
// }while (i < fruits.length)

// let i = 0
// while ( i < 5 ){
//     i++
//     console.log(i);
// }

// do while

// let i = -1

// do{
//     i++
//     console.log(fruits[i]);
// } while( i < fruits.length)

// petla for of

// for(const fruit of fruits){
//     console.log(fruit);
// }

// numbers.unshift(100, 200)

// console.log(numbers);

// numbers.shift()

// console.log(numbers);

// numbers.push(10,11)

// console.log(numbers);

// numbers.pop()

// console.log(numbers);

// function multiply (x) {
//     return x * 2
// }

// const newNumbers = numbers.map(multiply)
// console.log(newNumbers);

// const fandn = fruits.concat(numbers)
// console.log(fandn);

// console.log(...fandn);

// const newSlice = numbers.slice(1,4)

// console.log(newSlice);
// console.log(numbers);

// const newsplice = numbers.splice(1,3)
// console.log(newsplice);
// console.log(numbers);

// const fruits = ['apple', 'orange', 'cherry', 'plumb', 'strawberry', 12, 'dupa'];

// const numbers = [1, 2, 3, 4 , 5, 6, 7]

// numbers.forEach(number => {
//     console.log(number * 2);

// });
// function test (){
// console.log(`czesc`);

// }

// test()

// const test2 = function () {
//     console.log(`czesc`);
// }
// test2()

// const name = (params) => {

// }
// const arrow = () => {

// }

// const arrow2 = x => console.log(`ok`);

// arrow2()

// function add  (num1,num2) {
//     return num1 + num2
// }

// const add2 = (num1,num2) => num1 + num2

// const fruits = ['apple', 'orange', 'cherry', 'plumb', 'strawberry', 12, 'dupa'];

// // const newFruits = fruits.forEach(fruit => console.log(fruit))

// const new1 = fruits.map(fruit => fruit + '2')

// new1.forEach(i => console.log(i))

// const name = (params = 'drogi uzytkowniku') => {

// }

// const btn = document.getElementsByTagName('button')
// const btn2 = document.querySelector('button')

// console.log(btn);
// console.log(btn2);

// const p = document.createElement('p')
// const div = document.createElement('div')
// p.textContent = 'czesc'

// console.log(p);

// document.body.appendChild(div)
// div.appendChild(p)

// const btn = document.querySelector('button')
// console.log(btn);
// // btn.outerHTML = '123'
// btn.innerHTML = '123'

// const div = document.querySelector('.div')
// console.log(div);
// const p = document.querySelector('div>p')
// console.log(p);

// // div.removeChild(p)

// p.remove()

// const btn1 = document.querySelector('.first')
// const btn2 = document.querySelector('.second')
// const btn3 = document.querySelector('.third')

// console.log(btn1);
// console.log(btn2);
// console.log(btn3);

// const test = () => {
//     console.log(`kliknieto mnie`);
// }
// const test2 = () => {
//     console.log(`kliknieto mnie dwa razy`);
// }
// const test3 = () => {
//     console.log(`najechano na mnie `);
// }

// btn1.addEventListener('click',test)

// btn2.addEventListener('dblclick', test2)

// btn3.addEventListener('mouseover', test3)

// const btns = document.querySelectorAll('button')
// console.log(btns);

// const test = () => {
//     console.log(`Akcja!`);
// }

// btns.forEach(btn => btn.addEventListener('click', test))

// const btn = document.querySelector('.first')
// console.log(btn);

// const test = (e) => {
//  console.log(e.target)
// }

// btn.addEventListener('click', test)

// const gold = document.querySelector('.gold')
// const lime = document.querySelector('.lime')

// const newCircle = document.createElement('div')
// newCircle.classList.add('circle','purple')
// gold.appendChild(newCircle)

// const allCircles = document.querySelectorAll('.circle')
// console.log(allCircles)

// // allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

// // console.log(allCircles);

// lime.addEventListener('click', (e) => {
//     if(e.target.matches('.circle2')){

//         console.log(e.target);
//     }
// })

// const div = document.querySelector('div')

// div.style.fontSize = '100px'
// div.style.background = 'tomato'
// div.style.borderRadius = '50px'

// const add = document.querySelector('.add')
// const remove = document.querySelector('.remove')
// const toggle = document.querySelector('.toggle')
// const text = document.querySelector('p')

// const addClass = () => {
//     text.classList.add('test')
// }
// const removeClass = () => {
//     text.classList.remove('test')
// }
// const toggleClass = () => {
//     text.classList.toggle('test')
// }

// add.addEventListener('click',addClass)
// remove.addEventListener('click',removeClass)
// toggle.addEventListener('click',toggleClass)

// const ulList = document.createElement('ul');
// let liList = document.createElement('li');

// document.body.appendChild(ulList);

// for (let i = 0; i < 10; i++) {

//     let liList = document.createElement('li');
//     ulList.appendChild(liList)
//     liList.textContent = 1 + i
// }

// const lastEl = document.querySelector('ul li:last-child')

// console.log(lastEl);

// lastEl.innerHTML = 'Jestem ostatnim elementem'
// lastEl.style.background = 'royalblue'
// lastEl.style.padding = '20px 40px'
// lastEl.style.fontSize = '48px'

// const burger = document.querySelector('.btn1')
// const pizza = document.querySelector('.btn2')
// const square = document.querySelector('.square')
// const text = document.querySelector('.p1')
// const text2 = document.querySelector('.p2')

// const hello = () => console.log(`Cześć`)
// const changeColor = () => square.style.background = 'tomato'
// const changeColor2 = () => square.style.background = 'royalblue'

// const toggleClass = () => {
//     text.classList.toggle('show')
//     text2.classList.toggle('show')
// }

// square.style.background = 'royalblue'

// pizza.addEventListener('click',toggleClass)
// square.addEventListener('mouseover', changeColor)
// square.addEventListener('mouseleave', changeColor2)

// burger.addEventListener('dblclick',hello)

// const number = Math.random() *10
// console.log(number);

// console.log(Math.floor(number));

// const p = document.querySelector('p')

// p.setAttribute('href','yes')
// p.getAttribute('style')

// console.log(p.getAttribute('style'));

// console.log(p.hasAttribute('href'));

// p.removeAttribute('class')
// console.log(p);

// const grandpa = document.querySelector('.grandparent')

// const middleChild = document.querySelector('.middle-child')
// console.log(middleChild);

// const prevSibling = middleChild.previousElementSibling
// console.log(prevSibling);

// const nextSibling = middleChild.nextElementSibling
// console.log(nextSibling);

// const div = document.createElement('div')
// document.body.appendChild(div)

// const img = document.createElement('img')

// div.append(img)

// img.setAttribute('src','https://cdn.pixabay.com/photo/2022/10/17/17/37/sea-7528351_960_720.jpg',"alt","coś")

// const test = () => console.log(`cokolwiek`)

// setTimeout(test,2000)
// setInterval(test,5000)

// let number = 1
// const liItems = document.querySelectorAll('li')

// for(const liItem of liItems){
//     liItem.textContent = number
//     liItem.dataset.id = number
//     number++
// }

// const numbers  = [31.54, 19.99, 4.55]

// console.log(numbers.reduce((prev, n) => prev + n));

// PROJEKT 1

// const img = document.querySelector('.item1');

// const btnArrow = document.querySelector('.arrow');
// const iconArrow = document.querySelector('.fas');

// const bigImg = () => {
// 	img.classList.toggle('hide');

// 	if (img.classList.contains('hide')) {
// 		iconArrow.style.transform = 'rotate(180deg)';
// 	}else {
//         iconArrow.style.transform = 'rotate(0)';
//     }
// };

// // btnArrow.addEventListener('click', shiftArrow);
// btnArrow.addEventListener('click', bigImg);

// PROJEKT 2

// const btnUp = document.querySelector('.sizeUp');
// const btnDown = document.querySelector('.sizeDown');
// const btnColor = document.querySelector('.color');
// const text = document.querySelector('p');

// let fontSize = 36;

// const bigText = () => {
// 	if (fontSize >= 51) {
// 		return;
// 	}
// 	fontSize += 5;
// 	text.style.fontSize = fontSize + 'px';
// };
// const smallText = () => {
// 	if (fontSize <= 30) {
// 		return;
// 	}
// 	fontSize -= 5;
// 	text.style.fontSize = fontSize + 'px';
// };

// const changeColor = () => {
// 	const r = Math.floor(Math.random() * 255);
// 	const g = Math.floor(Math.random() * 255);
// 	const b = Math.floor(Math.random() * 255);
// 	text.style.color = `rgb(${r},${g},${b})`;
// };

// btnUp.addEventListener('click', bigText);
// btnDown.addEventListener('click', smallText);
// btnColor.addEventListener('click', changeColor);

// PROJEKT 3
// const pass = document.querySelector('#password');
// const p = document.querySelector('.passinfo');
// const letters = /[a-z]/i;
// const numbers = /[0-9]/;
// const special = /[!@#$%^&*()]/;
// const minValue = 10;

// const showMsg = () => {
//     if (
//         pass.value.length >= minValue &&
// 		pass.value.match(letters) &&
// 		pass.value.match(numbers) &&
// 		pass.value.match(special)
//         ) {
//             p.textContent = 'Masz bardzo silne hasło!';
//             p.style.color = 'lime';
//         }else if(
//             pass.value.length >= minValue &&
//             pass.value.match(letters) &&
//             pass.value.match(numbers))
//             {

//             p.textContent = 'Masz ok hasło!';
//             p.style.color = 'royalblue';

//         } else {
//             p.textContent = 'Masz słabe hasło!';
//             p.style.color = 'tomato';
//         }
//         }

//     const checkMsg = () => {
//         if (pass.value !== '') {
//             showMsg()
//         } else {
//             p.textContent = 'Nie podałeś hasła...';
//             p.style.color = '';
//         }
//     };
//     pass.addEventListener('keyup', checkMsg);

// PROJEKT 4

// const converter = document.querySelector('#converter');
// const result = document.querySelector('.result');
// const convBtn = document.querySelector('.conv');
// const resetBtn = document.querySelector('.reset');
// const changeBtn = document.querySelector('.change');
// const one = document.querySelector('.one');
// const two = document.querySelector('.two');

// let farenheit;
// let celsius;

// const swap = () => {
// 	if (one.textContent === '°C') {
// 		one.textContent = '°F';
// 		two.textContent = '°C';
//         result.textContent = ''
// 	} else {
// 		one.textContent = '°C';
// 		two.textContent = '°F';
//         result.textContent = ''
// 	}
// };

// const farToCel = () => {
// 	farenheit = converter.value * 1.8 + 32;
// 	result.textContent = `${converter.value} °C to ${farenheit.toFixed(1)}°F`;
// 	converter.value = '';
// };
// const celToFar = () => {
// 	celsius = (converter.value - 32) / 1.8;
// 	result.textContent = `${converter.value} °F to ${celsius.toFixed(1)}°C`;
// 	converter.value = '';
// };

// const convert = () => {
// 	if (converter.value !== '') {
// 		result.textContent = 'Musisz coś wpisać!';

// 		if (one.textContent === '°C') {
// 			farToCel();
// 		}else{
//             celToFar()
//         }
// 	} else {
//         result.textContent = 'Musisz wpisać wartość'
//         result.style.color = 'tomato'
//     }
// };

// const reset = () => {
//     converter.value = ''
//     result.textContent = ''
// }
// resetBtn.addEventListener('click',reset)
// changeBtn.addEventListener('click', swap);

// convBtn.addEventListener('click', convert);

// PROJEKT 5 BURGER MENU

// const burgerBtn = document.querySelector('.burger')
// const barsIco   = document.querySelector('.fa-bars')
// const xIco = document.querySelector('.fa-times')
// const nav = document.querySelector('nav ul')

// const handleNav = () => {
//     nav.classList.toggle('active')
//     burgerBtn.classList.toggle('active')
//     barsIco.classList.toggle('hide')
//     xIco.classList.toggle('hide')
// }

// burgerBtn.addEventListener('click', handleNav)

// PROJEKT 6 LOSOWA CIEKAWOSTKA
// const currentDay = document.querySelector('.current-day')
// const funFact = document.querySelector('.fun-fact')

// const facts = [
// 	'Krokodyl nie potrafi wystawić języka.',
// 	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
// 	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
// 	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
// 	'Goryle śpią nawet czternaście godzin dziennie.',
// 	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
// 	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
// 	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
// ]

// const day = new Date()
// currentDay.textContent = day.toLocaleString("pl", { weekday: 'long' })

// console.log(facts);

// const numbers = Math.floor(Math.random() * facts.length)

// const showInfo = () => {
//     funFact.textContent = facts[numbers]
// }

// showInfo()

// PROJEKT 7 TODO LISTA

// let todoInput; // miejsce w którym uzytkownik wpisueje tresc zadania
// let errorInfo; // info o braku zadan / koniecznosc wpisania tekstu
// let addBtn; // przycisk ADD - dodaje nowe elementy do listy
// let ulList; // lista zadan/tagi UL
// let newTodo;
// let divTools;
// let btnComplete;
// let btnEdit;
// let btnRemove;
// let iconConfirm;
// let iconDel;
// let popup;
// let popupInfo; //tekst w popupie  jak sie doda pusty string
// let todoToEdit; //edytowany todo
// let popupInput; //input w popupie
// let popupAddBtn; // przycisk "zatwierdz" w popupie
// let popupCloseBtn; //przycisk anuluj w popupie

// const main = () => {
// 	prepareDOMElements();
// 	prepareDOMEvents();
// };
// const prepareDOMElements = () => {
// 	//pobieramy wszystke elemnty
// 	todoInput = document.querySelector('.todo-input');
// 	errorInfo = document.querySelector('.error-info');
// 	addBtn = document.querySelector('.btn-add');
// 	ulList = document.querySelector('.todolist ul');
// 	popup = document.querySelector('.popup');
// 	popupInfo = document.querySelector('.popup-info');
// 	popupInput = document.querySelector('.popup-input');
// 	popupAddBtn = document.querySelector('.accept');
// 	popupCloseBtn = document.querySelector('.cancel');
// };

// const prepareDOMEvents = () => {
// 	//nadawanie nasłuchiwanie

// 	addBtn.addEventListener('click', addNewTask);
// 	ulList.addEventListener('click', checkClick);
// 	popupCloseBtn.addEventListener('click', closePopup);
// 	popupAddBtn.addEventListener('click', changeTodoText);
//     todoInput.addEventListener('keyup',enterCheck)

// };

// /*
// 1. Tworzy nowy element (li)
// 2. Dodaje nowy element do ul listy
// 3. Funkcja odpala sie na przycisk ADD
// 4. Przechowuje tresc z inputa i umieszcza go w nowo utworzonym li
// 5. Funckja nie doda do listy pustego "todosa"

// */

// const addNewTask = () => {
// 	if (todoInput.value !== '') {
// 		newTodo = document.createElement('li');
// 		newTodo.textContent = todoInput.value;
// 		ulList.append(newTodo);
// 		createToolsArea();

// 		errorInfo.textContent = '';
// 	} else {
// 		errorInfo.textContent = 'Wpisz coś!';
// 	}
// };

// const createToolsArea = () => {
// 	divTools = document.createElement('div');

// 	divTools.classList.add('tools');
// 	newTodo.append(divTools);

// 	btnComplete = document.createElement('button');
// 	btnComplete.classList.add('complete');

// 	btnEdit = document.createElement('button');
// 	btnEdit.textContent = 'EDIT';
// 	btnEdit.classList.add('edit');

// 	btnRemove = document.createElement('button');
// 	btnRemove.classList.add('delete');

// 	divTools.append(btnComplete, btnEdit, btnRemove);

// 	iconConfirm = document.createElement('i');
// 	iconConfirm.classList.add('fas');
// 	iconConfirm.classList.add('fa-check');
// 	btnComplete.append(iconConfirm);

// 	iconDel = document.createElement('i');
// 	iconDel.classList.add('fas');
// 	iconDel.classList.add('fa-times');
// 	btnRemove.append(iconDel);
// };
// const checkClick = (e) => {
// 	if (e.target.matches('.complete')) {
// 		e.target.closest('li').classList.toggle('completed');
// 		e.target.classList.toggle('completed');
// 		// newTodo.classList.toggle('completed')
// 	} else if (e.target.matches('.edit')) {
// 		editTodo(e);
// 	} else if (e.target.matches('.delete')) {
// 		deleteTodo(e);
// 	}
// };

// const editTodo = (e) => {
// 	todoToEdit = e.target.closest('li');
// 	// console.log(todoToEdit.);
// 	popupInput.value = todoToEdit.firstChild.textContent;

// 	popup.style.display = 'flex';
// };
// const closePopup = () => {
// 	popup.style.display = 'none';
// };

// const changeTodoText = () => {
// 	if (popupInput.value !== '') {
// 		todoToEdit.firstChild.textContent = popupInput.value;
// 		popup.style.display = 'none';
// 		popupInfo.textContent = '';
// 	} else {
// 		popupInfo.textContent = 'Wpisz coś!';
// 	}
// };

// const deleteTodo = e => {
// e.target.closest('li').remove('li')

// const allTodos = ulList.querySelectorAll('li')

// if(allTodos.length === 0){
//     errorInfo.textContent = 'Brak zadań!'
// }else {}

// }

// const enterCheck = (e) => {
//     if(e.key === 'Enter'){
//         addNewTask()
//     }
// }

// document.addEventListener('DOMContentLoaded', main);

// let score

// const add = (x, y) => {
//     score = x + y
//     showScore()
// }

// const showScore = () => {
//     console.log(`Wynik to ${score}`);
// }
// add(3,5)

// OOP projektowanie obiektowe

// const myObject = {
//     key : value,
//     key : value,
//     key : value,
// }

// const newUser = {
// name: 'Daniel',
// age: 28,
// bestfood: 'schabowy',
// car:{
//     brand: 'Audi',
//     model: 'A5',
//     color: 'czarny',
//     sound(){
//         console.log(`brum brum`);
//     }
// }
// }

// newUser.car.sound()

// console.log(`${newUser.name} jezdzi samochodem marki ${newUser.car.brand}, ktory ma kolor ${newUser.car.color};` )

// const user = {
//     name: 'Daniel',
//     age: 28,

// }
// user.country = 'Polska'
// user['fav-color'] = 'żółty'
// console.log(user);

// const dogName = 'reksio'
// const dogAge = 300

// const dog = {
//     // name: dogName,
//     // age: dogAge,
//     dogName,
//     dogAge

// }

// dog.country = 'pakistan'
// dog['fav-color'] = 'żółty'

// dog['fav-food'] = 'psia karma'

// console.log(dog);

// const user = {
//     name: 'Daniel',
//     age: 28,
//     sex: 'male',
//     'hair-color': 'brown'
// }
// console.log(user);

// for(const data in user){
//     console.log(data + ': ' +user[data]);
// }

// const user = {
//     name: 'Daniel',
//     showName(){
//         console.log(this.name);
//     }
// }

// user.showName()

// KONSTRUKTOR

//  function User (name, age){
//     this.name = name,
//     this.age = age,

//     this.hellow = function(){
//         console.log(`Cześć ${this.name}`);
//     }
//  }

//  const newUser = new User ('Klaudia', 23)
//  const newUser2 = new User ('Lily', 34)
//  const newUser3 = new User ('Daniel', 26)

// console.log(newUser, newUser2, newUser3);

// User.prototype.hello = () => {
//     console.log(`CZESC ${this.name}`);
// }

// newUser3.hellow()

// const firstBtn = document.querySelector('.first');
// const secondBtn = document.querySelector('.second');
// const thirdBtn = document.querySelector('.third');
// const text = document.querySelector('.text');

// function Meals(name, price) {
// 	this.name = name
//     this.price = price

// }

// const newMeal = new Meals('Schabowy', 25)
// const newMeal2 = new Meals('Pizza', 30)
// const newMeal3 = new Meals('Mielony', 15)

// Meals.prototype.show = function ()
// {
//     console.log(`${this.name} kosztuje ${this.price}zł`);
// }
// newMeal.show()

// const data = new Date()
// console.log(data);

// function Meals (name, price){
//     this.name = name
//     this.price = price

// }

// const newMeal = new Meals ('Schabowy', 25)
// const newMeal2 = new Meals ('Pizza', 40)
// const newMeal3 = new Meals ('Zupa', 15)

// Meals.prototype.showFod = function () {
//     console.log(`${this.name} kosztuje ${this.price}zł`);
// }

// newMeal.showFod()
// newMeal2.showFod()
// newMeal3.showFod()

// const show = () => {
//     newMeal.showFod()
//     text.textContent = 'Schabowy kosztuje 25zł'
// }
// const show2 = () => {
//     newMeal2.showFod()
// }
// const show3 = () => {
//     newMeal3.showFod()
// }

// firstBtn.addEventListener('click',show)
// secondBtn.addEventListener('click',show2)
// thirdBtn.addEventListener('click',show3)

// console.log(this);

// const person = {
// 	name: 'Lisa',
// 	'fav-meal': 'schabowy',
// 	showInfo() {
// 		console.log(this);
// 	},
// };
// person.showInfo();

// const person2 = {
// 	name: 'Lisa',
// 	'fav-meal': 'schabowy',
// 	address: {
// 		city: 'Kraków',
//         'zip-code': '00-000',
//         showCity: function(){
//             console.log(this.city);
//         }

// 	},
// };

// person2.address.showCity()

// const user = {
//     name : 'Daniel',
//     age : 23,
//     'fav-food': 'Pizza',
//     car: {
//         brand: 'Audi',
//         model: 'a3',
//         color: 'black'

//     }

// }
// user.county = 'Polska'

// console.log(user);

// for(const data in user){
//     console.log(user[data]);
// }

// const person = {
//     name: 'Tom',
//     showName: function() {
//         console.log(this);
//     }
// }
// person.showName()

// const person2 = {
//     name: 'Tomy',
//     showName2() {
//         console.log(this);
//     }
// }
// person2.showName2()

// const person3 = {
//     name: 'Tomy',
//     showName3() {
//         console.log(this)
//     },
//     address: {
//         city: 'Kraków',
//         street: 'Ładna',

//         showAddress: function (){
//             console.log(` ${this.city}, ${this.street}`);
//         }

// }}

// person3.address.showAddress()
// person3.showName3()

// function Food(name){
//     this.name = name

// }

// const meal = new Food('schabowy')
// const meal2 = new Food('pepsi')

// console.log(meal, meal2);

// function test() {
//     console.log(this);
//     console.log(this.name);
// }

// const car1 = {
//     name: 'Audi'
// }
// const car2 = {
//     name: 'Dodge'
// }
// const car3 = {
//     name: 'Nissan'
// }

// test.bind(car1)()

// const movie = {
//     tittle: 'Avengers',
//     tittle2: 'japa'
// }

// function showMovie(price, cinema){
//     console.log(`Film ${this.tittle}, cena:${price}, kino:${cinema}`);
// }

// showMovie(30,'SuperKino')

// showMovie.call(movie, 35,'superkino')
// showMovie.apply(movie, [35,'superkino2'])

// function Person (name, age){
//     this.nam = name
//     this.age = age
// }

// Person.prototype.sayHi = function (){
//     console.log(`Czesc jestem ${this.name}`);
// }

// function Food(price, meal) {
// 	this.price = price;
// 	this.meal = meal;
// }

// Food.prototype.favFood = function () {
// 	console.log(`Siema moje najlepsze żarcie to ${this.meal}`);
// };

// Food.prototype.priceFood = function () {
// 	console.log(`Moje najlepsze zarcie kosztuje ${this.price}`);
// };

// const person1 = new Food(35, 'pizza');

// person1.favFood();
// person1.priceFood();

// ======================

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.showName = function () {
// 	console.log(`Zawodnik ma na imie ${this.name}`);
// };
// Person.prototype.showAge = function () {
// 	console.log(`Zawodnik ma lat ${this.age}`);
// };

// const player = new Person('Krznówek', 70);

// player.showName();
// player.showAge();

// ============

// class Food2 {
// 	constructor(price, meal) {
// 		this.price = price;
// 		this.meal = meal;
// 	}

// 	favFod() {
// 		console.log(`Siema moje najlepsze żarcie to ${this.meal}`);
// 	}
// 	priceFod() {
// 		console.log(`Moje najlepsze zarcie kosztuje ${this.price}`);
// 	}
// }

// const food3 = new Food2(35, 'pizza');

// food3.favFod();
// food3.priceFod();

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.sayHi = function () {
// 	console.log(`czesc jestem ${this.name}`);
// };

// Person.prototype.showAge = function () {
// 	console.log(`mam lat ${this.age}`);
// };

// const person1 = new Person('Eliza', 27);

// console.log(person1);
// person1.sayHi();
// person1.showAge();

// class Person2 {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	sayHello() {
// 		console.log(`czesc jestem ${this.name}`);
// 	}
//     showAge2() {
// 		console.log(`mam lat ${this.age}`);
// 	}
// }

// const person2 = new Person2 ('Agnieszka', 40)
// person2.sayHello()
// person2.showAge2()

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
//     sound(){
//         console.log(`Zwierzak robi hau hau`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, age){
//         super(name)
//         this.age = age
//     }

// }

// class Cat extends Animal {
//     constructor (name){
//       super(name)
//     }
//     sound(){
//         console.log(`Kot robi miau miau`);
//     }
// }

// const dog = new Dog ('Reksio', 50)
// const cat = new Cat ('Filemon')

// dog.sound()
// console.log(dog)
// console.log(cat);
// cat.sound()

// const user = {
//     name: 'Lilly',
//     age: 23
// }

// const pet = {
// name: 'Drops',
// type: 'dog'
// }

// const userInfo = Object.assign({}, user, pet)
// console.log(userInfo);

// const person = {
//     name: 'Eliza',
//     age: 26,
//     job: 'DJ',
//     car: {
//         brand: 'Dodge',
//         model: 'Viper'
//     }
// }

// const showInfo = ({name, age, job} ) => {

//    const {name, age ,job} = person

/*      const name = person.name 
        const age = person.age
        const job = person.job
*/

// console.log(`${name} pracuje jako ${job} i ma lat ${age}`);
// }

// showInfo(person)

// const showInfo2 = ({car: {brand, model}}) => {

//     console.log(`Jej samochód to ${brand} ${model}`);
// }

// showInfo2(person)

// const showInfo3 = () => {
//     const {car: {brand, model}} = person
//     console.log(`Jej samochód to ${brand} ${model}`);
// }

// showInfo3(person)

// const colors = ['red', 'green', 'blue']

// const firstColor = colors[0]
// const secondColor = colors[1]

// const [first, second] = colors
// console.log(first, second);

// const myObject = {
// 	key: value,
// 	key: value,
// 	key: value,
// };

// const newUser = {
// 	name: 'Eliza',
// 	age: 23,
//     car: {
//         brand: 'Audi',
//         model: 'A3'
//     }
// };
// console.log(newUser);
// console.log(newUser.car.brand)

// const countries = {
//     first : 'Poland',
//     second: 'Germany',
//     third: 'Italy',
//     America: {
//         fourth: 'Argentina',
//         fifth: 'USA'
//     }
// }

// console.log(`Dziś w środe od godzinie 20:00 zagra ${countries.first} z ${countries.America.fourth}`);

// const newUser = {
// 	name: 'Eliza',
// 	age: 23,
// }

// newUser.country = 'Polska'
// newUser['second-name'] = 'Bronisława'

// console.log(newUser);

// const dogName = 'reksio'
// const dogAge = 23

// const dog = {
//     // name: dogName,
//     // age: dogAge
// dogName,

// }
//     console.log(dog);

// const user = {
//     name:'Klaudia',
//     age: 23,
//     sex: 'female',
//     'hair-color': 'blonde',
// }

// for(const data in user){
//     console.log(data + ': ' + user[data]);
// }

// const user2 = {

//     name: 'Daniel',
//     showName() {
//         // console.log(` bez thisa${user.name}`);
//         console.log(` z thisem ${this.name}`);
//     }

// }

// user2.showName()

// const user = {};

// function User(name, age) {
// 	this.name = name;
// 	this.age = age;
// 	// this.hello = function () {
// 	// 	console.log(`Cześć ${this.name}`);
// 	// };
// }

// User.prototype.hello = function (){
//     console.log(`Cześć ${this.name}`);
// }

// User.country = 'Polska'

// const user1 = new User('Daniel', 28);
// console.log(user1);

// user1.hello()

// const firstBtn = document.querySelector('.first');
// const secondBtn = document.querySelector('.second');
// const thirdBtn = document.querySelector('.third');

// function Food (meal, price) {
// 	this.meal = meal;
// 	this.price = price;
// }

// Food.prototype.showMeal = function(){
//     console.log(`${this.meal} kosztuje ${this.price}`);
// }

// const meal1 = new Food('pizza', 25)
// const meal2 = new Food('schabowy', 40)
// const meal3 = new Food('zupa', 15)

// console.log(meal1);
// console.log(meal2);
// console.log(meal3);

// meal1.showMeal()

// firstBtn.addEventListener('click', () =>{ meal1.showMeal()})
// secondBtn.addEventListener('click',() =>{ meal2.showMeal()})
// thirdBtn.addEventListener('click',() =>{ meal3.showMeal()})
// 'use strict';

// console.log(this);

// function test() {
// 	console.log(this);
// }

// test();

// const person = {
// 	name: 'Daniel',
// 	age: 33,
// 	'fav-meal': 'burger',
// 	address: {
// 		city: 'Kraków',
// 		'zip-code': '00-000',
// 		showCity: function () {
// 			console.log(this);
// 		},
// 	},
// };

// person.address.showCity();

// function Food(name) {
// 	this.name = name;
// }

// const meal = new Food('schabowy');
// const meal2 = new Food('pepsi');

// console.log(meal, meal2);

// const btns = document.querySelectorAll('button');

//  btns.forEach(btn => btn.addEventListener('click',function() {
//     console.log(this);
//  }))

// function test() {
// 	console.log(this);
// 	console.log(this.name);
// }

// const car1 = {
// 	name: 'Audi',
// };

// const car2 = {
// 	name: 'Dodge',
// };

// const car3 = {
// 	name: 'Nissan',
// };

// test.bind(car1)()

// const movie = {
//     tittle : 'Avengers'
// }

// function showMovie (price, cinema){
//     console.log(`film ${this.tittle}, cena: ${price}, kino: ${cinema}`);
// }

// showMovie(30, 'superKino')

// showMovie.call(movie, 35,'SupeKino')
// showMovie.apply(movie,[ 35,'SupeKino'])

// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// Person.prototype.sayHi = function () {
// 	console.log(`czesc jestem ${this.name}`);
// };
// Person.prototype.showAge = function () {
// 	console.log(`mam lat ${this.age}`);
// };

// const person1 = new Person('Eliza', 26);
// console.log(person1);

// person1.sayHi();
// person1.showAge();

// class Person2 {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	sayHi() {
// 		console.log(`Cześć jestem ${this.name}`);
// 	}
// }

// const person1 = new Person2('Daniel', 28);
// console.log(person1);
// person1.sayHi();

// function Animal(name, age, group) {
// 	this.name = name;
// 	this.age = age;
// 	this.group = group;
// }

// Animal.prototype.showName = function () {
// 	console.log(`To zwierze nazywa sie ${this.name}`);
// };

// Animal.prototype.showAge = function () {
// 	console.log(`Ma lat ${this.age}`);
// };

// Animal.prototype.showGroup = function () {
// 	console.log(`Zwierze pochodzi z grupy ${this.group}`);
// };

// const animal1 = new Animal('Wąż', 10, 'płazy');
// const animal2 = new Animal('Dorsz', 5, 'ryby');
// const animal3 = new Animal('Krokodyl', 40, 'gady');

// console.log(animal1);

// animal1.showName()
// animal1.showAge();
// animal1.showGroup();

// animal2.showName()
// animal2.showAge();
// animal2.showGroup();

// animal3.showName()
// animal3.showAge();
// animal3.showGroup();

// class Animal {
// 	constructor(name, age, group) {
// 		this.name = name;
// 		this.age = age;
// 		this.group = group;
// 	}
// 	showName() {
// 		console.log(`To zwierze nazywa sie ${this.name}`);
// 	}
// 	showAge() {
// 		console.log(`Ma lat${this.age}`);
// 	}
// 	showGroup() {
// 		console.log(`Zwierze pochodzi z grupy ${this.group}`);
// 	}
// }

// const animal1 = new Animal('Wąż', 10, 'płazy');
// const animal2 = new Animal('Dorsz', 5, 'ryby');
// const animal3 = new Animal('Krokodyl', 40, 'gady');

// console.log(animal1);

// animal1.showName()
// animal1.showAge()
// animal1.showGroup()

// class Animal {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	sound() {
// 		console.log(`Zwierzak robi "hau hau"`);
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age) {
// 		super(name);
// 		this.age = age;
// 	}
// }

// class Cat extends Animal {
//     constructor (name){
//         super(name)
//     }
//     sound(){
//         console.log(`Kot robi miau miau`);
//     }

// }

// const dog = new Dog('Reksio', 25);

// const cat1 = new Cat('filemon')
// console.log(cat1);
// cat1.sound()

// dog.sound();
// console.log(dog);

// const user = {
// 	name: 'Lily',
// 	age: 23,
// };

// const pet = {
// 	name: 'Drops',
//     type: 'dog'
// };

// // const test = Object.assign(user, pet)

// const test2 = Object.assign({},user, pet )
// console.log(test2);
// console.log(user);
// console.log(pet);

// const person = {
// 	name: 'Lily',
// 	age: 23,
// 	job: 'Dj',
// };

// const showInfo = () => {
// 	const { name, age, job } = person;

// 	console.log(
// 		`${name} pracuje jako ${job} i ma ${age} lata.`
// 	);
// };

// showInfo();

// const btn = document.querySelector('button');
// const img = document.querySelector('img');

// const URL = 'https://dog.ceo/api/breeds/image/random';

//     btn.addEventListener('click', () =>{
//         fetch(URL)
//         .then(res => res.json())
//         .then(data => img.setAttribute('src', data.message))
//         .catch((err) => console.error(err));
//     }
//     )
//     })
// const btn = document.querySelector('button')

// btn.addEventListener('click',() => {
//     console.log(`wykonuje sie pierwszy!`)
//     const p = document.createElement('p')
//     alert(`stworzyłem alert`)
//     p.textContent = 'test'
//     document.body.append(p)
//     console.log(`koniec`);
// })

// console.log(1)
// setTimeout(()=>{
//     console.log(2);
// }, 1000)
// console.log(3);

// setTimeout(() => {
// 	console.log(1);
// 	setTimeout(() => {
// 		console.log(2);
// 		setTimeout(() => {
// 			console.log(3);
// 			setTimeout(() => {
// 				console.log(5);
// 				setTimeout(() => {
// 					console.log(6);
// 				}, 300);
// 			}, 300);
// 		}, 300);
// 	}, 300);
// }, 300);

// const test = new Promise((resolve, reject) => {
// 	if (!true) {
// 		resolve('Jest ok ')
// 	} else {
//         reject('błąd')}
// })

// test
// 	.then((info) => console.log(info))
// 	.catch((err) => console.error(err));

// const checkAge = (age) => {
// 	return new Promise((resolve, reject) => {
// 		if (age >= 18) {
// 			resolve();
// 		} else {
// 			reject('Masz za mało lat');
// 		}
// 	});
// };

// const doubleCheck = () => {
// 	return new Promise((resolve) => {
// 		console.log('sprawdzam jeszcze raz...');
// 		setTimeout(() => {
// 			resolve('Faktycznie, wiek się zgadza'), 2000;
// 		});
// 	});
// };

// checkAge(50)
// 	.then(() => {
// 		console.log('Chyba mozesz wejść ... ');
// 		return doubleCheck();
// 	})
// 	.then((res) => console.log(res))
// 	.then(() => {
// 		console.log('Weryfikacja zakończona');
// 	})
// 	.catch((err) => console.error(err));

// async function test(){
//     await checkAge(22)
//     console.log('chyba mozesz wejść')
//     await doubleCheck()
//     console.log('faktycznie wiek sie zgadza')
//     console.log('Weyfikacja zakonczona!');
// }

// test()

// WEATHER APP

// const input = document.querySelector('input')
// const button = document.querySelector('button')
// const cityName = document.querySelector('.city-name')
// const warning = document.querySelector('.warning')
// const photo = document.querySelector('.photo')
// const weather = document.querySelector('.weather')
// const temperature = document.querySelector('.temperature')
// const humidity = document.querySelector('.humidity')

// const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
// const API_KEY = '&appid=c75220d8681be195d50609327ea95e12'
// const API_UNITS = '&units=metric'

// const getWather = () => {
//         const city = input.value || 'Londyn'
//         const URL = API_LINK + city + API_KEY + API_UNITS

//         axios.get(URL)
//         .then(res => {
//             console.log(res.data);
//             const temp = res.data.main.temp
//             const hum = res.data.main.humidity

//             const status = Object.assign({}, ...res.data.weather)

//             cityName.textContent = res.data.name
//             temperature.textContent = Math.floor(temp) + " °C"
//             humidity.textContent = hum + "%"
//             weather.textContent = status.main
//             const weatherId = res.data.weather[0].id

//             if( weatherId >= 801 && weatherId <= 804 ){
//                 photo.setAttribute('src','./img/cloud.png')
//             }else if (weatherId >= 300 && weatherId <= 321){
//                 photo.setAttribute('src','./img/drizzle.png')
//             } else if (weatherId === 741){
//                 photo.setAttribute('src','./img/fog.png')
//             } else if (weatherId >= 600 && weatherId <= 622){
//                 photo.setAttribute('src','./img/ice.png')
//             }else if (weatherId >= 500 && weatherId <= 531){
//                 photo.setAttribute('src','./img/rain.png')
//             }else if (weatherId >= 500 && weatherId <= 531){
//                 photo.setAttribute('src','./img/rain.png')
//             }else if (weatherId >= 200 && weatherId <= 232) {
//                 photo.setAttribute('src','./img/thunderstorm.png')
//             }else if (weatherId === 800){
//                 photo.setAttribute('src','./img/sun.png')
//             }else {
//                 photo.setAttribute('src','./img/unknown.png')
//             }

//             }).catch(()=> warning.textContent = 'Wpisz poprawną nazwe miasta!')

//             // console.log(res.data.weather[0]);
//         }

// const checkE = (e) => {
//     if(e.key === "Enter"){
//         getWather()
//     }
// }

// button.addEventListener('click',getWather)
// input.addEventListener('keypress',checkE)

// getWather()

// const test1 = (callback) => {
// 	console.log('odrazu wykonanie');

// 	// callback()
// 	setTimeout(() => {
// 		console.log('wykonanie z callbacka + z testu 1 opoznienie 2s');
// 		callback();
// 	}, 2000);
// };

// const test2 = (param) => {
// 	setTimeout(() => {
// 		console.log('oponione na time out w test 2 o 3 s');
// 	}, 1000);
// };
// test1(test2);

// const arr = [1, 3, 5].map(multiplay);

// console.log(arr);

// const arr = [5, 10, 15];

// const miltiplay = elem => elem * 2;
// const add = elem => elem + 2
// const odd = elem => elem - 2

// const test = (arr,callback) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = callback(arr[i])
// 	}
// }

// test(arr, add)

// console.log(arr);

/*
1.  wysyłanie danych usera
2.  validacja danyc
3.  rejestracja usera
4.  wysylanie maila do usera
*/

// const getuserData = (callback) => {
// 	setTimeout(() => {
// 		console.log('1. get user data');
//         callback();
// 	}, 800);
// };
// const validateData = (callback) => {
// 	setTimeout(() => {
// 		console.log('2. validate');
// 		callback();
// 	}, 900);
// };
// const registerUser = (callback) => {
// 	setTimeout(() => {
// 		console.log('3. register user');
//         callback();
// 	}, 2000);
// };
// const sendEmail = (callback) => {
// 	setTimeout(() => {
// 		console.log('4. send email');
// 		callback();
// 	}, 200);
// };

// getuserData(() => {
// 	validateData(() => {
// 		registerUser(() => {
// 			sendEmail(() => {
// 				console.log('Koniec!');
// 			});
// 		});
// 	});
// });

// new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('working....')

//         resolve()

// 	},2000)
// }).then(() => {
//     setTimeout(() => {
//         console.log('Ukończono!')
//     },2000)
// }).then(() => {
//     setTimeout(() => {
//         console.log('mozesz wejsc!')
//     },3000)
// })

// const getuserData = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('1. get user data');
// 			resolve();
// 		}, 800);
// 	});
// };

// const validateData = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('2. validate');
// 			resolve();
// 		}, 900);
// 	});
// };
// const registerUser = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('3. register user');
// 			resolve();
// 		}, 2000);
// 	});
// };

// const sendEmail = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			console.log('4. send email');
// 			resolve('Email has been sent');
// 		}, 200);
// 	});
// };

// getuserData()
// .then(validateData)
// .then(registerUser)
// .then(sendEmail)
// .then((res) => {
//  setTimeout(() => {
//     console.log('koniec!');
//     console.log(res);
//  },2000)
// })

// async function someAsync () {

//     await getuserData()
//     await validateData()
//     await registerUser()
//     await sendEmail()

//     console.log('Koniec');

// }

// someAsync()

// Wskazówki
// Zastanów się jakich elementów będziesz potrzebował/a (jakie elementy będziesz musiał/a pobrać za pomocą np. querySelectora).

// Stwórz funkcję, która będzie się odpalała, kiedy wpiszemy coś do inputa.

// Funkcja ma porównywać to, co wpisaliśmy w inputa z każdym napojem na liście.

// Za pomocą instrukcji warunkowej sprawdź, czy dane z inputa pokrywają się z nazwą napoju. Jeśli nie, ukryj taki napój.

// Żeby aplikacja działała poprawnie, musimy się zabezpieczyć. Użytkownik może podać nazwę napoju dużymi lub małymi literami. Musimy więc sprowadzić to, co wpisuje użytkownik do np. małych liter (tak samo trzeba zrobić z listą napojów).

// Podpowiedzi do wskazówek
// Trzeba będzie stworzyć 2 zmienne, które będą przechowywały inputa oraz listę napojów (wszystkie <li>).

// addEventListener na event 'keyup'.

// Chcemy przeszukać całą listę napojów i na każdym z nich wykonać dokładnie tę samą funkcję. Brzmi jak zadanie dla pętli, prawda? ;)

// Warto też zauważyć, że skoro pobraliśmy wszystkie <li> do jednej zmiennej, to mamy obiekt tablico podobny – idealnie! Pętle z tablicami się przecież bardzo lubią. :)

// Co więcej, mamy taką metodę (coś z indeksem w nazwie), która sprawdza, czy jakiś znak / jakieś znaki są w danym stringu. Jeśli nie ma, to zwraca wartość -1.

// Jeśli coś zwróci -1 to taki napój należy ukryć. display: none; robi robotę. ;)

// Mamy takie dwie fajne metody – toUpperCase lub toLowerCase. :)

// const li = document.querySelectorAll('li');
// const input = document.querySelector('.header__input');

// const searchEngine = (e) => {
// 	const text = e.target.value.toLowerCase()
// 	console.log(text);

// 	li.forEach((el) => {

// 		if (el.textContent.toLowerCase().indexOf(text) !== -1) {
//             el.style.display = 'block'
// 		}else {
//             el.style.display = 'none'
//         }
// 	});
// };
// input.addEventListener('keyup', searchEngine);

// const inputSum = document.querySelector('#price');
// const inputPeoples = document.querySelector('#people');
// const select = document.querySelector('#tip');
// const btn = document.querySelector('.count');
// const error = document.querySelector('.error');
// const costInfo = document.querySelector('.cost-info');
// const cost = document.querySelector('.cost');

// const checkInput = () => {
// 	if (inputSum.value == '' || inputPeoples.value == '' || select.value == 0) {
// 		error.textContent = 'Wypisz wszystkie pola!';
// 		costInfo.style.display = 'none'
// 	} else {
// 		checkBill();
// 		error.textContent = '';
// 	}
// };

// const checkBill = () => {
// 	const sum = parseFloat(inputSum.value)
// 	const peoples = parseInt(inputPeoples.value)
// 	const tips = parseFloat(select.value)

// 	const sumAll = (sum + (sum * tips)) / peoples;
// 	costInfo.style.display = 'block'
// 	cost.textContent = sumAll.toFixed(2)

// };

// btn.addEventListener('click', checkInput);

// PROJEKT 3

// const username = document.querySelector('#username');
// const pass = document.querySelector('#password');
// const pass2 = document.querySelector('#password2');
// const email = document.querySelector('#email');

// const sendBtn = document.querySelector('.send');
// const clearBtn = document.querySelector('.clear');

// const popup = document.querySelector('.popup');

// const showError = (input, msg) => {
// 	const formBox = input.parentElement;
// 	formBox.classList.add('error');
// 	const errorMsg = formBox.querySelector('.error-text');
// 	errorMsg.textContent = msg;
// };
// const clearError = (input) => {
// 	const formBox = input.parentElement;
// 	formBox.classList.remove('error');
// };

// const checkForm = (input) => {
// 	input.forEach((el) => {
// 		if (el.value === '') {
// 			showError(el, el.placeholder);
// 		} else {
// 			clearError(el);
// 		}
// 	});
// };

// const checkLength = (input, min) => {
// 	if (input.value.length < min) {
// 		showError(
// 			input,
// 			`${input.previousElementSibling.innerText.slice(
// 				0,
// 				-1
// 			)} składa sie z min. ${min} znaków.`
// 		);
// 	}
// };

// const checkPass = (pass1, pass2) => {
// 	if (pass1.value !== pass2.value) {
// 		showError(pass2, 'Hasła do siebie nie pasują');
// 	}
// };

// const checkMail = (email) => {
// 	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	if(re.test(email.value)){
// 		clearError(email)
// 	}else{
// 		showError(email, 'Email jest niepoprawny')
// 	}
// }

// const checkErrors = () =>{

// 	const allInputs = document.querySelectorAll('.form-box')
// 	let errorCount = 0;

// 	allInputs.forEach(el=>{
// 		if(el.classList.contains('error')){
// 			errorCount++
// 		}
// 	})

// 	if(errorCount === 0) {
// 		popup.classList.add('show-popup')
// 	}
// }

// sendBtn.addEventListener('click', (e) => {
// 	e.preventDefault();

// 	checkForm([username, pass, pass2, email]);
// 	checkLength(username, 3);
// 	checkLength(pass, 8);
// 	checkPass(pass, pass2);
// 	checkMail(email)
// 	checkErrors()
// });

// clearBtn.addEventListener('click', (e) => {
// 	e.preventDefault();

// 	[username, pass, pass2, email].forEach((el) => {
// 		el.value = '';
// 		clearError(el)
// 	});
// });

// PROJEKT 4

// const input = document.querySelector('input');
// const ball = document.querySelector('img');
// const answer = document.querySelector('.answer');
// const error = document.querySelector('.error');

// const arr = [
// 	'cała mądrość nie mieści się w jednej głowie',
// 	'cel uświęca środki.',
// 	'chciwy dwa razy traci.',
// 	'chłop potęgą jest i basta.',
// 	'ciągnie wilka do lasu.',
// 	'czas to pieniądz',
// 	'czego oczy nie widzą, tego sercu nie żal',
// 	'czym chata bogata, tym rada',
// 	'czeski błąd',
// 	'czas leczy rany',
// ];

// const showAdage = () => {

// 	const number = Math.floor(Math.random() * 10);
// 	answer.innerHTML = `<span>Odpowiedź:</span> ${arr[number]}`

// }

// const shakeballadd = () => {

// 	ball.classList.add('shake-animaton');

// };
// const remove = () => {
// 	ball.classList.remove('shake-animaton')
// }

// const checkInput = () => {
// 	if (input.value !== '' && input.value.slice(-1) === '?') {
// 		error.textContent = '';
// 		shakeballadd()
// 		setTimeout(()=>{
// 			showAdage()
// 		},800)

// 	} else if(input.value !== '' && input.value.slice(-1) !== '?'){
// 		error.textContent = 'Pytaanie musi zakończyć sie znakiem "?"'
// 		answer.textContent = ''
// 	}else if(input.value === ''){
// 		error.textContent = 'Wpisz pytanie!'
// 	}
// setTimeout(()=>{
// 	remove()
// },600)
// };

// ball.addEventListener('click', checkInput)

// PROJEKT 5

// const startBtn = document.querySelector('.start');
// const pauseBtn = document.querySelector('.pause');
// const stopBtn = document.querySelector('.stop');
// const resetBtn = document.querySelector('.reset');
// const archBtn = document.querySelector('.history');
// const stopwatch = document.querySelector('.stopwatch');
// const time = document.querySelector('.time');
// const timeList = document.querySelector('.time-list');

// const info = document.querySelector('.info');
// const modalShadow = document.querySelector('.modal-shadow');
// const closeModalBtn = document.querySelector('.close');

// let countTime;
// let minutes = 0;
// let seconds = 0;

// let timeArr = [];

// const handleStart = () => {
// 	clearInterval(countTime);
// 	countTime = setInterval(() => {
// 		if (seconds < 9) {
// 			seconds++;
// 			stopwatch.textContent = `${minutes}:0${seconds}`;
// 		} else if (seconds >= 9 && seconds < 59) {
// 			seconds++;
// 			stopwatch.textContent = `${minutes}:${seconds}`;
// 		} else {
// 			minutes++;
// 			seconds = 0;
// 			stopwatch.textContent = `${minutes}:00`;
// 		}
// 	}, 100);
// };

// const handlePause = () => {
// 	clearInterval(countTime);
// };

// const handleStop = () => {
// 	time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

// 	if (stopwatch.textContent !== '0:00') {
// 		time.style.visibility = 'visible';
// 		timeArr.push(stopwatch.textContent);
// 		console.log(timeArr);
// 	}

// 	clearInterval(countTime);
// 	stopwatch.textContent = `0:00`;
// 	timeList.textContent = '';
// 	seconds = 0;
// 	minutes = 0;
// };

// const handleReset = () => {
// 	time.style.visibility = 'hidden';
// 	timeList.textContent = '';
// 	timeArr = [];
// 	clearInterval(countTime);
// 	stopwatch.textContent = `0:00`;
// 	seconds = 0;
// 	minutes = 0;
// };
// const showHistory = () => {
// 	timeList.textContent = '';
// 	let num = 1;
// 	timeArr.forEach((time) => {
// 		const newTime = document.createElement('li');
// 		newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`;
// 		timeList.append(newTime);
// 		num++;
// 		console.log(timeList);
// 	});
// };

// const showModal = () => {
// if(!(modalShadow.style.display === 'block')){
// 	modalShadow.style.display = 'block'
// }else{
// 	modalShadow.style.display = 'none'
// }

// modalShadow.classList.toggle('modal-animation')
// }

// startBtn.addEventListener('click', handleStart);
// pauseBtn.addEventListener('click', handlePause);
// stopBtn.addEventListener('click', handleStop);
// resetBtn.addEventListener('click', handleReset);
// archBtn.addEventListener('click', showHistory);

// info.addEventListener('click', showModal)

// closeModalBtn.addEventListener('click',()=>{
// 	modalShadow.style.display = 'none'
// 	modalShadow.classList.remove('modal-animation')
// })

// window.addEventListener('click', e => e.target === modalShadow ? showModal() : false)

// PROJEKT 6 MY NOTES

// const addBtn = document.querySelector('.add');
// const deleteAll = document.querySelector('.delete-all');
// const cancelBtn = document.querySelector('.cancel');
// const saveBtn = document.querySelector('.save');
// const deletNoteBtn = document.getElementsByClassName('delete-note');

// const noteArea = document.querySelector('.note-area');
// const notePanel = document.querySelector('.note-panel');
// const category = document.querySelector('#category');
// const textArea = document.querySelector('#text');
// const error = document.querySelector('.error');

// let selectedValue;

// let cardID = 0;

// const showPanel = () => {
// 	notePanel.style.display = 'block';
// };
// const closePanel = () => {
// 	notePanel.style.display = 'none';
// 	error.style.visibility = 'hidden';
// 	category.selectedIndex = 0;
// 	textArea.value = '';
// };

// const addNote = () => {
// 	if (
// 		textArea.value !== '' &&
// 		category.options[category.selectedIndex].value !== '0'
// 	) {
// 		createNote();
// 		error.style.visibility = 'hidden';
// 	} else {
// 		error.style.visibility = 'visible';
// 	}
// };

// const createNote = () => {
// 	const newNote = document.createElement('div');
// 	newNote.classList.add('note');
// 	newNote.setAttribute('id', cardID);
// 	const newCategory = category.options[category.selectedIndex].text

// 	newNote.innerHTML = `<div class="note-header">
// 	<h3 class="note-title">${newCategory} #${cardID + 1}</h3>
// 	<button class="delete-note" onclick ="deleteNote(${cardID})">
// 		<i class="fas fa-times icon"></i>
// 	</button>
// 	</div>
// 	<div class="note-body">
// 	${textArea.value}
// 	</div>`;

// 	noteArea.appendChild(newNote);
// 	cardID++;
// 	textArea.value = ''
// 	notePanel.style.display = 'none';
// 	category.selectedIndex = 0;
// 	checkColor(newNote, newCategory)

// };

// const checkColor = (note, select) => {

// 	if(select === 'Praca'){
// 		note.style.backgroundColor = 'blue'
// 	} else if ( select === 'Inne'){
// 		note.style.backgroundColor = 'tomato'
// 	} else {
// 		note.style.backgroundColor = 'lime'
// 	}
// }

// const deleteNote = id => {
// 	const noteToDelete = document.getElementById(id)
// 	noteArea.removeChild(noteToDelete)
// }

// const deleteAllNotes = () => {
// 	noteArea.textContent = ''
// }

// addBtn.addEventListener('click', showPanel);
// cancelBtn.addEventListener('click', closePanel);
// saveBtn.addEventListener('click', addNote);
// deleteAll.addEventListener('click', deleteAllNotes)

// const currencyOne = document.querySelector('#currency-one');
// const currencyTwo = document.querySelector('#currency-two');

// const inputOne = document.querySelector('.amount-one');
// const inputTwo = document.querySelector('.amount-two');
// const infoRate = document.querySelector('.rate-info');
// const swapBtn = document.querySelector('.swap');

// const calculate = () => {
// 	fetch(`https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`)
// 		.then((res) => res.json())
// 		.then((data) => {

// 			const currency1 = currencyOne.value
// 			const currency2 = currencyTwo.value

// 			const rate = data.result
// 			infoRate.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`

// 			inputTwo.value = (inputOne.value * rate).toFixed(2)

// 		})
// };

// const swap = () => {

// 	const oldValue = currencyOne.value
// 	currencyOne.value = currencyTwo.value
// 	currencyTwo.value = oldValue

// 	calculate()
// }

// swapBtn.addEventListener('click',swap)

// calculate()

// currencyOne.addEventListener('change',calculate)
// currencyTwo.addEventListener('change',calculate)
// inputOne.addEventListener('keyup',calculate)

// PROJEKT 7

// const income = document.querySelector('.income-area');
// const expenses = document.querySelector('.expenses-area');
// const removeBtn = document.getElementsByClassName('.delete');

// const availabelMoney = document.querySelector('.available-money');
// const addTransactionBtn = document.querySelector('.add-transaction');
// const addTransactionPanel = document.querySelector('.add-transaction-panel');
// const removeAll = document.querySelector('.delete-all');
// const lightBtn = document.querySelector('.light');
// const darkBtn = document.querySelector('.dark');

// const nameInput = document.querySelector('#name');
// const amountInput = document.querySelector('#amount');
// const categorySelect = document.querySelector('#category');
// const saveBtn = document.querySelector('.save');
// const cancelBtn = document.querySelector('.cancel');

// let root = document.documentElement;
// let ID = 0;
// let categoryIcon;
// let selectedCategory;
// let moneyArr = [0];

// const showPanel = () => {
// 	addTransactionPanel.style.display = 'flex';
// };

// const closePanel = () => {
// 	addTransactionPanel.style.display = 'none';
// 	clearInputs();
// };

// const clearInputs = () => {
// 	nameInput.value = '';
// 	amountInput.value = '';
// 	categorySelect.selectedIndex = '0';
// };

// const checkForm = () => {
// 	if (
// 		nameInput.value !== '' &&
// 		amountInput.value !== '' &&
// 		categorySelect.value !== 'none'
// 	) {
// 		createNewTransaction();
// 	} else {
// 		alert('Uzupełnij wszystkie pola');
// 	}
// };

// const createNewTransaction = () => {
// 	const newTransaction = document.createElement('div');
// 	newTransaction.classList.add('.transaction');
// 	newTransaction.setAttribute('id', ID);

// 	checkCategory(selectedCategory);

// 	newTransaction.innerHTML = `
// 	<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
// 	<p class="transaction-amount">${amountInput.value}zł
// 	<button class="delete" onclick="deleteTransaction(${ID})"><i class="fas fa-times"></i></button></p> <hr>`;

// 	amountInput.value > 0
// 		? income.appendChild(newTransaction) &&
// 		  newTransaction.classList.add('income')
// 		: expenses.appendChild(newTransaction) &&
// 		  newTransaction.classList.add('expense');

// 	moneyArr.push(parseFloat(amountInput.value));

// 	countMoney(moneyArr);

// 	closePanel();
// 	ID++;
// 	clearInputs();
// };

// const selectCategory = () => {
// 	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text;
// };

// const checkCategory = (transaction) => {
// 	switch (transaction) {
// 		case '[ + ] Przychód':
// 			categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
// 			break;

// 		case '[ - ] Zakupy':
// 			categoryIcon = '<i class="fas fa-cart-arrow-down"></i> ';
// 			break;
// 		case '[ - ] Jedzenie':
// 			categoryIcon = '<i class="fas fa-hamburger"></i>';
// 			break;
// 		case '[ - ] Kino':
// 			categoryIcon = '<i class="fas fa-film"></i>';
// 			break;
// 	}
// };

// const countMoney = (money) => {
// 	const newMoney = money.reduce((a, b) => a + b);
// 	availabelMoney.textContent = `${newMoney} zł`;
// };

// const deleteTransaction = (id) => {
// 	const transactionToDelete = document.getElementById(id);
// 	const transactionAmount = parseFloat(
// 		transactionToDelete.childNodes[3].innerText
// 	);
// 	const indexOfTransaction = moneyArr.indexOf(transactionAmount);

// 	moneyArr.splice(indexOfTransaction, 1);
// 	countMoney(moneyArr);
// 	transactionToDelete.classList.contains('income')
// 		? income.removeChild(transactionToDelete)
// 		: expenses.removeChild(transactionToDelete);
// };

// const deleteAll = () => {
// 	income.innerHTML = ' <h3>Przychód:</h3>';
// 	expenses.innerHTML = ' <h3>Wydatki:</h3>';
// 	availabelMoney.textContent = '0';
// 	moneyArr = [0];
// };

// const changeStyleToLight = () => {
// 	root.style.setProperty('--first-color', '#f9f9f9');
// 	root.style.setProperty('--second-color', '#14161f');
// 	root.style.setProperty('--border-color', 'rgba(0, 0, 0, 0.2)');

// 	// --first-color: #f9f9f9;
// 	// --second-color: #14161f;
// 	// --border-color: rgba(0, 0, 0, 0.2);
// };

// const changeStyleToDark = () => {
// 	root.style.setProperty('--first-color', '#14161f');
// 	root.style.setProperty('--second-color', '#f9f9f9');
// 	root.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.4)');

// 	// --first-color: #f9f9f9;
// 	// --second-color: #14161f;
// 	// --border-color: rgba(0, 0, 0, 0.2);
// };

// addTransactionBtn.addEventListener('click', showPanel);
// cancelBtn.addEventListener('click', closePanel);
// saveBtn.addEventListener('click', checkForm);
// removeAll.addEventListener('click', deleteAll);
// lightBtn.addEventListener('click', changeStyleToLight);
// darkBtn.addEventListener('click', changeStyleToDark);

// PROJEKT 8

// const settings = document.querySelector('.settings');
// const settingBtn = document.querySelector('.settings-btn');

// const inputName = document.querySelector('#event-name');
// const inputDay = document.querySelector('#event-day');
// const inputMonth = document.querySelector('#event-month');
// const inputYear = document.querySelector('#event-year');
// const inputImg = document.querySelector('#event-img');
// const imgSection = document.querySelector('.image-section');

// const saveBtn = document.querySelector('.save');
// const title = document.querySelector('.event');

// const daysCount = document.querySelector('.days-count');
// const hoursCount = document.querySelector('.hours-count');
// const minutesCount = document.querySelector('.minutes-count');
// const secondsCount = document.querySelector('.seconds-count');

// let userTime;

// const setTime = () => {
// 	const currentTime = new Date();
// 	const result = userTime - currentTime;

// 	const days = Math.floor(result / 1000 / 60 / 60 / 24)
// 	const hours = Math.floor(result / 1000 / 60 / 60 ) % 24
// 	const minutes = Math.floor(result / 1000 / 60) % 60
// 	const seconds = Math.floor(result / 1000 ) % 60

// daysCount.textContent = days;
// hoursCount.textContent = hours;
// minutesCount.textContent = minutes;
// secondsCount.textContent = seconds;

// }

// const openSettings = () => {
// 	settings.classList.toggle('active');
// };
// const appUpdate = () => {
// 	title.textContent = `${inputName.value}`;
// 	userTime = new Date(
// 		`${inputYear.value} ${inputMonth.value} ${inputDay.value}`
// 	);
// 	imgSection.style.cssText = `background-image: url('${inputImg.value}');`;
// 	setTime();
// };

// settingBtn.addEventListener('click', openSettings);
// saveBtn.addEventListener('click', appUpdate);

// // appUpdate()
// setInterval(appUpdate,1000)

// const arr = [31.54, 25.44, 75.43]

// console.log(arr.reduce((total, amount) => {
//  return total + amount
// }));

// console.log(arr.reduce(total, amount, index, array) => {
// 	total = total + amount
// 	return total / array.length

// });

// projekt 10

// let $todoInput; // miejsce, gdzie użytkownik wpisuje treść
// let $alertInfo; // info o braku zadań / konieczności dodania tekstu
// let $addBtn; // przycisk ADD - dodaje nowe elementy do listy
// let $ulList; // nasza lista zadań, tagi <ul></ul>
// let $newTask; // nowo dodany LI, nowe zadanie
// let $allTasks; // lista wszystkich dodanych LI
// let $idNumber = 0; // ID dodawane do każdego nowego zadania
// let $popup; //pobrany popup
// let $popupInfo; // alert w popupie, jak się doda pusty tekst
// let $editedTodo; // edytowany Todo
// let $popupInput; //tekst wpisywany w inputa w popup'ie
// let $addPopupBtn; // przycisk "zatwierdź" w popup'ie
// let $closeTodoBtn; //przycisk od zamykania popup'a

// const main = () => {
// 	prepareDOMElements();
// 	prepareDOMEvents();
// };

// const prepareDOMElements = () => {
// 	$todoInput = document.querySelector('.todo-input');
// 	$alertInfo = document.querySelector('.alert-info');
// 	$addBtn = document.querySelector('.add-btn');
// 	$ulList = document.querySelector('.todo-list ul');
// 	$allTasks = document.getElementsByTagName('li');
// 	$popup = document.querySelector('.popup');
// 	$popupInfo = document.querySelector('.popup-info');
// 	$popupInput = document.querySelector('.popup-input');
// 	$addPopupBtn = document.querySelector('.accept');
// 	$closeTodoBtn = document.querySelector('.cancel');
// };
// const prepareDOMEvents = () => {
// 	$addBtn.addEventListener('click', checkInput);
// 	$ulList.addEventListener('click', checkClick);
//     $closeTodoBtn.addEventListener('click',cancelTodo)
//     $addPopupBtn.addEventListener('click',changeTodo)
// };

// const checkInput = () => {
// 	if ($todoInput.value !== '') {
// 		newTask();
// 	} else {
// 		$alertInfo.textContent = 'Wpisz treść zadania!';
// 	}
// };

// const newTask = () => {
// 	$idNumber++;
// 	$newTask = document.createElement('li');
// 	$newTask.setAttribute('id', `todo-${$idNumber}`);
// 	$newTask.innerHTML = `${$todoInput.value} <div class="tools">
//     <button class="complete"><i class="fas fa-check"></i></button>
//     <button class="edit">EDIT</button>
//     <button class="delete"><i class="fas fa-times"></i></button>
//     </div>`;
// 	$ulList.append($newTask);
// 	$todoInput.value = '';
// 	$alertInfo.textContent = '';
// };

// const checkClick = (e) => {
// 	console.log(e.target);
// 	//
// 	if (e.target.closest('button').classList.contains('edit')) {
// 		$popup.style.display = 'block';
//         editTask(e)

// 	} else if (e.target.closest('button').classList.contains('complete')) {
// 		e.target.closest('li').classList.toggle('completed');
// 		e.target.closest('button').classList.toggle('completed');
// 	} else if (e.target.closest('button').classList.contains('delete')) {
//         deleteTodo(e)
// 	}
// };

// const cancelTodo = () => {
//     $popup.style.display = 'none';
//     $popupInput.value = ''
// }

// const deleteTodo = (e) => {
//     const deleteTodo = e.target.closest('li')
//     deleteTodo.remove()

//     if($allTasks.length === 0){
//         $alertInfo.textContent = `Brak zadań na liscie`
//     }
// }
// const editTask = (e) => {
//     const oldTodo = e.target.closest('li').id
//     $editedTodo = document.getElementById(oldTodo)
//     $popupInput.value = $editedTodo.firstChild.textContent

// }

// const changeTodo = () => {
//     if( $popupInput.value !== ''){
//         $editedTodo.firstChild.textContent =  $popupInput.value
//         $popup.style.display = 'none';
//     }else {

//     }
// }

// document.addEventListener('DOMContentLoaded', main);
// let firstName = 'Daniel'
// const lastName = 'Hys'

// firstName = 'Krzysztof'
// console.log(firstName);

// let number = 108
// let number2 = number + 10

// console.log(number2);

// console.log(number *2);

// const arr = [1, 2, 3, 4]
// console.log(arr);

// let tittle = document.querySelector('h1')
// tittle.textContent = 'kurs'
// console.log(tittle);

// function test (x = 0, y = 0) {
//         let sum = x + y
//         console.log(sum);
// }

// test(5.5, 3)
// test(10,34)

//  let number1 = 40
//  let number2 = 108

//  test(number1, number2)

//  function test(num1,num2,num3 = 108) {
//         let result = num1 * num2 + num3
//         return result
//  }

//  let sum = 0

//  sum = test(3,4)

//  console.log(sum);

//  const test2 = x => x * x

//  let sum2 = 0
//  sum2 = test2(5)
//  console.log(sum2);

// let num = 5;
// console.log(num);

// let num2 = 10;

// function test() {
// 	let num3 = 15;
// 	console.log(num2);
// }

// test();

// console.log(num3);
// var imie = 'Daniel';

// if (imie == 'Daniel') {
// 	var wiek = 30;
// }
// console.log(wiek);

// const num2 = 3;

// function test() {
// 	var imie = 'daniel';

// 	if (imie == 'daniel') {
// 		const wiek = 30;
//                 var num3  = 5
// 		console.log(num2);
// 		console.log(wiek);
// 	}
// }

// test();

// const arr = [1, 2, 3]
// const arr2 = arr

// arr2[2] = 108

// console.log(arr);

// const osoba = {
//         name: "Daniel",
//         age: 28,
// }

// const osoba2 = osoba

// osoba2.age = 20

// console.log(osoba);

// let arr = ['ania', 'srania' ,'barbra']

// arr[1] = 'tomasz'

// let arr2 = arr

// arr2[2] = 'chuj'
// console.log(arr);

// let a = 'tomek'
// let b = a

// b = 'monika'

// console.log(b);

// let names = ['Ania', 'Paweł', 'Eliza', 'Daniel']

// names[1] = 'Radek'
// names[0] = 'Sandra'

// console.log(names);

// // destrukturyzacja tablic

// let [ sisName, broName, wifeName, myName] = names

// console.log(broName);

// let names = ['Monika', 'Kasia', 'Adam']
// let names2 = ['Robert', 'Bartek', 'Grzegorz']
// let name3 = []

// let arrayLength = names.push('Gienek')

// console.log(names);
// console.log(arrayLength);
// console.log(names.length);

// let joinM = names.join()
// console.log(joinM);

// let reverseM = names.reverse()
// console.log(reverseM);

// let sorM = names.sort()
// console.log(sorM);

// let concatM = names.concat(names2)
// console.log(concatM);
// console.log(names);

// let indexofM = names.indexOf('Kasia')
// console.log(names);
// console.log(indexofM);

// let namesMap = names.map((element, index) => element.toLocaleUpperCase() + ' to chuj' + '-' + index)

// console.log(namesMap);

// let filterM = names.filter(el => el.startsWith('A'))
// console.log(filterM);

// var person = {
//         name: 'Daniel',
//         height: 180,
//         print: function (){
//                 console.log('Mam na imię: ' + this.name);
//         },
//         printThis: function (){
//                 console.log(`Zaraz uruchomi sie wewnetrzna metoda this`);
//                 this.print()
//         }
// }
// person.weight = 100;
// person.printThis()

// person.name = 'Chuj'

// console.log(person);
// console.log(person['name']);

// person.print()
// console.log(person['name']);
// console.log(person['height']);

// ES5
// let person = {
// 	name: 'Daniel',
// 	height: 180,
// 	weight: 80,
// 	sex: 'male',
// 	showName: function () {
// 		console.log('To jest moje imię: ' + this.name);
// 	},
// };
// // ES6
// let person2 = {
// 	name: 'Eliza',
// 	height: 170,
// 	weight: 69,
// 	sex: 'female',
// 	// showName() {
// 	// 	console.log('To jest moje imię: ' + this.name);
// 	// },
// 	// iq: 100,
// };

// let {name, height, weight, sex } = person2;

// console.log(height);

// let imie = name;
// console.log(imie);

// console.log(person);
// person.showName();
// person2.showName();

// console.log(person['name']);
// console.log(person2['name']);

// person.weight = 85;
// person2.weight = 60;

// console.log(person);
// console.log(person2);

// console.log(person['sex']);
// console.log(person2['sex']);
// console.log(person.sex);
// console.log(person2.sex);

// person.showName();
// person['showName']();

// zadania 1
// let text = 'Akademia108';

// const switchText = (text) => {
// 	return text.split('').reverse().join("")
// };

// console.log(switchText(text));

// zadanie2

// const sortText = text => {
//      return   text.split('').sort().join('')
// }

// console.log(sortText('Akademia108'));

// class Person {
// 	constructor(name, lastname,) {
// 		this.name = name;
// 		this.lastname = lastname;
// 	}

//         showInfo(){
//                 console.log('Witam! Mam na imię ' + this.name + ' '+ this.lastname + ' i mam na wszystko wyjebane');
//         }
// }

// let person = new Person('Hans', 'Kowalski');

// let user1 = new Person ('Kaczy', 'Łeb')

// user1.showInfo()
// person.showInfo()
// console.log(person);

// class Line {
//         constructor(length = 0){
//                 this.length = length
//         }
//         setLength(length = 0) {
//                 this.length = length
//         }
// }
// let linia = new Line(108)

// class Rectangle extends Line {
//         constructor(width = 0, length = 0){

//                 super(length);
//                 this.width = width;

//         }
//         setWidth(width = 0 ){
//                 this.width = width
//         }
// }

// let prostokat  = new Rectangle (50, 100)

// linia.setLength(110)

// prostokat.setLength(200)
// prostokat.setWidth(100)

// console.log(linia);
// console.log(prostokat);

// class Cuboid extends Rectangle {
//         constructor(height = 0, length = 0, width = 0){

//                 super(length, width);
//                 this.height = height;

//         }

//         setHeight(height = 0){
//                 this.height = height

//         }
// }

// let prostopadloscian = new Cuboid(50, 100, 200)
// prostopadloscian.setLength(300)
// prostopadloscian.setHeight(200)
// prostopadloscian.setWidth(500)

// console.log(prostopadloscian);

// zadanie 3-suma-iloczyn

// let numbers = [1, 2, 3, 4, 5, 6];

// let sum = 0;
// let ilo = 1;

// for (let i = 0; i < numbers.length; i++) {
// 	sum += numbers[i];
// 	ilo *= numbers[i];
// }
// console.log(sum);
// console.log(ilo);

// let sum2 = 0;
// let ilo2 = 1;

// numbers.forEach(el => {
// 	sum2 += el;
// 	ilo2 *= el;
// });

// console.log(sum2);
// console.log(ilo2);

// const arr2 = [0, 1, 2, 3, 4, 5];

// let sum5 = 0;

// for (let i = 0; i < arr2.length; i++) {

// 	sum5 = sum5 + ( arr2[i]*arr2[i] );
// }

// console.log(sum5);

// let sum3 = 0;
// let sum4 = 0;

// arr2.forEach(el => {
//         sum3 = sum3 + (el * el)
// })
// console.log(sum3);

// zadanie fibo
// F0=0
// ,  dla n=0
// ,

// F1=1
// ,  dla n=1

// Fn=Fn−1+Fn−2
// ,  dla n>1

// let n = 0

// const test3 = (n) => {
//       n = (n - 1) + (n - 2)
// }

// console.log(test3(50));

// ES5
// function Line (length = 0) {
// 	this.length = length
// }

// Line.prototype.setLength = function (length = 0){
// 	this.length = length
// }

// let linia = new Line(10)
// console.log(linia);

// linia.setLength(50)
// console.log(linia);

// function Rectangle (width = 0, length = 0){
// 	Line.call(this, length)
// 	this.width = width
// }

// Rectangle.prototype = Object.create(Line.prototype)
// Rectangle.prototype.construktor = Rectangle

// Rectangle.prototype.setWidth = function (width = 0){
// 	this.width = width
// }

// let prostokat = new Rectangle( 50, 30)
// console.log(prostokat);

// function Cuboid (height = 0, width = 0, length = 0){

// 	Rectangle.call(this, width, length)
// 	this.height = height;
// }

// Cuboid.prototype = Object.create(Rectangle.prototype)
// Cuboid.prototype.construktor = Cuboid

// Cuboid.prototype.setHeight = function (height = 0){
// 	this.height = height
// }

// let szscian = new Cuboid (10,20,30)
// console.log(szscian);

// szscian.setHeight(500)
// szscian.setLength(1000)
// szscian.setWidth(2000)
// console.log(szscian);

// console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.round(108.4));

// let number = 108

// number += 2
// number %= 50

// console.log(number);

//  let one = 108
//  let two = '108'

// if(one !== two){
// console.log('Warunek został spełniony');
// }else{
// 	console.log('Warunek NIE został spełniony');
// }

// console.log((2 > 1) || (10 > 30));

// let number = (3 > 1) ? 108 : 200

// console.log(number);

// let miasta = 'warszawa'

// switch (miasta) {
// 	case 'szczecin':
// 		console.log('Wybrano Szczecin');
// 		break;
// 	case 'warszawa':
// 		console.log('Wybrano Warszawa');
// 		break;
// 	case 'katowice':
// 		console.log('Wybrano Katowice');
// 		break;

// 	default:
// 		console.log('Nie wybrano zadnego miasta...');
// 		break;
// }

// const arr2 = [0, 1, 2, 3, 4, 5];

// let sum = test(arr2)

// const test = (arr2) => {

// 	arr2.forEach( el => {

// 		sum += Math.pow(el,2)

// 	})
// }

// console.log(sum);

// let sum1 = 0;

// for (let i = 0; i < arr2.length; i++) {

// 	sum1 += ( arr2[i]*arr2[i] );
// }

// console.log(sum1);

// let sum2 = 0;

// arr2.forEach(el => {
//         sum2 += (el * el)
// })
// console.log(sum2);

// const fibo = (n) => {

//  let a = n - 2
//  let b = n - 1

// 	if (n == 1) {
// 		console.log(1);
// 	}else if (n == 2){
// 		console.log(1);
// 	}else if(n > 2){
// 		console.log(fib1 * (n-1) + fib1 * (n-2));
// 	}
// };

// fibo(8);

// let students = ['Ania', 'Kasia', 'Marek', 'Darek']

// for (let i = 0; i < students.length; i++) {
// 	const element = students[i];
// 	console.log(element);
// }

// let car = {
// 	marka: 'toyota',
// 	model: 'yaris',
// 	rocznik: '2000'

// }

// for (const key in car) {
// 	console.log(`Nazwa pola: ${key} wartosc pola: ${car[key]}`);
// }

// const arr = ['Tomek', 'Eliza', 'Daniel']

// for (const el of arr) {
// 	console.log(el);
// }

// arr.forEach((el, index) => {
// 	console.log(`Element z indexem ${index} ma wartość ${el}`);
// })

// let pass = null

// while (pass !== 'secret'){
// 	pass = prompt('Podaj hasło:')
// }

// alert('zalogowano :) mozesz zobaczyc tresc strony ')

// const arr = [];

// class Book {
// 	constructor(title, author, read) {
// 		this.title = title;
// 		this.author = author;
// 		this.read = read;
// 	}

// 	bookInfo() {
// 		if (this.read === true) {
// 			console.log(
// 				`Książka ma tytuł ${this.title} autorem jest ${this.author}, została przeczytana`
// 			);
// 		} else if (this.read === false) {
// 			console.log(
// 				`Książka ma tytuł ${this.title} autorem jest ${this.author}, NIE została przeczytana`
// 			);
// 		}
// 	}
// }

// const bookFirst = new Book('Wiedźmin', 'Andrzej Sapkowski', false);
// const bookSecond = new Book('Lalka', 'Bolesław Prus', false);
// const bookThird = new Book('Przedwiosnie', 'Stefan Żeromski', true);

// arr.push(bookFirst, bookSecond, bookThird);

// const readBooks = (arr) => {
// 	let sumBooks = 0;

// 	arr.forEach((el) => {
// 		if (el.read === true) {
// 			sumBooks++;
// 		}
// 	});

// 	bookFirst.bookInfo();
// 	bookSecond.bookInfo();
// 	bookThird.bookInfo();

// 	console.log(`Ilość przeczytanych ksiązek ${sumBooks}`);
// };

// readBooks(arr);

// const fibo = (n) => {
// 	let fib = 3

// 	if (n === 1) {
// 		console.log(1);
// 	} else if (n === 2) {
// 		console.log(1);
// 	} else if (n > 2) {
// 		console.log(fib = fib*(n - 2) + fib*(n - 1));
// 	}

// };

// fibo(10)

//  const fibo = (n) => {
// 	if(n === 1 || n === 2 ) {
// 		return 1
// 	}else {
// 		return fibo(n-2) + fibo(n-1)
// 	}
// 	 }

// console.log(fibo(10));

// let text = 'Akademia 108'
// let test = text.includes('a')
// console.log(test);

// const test = (a, b) => {
// 	let sum = 0;
// 	let newArr = a.toLowerCase().split('');

// 	newArr.forEach((el) => {
// 		if (el === b) {
// 			sum++;
// 		}
// 	});

// 	return sum;
// };

// console.log(test('Szkoła Programowania Akademia 108', 'a'));

// const test = (number) => (number % 2 === 0 ? true : false);

// console.log(test(21));
// console.log(test(30));
// console.log(test(55));

// const arr = [1, 2, 3, 108, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 108) {
// 		continue;
// 	}
// 	console.log(arr[i]);
// }

// for (const el of arr) {
// 	if (el === 108) {
// 		continue;
// 	}
// 	console.log(el);
// }

// let listaPracownikow = `{
// 	"employees": [
// 			{"firstName": "Hans", "lastName": "Schmidt"},
// 			{"firstName": "Jan", "lastName": "Nowak"},
// 			{"firstName": "Marek", "lastName": "Kowalski"}
// 	   ]
// 	}`

// console.log(listaPracownikow.employees[0].firstName);

// for (const pracownik of listaPracownikow.employees) {
// 	console.log(pracownik.firstName);
// }

// console.log(JSON.stringify(listaPracownikow));

// console.log(listaPracownikow);
// console.log(JSON.parse(listaPracownikow));
// const arr2 = [0, 1, 2, 3, 4, 5];

// const test = (arr2) => {
// 	let sum = 0;

// 	arr2.forEach((el) => {
// 		sum += Math.pow(el, 2);
// 	});
// 	return sum;
// };

// console.log(test(arr2));

// const test2 = (arr2) => {
// 	let sum2 = 0;

// 	for (let i = 0; i < arr2.length; i++) {
// 		sum2 += arr2[i] * arr2[i];
// 	}
// 	return sum2;
// };

// console.log(test2(arr2));

// let numbers = [1, 2, 3, 4, 5, 6];

// const test = (numbers) => {
// 	let sum = 0;
// 	let ilo = 1;

// 	for (let i = 0; i < numbers.length; i++) {
// 		sum += numbers[i];
// 		ilo *= numbers[i];
// 	}
// 	console.log(sum);
// 	console.log(ilo);
// };
// test(numbers);

// const test2 = (numbers) => {
// 	let sum2 = 0;
// 	let ilo2 = 1;

// 	numbers.forEach( el => {
// 		sum2 += el;
// 		ilo2 *= el;
// 	});
// 	console.log(sum2);
// 	console.log(ilo2);
// };

// test2(numbers)
// let jsonWorkers = {
// 	pracownicy: [
// 		{ firstName: 'Krystian', lastName: 'Dziopa' },
// 		{ firstName: 'Anna', lastName: 'Szapiel' },
// 		{ firstName: 'Piotr', lastName: 'Żmuda' },
// 	],

// };

// console.log(jsonWorkers);

// jsonWorkers.pracownicy.forEach(el => {
// 	console.log(`Imię pracownika: ${el.firstName} nazwisko: ${el.lastName}, numer indexu: ${jsonWorkers.pracownicy.indexOf(el)}`);
// });

// function test (num1, num2, num3) {
// 	let result = num1 * num2 * num3

// 	return result
// }

// let result2 = test(2, 3, 4)
// console.log(result2);

// const test2 = (num1, num2, num3) => num1 * num2 * num3

// let result3 = test2(2, 3, 4)
// console.log(result3);

// const test = (x, y) => {
// 	let sum = 1
// 	for (let i = 0; i < y; i++) {
// 		sum *= x;
// 	}
// 	return sum;
// };
// console.log(test(4,2));

// const arr =  [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1]

// const sortArr = (a,b) => {
// 	return a - b
// }

// arr.sort(sortArr)
// console.log(arr);
// let number = 108

// console.log(document.location);

// console.log(`Wysokosc przegladarki ${window.innerHeight}`);
// console.log(`Szerokosc przegladarki ${window.innerWidth}`);
// console.log(`zewnetrzna szerkosc ${window.outerHeight}`);
// let number = 2
// console.log(document);
// console.log(window);

// const article = document.getElementById('articles')

// console.log(article);

// const p = document.querySelector('.content')
// console.log(p);

// const paragraphs = document.getElementsByClassName('content')
// console.log(paragraphs[1]);

// const par = document.getElementsByTagName('p')
// console.log(par);

// const paragraphs2 = document.querySelectorAll('p')
// console.log(paragraphs2);

// let node = document
// let node2 = document
// node = document.documentElement
// node = document.head
// node = document.body
// node = document.getElementById("articles")

// console.log(document.getElementById('articles').childNodes);

// node = document.getElementById('articles').childNodes[3].attributes[0]

// console.log(document.getElementsByClassName('content')[0].innerHTML);
// node = document.getElementsByClassName('content')[0].childNodes[0]
// node2 = document.getElementsByClassName('content')[0].textContent

//  node = document.getElementById('articles').childNodes[1]
// console.log(node2);
// console.log(node);

// let node = document.getElementById('list').children[2].textContent = 'chuje'

// console.log(node.childNodes);
// console.log(node.children);
// let list = document.getElementById('list')

// console.log(list);
// console.log(list.childNodes);
// console.log(list.children);

// console.log(list.firstChild);
// console.log(list.firstElementChild);
// console.log(list.lastChild);
// console.log(list.lastElementChild);

// let firstElementChild = list.firstElementChild
// let lastElementChild = list.lastElementChild

// console.log(firstElementChild);
// console.log(lastElementChild);
// console.log(firstElementChild.childNodes);

// console.log(firstElementChild.parentElement);
// console.log(firstElementChild.parentNode);
// console.log(lastElementChild.parentElement);
// console.log(lastElementChild.parentNode);

// console.log(firstElementChild.nextSibling);
// console.log(firstElementChild.nextElementSibling);

// console.log(lastElementChild.previousSibling);
// console.log(lastElementChild.previousElementSibling);
// console.log(lastElementChild.childNodes);

// console.log(lastElementChild.hasChildNodes());
// console.log(list.hasAttributes());

// let liEl = document.createElement('li')
// let txtNode = document.createTextNode('Seventh (7)')
// let attributeNode = document.createAttribute('class')
// attributeNode.value = 'last'

// liEl.appendChild(txtNode)
// liEl.setAttributeNode(attributeNode)

// let ulList = document.getElementById('list')

// console.log(liEl);
// console.log(txtNode);
// console.log(attributeNode);

// ulList.appendChild(liEl)

// let exTree = new DocumentFragment()
//  exTree.appendChild(liEl)

//  ulList.appendChild(exTree)

// console.log(exTree);

// ulList.insertBefore(liEl, ulList.firstElementChild)
// ulList.replaceChild(liEl, ulList.firstElementChild)

// let list = document.getElementById('list')
// let att = document.createAttribute('class')
// att.textContent = 'dupa'
// list.setAttributeNode(att)

// // list.removeAttribute('class')
// console.log(list.childNodes);

// list.lastElementChild.remove()
// list.removeChild(list.childNodes[7])

// console.log(list);

// let list = document.getElementById('list')
// let liEl = document.querySelector('li')

// console.log(list.childNodes);

// console.log(liEl.innerText);
// // list.childNodes[7].innerText = 'chuje'

// console.log(liEl.innerHTML);
// console.log(liEl.outerHTML);

// let title = document.querySelector('h1')
// console.log(title.childNodes);

// console.log(title.innerText);
// console.log(title.textContent);
// console.log(title.innerHTML);
// console.log(title.outerHTML);

// title.setAttribute('class','heading')

// console.log(title);
// console.dir(title);

// console.log(title.childNodes);

// let list = document.getElementById('list')
// let firstEl = list.firstElementChild
// console.log(list.childNodes);

// firstEl.setAttribute("class","first_element")

// firstEl.className = firstEl.className + ' box'

// console.log(firstEl);
// console.log(firstEl.className);
// let thirdElement = list.childNodes[7]

// thirdElement.style.color = 'red'
// thirdElement.style.fontSize = '40px'
// thirdElement.style.fontWeight = 'bold'

// let btn = document.querySelector('button')

// const btnEvent = () => {
//         console.log('SUmujemy wszystko');
// }

// // btn.onclick = btnEvent

// btn.addEventListener('click',btnEvent)

// btn.addEventListener('click',(e) => {
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.outerHTML);
//         console.log(e.type);
// })
// btn.addEventListener('dblclick',(e) => {
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.outerHTML);
//         console.log(e.type);
// })

// let cities = [
// 	'Warsaw',
// 	'Berlin',
// 	'Paris',
// 	'London',
// 	'New York',
// 	'Tokio',
// 	'Moscow',
// ];

// let list = document.querySelector('.task');

// const newList = (arr) => {
// 	let oList = document.createElement('ol');
// 	list.appendChild(oList);

// 	arr.forEach((el) => {
// 		let liList = document.createElement('li');
// 		liList.textContent = el;
// 		liList.setAttribute('class', 'city');
// 		oList.appendChild(liList);
// 	});

// };

// newList(cities);

// const btn = document.querySelector('button');
// const ul = document.querySelector('#items');
// let number = 3;

// const test = () => {
// 	let li = document.createElement('li');
// 	li.setAttribute('class', 'item');
// 	number++;
// 	li.textContent = `Item ${number}`;
// 	ul.appendChild(li);
// };

// btn.addEventListener('click', test);

// const show = (e) => {
// 	console.log(e);
// 	console.log(e.target);
// 	console.log(e.target.outerHTML);
// 	console.log(e.type);
// 	console.log(this.show);
// };

// const btn = document.querySelector('.one');

// btn.addEventListener('click', show);

// const link = document.querySelector('a');

// link.addEventListener('click', (e) => {
// 	e.preventDefault();
// 	console.log(`Event action stoped`);
// });

// const btn2 = document.querySelectorAll('.btn');
// const div = document.querySelector('.user')
// console.log(btn2);
// console.log(div);

// for(let btn of btn2){
//         btn.addEventListener('click', (e) =>{
//                 alert('Alert z BTN')
//                e.stopPropagation()

//         })
// }

// div.addEventListener('click', () => {
//         alert('div')
// })

// console.log($);
// $('h1').css('color', 'red').hide(1000).show(3000)
// $(document).ready(function () {
// const section = $('#about');
// console.log(section);

// const listItems = $('.list-item')
// console.log(listItems);

// const li = $('.list-item').eq(4)
// console.log(li);

// const p = $('p')
// console.log(p);

// const pFirst = $('p').first()
// console.log(pFirst);

// const pLast = $('p').last()
// console.log(pLast);

// const pAll = $('p').not('.description')
// console.log(pAll);

// const linksParents = $('a').parent()
// console.log(linksParents);

// const lichild = $('p').children()
// console.log(lichild);

// const pPrev = $('.content-first').prev()
// console.log(pPrev);

// 	const newLi = $('<li class="list-item">New item</li>');
// 	console.log(newLi);
//         $('ul').prepend(newLi)
//         $('ul').append('<li class="list-item">Last item</li>')

//         // $('h2').empty()
//         let titleValue = $('section').attr('id')
//         console.log(titleValue);
//         $('section').removeAttr('id')
//         $('p').css('color','tomato')
//         $('a').css({
//                 'text-transform': 'uppercase',
//                 'color': 'gold',
//                 'font-size': '40px'
//         })
//         $('h2').text('New title')

//         $(newLi).html('chuje móje dziekie <span>węże</span>')
//         $('span').css({
//                 'color': 'lime',
//                 'font-size': '25px'

//         })

//         $('li').css({
//                 'margin-left': '100px'
//         })

//         $('li').each(function(index){
//                 $(this).css('margin-left', index * 10 + 'px')
//         })

//        $('.btn-c').click(function(){
//         $('.list-item').toggleClass('gold')

//        })
// })

// const test = () => {
//         let httpReq = new XMLHttpRequest();
// // console.log(httpReq);

// httpReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
// // console.log(httpReq.readyState);

// httpReq.onreadystatechange = () => {
// 	if (httpReq.readyState === 4) {
// 		// console.log('połąćzono');

// 		if (httpReq.status === 200) {
// 			// console.log('wszystko dziła');
//                         let data = httpReq.responseText;
//                         let dataJSON = JSON.parse(data)

//                         console.log(dataJSON.email);
//                         // console.log(dataJSON);
//                         // console.log(data);
// 		}
// 	}
// };

// httpReq.send();

// }

// setInterval(test,1000)

// setInterval(() => {
// fetch('https://jsonplaceholder.typicode.com/users/1')
// 		.then((response) => response.json())
// 		.then((data) => {
// 			console.log(data);
// 			console.log(data.name);
// 			console.log(data.email);
// 		});
// }, 2000);
// $(document).ready(function(){
//         $.get('https://jsonplaceholder.typicode.com/users/1',function(data){
//                 console.log(data);
//                 console.log(data.email);
//         })

//         $.getJSON('https://jsonplaceholder.typicode.com/users/1',function(data){
//                 console.log(data);
//                 console.log(data.email);})

//         $.getJSON('https://jsonplaceholder.typicode.com/users/1')
//         .done(function(data){
//         console.log(data);
//         console.log(data.id);
//         console.log(data.email);

//         }).fail(function(error){
//                 console.log(error);
//         })
// })

// fetch('https://danepubliczne.imgw.pl/api/data/synop')
// 	.then((res) => res.json())
// 	.then((info) => {

// 		const container = document.querySelector('.container');

// 		info.forEach((el) => {
// 			// console.log(el.stacja);
// 			const item = document.createElement('div');
// 			item.setAttribute('class', 'item');
// 			container.appendChild(item);

// 			const city = document.createElement('h3')
// 			city.setAttribute('class','city')
// 			city.textContent = `${el.stacja}`

// 			const temp = document.createElement('p')
// 			temp.setAttribute('class','temp')
// 			temp.textContent = `Temperatura: ${el.temperatura}°`

// 			const hum = document.createElement('p')
// 			hum.setAttribute('class','hum')
// 			hum.textContent = `Wilgotność względna: ${el.wilgotnosc_wzgledna}%`

// 			const press = document.createElement('p')
// 			press.setAttribute('class','press')
// 			press.textContent = `Ciśnienie: ${el.cisnienie} hPa`

// 			item.append(city, temp, hum, press);
// 		});
// 	});
const myCarouselElement = document.querySelector('#carouselExampleCaptions');
console.log(myCarouselElement);
const carousel = new bootstrap.Carousel(myCarouselElement, {
	interval: 500,
	touch: false,
});
