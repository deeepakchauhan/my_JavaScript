//                                                     INHERITANCE :

// It is a passing down properties and methods from parent class to child class(derived class).
// Multiple classes can also inherit same properties from the parent class.
// if parent class and child class have the same function, then child class function is invoked. (Method overriding)



class Parent{
    hello(){
        console.log("Hello, World!")
    }
};


class Child extends Parent {}

let obj = new Child();
console.log(obj);

obj.hello();                            // property inherited from the parent class






// SUPER Keyword :
// used to call the constructor of its parent class to access parents methods and properties
// if we are creating a constructor in derived class,to get access to praents properties and methods. 
// it is necessary to call the parents constructor using super keyword inside constructor of derived class.
 

class Person {
    constructor(branch) {
        console.log("Enter parent's constructor");
        
        this.species = "Homosapiens";
        this.branchName = branch;
    }

    eat() {
        console.log("eat");
    }
};


class Engineer extends Person {
    constructor(branch) {
        console.log("Enter derived class constructor");
        
        super(branch);                                               // to invoke parent's constructor,, to pass on parent, call super 
        // this.branchName = branch;

        console.log("Exit derived class constructor");
    }

    work() {
        console.log("build something , by solving the problem");
    }
};

let eng1  = new Engineer("CSE");
console.log(eng1);




