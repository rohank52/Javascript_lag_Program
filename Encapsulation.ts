
//intervew quntion in online 


class Employee
{
    private _empId: number;
    empName: string;

    getEmpId(){
        return this._empId;

    }
    setEmpId(empId : number)  
    {
        //this._empID = empID;
        if(empId < 0 ) {
            console.log('Id cannot be less than 0 ');

        }
        else { 

            this._empId = empId;

        }
    }

}
let objEmployee = new Employee() ;


objEmployee.setEmpId(10);   //#  fakt - kadala ... error -10 right 10 pass...
//data securtiy 
console.log(objEmployee.getEmpId());
