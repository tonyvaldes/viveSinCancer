$(document).ready(function(){

    $("#whatToDo1").hide();
    $("#whatToDo2").hide();
    $("#whatToDo3").hide();
    $("#whatToDo4").hide();
    $("#availableProducts").show();
    $("#availableEvents").hide();
    $("#availableDonations").hide();
    $("#shoppingCart").hide();
    $("#checkout").hide();




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
    $("#showProducts").click(function () {
        $('#availableProducts').fadeToggle('slow');
        $("#availableEvents").hide();
        $("#availableDonations").hide();
        $("#shoppingCart").hide();
        $("#checkout").hide();
    });
    $("#showEvents").click(function () {
        $('#availableProducts').hide();
        $("#availableEvents").fadeToggle('slow');
        $("#availableDonations").hide();
        $("#shoppingCart").hide();
        $("#checkout").hide();
    });
    $("#showDonations").click(function () {
        $('#availableProducts').hide();
        $("#availableEvents").hide();
        $("#availableDonations").fadeToggle('slow');
        $("#shoppingCart").hide();
        $("#checkout").hide();
    });

    $("#showShoppingCart").click(function () {
        $('#availableProducts').hide();
        $("#availableEvents").hide();
        $("#availableDonations").hide();
        $("#shoppingCart").fadeToggle('slow');
        $("#checkout").hide();
    });

    $("#showCheckout").click(function () {
        $('#availableProducts').hide();
        $("#availableEvents").hide();
        $("#availableDonations").hide();
        $("#shoppingCart").hide();
        $("#checkout").fadeToggle('slow');
    });




});