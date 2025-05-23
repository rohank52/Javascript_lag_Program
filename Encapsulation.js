var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.getEmpId = function () {
        return this._empId;
    };
    Employee.prototype.setEmpId = function (empId) {
        //this._empID = empID;
        if (empId < 0) {
            console.log('Id cannot be less than 0 ');
        }
        else {
            this._empId = empId;
        }
    };
    return Employee;
}());
var objEmployee = new Employee();
objEmployee.setEmpId(-10);
console.log(objEmployee.getEmpId());
