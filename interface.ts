
//an interface acts like a cantract in your application ..

let age: number;
interface IEmployee 
{
    Role(): void ;

}
class permanentEmployee implements IEmployee{

    Role() {
        console.log("Lead");

    }
}
class ContractEmployee implements IEmployee {

    Role () {
        console.log("Developer");

    }
    
}