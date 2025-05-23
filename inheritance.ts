

//base/parent/super class


// derived / child /sub class


//inheritance is a fuature where derive class
// will acquire the properties and method base clas


class Animal {
    Eat () { 
        console.log("eat") ;

    }
    Sleep () {
        console.log("sleep") ;

    }
}
class Dog extends Animal {

    Bark () {
        console.log("bark") ;

    }
}
let objectDog = new Dog () ;
objectDog.Sleep();

class Cat extends Animal{
    meaow () {
        console.log("meaow");

    }

}



