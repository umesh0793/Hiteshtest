
const sym1 = Symbol("key1");
const Users = { 

    userame : "Umesh singh",
    age : 25,
    email : "umeshssss@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],  
    "username2" : "Umesh Singh",
    [sym1] : "This is a symbol key",
   

}

// console.log(Users.username2);

Users.welcome = function() {
    console.log("Welcome to the world of JavaScript");
}

Users.welcome2 = function() {
    console.log(`Welcome ${this.userame} to the world of JavaScript` );
}
console.log(typeof(Users[sym1]));
console.log(Users.welcome());
console.log(Users.welcome2());

