function success_data(data){
    console.log(data);
    $("#city_temperature").html(data.main.temp);
    $("#p1").html(data.weather[0].description);
    x = data.weather[0].icon;
    console.log(x)
    $("#img1").attr("src", `http://openweathermap.org/img/wn/${x}@2x.png`)

}

function get_weather_data() {
    //ajax
    y = $("#city_name").val();
    $.ajax(
        {
            "url":`https://api.openweathermap.org/data/2.5/weather?q=${y}&appid=5e41d51bbe2eeb128786cc4138681690`,
            "type": "GET",
            "success": success_data

    })
}

function setup() {
    $("#get_temperature_button").click(get_weather_data);
}
$(document).ready(setup)

