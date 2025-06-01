const array = [0,1,2,3,4,5,6]

console.log(array);
console.log(array[5]);
console.log(array.push(5));
console.log(array);


const newarray = new Array(0,1,2,7,8,9)

console.log("A "+ newarray)



console.log(newarray[5]);
console.log(newarray.push(12));
console.log(newarray);
console.log(newarray.pop())
console.log(newarray);

const arr2 =newarray.slice(3,5)

console.log(arr2)

console.log("B "+ newarray)



console.log(newarray);
console.log(newarray.splice(3))
console.log(newarray);

const arr3 = array.concat(newarray);
console.log(arr3);
console.log(arr3[7]);

const newarr3 = [...arr3 , ...newarray]
console.log(newarr3);

const score1 = 100;
const score2 = 200;
const score3 =400;

const name4 = "Umesh";

console.log(Array.from(name4));
console.log(Array.of(score1,score2,score3));