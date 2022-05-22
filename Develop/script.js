// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$(document).ready(function () {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

$(".saveBtn").on("click", function () {

    console.log(this);
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})


//Local Storage

$("#hour8 .desciption").val(localStorage.getItem("hour8"));
$("#hour9 .desciption").val(localStorage.getItem("hour9"));
$("#hour10 .desciption").val(localStorage.getItem("hour10"));
$("#hour11 .desciption").val(localStorage.getItem("hour11"));
$("#hour12 .desciption").val(localStorage.getItem("hour12"));
$("#hour13 .descipation").val(localStorage.getItem("hour13"));
$("#hour14 .desciption").val(localStorage.getItem("hour14"));
$("#hour15 .desciption").val(localStorage.getItem("hour15"));
$("#hour16 .desciption").val(localStorage.getItem("hour16"));
$("#hour17 .desciption").val(localStorage.getItem("hour17"));

function hourTracker() {
    var currentHour = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
 }
 hourTracker();
})
