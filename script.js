const obj={getKeys() {
		const arr=Object.keys(student)
	return console.log(arr)
 }}
const student={name:"h"  }
 Object.setPrototypeOf(student,obj);
const keys=student.getKeys()