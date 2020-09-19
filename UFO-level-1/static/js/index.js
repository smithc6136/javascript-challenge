// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
// **Reference 14.3 03-Evr-D3-Table activity

// Get a reference to the table body/ button/ etc.
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputField = d3.select(".form-control");

// Console.log the UFO sighting data from data.js
// console.log(data);

// *Object is a key value pair just like a python dictionary*
// *object.entries returns the key and the value*

// *Load data into the page before any interaction with user (initialize)
function init() {
// Use d3 to append 1 cell per UFO report value (datetime, city, state, country, shape, duration, comments)
  data.forEach(function (UFOSighting) {
    var row = tbody.append("tr");
  
    Object.entries(UFOSighting).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value)
    });
  });
}
init();


// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// **Reference 14.3 04-Ins-Event-Listeners

// This function is triggered when the button is clicked
function filterTable() {
  console.log("Filter Table was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
  // Log the input (date) that caused the change
  console.log(this.value);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", filterTable);
inputField.on("change", filterTable);

// Search through the date/time column to find rows that match user input.
sameDate = data.filter(object => object.datetime === this.value);