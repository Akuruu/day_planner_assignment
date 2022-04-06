var time = moment();
// Timer Header
$("#currentDay").text(time.format("MMMM Do YYYY, h:mm a"));

// Begin a function using jQuery syntax
$document.ready(function() {
    //listen for savebtn clicks

    //show notification that the item was saved in localstg
    //more code for this item styling

    //function to update the current hour and change the colors of the time blocks
    function colorUpdater() {
        //create a variable that holds the current time value

        //loop over the timeblocks
    }
    //call the function
    colorUpdater();
    //another way to keep time updated
    var interval = setInterval(colorUpdater, 15000);

    //need the saved data from local storage
    $("".val(localStorage.getItem(""));

    $("#currentDay").text(time.format("MMMM Do YYYY"));
})
