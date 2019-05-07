// jQuery document ready
$(document).ready(function(){
    // set tomorrow's unix date in milleseconds
    // to start datepicker date on tomorrow
    var tomorrow = Date.now() + 86400000;
    // Initialize Materialize sidenav
    $('.sidenav').sidenav();
    // Initialize Materialize datepicker
    $('.datepicker').datepicker({
        autoClose: true,
        format: 'ddd, mmm d, yyyy',
        minDate: new Date(),
        // default date is tomorrow - no requests day-of
        defaultDate: new Date(tomorrow),
        setDefaultDate: true
    });
    // Initialize Materialize form select
    $('select').formSelect();
    // Character counter
    $('textarea#notes').characterCounter();
    // Initialize Material box
    $('.materialboxed').materialbox();
    // Initialize Materialize carousel
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    // Form validation
    $("#bb_request_form").submit(function(event) {
        // initialize control variable
        var validForm = true;

        // validate email with reg exp
        var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        var email = $("#email").val().trim();
        // validate phone with reg exp
        var phonePattern = /^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/;
        var phone = $("#phone").val().trim();

        // set span text as empty
        $("#f_name").next().text("");
        $("#l_name").next().text("");
        $("#email").next().text("");
        $("#phone").next().text("");
        // validate request form
        if (phone == "") {
            validForm = false;
            $("#phone").next().text("Please enter a phone number.");
            $("#phone").focus();
            $(document).scrollTop( $("#required").offset().top );
        } else if ( !phonePattern.test(phone) ) {
            validForm = false;
            $("#phone").next().text("Please enter a valid phone number.");
            $("#phone").focus();
            $(document).scrollTop( $("#required").offset().top );
        } else {
            $("#phone").next().text("");
        }
        if (email == "") {
            validForm = false;
            $("#email").next().text("Please enter a email address.");
            $("#email").focus();
            $(document).scrollTop( $("#required").offset().top );
        } else if ( !emailPattern.test(email) ) {
            validForm = false;
            $("#email").next().text("Please enter a valid email address.");
            $("#email").focus();
            $(document).scrollTop( $("#required").offset().top );
        } else {
            $("#email").next().text("");
        }
        if ($("#l_name").val().trim() == "") {
            validForm = false;
            $("#l_name").next().text("Please enter a last name.");
            $("#l_name").focus();
            $(document).scrollTop( $("#required").offset().top );
        }
        if ($("#f_name").val().trim() == "") {
            validForm = false;
            $("#f_name").next().text("Please enter a first name.");
            $("#f_name").focus();
            $(document).scrollTop( $("#required").offset().top );
        }
        // prevent submission if form isn't validated
        if (validForm == false) { event.preventDefault(); }
    });
});