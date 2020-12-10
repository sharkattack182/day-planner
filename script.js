var hourlyDisplay = $(".container");
var currentDay = $("#currentDay");
// nned to build the html dthrough jquery but need to do it by the predefined classes
// create a list fo classes and what the do
// check the example and map it out on paper
// the save  button will have an click function to log the text content to local storage
// on load will render items from local storage each
// will need each div to have a value according to hour
//      military time
// need to set current hour and track the hour to set colors in the divs

window.onload = function() {
    // sets the date and time in the header
    currentDay.text(moment().format('dddd MMMM Do YYYY'));

    // sets the current time to a variable theHH makes it military time so i dont have to deal with AM/PM
    var currentTime = moment().format('HH');
    console.log(currentTime)
    for(var i = 8; i < 17; i++) {
        // creating the elements of the time block dynamically
        var newRow = $("<div>");
        var newHour = $("<div>");
        var newInput = $("<textarea>");
        var newSaveButton = $("<div>");

        // adding the classes to the new time elements
        newRow.addClass("row time-block");
        newHour.addClass("hour col-md-1");
        newInput.addClass("description col-md-10 col-sm-8");
        newSaveButton.addClass("saveBtn col-md-1")

        // will need an if statement here for determining the color of the div
        if(i < currentTime) {
            newInput.addClass("past");
        } else if(i = currentTime) {
            newInput.addClass("present");
        } else {
            newInput.addClass("future");
        }
        // adding the text content
        newHour.text(i)
        newSaveButton.html('<i class="fas fa-save"></i>');

        // appending each item to the row then the row to the container
        newRow.append(newHour);
        newRow.append(newInput);
        newRow.append(newSaveButton);
        hourlyDisplay.append(newRow);
    }

}