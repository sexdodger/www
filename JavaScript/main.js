//  document.write("Hello World!");
// обичний вивод на начало
// console.log("JavaScript is working!!!!!");
//console.info("JavaScript is working!!!!!");
//  вивод в консоль
console.error("JavaScript is working!!!!!");
// вивод в консоль з ошибкою
console.warn("JavaScript is working!!!!!");
// вивод в консоль з попередженням
var num = 10;
// створення перемінної
console.log(num);
// вивод в консоль перемінної
const a = 111;
// створенння константи (не можна змінити в подальшому)

// math - модуль для поглибленних матем дій
if (num == 12) {

} else if (num > 10 && num == 11) {

}
 else {

}
// switch (num) {
  //case (num == 1): conlose.log()

  //  break;
  //default: document.write(); -(else)
//}
var array = [5, 1, 2, 4, 12];
console.log(array);
console.log(array[0]);
//console.log(array.length)
// for var i = 1; i < 10; i++{

//do {
    //console.log()
//} while()
 //alert("Вас турбує кіберполіція України");
  //var  answer = confirm("Вам є 18 років?");
//  prompt("Укажіть данні своєї карти");
  function smth() {
    var sum = 0;
    return summa;
  }

  // smth() - викликаємо нашу функцію
  // onclick - атрибут для результати нажаття на кнопку
  //ondblClick - атрибут для результати нажаття на
  //кнопку при двойному нажатті
  // onmouseover - відкриття при наведенні мишки
  // onmouseout - відкриття при забиранні курсора
  var text = document.getElementById('text');
  console.log(text.id); // обов'язково ід через крапку виводить ид елемента !
  text.style.color = 'red';
  text.innerHTML = "New<br>string";
  document.getElementById('text').style.color = "blue";
  var h2s = document.getElementsByTagName('h2');
  for(var i = 0; i < h2s.length; i++) {
    console.log(h2s[i].innerHTML);
  }
  //document.getElementsByClassName('className') - зробити масив з усіх
  // елементів певного класу

function checkForm(event) {
  var el = document.getElementById("main-form");
  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var sex = el.state.value;
  //var name = document.getElementById('name').value;
  console.log(sex);
  return false;
}
document.getElementById("main-form").addEventListener("submit", checkForm);
let number = 10;
let man = {
  name: "Jonh",
  age: 15,
  virgin: true,
};
console.log(man.name);
//const as = +prompt("Hi", "");
 //console.log(as + 1);
// typeof - оператор для визначення типу данних
// interpolation
const playername = prompt("Enter your nickname", "");
console.log(`https://faceitstats.com/player/${playername}`);
// && - амперсанти для перевірки декількох умов ( всі умови мають бути правильними)
let check = true;
console.log(man.virgin && check);
// != - знак нерівності
// !check - зміна тру або фолс на протилежне
// === - перевірка не тільки за значенням а й за типом данних
console.log("fafafafaf");
let nameeee;
let agagaggaagag;
const asd = 11;
