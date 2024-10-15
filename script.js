var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}


document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    performSearch();
});

function performSearch() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        const youtubeSearchURL = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        window.location.href = youtubeSearchURL; // Redirect to YouTube search results
    }
}


