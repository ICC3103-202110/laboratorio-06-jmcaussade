'use strict';
const inquirer = require('inquirer');

function input(){
  let List = []
  inquirer
  .prompt([
      {
      type: "list",
      name: "Source",
      message: "Left temperature is source? ",
      choices: ["Yes","No"],
      default: "Yes"},
      {
      type: "input",
      name: "Temperature",
      message: "Temperature value to convert: ",
      default: "0"},
      {
      type: "list",
      name: "From",
      message: "From? ",
      choices: ["Celsius", "Fahreinheit", "Kelvin"],
      default: "Celsius",},
      {
      type: "list",
      name: "To",
      message: "To?",
      choices: ["Celsius", "Fahreinheit", "Kelvin"]
      }

  ])

  /*
  .then(answers=>{
    console.log(answers)
  })*/
  /*
  .then(answers=>{
      const Source = answers.Source;
      const Temperature = answers.Temperature;
      const From = answers.From;
      const To = answers.To;
      List.push(Source);
      List.push(Temperature);
      List.push(From);
      List.push(To);
      return List;

  })*/
}



module.exports = {
  input
};