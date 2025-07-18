// 1. Create a website for your college, with a class user with some properties 
//    also, add some methods, that allows user to view website data



let DATA = "some information about the person";

class User {
    constructor(name, email){
        
        this.newName = name;                       // defining the properties           
        this.newEmail = email;


    }
        viewData() {
            console.log("data =", DATA);
        
    }
};



let user1 = new User("deepak", "deepakchauhan@gmail.com");
let user2 = new User("yuvraj", "yuvraj@gmail.com");
let user3 = new User("anurag", "anurag@gmail.com");

console.log(user1);


user1.viewData();




// 2. Create a new class "Admin" which inherits from user.
//    Add a new method called editData to admin , that allows it to edit the data on the website 


class Admin extends User{
    constructor(name, email){
        super(name,email);
    }

    editData() {
        DATA = "information updated";
    };
    

};

let admin1 = new Admin("admin", "admin@gmail.com");
console.log(admin1);
admin1.editData();

