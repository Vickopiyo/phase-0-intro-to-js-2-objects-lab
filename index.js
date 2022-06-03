// Write your solution in this file!
const employee = {
    name:'Sam',
    streetAddress:'11 broadway'
}
function updateEmployeeWithKeyAndValue(employee,key,value){
    return Object.assign({},employee, {[key]:value});

}
function destructiveUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]= value;
    return employee;
}
function deleteFromEmployeeByKey(driver, key){
    const newObj = Object.assign({},employee)
    delete newObj[key];
    return newObj
}
function destructiveDeleteEmployeeWithKeyAndValue(driver,key){
    delete employee[key];
    return employee
}