import { truncateStringWithElipsis, formatRatingStars } from './format.js';

const errorMessageDiv = document.getElementById('errorMessageDiv');
const resultsContainer = document.getElementById('results');
const loadingContainer = document.getElementById('loading-container');

// Clear previous results and errors
function clearResultsContainer() {
    errorMessageDiv.classList.add('hide');
    resultsContainer.innerHTML = '';
}

// Show error message to user
function showErrorMessage(message) {
    document.getElementById("errorMessageSpan").innerText = message;
    errorMessageDiv.classList.remove("hide");
}

// Add loading visibility toggle
function loading(bool) {
    bool ? loadingContainer.style.display = 'flex' : loadingContainer.style.display = 'none';
}

// Handle search button click
document.getElementById('search-btn').addEventListener('click', async function () {
    clearResultsContainer();
    loading(true);

    const query = document.getElementById('search-input').value.trim();

    // Validate input
    if (!query) {
        loading(false);
        showErrorMessage('Por favor, insira uma palavra-chave');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3333/api/scrape?keyword=${encodeURIComponent(query)}`);

        const result = await response.json();

        if (response.ok) {
            displayResults(result);
        } else {
            console.error('Request error:', response.status);
            showErrorMessage(result.message || 'Erro desconhecido ao buscar dados');
        }
    } catch (error) {
        console.error('Fetch error:', error);
        showErrorMessage('Erro de conexão com o servidor');
    } finally {
        loading(false);
    }
});

// Display results from backend response
function displayResults(data) {
    if (Array.isArray(data) && data.length > 0) {
        data.forEach(item => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');

            resultDiv.innerHTML = `
                <div><img src="${item.imageUrl}" alt="${item.title}"></div>
                <h3>${truncateStringWithElipsis(item.title, 38)}</h3>
                <p class="rating">${formatRatingStars(item.rating)}</p>
                ${item.reviews ? `<p>${item.reviews} Avaliações</p>` : ''}
                ${item.badge ? `<p class="badge">${item.badge}</p>` : ''}
            `;

            resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
}

// Allow 'Enter' key to trigger search
document.getElementById('search-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('search-btn').click();
    }
});
