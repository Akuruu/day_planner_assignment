var time = moment();
var info = $("<textarea>");
var currentHour = document.querySelector("hour");
// Timer Header
$("#currentDay").text(time.format("MMMM Do YYYY, h:mm a"));
//--------------------------------------------------------
// create an array of objects for the available hour and plan
var savedPlan = [
    {
        name: "nine",
        hour: "9",
        plan: "",
    },
    {
        name: "ten",  
        hour: "10",
        plan: "",
    },
    {
        name: "eleven",  
        hour: "11",
        plan: "",
    },
    {
        name: "twelve",  
        hour: "12",
        plan: "",
    },
    {
        name: "one",  
        hour: "1",
        plan: "",
    },
    {
        name: "two",  
        hour: "2",
        plan: "",
    },
    {
        name: "three",  
        hour: "3",
        plan: "",
    },
    {
        name: "four",  
        hour: "4",
        plan: "",
    },
    {
        name: "five",  
        hour: "5",
        plan: "",
    },
];
console.log(savedPlan)

// set localstg items 
function savedData () {
localStorage.setItem("savedPlan", JSON.stringify(savedPlan));
};

// retrieve from localstg
function init () {
    var showData = JSON.parse(localStorage.getItem("savedPlan"));
    console.log(showData);
};

$(document).ready(function() {


    //function to update the current hour and change the colors of the time blocks
    function colorUpdater() {

    if (currentHour.time < moment().format("HH")) {
        info.attr ({
            "class": "past", 

        })
    } else if (currentHour.time === moment().format("HH")) {
        info.attr({
            "class": "present"
        })
    } else if (currentHour.time > moment().format("HH")) {
        info.attr({
            "class": "future"
        })
    }
    };

    window.onload = function () {
        colorUpdater();
    };
        // save button
        $(".saveBtn").on("click", function(event) {
            event.preventDefault();
            savedData();
            init();

        });
        savedData.textContent(info)
});


