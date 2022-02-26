function calculate_area() {
    r = parseInt($("#x").val()) ;
    $("#p1").html(r * r * 22/7)

}

function setup() {
    $("#calc").click(calculate_area);
}
jQuery(document).ready(setup);