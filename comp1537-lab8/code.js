function success_data(data) {
    for (let i = 0; i < data.results.length; i++) {
        console.log(data);
        x = data.results[i].original_title + '<br>';
        y = data.results[i].overview + '<br>';
        image = data.results[i].poster_path;
        z = `<img src="http://image.tmdb.org/t/p/w500/${image}">`
        h = `<input type="submit" class= "expand" id=${data.results[i].backdrop_path} value="View Poster"></input>`
        $("#main").append('<ol><li>' + x + y + z +  '</li></ol>'+ h + '<hr>')

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

function expand(){
    g = $(this).attr("id");
    $("#expand").html(`<img src="https://image.tmdb.org/t/p/original${g}" width = "400%">`)
}

function setup() {
    $("#searchmovie").click(get_movie_data);
    $('body').on("click", ".expand", expand);
}
$(document).ready(setup)