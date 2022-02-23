
function add() {
    //grab first operand
    f = parseInt($("#x").val());
    //grab second operand
    s = parseInt($("#y").val());
    $("#answer").html(f + ' + ' + s + " = " + (f+s));
    old = f + ' + ' + s + " = " + (f+s);
    $("#history").append('<span class = "add">' + old + '</span><br>');
}
function sub(){
    //grab first operand
    f = parseInt($("#x").val());
    //grab second operand
    s = parseInt($("#y").val());
    $("#answer").html(f + ' - ' + s + ' = ' + (f-s));
    old = f + ' - ' + s + ' = ' + (f-s);
    $("#history").append('<span class = "sub">' + old + '</span><br>');

}

function multiply(){
    //grab first operand
    f = parseInt($("#x").val());
    //grab second operand
    s = parseInt($("#y").val());
    $("#answer").html(f + ' * ' + s + ' = ' + (f*s));
    old = f + ' * ' + s + ' = ' + (f*s);
    $("#history").append('<span class = "mul">' + old + '</span><br>');

}
function divide(){
    //grab first operand
    f = parseInt($("#x").val());
    //grab second operand
    s = parseInt($("#y").val());
    $("#answer").html(f + ' / ' + s + ' = ' + (f/s));
    old = f + ' / ' + s + ' = ' + (f/s);
    $("#history").append('<span class = "div">' + old + '</span><br>');
}

function setup() {
    $("#add").click(add);
    $("#sub").click(sub);
    $("#multiply").click(multiply);
    $("#divide").click(divide);
}
jQuery(document).ready(setup);