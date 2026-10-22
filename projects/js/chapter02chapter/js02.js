/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Dexter Boynton
      Date:  10/15/2026

      Filename: js02.js
**/
// declare global constants
const EMP_COST = 100; // cost per hour
const BOOK_COST = 350; 
const REPRO_COST = 1250;
const TRAVEL_COST = 2; // cost per mile


window.addEventListener("load", setupForm); 

 
      /** set the form  default values */
function setupForm(){
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();

      //add event handler to each input control
      document.getElementById("photoNum").onchange = getEstimate;
      document.getElementById("photoHrs").onchange = getEstimate;
      document.getElementById("photoDist").onchange = getEstimate;
      document.getElementById("makeBook").onchange = getEstimate;
      document.getElementById("photoRights").onchange = getEstimate;
}


//estimate the total cost
function getEstimate(){
      let totalCost = 0;
      let photographers = document.getElementById("ptotoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById("photoRights").checked;
      
      totalCost += photographers * EMP_COST * hours;
      totalCost += distance * TRAVEL_COST * photographers;
      totalCost += buyBook ? BOOK_COST : 0;
      totalCost += buyRights ? REPRO+COST : 0;

      document.getElementById("estimate").innerHTML = "$" + totalCost;

}