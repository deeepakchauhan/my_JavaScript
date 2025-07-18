//                                              CLASSES      and      OBJECTS     :  

// Objects = entity having state and behaviour (properties and method/functions)
// These objects have a special property called Prototype(by default object) 
// we can set prototype using : .__proto__ (reference of an object)
// when object and prototype have the same method , then object method is given the priority 





// DIRECT     OBJECTS     :

const student = {                                                 
    fullName: "deepak chauhan",
    marks : 79,

    printMarks : function () {
        console.log("marks = ", this.marks);                   // this.marks = student.marks 
    },

};




const employee = {
    calcTax()  {                                            // Object method 
        console.log("Tax rate is 10%")
    },
};


console.log(employee);
// employee.calcTax()


const karan = {
    salary : 5000,

    calcTax() {                                       // Prototype method  
        console.log("tax rate is 20%");
    }
};

console.log(karan);

karan.__proto__ = employee;                // this enables us to access to the functions of employee (1st object)
karan.calcTax()









// CREATING      OBJECTS      THROUGH      CLASSES     :

// Class = a program-code template(Blueprint) for creating objects 
// It is used , when we want to create multiple objects.


class Car {
    constructor(){                                           // Constructor: a method invoked automatically by new, when we create an object.
        console.log("creating an object under car");        // Constructor initialises the object .
    }
    
    
    start() {                                            
        console.log("Your car is started");
    }

    
    stop() {
        console.log("Your cas has stopped");
    }


    setBrand(brand) {
        this.brandName = brand;                                   // anything written with this. is objects property
    }
};   


// creating objects from the above template 

let Mercedes = new Car();                                    //new is a keyword to create objects in classes 
console.log(Mercedes);
Mercedes.start();
Mercedes.stop();

let Lexus = new Car();
console.log(Lexus);
Lexus.start();

Mercedes.setBrand("S class");                // brandName: S class will be printed 




