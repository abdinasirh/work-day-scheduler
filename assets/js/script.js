//display current date & time.
var currrentDate = moment().format('MMMM Do YYYY, h:mm');
$("#currentDay").text(currrentDate);

// color coded time block to determine if its in the past, present or future
var timeTracker = function() {
    var hour = moment().hours();
    $(".time-block").each(function() {
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
    

    
};
timeTracker();