const {printTable} = require('console-table-printer');
const prompt = require('prompt-sync')();
var inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const {CtoF, CtoK, FtoK, FtoC, KtoC, KtoF} = require('./update')

function PrintTemperatureSource(){
    return "Left temperature is source? (y/n)  "
}

function PrintTemperature(){
    return "Enter the temperature to convert:  "
}

function PrintFrom(){
    return "Choose the temperature to convert from (c,f,k)  "
}

function PrintTo(){
    return "Choose the temperature value to convert to (c,f,k)  "
}



function Table2(TemperatureSource, Temperature, From, To) {
    var L1 = 0
    var L2 = "Celsius"
    var R1 = 32
    var R2 = "Fahreinheit"
    var Table2 = [
    {"LeftValue": L1, "LeftUnit": L2, 
    "RightValue": R1, "RightUnit": R2}]
    return Table2;
};


function Table(TemperatureSource, Temperature, From, To) {
    var L1 = 0
    var L2 = "Celsius"
    var R1 = 32
    var R2 = "Fahreinheit"

    if (TemperatureSource=="y") {
        if(From=="c" && To=="f"){
            var L1 = Temperature
            var L2 = "Celsius"
            var R1 = CtoF(Temperature)
            var R2 = "Fahreinheit"
            }
        else if(From=="c" && To=="k"){
            var L1 = Temperature
            var L2 = "Celsius"
            var R1 = CtoK(Temperature)
            var R2 = "Kelvin"
        }
        else if(From=="f" && To=="k"){
            var L1 = Temperature
            var L2 = "Fahreinheit"
            var R1 = FtoK(Temperature)
            var R2 = "Kelvin"
        }
        else if(From=="f" && To=="c"){
            var L1 = Temperature
            var L2 = "Fahreinheit"
            var R1 = FtoC(Temperature)
            var R2 = "Celsius"
        }
        else if(From =="k" && To == "c"){
            var L1 = Temperature
            var L2 = "Kelvin"
            var R1 = KtoC(Temperature)
            var R2 = "Celsius"
        }
        else{
            var L1 = Temperature
            var L2 = "Kelvin"
            var R1 = KtoF(Temperature)
            var R2 = "Fahreinheit"
        }
        }
    else{
        if(From=="c" && To=="f"){
            var R1 = Temperature
            var R2 = "Celsius"
            var L1 = CtoF(Temperature)
            var L2 = "Fahreinheit"
            }
        else if(From=="c" && To=="k"){
            var R1 = Temperature
            var R2 = "Celsius"
            var L1 = CtoK(Temperature)
            var L2 = "Kelvin"
        }
        else if(From=="f" && To=="k"){
            var R1 = Temperature
            var R2 = "Fahreinheit"
            var L1 = FtoK(Temperature)
            var L2 = "Kelvin"
        }
        else if(From=="f" && To=="c"){
            var R1 = Temperature
            var R2 = "Fahreinheit"
            var R1 = FtoC(Temperature)
            var L2 = "Celsius"
        }
        else if(From =="k" && To == "c"){
            var R1 = Temperature
            var R2 = "Kelvin"
            var L1 = KtoC(Temperature)
            var L2 = "Celsius"
        }
        else{
            var R1 = Temperature
            var R2 = "Kelvin"
            var L1 = KtoF(Temperature)
            var L2 = "Fahreinheit"
        }
        }
    
    var Table1 = [
    {"LeftValue": L1, "LeftUnit": L2, 
    "RightValue": R1, "RightUnit": R2}]
    return Table1;
};


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
    Table2,
    getTitle,
    PrintTemperatureSource,
    PrintTemperature,
    PrintFrom,
    PrintTo,
    
}