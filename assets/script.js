var time = moment();
// Timer Header
$("#currentDay").text(time.format("MMMM Do YYYY, h:mm a"));

// Begin a function using jQuery syntax
$(document).ready(function(e) {
    //listen for savebtn clicks
    $(".saveBtn").on("click", function() {
    
    //show notification that the item was saved in localstg
    //more code for this item styling
    var value = $(this).sibling(".information").val();
    var time = $(this).parent().attribute("id");
    localStorage.setItem(time, value)
    })


    //function to update the current hour and change the colors of the time blocks
    function colorUpdater() {
        //now for the conditional statement
        var currentHour = new Date().getHours();
    
        //using a conditional to update the color
        if (currentHour > 9) {
            $("#9AM").addClass("past");
        } else if (currentHour >= 9 && currentHour < 10) {
            $("9AM").addClass("Present");
        } else {
            $("9AM").addClass("future");
        }
    };
    
    //call the function
    colorUpdater();
    //another way to keep time updated
    var interval = setInterval(colorUpdater, 15000);

    //need the saved data from local storage and make one for every hour
    $("#hour-nine .information").val(localStorage.getItem("hour-nine"));
    $("#hour-ten .information").val(localStorage.getItem("hour-ten"));
    $("#hour-eleven .information").val(localStorage.getItem("hour-eleven"));
    $("#hour-twelve .information").val(localStorage.getItem("hour-twelve"));
    $("#hour-one-pm .information").val(localStorage.getItem("hour-one-pm"));
    $("#hour-two-pm .information").val(localStorage.getItem("hour-two-pm"));
    $("#hour-three-pm .information").val(localStorage.getItem("hour-three-pm"));
    $("#hour-four-pm .information").val(localStorage.getItem("hour-four-pm"));
    $("#hour-five-pm .information").val(localStorage.getItem("hour-five-pm"));

    $("#currentDay").text(time.format("MMMM Do YYYY"));
})

// window.onload = function() {
 //   colorUpdater();
 // };


//example for colorUpdater?


