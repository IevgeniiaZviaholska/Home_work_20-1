let todo1 = { title: "Сходить в магазин", completed: false };
let todo2 = { title: "Встретить друга", completed: true };
let todo3 = { title: "Позвонить маме", completed: false };


// let user1 = {
//   skills: ["html", "css", "js", "wordpress", "react"],
//   name: "Иван",
//   age: 16,
//   weight: 80,
//   height: 184,
//   address: {
//     city: "Харьков",
//     street: "Шевченко",
//     house: 65
//   },
//   online_status: true
// };

// let user2 = {
//   skills: ["html", "css", "js", "wordpress", "react"],
//   name: "Петя",
//   age: 22,
//   weight: 76,
//   height: 182,
//   address: {
//     city: "Харьков",
//     street: "ул. Шевченко",
//     house: 65
//   },
//   online_status: false
// };

// let user3 = {
//   skills: ["html", "css", "js", "wordpress", "react"],
//   name: "Иван",
//   age: 40,
//   weight: 80,
//   height: 184,
//   address: {
//     city: "Харьков",
//     street: "ул. Шевченко",
//     house: 65
//   },
//   online_status: false
// };

let users = [{
	skills: ["html", "css", "js", "wordpress", "react"],
	name: "Иван",
	age: 40,
	weight: 80,
	height: 184,
	address: {
		city: "Харьков",
		street: "ул. Шевченко",
		house: 65
	},
	online_status: false
}, {
	skills: ["html", "css", "js", "wordpress", "react"],
	name: "Петя",
	age: 22,
	weight: 76,
	height: 182,
	address: {
		city: "Харьков",
		street: "ул. Шевченко",
		house: 65
	},
	online_status: false
}, {
	skills: ["html", "css", "js", "wordpress", "react"],
	name: "Иван",
	age: 40,
	weight: 80,
	height: 184,
	address: {
		city: "Харьков",
		street: "ул. Шевченко",
		house: 65
	},
	online_status: false
}];
const title = "title";


console.log(users);
// console.log(todo1[title]);
// console.log(todos[0].title);
// console.log(users[2].address.city);

// console.log(users[1].skills[4]);
// console.log(users[1].skills.length - 1);

// const user = users[0];

// const lastSkill = user.skills.length - 1
// console.log(user.skills[lastSkill])

// // (23 + 22 + 40) / 3

// console.log(users[0].age)
// console.log(users[1].age)
// console.log(users[2].age)

// console.log((users[0].age+users[1].age+users[2].age)/users.length)


// let userAge1 = users[0].age
// let userAge2 = users[1].age
// let userAge3 = users[2].age
// ......
// let userAge100 = users[1000].age

// let oldestUserAge = userAge1
// console.log(userAge1 > userAge2)
// console.log(userAge1 > userAge3)

// if (oldestUserAge < userAge2) {
//   oldestUserAge = userAge2
// }

// if (oldestUserAge < userAge3 ) {
//   oldestUserAge = userAge3
// }



// let oldestUserAge = users[0].age;

// for (let i = 0; i < users.length; i++) {
// 	console.log(users[i].age);

// 	if (oldestUserAge < users[i].age) {
// 		oldestUserAge = users[i].age;
// 	}
// }

// let i = 0;

// while (i < users.length) {
//   console.log(users[i].age);

//   if(oldestUserAge < users[i].age){
//     oldestUserAge = users[i].age;
//   }
//   i++
// }



//1. сколько пользователей в онлан
//2. сколько пользователей младше 18
//3. сделать новый массив todosNotComplete невыполненых задач

// //HomeWork1
let online = 0;

for (let i = 0; i < users.length; i++) {
	

	if (users[i].online_status === true) {
		online++
	}

}
console.log(online)

// //HomeWork2
let adult = 0;

for (let j = 0; j < users.length; j++) {
	console.log(users[j].age);

	if (users[j].age < 18) {
		adult++
	}

}
console.log(adult)
// Home_work 3

let todos = [todo1, todo2, todo3];
let todosNotComplete = [];
len = todos.length;

for (let k = 0; k < len; k++) {


	if (todos[k].completed === false) {
		todosNotComplete = todosNotComplete.concat(todos[k].title);
	};

}
console.log(todosNotComplete);

