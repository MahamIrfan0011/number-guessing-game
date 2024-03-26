#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*16+2);
        
 const answer = await inquirer.prompt([{

     name : "userGuessedNumber",

     type : "number",

     message : "Please guess a number between  2-16 :",
     
 },

 ])

 if(answer.userGuessedNumber===randomNumber){

    console.log("Bingo! You've hit the mark!");

 }else{

     console.log("A good attempt, but not quite right! Keep those  guesses coming.");
   
     
 }


    



