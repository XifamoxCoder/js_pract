// Всплывающие окна
//######################################################

// alert("пися");

// var data = confirm("Вы покакали?"); // Отмена ок
// if(data) {
//   alert("Вы молодец");
// }

// var data = prompt("Сколько вам лет?", 20);
// console.log(data);

// var person = null;
// if(confirm("Вы точно уверены?")) {
//   person = prompt("Ваше имя?")
//   alert("Привет, " + person)
// } else {
//   alert("Вы отменили")
// }

// Функции
//######################################################

// function info(word) {
//   console.log(word + "!");
// }

// function summa(a, b) {
//   var res = a + b;
//   console.log(res);
// }

// summa(3, 7);

// function summa(arr) {
// var sum = 0;

//   for(var i = 0; i < arr.lenght; i++)
//     sum += arr[i];

//     return sum;

// }
// var array = [1, 4 ,4];

// summa(array);

// var num = 10;

// function info() {
//   console.log(num);
// }
// info();

// События и обработчик
//######################################################

// var counter = 0;

// function onClickButton(el) {
//   counter++;
//   el.innerHTML = "Вы нажали на кнопку:" + counter;
//   // el.style.background = "red";
//   // el.style.color = "blue";

//   el.style.cssText = "border-radius: 5px; border: 0; font-size: 12px;";
// }

// function onInput() {
//   if(el.value == "Hello")
//     alert("И тебе привет")
//   console.log(el.value);
// }

// Управления HTML
//######################################################

// var text = document.getElementById('text');
// text.title = "New text";
// console.log(text.id);

// text.style.color = "red";
// text.style.backgroundColor = "red";

// text.innerHTML = "New<br>string";

// // document.getElementById('text').style.color = "white";

// // var spans = document.getElementsByTagName('span');

// var spans = document.getElementsByClassName('simple-text');

// for(var i = 0; i < spans.length; i++) {
//   console.log(spans[i].innerHTML);
// }

// document.getElementById('main-form').addEventListener("submit", checkForm);

// function checkForm(event) {
//   event.preventDefault();
//   var el = document.getElementById('main-form');

//   var name = el.name.value;
//   var pass = el.pass.value;
//   var repass = el.repass.value;
//   var state = el.state.value;

//   var fail = ""

//   if(name == "" || pass == "" || state == "")
//     fail = "Заполните все поля";
//   else if(name.length <= 1 || name.length > 50)
//     fail = "Введите корректное имя";
//   else if(pass != repass)
//     fail = "Пароли должны совпадать";
//   else if(pass.split("&").length > 1)
//     fail = "Некорректный пароль";

//   if(fail != "") {
//     document.getElementsById('error').innerHTML = fail;

//   } else {
//     alert("все гуд")
//     window.location = 'https://google.com';
//   }

// }

// Таймеры
//######################################################

//  var id = setInterval(my_func, 1000);

//  var counter = 0;
//  function my_func() {
//    counter++;
//    if(counter == 3)
//     clearInterval(id)
//  }

// setInterval(function(){
//   counter++;
// }, 1500);

// setTimeout(function() {
//   console.log('yes')
// }, 2000);

// Обьекты
//######################################################
// var date = new Date();

// date.getFullYear - getMonth - getSeconds...

// var arr = [5, 7, 8, 9]
// console.log('arr.join("+")')
// console.log('arr.sort()') //reverse

// class Person {
//   constructor(name, age, happiness) {
//     this.name = name;
//     this.age = age;
//     this.happiness = happiness;
//   }
//   info() {
//     console.log("Человек: " + this.name + ". Возраст: " + this.age);
//   }
// }

// var alex = new Person('Alex', 45, true);
// console.log(alex.name);

// alex.info();

//Асинхроность
// ####################################################

//  const timeout = setTimeout(() => {
//  	console.log('After timeout')
//  }, 2500)

//  const delay = (callback, wait = 1000) => {
//  	setTimeout(callback, wait)
//  }

//  delay(() => {
//  	console.log('After 2 seconds')
//  }, 2000)

// const delay = (wait = 1000) => {
// 	const promise = new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve()
// 		}, wait)
// 	})
// 	return promise
// }

// delay(2500)

//Работа с DOM
// ####################################################

const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
const heading2 = document.querySelector('h2')

const h2List = document.querySelectorAll('h2')
const heading3 = h2List[h2List.length - 1]

setTimeout(() => {
	addStylesTo(heading, 'JS', 'yellow')
}, 1500)

setTimeout(() => {
	addStylesTo(heading3, 'Pract')
}, 2000)

const link = heading2.querySelector('a')
link.addEventListener('click', (event) => {
	event.preventDefault()
	const url = event.target.getAttribytes('href')

	window.location = url
})

setTimeout(() => {
	addStylesTo(link, 'Test', 'blue', '2rem')
}, 3000)

function addStylesTo(node, text, color = 'red', fontSize) {
	node.textContent = text
	node.style.color = color
	node.style.textAlign = 'center'
	node.style.backgroundColor = 'black'
	node.style.padding = '2rem'
	node.style.display = 'block'
	node.style.width = '100%'
	if (fontSize) {
		node.style.fontSize = fontSize
	}
}

heading.onclick = () => {
	if (heading.style.color === 'red') {
		heading.style.color = '#000'
		heading.style.backgroundColor = '#fff'
	} else {
		heading.style.color = 'red'
		heading.style.backgroundColor = '#000'
	}
}

heading2.addEventListener('dblclick', () => {
	if (heading2.style.color === 'yellow') {
		heading2.style.color = '#000'
		heading2.style.backgroundColor = '#fff'
	} else {
		heading2.style.color = 'yellow'
		heading2.style.backgroundColor = '#000'
	}
})
