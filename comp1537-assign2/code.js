current_page_id = null;
results_array = null;
max_page = null;
page_size = null;


// function success_data(data) {
//     console.log(data);
//     $('.numbered').show();
//     $("#first").show();
//     $("#last").show();
//     for (let i = 0; i < data.results.length; i++) {
//         x = data.results[i].original_title + '<br>';
//         y = data.results[i].overview + '<br>';
//         image = data.results[i].poster_path;
//         z = `<img src="http://image.tmdb.org/t/p/w500/${image}">`
        
//         h = `<input type="submit" class= "expand" id=${data.results[i].backdrop_path} value="View Poster"></input>`

//         $("#main").append('<ol><li>' + x + y + z +  '</li></ol>'+ h + '<hr>');

        
//         $('#page_size').change(console.log($('#page_size').val()));

//     }
//     page_size = parseInt($('#page_size').val());
//     // max page id = math ceil, starts with 1
//     max_page_id = Math.ceil(data.results.length/page_size);
//     console.log("page id is :" + max_page_id);
//     starting_index = page_size * (max_page_id - 1)
//     console.log(starting_index)

// 
function display(current_page_id, page_size){

}
function paginate_buttons(){
    $("#page_buttons").empty();
    console.log("results array: " + results_array);
    max_page = Math.ceil(results_array.results.length / page_size);
    for(i=1; i<= max_page; i++){
        x = `<button id = "${i}" class = "numbered">${i}</button>`
        $("#page_buttons").append(x)
    }
    $("#first").show();
    $("#last").show();
}

function process_data(data){
    results_array = data;
    for(i=0; i < data.results.length; i++){
        x = data.results[i].original_title + '<br>';
        y = data.results[i].overview + '<br>';
        image = data.results[i].poster_path;
        z = `<img src="http://image.tmdb.org/t/p/w500/${image}">`
        
        h = `<input type="submit" class= "expand" id=${data.results[i].backdrop_path} value="View Poster"></input>`

        $("#main").append('<ol><li>' + x + y + z +  '</li></ol>'+ h + '<hr>');
    }

    paginate_buttons();
}
function get_movie_data() {
    //ajax
    y = $("#movie_name").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=ed4ef9b0f9bcb9c237ab83a2c2ffb909&language=en-US&page=1&query=${y}`,
        "type": "GET",
        "success": process_data

    })
    $("#page_buttons").show();
}

function expand(){
    g = $(this).attr("id");
    console.log("this is g:"+ g)
    $("#expand").html(`<img src="https://image.tmdb.org/t/p/original${g}" width = "400%">`)
}
function test(){
    x = $(this).attr("id")
    $("#result").html(`<h1> Display(${x}, ${page_size})</h1>`)
    current_page_id = Number(x);
    $("#prev").show();
    $("#next").show();
}

function first(){
    $("#result").html(`<h1> Display(1, ${page_size})</h1>`)
}
function last(){
    $("#result").html(`<h1> Display(7, ${page_size})</h1>`)
}
function prev(){
    if(current_page_id > 1)
        current_page_id--;
        $("#result").html(`<h1> Display(${current_page_id}, ${page_size}) </h1>`);

}

function next(){
    if(current_page_id < 7)
        current_page_id++;
    $("#result").html(`<h1> Display(${current_page_id}, ${page_size}) </h1>`);
    display(current_page_id, page_size);   
}
function page_size_changed(){
    page_size  = Number($(this).val())
    paginate_buttons();
}

function setup() {
    $("#searchmovie").click(get_movie_data);
    $('body').on("click", ".expand", expand);
    // console.log($('#page_size').val());
    // $('#page_size').change(page_size_change);
    $('body').on("click", ".numbered", test)
    $("#first").click(first);
    $("#last").click(last);
    $('.numbered').hide();
    $("#first").hide();
    $("#last").hide();
    $("#prev").click(prev);
    $("#next").click(next);
    $("#prev").hide();
    $("#next").hide();
    $("#page_buttons").hide();

    // making the page change dynamic
    $("select").change(page_size_changed);
    page_size = Number($("option:selected").val());

}
$(document).ready(setup)

