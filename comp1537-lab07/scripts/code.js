// function add() {
//     //grab first operand
//     f = parseInt($("#x").val());
//     //grab second operand
//     s = parseInt($("#y").val());
//     $("#answer").html(f + ' + ' + s + " = " + (f + s));
//     old = f + ' + ' + s + " = " + (f + s);
//     $("#history").append('<span class = "add">' + old + '</span><br>');
// }

// function sub() {
//     //grab first operand
//     f = parseInt($("#x").val());
//     //grab second operand
//     s = parseInt($("#y").val());
//     $("#answer").html(f + ' - ' + s + ' = ' + (f - s));
//     old = f + ' - ' + s + ' = ' + (f - s);
//     $("#history").append('<span class = "sub">' + old + '</span><br>');

// }

// function multiply() {
//     //grab first operand
//     f = parseInt($("#x").val());
//     //grab second operand
//     s = parseInt($("#y").val());
//     $("#answer").html(f + ' * ' + s + ' = ' + (f * s));
//     old = f + ' * ' + s + ' = ' + (f * s);
//     $("#history").append('<span class = "mul">' + old + '</span><br>');

// }

// function divide() {
//     //grab first operand
//     f = parseInt($("#x").val());
//     //grab second operand
//     s = parseInt($("#y").val());
//     $("#answer").html(f + ' / ' + s + ' = ' + (f / s));
//     old = f + ' / ' + s + ' = ' + (f / s);
//     $("#history").append('<span class = "div">' + old + '</span><br>');
// }

// function IncreaseFont() {
//     f = parseInt($("#history").css("font-size"));
//     a = $("#history")
//     f = f + 10 + 'px'
//     a.css({
//         "font-size": f
//     })
// }

// function DecreaseFont() {
//     f = parseInt($("#history").css("font-size"));
//     a = $("#history")
//     f = f - 10 + 'px'
//     a.css({
//         "font-size": f
//     })
// }

function calculator(operation) {
    //grab first operand
    f = parseInt($("#x").val());
    //grab second operand
    s = parseInt($("#y").val());
    //remove button
    remove_button = '<input class = "hide" type="submit" value="remove"></input>'
    //switch operation
    switch (operation) {
        case "add":
            $("#answer").html(f + ' + ' + s + " = " + (f + s));
            old = f + ' + ' + s + " = " + (f + s);
            $("#history").append('<span class = "add">' + old + remove_button + '<br>');
            break;
        case "sub":
            $("#answer").html(f + ' - ' + s + ' = ' + (f - s));
            old = f + ' - ' + s + ' = ' + (f - s);
            $("#history").append('<span class = "sub">' + old + remove_button + '<br>');
            break;
        case "multiply":
            $("#answer").html(f + ' * ' + s + ' = ' + (f * s));
            old = f + ' * ' + s + ' = ' + (f * s);
            $("#history").append('<span class = "mul">' + old + remove_button + '<br>');
            break;
        case "divide":
            $("#answer").html(f + ' / ' + s + ' = ' + (f / s));
            old = f + ' / ' + s + ' = ' + (f / s);
            $("#history").append('<span class = "div">' + old + remove_button + '<br>');
            break;
        case "F-up":
            f = parseInt($("#history").css("font-size"));
            a = $("#history");
            f = f + 10 + 'px'
            a.css({
                "font-size": f
            })
            break;
        case "F-down":
            f = parseInt($("#history").css("font-size"));
            a = $("#history");
            f = f - 10 + 'px'
            a.css({
                "font-size": f
            })
            break;

        default:
            console.log("error");
    }


}

function hide_() {
    $(this).parent().remove();
}


function setup() {
    // $("#add").click(add);
    // $("#sub").click(sub);
    // $("#multiply").click(multiply);
    // $("#divide").click(divide);
    // $("#F-up").click(IncreaseFont)
    // $("#F-down").click(DecreaseFont)
    $(".button").click(function () {
        calculator(this.id);
    });
    $('body').on("click", ".hide", hide_);

}
jQuery(document).ready(setup);