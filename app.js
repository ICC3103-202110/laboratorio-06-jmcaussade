const {printTable} = require('console-table-printer');
const inquirer = require('inquirer');
const {Table, TempSource, TempValue, From, getTitle} = require('./view');
const {CtoF, CtoK, FtoK, FtoC, KtoC, KtoF} = require('./update')
const {input} = require('./test')
const prompt = require('prompt-sync')();



async function app(){
    console.clear()
    console.log(getTitle(getTitle))
    printTable(Table());
    i=0
    while (i<1){
       console.clear()
       printTable(Table());
       console.log(getTitle(getTitle))
       await input()
       i++
    }

}



console.log(app())