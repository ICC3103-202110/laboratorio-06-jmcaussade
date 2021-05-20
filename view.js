const {printTable} = require('console-table-printer')

function Table(LeftValue, LeftUnit, RightValue, RightUnit) {
    if (LeftValue==null){
        var L1 = 0
    }
    else{
        var L1=LeftValue}
    if (LeftUnit==null){
        var L2 = "Celsius"
        }
    else{
        var L2=LeftUnit}
    if (RightValue==null){
        var R1 = 32
        }
    else{
        var R1=RightValue}
    if (RightUnit==null){
        var R2 = "Fahrenheit"
        }
    else{
        var R2=RightUnit}
    var Table1 = [
    {"LeftValue": L1, "LeftUnit": L2, 
    "RightValue": R1, "RightUnit": R2}]
    return Table1;
};

printTable(Table(1,2,3,4))