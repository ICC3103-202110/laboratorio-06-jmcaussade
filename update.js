
var inquirer = require('inquirer');


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
        return answer;
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


TempSource()
TempValue()
From()


module.exports = {
    TempSource,
    TempValue,
    From
}












/*function TempValue(model){
    const {input} = model
    const message = 'Temperature value to convert?'
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,     
    })
}

function TempSource(model){
    const {input} = model
    const message = 'Left temperature is source?'
    const choices = ['Yes', 'No']
    return inquirer.prompt({
        name: 'input',
        type: 'list',
        message: message,
        default: input,
        choices: choices       
    })
}

*/