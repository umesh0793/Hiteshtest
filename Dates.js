const testDate = new Date()

// console.log(testDate.getDay())

// console.log(testDate.toDateString())

// console.log(typeof(testDate))

// console.log(testDate.toLocaleDateString())

// const Datedec= new Date(2025,5,31)
const Datedec= new Date("2025-5-31")
console.log(Datedec.toLocaleString());
// const Timestamp = Date.now();
// console.log(Timestamp.get);

const todaydate = Date.now();
console.log(Math.floor(todaydate/1000))

console.log(Math.floor(Date.now()/1000))

console.log(testDate);

