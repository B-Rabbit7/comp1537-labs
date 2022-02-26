function calculate_area() {
    console.log("calculate_area () got called")
    r = parseInt(jQuery("#x").val()) ;
    jQuery("#p1").html(r * r * 22/7)

}

function setup() {
    jQuery("#calc").click(calculate_area);
}
jQuery(document).ready(setup);