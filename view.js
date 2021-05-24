const {printTable} = require('console-table-printer');
const prompt = require('prompt-sync')();
var inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const {CtoF, CtoK, FtoK, FtoC, KtoC, KtoF} = require('./update')

function Table(TemperatureSource, Temperature, From, To) {
    /*if (TemperatureSource==null){
        var L1 = "Celsius"
    }
    else{
        var L1=Temperature}
    if (From==null){
        var L2 = "Celsius"
        }
    else{
        var L2=Temperature}
    if (From==null){
        var R1 = 32
        }
    else{
        var R1=From}
    if (To==null){
        var R2 = "Fahrenheit"
        }
    else{
        var R2=To }*/
    
    //###############################################
    var L1 = 0
    var L2 = "Celsius"
    var R1 = 32
    var R2 = "Fahreinheit"
    if (TemperatureSource=="y") {
        if(From=="c" && To=="f"){
            var R1 = CtoF(Temperature)
            }
        else if(From=="c" && To=="k"){
            var R1 = CtoK(Temperature)
        }
        else if(From=="f" && To=="k"){
            var R1 = FtoK(Temperature)
        }
        else if(From=="f" && To=="c"){
            var R1 = FtoC(Temperature)
        }
        else if(From =="k" && To == "c"){
            var R1 = KtoC(Temperature)
        }
        else{var R1 = KtoF(Temperature)}
    }
    /*
    else{
        if(From=="c" && To=="f"){
            R1 = Temperature
            var L1 = CtoF(Temperature)
            }
        else if(From=="c" && To=="k"){
            var L1 = CtoK(Temperature)
        }
        else if(From=="f" && To=="k"){
            var L1 = FtoK(Temperature)
        }
        else if(From=="f" && To=="c"){
            var L1 = FtoC(Temperature)
        }
        else if(From =="k" && To == "c"){
            var L1 = KtoC(Temperature)
        }
        else{var L1 = KtoF(Temperature)}
    }*/
    

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



function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Unit Converter',
            {
                horizontalLayout: 'half',
                font: 'ogre'
            }
        )
    )
}



module.exports = { 
    Table,
    TempSource,
    TempValue,
    From,
    getTitle
}