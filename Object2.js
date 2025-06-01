
const Userlist = new Object();
Userlist.userid = 0;
Userlist.username = "Umesh";
Userlist.email = "Umeshs@gmail.com";
Userlist.isLoggedIn = false;
Userlist.lastLoginDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]; 
Userlist["username2"] = "Umesh Singh";

// Userlist.itemnames =


// console.log(Userlist);
console.log(Userlist.userid);


const Course = {
    courseid: 101,
    coursename: "JavaScript",
    price: 199.99,
    isAvailable: true,
    ratings: 4.5,
    reviews: ["Excellent course", "Very informative", "Highly recommended"],
    getCourseInfo: function() {
        return `${this.coursename} (ID: ${this.courseid}) - Price: $${this.price}`;
    }
};

console.log(Course.coursename);

const { courseid: Cid, coursename:cname, price, isAvailable, ratings, reviews } = Course;

console.log(cname);