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

var songReq = $(
  '<a href="https://docs.google.com/spreadsheets/d/1rh5Tm7yrFpbQQxEhgDJAWWDREVdHP0E4kXENQDr5hnA/edit#gid=0"><br><br><text>Click here to add a song to our playlist!</text></a>'
);

$("#yes").on("click", function (event) {
  $(".guestAttending").show();
  $("#header").addClass("yes");
  $(".attending").hide();
  $("#yes").hide();
  $("#no").hide();
  var numGuest = prompt(
    "How many Adults guests will be attending? Please refer to your text message to see number of Adults invited."
  );
  var numGuestInt = Number(numGuest);
  if (numGuestInt === 1) {
    $("#guest1").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Glad you can make it.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 2) {
    $("#guest1").show();
    $("#guest2").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Glad you can make it.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 3) {
    $("#guest1").show();
    $("#guest2").show();
    $("#guest3").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Glad you can make it.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 4) {
    $("#guest1").show();
    $("#guest2").show();
    $("#guest3").show();
    $("#guest4").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Glad you can make it.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else if (numGuestInt === 5) {
    $("#guest1").show();
    $("#guest2").show();
    $("#guest3").show();
    $("#guest4").show();
    $("#guest5").show();
    $("#kids").show();
    $(".sendButtons").show();
    // $('.songRequest').show();
    $("#header").html("Glad you can make it.");
    $(".kids").append(songReq);
    $(songReq).addClass("song-request");
  } else {
    alert("Please enter the correct number of guest");
    $(".attending").show();
    $("#yes").show();
    $("#no").show();
  }
});
// var guestCount = $("#howMany")
// var noGuestInt = Number(guestCount);
// $("#numbutton").on("click", function (event) {
//   if (noGuestInt===1) {
//     $("#guest1").show();
//   }
// })
