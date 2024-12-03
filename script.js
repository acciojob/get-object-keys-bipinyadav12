const student={name:"jone"}
Object.prototype.getKeys=function () {
	return Object.keys(this);
}
const myObj = { name: "John", age: 30, city: "New York" }; 
const keys = myObj.getKeys();
console.log(keys)