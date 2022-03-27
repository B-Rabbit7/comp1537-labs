current_page_id = 1;
results_array = null;
max_page = null;
page_size = null;
last_movie = 3;
//last page needs to be global


function paginate_buttons(){
    $("#page_buttons").empty();
    page_size = Number($("option:selected").val());
    // console.log(results_array);
    max_page = Math.ceil(results_array.results.length / page_size);
    for(i=1; i<= max_page; i++){
        x = `<button id = "${i}" class = "numbered">${i}</button>`
        $("#page_buttons").append(x)
    }
    $("#first").show();
    $("#last").show();
}

function populate_array(data){
    results_array = data;
    show_movies1();
}

// function show_movies(data){
//     //empty the page before populating new material
//     $("#main").empty();
//     $("#expand").empty();
//     //set data to an array so we can access the items in it easier
//     results_array = data;
//     //get the page size value from list size
//     page_size = Number($("option:selected").val());
//     //determine the index of the first movie to be listed according to page size
//     first_movie = (current_page_id - 1) * page_size;
//     //determine the index of the last movie to be listed according to page size
//     last_movie = current_page_id * page_size - 1;
//     //loop through the array according to respective indices
//     for(i = first_movie; i <= last_movie; i++){
//         //get the movie title according to i
//         x = results_array.results[i].original_title + '<br>';
//         //get the movie description according to i
//         y = results_array.results[i].overview + '<br>';
//         //get the movie poster according to i
//         image = results_array.results[i].poster_path;
//         //get the image of the poster from source
//         z = `<img src="http://image.tmdb.org/t/p/w500/${image}">`
//         //populate the section with a button to show the backdrop poster once cliked - expand class
//         h = `<input type="submit" class= "expand" id=${results_array.results[i].backdrop_path} value="View Poster"></input>`
//         //append all items needed to the html section with main id
//         $("#main").append( + x + y + z + h + '<hr>');
//     }
//     paginate_buttons();
// }

//function to run without repopulating results_array
function show_movies1(){
    //empty the page before populating new material
    $("#main").empty();
    $("#expand").empty();
    //set data to an array so we can access the items in it easier
    // results_array = data;
    //get the page size value from list size
    page_size = Number($("option:selected").val());
    //determine the index of the first movie to be listed according to page size
    first_movie = (current_page_id - 1) * page_size;
    //determine the index of the last movie to be listed according to page size
    last_movie = current_page_id * page_size - 1;
    //loop through the array according to respective indices
    for(i = first_movie; i <= last_movie; i++){
        //get the movie title according to i
        x = (i+1 + '. ' ) + results_array.results[i].original_title + '<br>';
        //get the movie description according to i
        y = results_array.results[i].overview + '<br>';
        //get the movie poster according to i
        image = results_array.results[i].poster_path;
        //get the image of the poster from source
        z = `<img src="http://image.tmdb.org/t/p/w500/${image}">`
        //populate the section with a button to show the backdrop poster once cliked - expand class
        h = `<input type="submit" class= "expand" id=${results_array.results[i].backdrop_path} value="View Poster"></input>`
        //append all items needed to the html section with main id
        $("#main").append( x + y + z + h + '<hr>');
    }
    paginate_buttons();
}

function get_movie_data() {
    //ajax
    y = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1&query=${y}`,
        "type": "GET",
        "success": populate_array

    })
    $("#page_buttons").show();
}

function expand(){
    g = $(this).attr("id");
    console.log( g)
    $("#expand").html(`<img src="https://image.tmdb.org/t/p/original${g}" width = "400%">`)
}
function test(){
    x = $(this).attr("id")
    current_page_id = Number(x);
    show_movies1();
    $("#prev").show();
    $("#next").show();
}

function first(){
    current_page_id = 1
    show_movies1();
    // $("#result").html(`<h1> Display(${current_page_id}, ${page_size})</h1>`)
}
function last(){
    current_page_id = Math.ceil(results_array.results.length / page_size);
    show_movies1();
    // $("#result").html(`<h1> Display(${current_page_id}, ${page_size})</h1>`)
}
function prev(){
    if(current_page_id > 1)
        current_page_id--;
    show_movies1();
        // $("#result").html(`<h1> Display(${current_page_id}, ${page_size}) </h1>`);

}

function next(){
    if(current_page_id < Math.ceil(results_array.results.length / page_size))
        current_page_id++;
    show_movies1();
    // $("#result").html(`<h1> Display(${current_page_id}, ${page_size}) </h1>`);  
}
function page_size_changed(){
    current_page_id = 1;
    console.log(results_array)
    page_size  = Number($(this).val());
    paginate_buttons();
    show_movies1();
}

function setup() {
    //executed when the user presses the searchmovies button
    $("#searchmovie").click(get_movie_data);
    //exdcutes when the user wants to see the backdrop image of a movie
    $('body').on("click", ".expand", expand);
    //executes when user clicks on a paginated button with numbered class
    $('body').on("click", ".numbered", test)
    $("#first").click(first);
    $("#last").click(last);
    // $('.numbered').hide();
    $("#first").hide();
    $("#last").hide();
    $("#prev").click(prev);
    $("#next").click(next);
    $("#prev").hide();
    $("#next").hide();
    $("#page_buttons").hide();
    // making the page change dynamic
    $("#page_size").change(page_size_changed);

}
$(document).ready(setup)

