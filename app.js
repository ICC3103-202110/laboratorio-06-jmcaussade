const {printTable} = require('console-table-printer');
const inquirer = require('inquirer');
const {Table, TempSource, TempValue, From} = require('./view');
const {CtoF, CtoK, FtoK, FtoC, KtoC, KtoF} = require('./update')

async function app(){
    i=0
    while (i<1){
       printTable(Table());
       var TSource = await TempSource();
       var vSource = await TempValue();
       i++
    }

}



console.log(app())