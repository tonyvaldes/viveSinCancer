$(document).ready(function(){

    $("#whatToDo1").hide();
    $("#whatToDo2").hide();
    $("#whatToDo3").hide();
    $("#whatToDo4").hide();

    $("#whatToDoAction1").click(function () {
        $('#whatToDo1').fadeToggle('slow');
        $("#whatToDo2").hide();
        $("#whatToDo3").hide();
        $("#whatToDo4").hide();
        $("#whatToDoImageCaption").hide();


    });

    $("#whatToDoAction2").click(function () {
        $('#whatToDo2').fadeToggle('slow');
        $("#whatToDo1").hide();
        $("#whatToDo3").hide();
        $("#whatToDo4").hide();
        $("#whatToDoImageCaption").hide();
    });

    $("#whatToDoAction3").click(function () {
        $('#whatToDo3').fadeToggle('slow');
        $("#whatToDo1").hide();
        $("#whatToDo2").hide();
        $("#whatToDo4").hide();
        $("#whatToDoImageCaption").hide();
    });

    $("#whatToDoAction4").click(function () {
        $('#whatToDo4').fadeToggle('slow');
        $("#whatToDo1").hide();
        $("#whatToDo2").hide();
        $("#whatToDo3").hide();
        $("#whatToDoImageCaption").hide();
    });

});