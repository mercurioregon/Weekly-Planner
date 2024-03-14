$(document).ready(function (){
$("#currentDay").text(dayjs().format("MMMM, DD, YYYY"))
// Add a listener for click events on the save button.


for (let i = 1; i <= 24; i++){
  let hour = dayjs().hour(i)
  let timeblock = $("<div>").attr("id",`hour-${i}`).addClass("row time-block ")
  let timetext = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(hour.format("hA"))
  let textarea =$("<textarea>").attr("rows", 3 ).addClass("col-8 col-md-10 description")
  if (hour.isBefore(dayjs(),"hour")){
    timeblock.addClass("past")}
  else if (hour.isSame(dayjs(), "hour")){
    timeblock.addClass("present")

  } else {
    timeblock.addClass("future")
  }
  let savedData = localStorage.getItem(`userInfo${i}`)
  if (savedData){
    textarea.val(savedData)


  }

    let saveButton = $("<button>").attr("aria-label", "save" ).addClass("btn saveBtn col-2 col-md-1").html(`<i class="fas fa-save" aria-hidden="true"></i>`)
    saveButton.click( function(){
      let usertext = textarea.val()
      localStorage.setItem(`userInfo${i}`, usertext);
    })
    

    timeblock.append(timetext,textarea,saveButton)
  $(".container-lg").append(timeblock)
}
})




  
   
//   HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



























    