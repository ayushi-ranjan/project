document.addEventListener("DOMContentLoaded", function() {

    var searchInput = document.getElementById("search");


    searchInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            
            var searchValue = searchInput.value;
            
            console.log(searchValue);
            
        }
    });
});