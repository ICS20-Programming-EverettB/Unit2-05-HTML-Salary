// Created by: Everett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates total income and tax.
 */
const TAXRATE= 0.2005
function calculate () {
  // input
  let hoursWorked = parseFloat(document.getElementById('Hours-worked').value);
  let hourlyRate = parseFloat(document.getElementById('hourly-rate').value);

  // process
  let yourtotalpay =  hoursWorked*hourlyRate 
  // output
  document.getElementById('let yourpay').innerHTML = 'Your pay is: '+ $ + yourTotalPay
  let netincome= yourTotalPay-taxses
  // process
  let taxses =  yourPay*TAXRATE
  // output
  document.getElementById('let taxses').innerHTML = 'The govorment will take: '+ $ + taxses


