function success_data(data) {
    for (let i = 0; i < data.results.length; i++) {
        console.log(data);
        $("#container").append(data.results[i].original_title + '<br>');
        $("#container").append(data.results[i].overview + '<br>');
        image = data.results[i].poster_path;
        y = `<img src="http://image.tmdb.org/t/p/w500/${image}">`
        $("#container").append(y)
    }
}

function get_movie_data() {
    //ajax
    y = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1&query=${y}`,
        "type": "GET",
        "success": success_data

    })
}


function setup() {
    $("#searchmovie").click(get_movie_data);
}
$(document).ready(setup)