//display current date & time.
var currrentDate = moment().format('MMMM Do YYYY, h:mm a');
// var currrentDate = moment().format('MMMM Do YYYY, h:mm ');
$("#currentDay").text(currrentDate);

// color coded time block to determine if its in the past, present or future
var timeTracker = function() {
    var hour = moment().hours();
    // loop through
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id").split("-")[1]);

        console.log(currentHour);

        // add green color to the block
        if (currentHour > hour) {
            $(this).addClass("future");
        // add red color to the block
        } else if (currentHour === hour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        // add grey color to the block
        } else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    })
    

    
};
// call the function
timeTracker();

$(".saveBtn").on("click", function(){
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".input").val();
    localStorage.setItem(key, value);
})

$("#hour-9 .input").val(localStorage.getItem("hour-9"))
$("#hour-10 .input").val(localStorage.getItem("hour-10"))
$("#hour-11 .input").val(localStorage.getItem("hour-11"))
$("#hour-12 .input").val(localStorage.getItem("hour-12"))
$("#hour-13 .input").val(localStorage.getItem("hour-13"))
$("#hour-14 .input").val(localStorage.getItem("hour-14"))
$("#hour-15 .input").val(localStorage.getItem("hour-15"))
$("#hour-16 .input").val(localStorage.getItem("hour-16"))
$("#hour-17 .input").val(localStorage.getItem("hour-17"))
