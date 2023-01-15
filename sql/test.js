
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

---

function utils() {
  console.log('do something');
} - 1
function Com() {
  	const [state, setState] = useState();
  	const fn = useC(utils, [state]); // utils - 1
		context.Provider value ={s,ss}


  useQ((){

              })

    qc = useQueryClient();

  	return (
      	<Child fn={fn} />
    )
}
  function useC(f,a){
  	const d = useMemo(() => {
      return () => f
    }, a);
  	return d;
	}