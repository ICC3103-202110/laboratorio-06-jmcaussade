const {printTable} = require('console-table-printer');
const inquirer = require('inquirer');
const {Table, Table2, getTitle, PrintTemperatureSource, 
PrintTemperature, PrintFrom, PrintTo} = require('./view');
const {CtoF, CtoK, FtoK, FtoC, KtoC, KtoF} = require('./update')
const {input} = require('./test')
const prompt = require('prompt-sync')();



function app(){
    console.clear()
    console.log(getTitle(getTitle))
    printTable(Table2());
    while (true){
        var TemperatureSource =  prompt(PrintTemperatureSource())
        var Temperature = prompt(PrintTemperature())
        var From = prompt(PrintFrom())
        var To = prompt(PrintTo())
       console.clear()
       printTable(Table(TemperatureSource, Temperature, From, To));
       console.log(getTitle(getTitle))
    }

}


module.exports = {
    app
}
