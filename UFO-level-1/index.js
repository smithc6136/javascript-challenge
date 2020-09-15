// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO Sighting report object
data.forEach(function(UFOSighting) {
  console.log(UFOSighting);
});

// // Step 2:  Use d3 to append one table row `tr` for each UFO report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(UFOSighting) {
//   var row = tbody.append("tr");
// });

// Step 3:  Use `Object.entries` to console.log each UFO report value
// data.forEach(function(UFOSighting) {
//   console.log(UFOSighting);
//   var row = tbody.append("tr");

//   Object.entries(UFOSighting).forEach(function([key, value]) {
//     console.log(key, value);
//     var cell = row.append("td");
//   });
// });

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(UFOSighting) {
    var row = tbody.append("tr");
  
    Object.entries(UFOSighting).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value)
    });
  });
// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
