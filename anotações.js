/*Stephen Grinder JS ES6*/

/*Arrays Helper: */
/*1)forEach: intera sobre cada valor podendo transformar */
	var colors = ['red', 'blue', 'green'];
	colors.forEach(function(color){
		console.log(color);
	});

/*2)map(mudar valores): retorna um novo Array com os valores processados*/
	var numbers = [1,2,3];
	var doubledNumberArray = numbers.map(function(number){
		return number * 2;
	});

/*3)filter(Escolher): retorna novo Array com os elementos que passaram no filtro*/
	var products = [
		{name: 'cucmber', type: 'vegetable'},
		{name: 'banana', type: 'fruit'},
		{name: 'celery', type: 'vegetable'},
		{name: 'orange', type: 'fruit'}
	];
	products.filter(function(product){
		return product.type === 'fruit'; //deve retornar true ou false
	});

/*4)find: procura no array e retorna a primeira acorrência*/
	var users = [
		{name: 'Jill'},
		{name: 'Alex'},
		{name: 'Bill'}
	];

	users.find(function(user){
		return user.name === 'Alex'; //deve retornar true ou false
	});

/*5)every | some: 
	*every: todo elemento deve passar na condição: retorna true
	*some: pelo menos um deve passar na condição: retorna true*/

	computers = [
		{name: 'Apple', ram: 20},
		{name: 'IBM', ram: 4},
		{name: 'HP', ram: 30}
	]

	computers.every(function(comp){
		return comp.ram > 16;
	});

	computers.some(function(comp){
		return comp.ram > 16
	});

/*6)reduce: usado para reduzir o array para 1 elemento(pode ser array)*/
	var numbers = [10,20,30];
	numbers.reduce(function(sum, number){
		return sum+number;
	},0); 

	/*array.reduce(function(previous, elemento){
		retorno será o previous da prox. iteração;
	}, valor_inicial)*/


/*Arrow Function*/
/*implicit return(qdo tem apenas 1 expressão de retorno n precisa do return:*/
	const add = (a,b) => a+b;
/*normal return:*/
	const add = (a,b) => {
		return a+b;
	}
/*single argument(pode omitir os parenteses):*/
	const double = number => 2*number;
/*no argument(precisa dos parenteses)*/
	const double = () => 'no args';
/***solcionando problema com contexto 'this'
relacionando o 'this' com o contexto que o envolve***/
	const team = {
		members: ['Jane', 'John'],
		teamName: 'Super Squad',
		temName: function() {
			return this.teamName;
		},
		/*Não funciona por causa do this===undefinied
	    teamSummary: function() {
	      return this.members.map(function(member){
	        return this.teamName + member;
	      });
	    }*/
	    teamSummary: function() {
	      return this.members.map((member) => {
	        return this.teamName + member;
	    });
	}
/*Podemos simplificar a declaração de literais em objetos:*/
const createInventory = function(inventory) {
	inventory, // inventory: inventory
	getPrice(itemName) { //getPrice: function(item) { ...
		return this.inventory.find(item => item.name === itemName).price
	}
	}
}
/*Default Funcion argument*/
function makeAjaxRequest(url, method = 'GET') {
	return method;
}
makeAjaxRequest('google.com', undefinied);
makeAjaxRequest('google.com', null); //null qdo passado não é definido o valor default
makeAjaxRequest('google.com', 'POST');

/*Qtd de argumentos variado*/
function addNumbers(...numbers) {}

/*Spread operator*/
let numbers = [1,2,3];
let allnumbers = [0, ...numbers, 5,6,7];

/*Destructuring properties(retira os atributos)*/
var expense = {
	type: 'Business',
	amount: '45 USD'
}
//ES5
var type = expense.type;
var amount = expense.amount;
//ES6
const { type } = expense;
const { amount } = expense;
//ou
const {type, amount} = expense;
function summary({type, expense}) {
	return `${type} and the expense is ${expense}`;
}
/*Destructuring elements(retira os elementos)*/
const companies = ['Google', 'Facebook', 'Ubser'];
const [name1, name2, name3] = companies;
//OU usando spread operator
const [name1, ...rest ] = companies;

function double2(arr) {
		if (Array.isArray(arr)){ 
      const [el, ...els] = arr;                  
      if (els && els.length > 0) {                
        return [el*2, ...double(els)];
      } else {        
        return [el*2];
			}
    }
}

function a([ first, ...rest ]) {
    return rest.length > 0 ? [ first*2, ...a(rest)] : [ first*2 ];
}

/*Class*/
class Car {
	constructor({title}) {
		this.title = title;
	}

	drive() {
		return 'vroom';
	}
}
class Toyota extends Car {
	constructor({color}) {
		super('Toyota');
		this.color = color;
	}
	honk() {
		return 'beep';
	}
}

const car  = new Car({title: 'Toyota'});
const toyota = new Toyota({color: 'red'});

/*LOOP*/
const colors = ['red', 'white', 'greeen'];
for (let color of colors){

}

/*GENERATORS: usado para loops */
function* numbers() {
	yield;
}
function* numbers() {}
const gen = numbers();
gen.next();

// Exemplo *********************
function* colors() {
	yield 'red';
	yield 'blue';
	yield 'green';
}

gen.next(); {"value":"red", "done":false}
gen.next(); {"value":"blue", "done":false}
gen.next(); {"value":"grenn", "done":false}
gen.next(); {"done":true}

const myColors = [];
for (let color of colors()) {
	myColors.push(color);
}
myColors;

// Exemplo 2 *********************
const testingTeam = {
	lead: 'Amanda',
	tester: 'Bill',
	//[Symbol.iterator] é uma key que diz como iterar sobre esse objeto
	[Symbol.iterator]: function* () {
		yield this.lead;
		yield this.tester;
	}
}

const engineeringTeam = {

	testingTeam,
	size: 3,
	department: 'Engineering',
	lead: 'Jill',
	manager: 'Alex',
	engineer: 'Dave',
	[Symbol.iterator]: function* () {
		yield team.lead;
		yield team.manager;
		yield team.engineer;	
		yield* team.testingTeam;
	}
}

// function* TeamIterator(team) {
// 	yield team.lead;
// 	yield team.manager;
// 	yield team.engineer;
// 	// const testingTeamGenerator = TestingTeamInterator(team.testingTeam);
// 	// yield* testingTeamGenerator;
// 	yield* team.testingTeam;
// }

// funcion* TestingTeamInterator(team) {
// 	yield team.lead;
// 	yield team.tester;
// }

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
	names.push(name);
}

const names = [];
for (let name of engineeringTeam) {
	names.push(name);
}

// Exemplo Trees *********************
class Comment {
	constructor(content, children) {
		this.content =content;
		this.children = children;
	}

	*[Symbol.iterator]() {
		yield this.content;
		for (let child of this.children) {
			yield* child;
		}
	}
}

const children = [
	new Commnet('good commnet', []),
	new Commnet('bad commnet', []),
	new Commnet('meh', [])
]

const tree = new Commnet('Great post!', children);

const values = [];
for (let value of tree) {
	values.push(value);
}
values;

/* Promises */
//3 estados: unresolved, resolved, rejected
//os 2 argumentos mudam o estado do promise de unresolved(pending) para resolve ou reject
//pending -> resolved -> then
//pending -> rejected -> catch
let promise = new Promise((resolve, reject) => {
	reject();
	resolve();
});
promise
	.then(() => console.log('finally resolved!'))
	.then(() => console.log('i was also ran!!'))
	.catch(() => console.log('error|'));

