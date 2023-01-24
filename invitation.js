// var answer =

// $('#yesorno').change(function() {
//     answer =$(this).val();
//     if(answer=='YES') {
//         $('.willYouAttend').html("Glad you can make.");
//         $('.willYouAttend').addClass("yes");
//     } else if (answer== "NO") {
//         $('.willYouAttend').html("Thank you. Your seat will be given to someone else.");
//         $('.willYouAttend').addClass("no");
//     } else {
//         $('.willYouAttend').html("Please select YES or NO.")
//         $('.willYouAttend').addClass("select")
//     }
// });

$("#yes").on("click", function (event) {
  $("#header").html(
    "Please refer to your text message to see the number of guests invited from your houshold.");
    $('#header').addClass("yes");
  $(".attending").html("Glad you can make it.");
  $("#yes").hide();
  $("#no").hide();
  
});

var parrNoGuest = '<p id="parrNo"><br>How many guests will be attending? Please refer to your text message to see number of guests invited.</br></p>';
var howManyAttending = '<input id="howMany" placeholder="Enter #"></input>';
var numberButton = '<button class="numberButton" id="numbutton" type="button">Confirm</button></a><br>'
var emailForm ='<div class="emailForm"><form action="mailto:rosy@gmail.com" method="post" enctype="text/plain" class="bold">Name:<br><input type="text" name="Name" class="italic" placeholder="Name of Guest"><br><br>Enter Your first Meal Option:<br><input type="text" name="1st Meal Selection" class="italic" placeholder="Beef, Chicken, or Fish"><br><br>Enter Your second Meal Option:<br><input type="text" name="2nd Meal Option" class="italic" placeholder="Beef, Chicken, or Fish"><br><br><input type="submit" value="Send" class="respond"><input type="reset" value="Reset" class="respond"></form></div>'


$("#yes").click(function(){
    $(".attending").append(parrNoGuest);
    $('.attending').append(howManyAttending);
    $('.attending').append(numberButton);
    $('.attending').append(emailForm);
  });

  $(".numberButton").click(function(){
    console.log("did this work");
  })

 


