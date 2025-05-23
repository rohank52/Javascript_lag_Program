



//TS oop 

//defining class and object 

class Car1 {
    
    lisense: number;
    constructor(num:number=100){
        this.lisense = num ;

    }
    move() { 
        return this.lisense; 


    }
}
console.log(new Car1().move() ); 


