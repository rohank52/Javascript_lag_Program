

class Employee 
{ 
    
  // Encapsulation is wrapping of data (field )funtion together

 // to restrict the direct accesss of the data .. 
  
    private _empId: number;
    empName: string ;


    getEmpId() {
        return this._empId;

    }
    setEmpId(empId : number) 
    {
        //this._empId = empId;
        if(empId < 0 ) {
            console.log('Id cannot be then 0 ');

        }
        else {
            this._empId = empId;

        }
    }
}

let objEmployee = new Employee () ;
 


objEmployee.setEmpId(10) ;  
console.log(objEmployee.getEmpId());   




 
