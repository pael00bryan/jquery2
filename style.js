$(document).ready(function () {


    $(function () {
        $('.disable').on('click',function () {
            if ($(this).is(':checked')) {
                $('.button').removeAttr('disabled');
            } else {
                $('.button').attr('disabled', "disabled");
            }
        });
        $(".colorChange").on('click',function () {
            $(".change").css("background-color", "orange")
        })
    });


    $('.input').on('keypress', function () {
        $("#span").html(15 - $(this).val().length)
        $("#reflect").html($(".input").val())
    });

    $(".add").on('click',function () {
        $("#selector").html($(".input").val())
    });
    $(".add").on('click',function () {
        $('#selectorOption').append('<option value = "'+ $('.input').val() +'">' + $('.input').val() + '</option>');

    });

    $(".delete").on('click',function () {
        var optionVal= $('#selectorOption').val();
        $("#selectorOption option[value='"+optionVal+"']").remove();

    });

    $(".greet").on('click',function () {
        $(this).html($(this).html() == "Good Morning" ? "Good Evening" : "Good Morning");
    });

    $('#int').bind('keyup paste', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    $(".animate").on('click',function () {
        $(".box-div").animate({
            width: "70%",
            opacity: "0.4",
            marginLeft: "0.6in",
            fontSize: "3em",
            borderWidth: "10px"
        }, 500);

    });

    $(".up").on('click',function () {
        $(".box").animate({
            'top': '-=100px'
        },500)
    });

    $(".down").on('click',function () {
        $(".box").animate({
            'top': '+=100px'
        },500)
    });

    $(".left").on('click',function () {
        $(".box").animate({
            'left': '-=100px'
        },500)
    });
    $(".right").on('click',function () {
        $(".box").animate({
            'left': '+=100px'
        },500)
    });

    $(".back-to-top").on('click',function (){
        $('html, body').animate({scrollTop:0},500);
    });
});