const {printTable} = require('console-table-printer');
const inquirer = require('inquirer');
const {Table, TempSource, TempValue, From, getTitle} = require('./view');
const {CtoF, CtoK, FtoK, FtoC, KtoC, KtoF} = require('./update')
const {input} = require('./test')
const prompt = require('prompt-sync')();
const {PrintTemperatureSource, PrintTemperature,
PrintFrom, PrintTo} = require('./test2')



function app(){
    console.clear()
    console.log(getTitle(getTitle))
    printTable(Table());
    i=0
    while (i<1){
        var TemperatureSource = prompt(PrintTemperatureSource())
        var Temperature = prompt(PrintTemperature())
        var From = prompt(PrintFrom())
        var To = prompt(PrintTo())
       console.clear()
       printTable(Table(TemperatureSource,Temperature,From,To));
       console.log(getTitle(getTitle))
       i++
    }

}



console.log(app())