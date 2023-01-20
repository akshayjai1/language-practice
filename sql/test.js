var name = 'Rohit';

function printC() {
  console.log(name);
  console.log(name1);
}
function printA() {
	const hand = () {

  }
  setTimeout(printC, 0);
  var name1 = 'Akshay';
  printC();
}
function printB() {
  printA();
  console.log(name);
}

printB();
console.log(name);

----------
var name = 'Rohit';

var person1 = {
  name: 'Raj'
}
var person = {
  name: 'Akshay',
  print: function() {
    console.log(name);
    console.log(this.name); // Raj // this = person1
  }
};

var c = person.print;
c()

