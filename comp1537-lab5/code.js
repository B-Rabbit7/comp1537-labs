function calculate_area() {
    radius = parseInt($("#radius").val()) ;
    $("#p").html(radius * radius * 22/7)

}

function setup() {
    $("#calc").click(calculate_area);
}
jQuery(document).ready(setup);