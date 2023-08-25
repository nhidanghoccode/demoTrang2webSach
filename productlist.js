const itemsContainer = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prevbook');
const nextButton = document.querySelector('.nextbook');

const itemsPerPage = 4;
let currentPage = 0;

function showItems(page) {
    items.forEach((item, index) => {
        if (index >= page && index < page + itemsPerPage) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

nextButton.addEventListener('click', () => {
    if (currentPage < items.length - itemsPerPage) {
        items[currentPage].style.display = 'none';
        currentPage++;
        showItems(currentPage);
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        items[currentPage].style.display = 'block';
        showItems(currentPage);
    }
});

showItems(currentPage);
