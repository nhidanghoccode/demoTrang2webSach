document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".searchInput");
    const searchButton = document.querySelector(".search-btn");
    const items = document.querySelectorAll(".container__product-item");

    searchButton.addEventListener("click", function () {
        const searchText = searchInput.value.toLowerCase();

        items.forEach(function (item) {
            const heading = item.querySelector(".container__product-heading").textContent.toLowerCase();
            if (heading.includes(searchText)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
