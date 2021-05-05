function show_page(page, id){
    $.get(page, function( data ) {
        $( "#main" ).html( data );
    });
    $(".menu").removeClass("selected");
    document.getElementById(id).classList.add("selected");
}

show_page("main.html", "home");