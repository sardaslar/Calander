// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


//Display Cureent Time Frame

$("#currentDay").text(moment().format("LLLL")); 


//Function for saveBtn

$(".saveBtn").on("click", function (){

    
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    

})

 $("#am-8 .description").val(localStorage.getItem("am-8"));
 $("#am-9 .description").val(localStorage.getItem("am-9"));
 $("#am-10 .description").val(localStorage.getItem("am-10"));
 $("#am-11 .description").val(localStorage.getItem("am-11"));
 $("#pm-12 .description").val(localStorage.getItem("pm-12"));
 $("#pm-13 .description").val(localStorage.getItem("pm-13"));
 $("#pm-14 .description").val(localStorage.getItem("pm-14"));
 $("#pm-15 .description").val(localStorage.getItem("pm-15"));
 $("#pm-16 .description").val(localStorage.getItem("pm-16"));
 $("#pm-17 .description").val(localStorage.getItem("pm-17"));


//writing a function for colors
//first var for the time frame for now

function hourColors(){
 var currentTime = moment().hours();


//we are fetching rows by times with class 

//there is some problem somewhere here. when i delete the id number "like pm12" colors works great but im losing local storage //
$(".time-block").each(function (){
var rowHour = parseInt($(this).attr("id").split('-')[1]);
console.log(currentTime)
console.log(typeof  rowHour)

if (rowHour < currentTime){
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
}

else if (rowHour === currentTime){
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
}

else {
    $(this).removeClass("past");
    $(this).addClass("future");
    $(this).removeClass("present");
}
})
}

hourColors();







