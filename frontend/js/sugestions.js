const sugestionsDiv = document.getElementById('sugestions')

const sugestionsList =[
    "Nike",
    "Adidas",
    "Apple",
    "Samsung",
    "Asus",
    "Kindle"
]

sugestionsList.forEach(sugestion => {
    const sugestionSpan = document.createElement('span');
    sugestionSpan.classList.add('sugestion');
    sugestionSpan.innerText = sugestion;
    sugestionsDiv.appendChild(sugestionSpan);
});

document.querySelectorAll(".sugestion").forEach(sugestion => {
    sugestion.addEventListener('click', () => {
        document.getElementById('search-input').value = sugestion.innerText;
        document.getElementById('search-btn').click();
    })
})