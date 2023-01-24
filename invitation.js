var answer = 

$('#yesorno').change(function() {
    answer =$(this).val();
    if(answer=='YES') {
        $('.willYouAttend').html("Glad you can make.");
        $('.willYouAttend').addClass("yes");
    } else if (answer== "NO") {
        $('.willYouAttend').html("Thank you. Your seat will be given to someone else.");
        $('.willYouAttend').addClass("no");
    } else {
        $('.willYouAttend').html("Please select YES or NO.")
        $('.willYouAttend').addClass("select")
    }
});




