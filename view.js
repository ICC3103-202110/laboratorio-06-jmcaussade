const {printTable} = require('console-table-printer');
const prompt = require('prompt-sync')();
var inquirer = require('inquirer');

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


function TempSource(){
    inquirer.prompt([{
    name: "Source",
    type: "list",
    message: "Left temperature is source? ",
    choices: ["Yes","No"]
    }])
    .then(function(answer){
        return answer;
    })
}
 
function TempValue(){
    inquirer.prompt([{
    name: "Temperature",
    message: "Temperature value to convert",
    type: "input"}])
    .then(function(answer){
        return parseInt(answer);
    })
}


function From(){
    inquirer.prompt([{
    name: "From",
    type: "list",
    message: "Left temperature is source? ",
    choices: ["Celsius", "Fahreinheit", "Kelvin"]
    }])
    .then(function(answer){
        return answer;
    })
}
module.exports = { 
    Table,
    TempSource,
    TempValue,
    From
}