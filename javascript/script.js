


$(document).ready(function () {
   
    $("#aboutme").on("click", function () {
        $(".portfolio-images").hide()
        $("#details").show()
        $("#details2").show() 
        $(".what").show()
        
    });

    $("#portfolio").on("click", function () {
        $("#details").hide()
        $("#details2").hide()
        $(".portfolio-images").show() 
        $(".what").hide()
        $("#langlist").hide()
        
     });

});