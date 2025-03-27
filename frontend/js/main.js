
document.getElementById('search-btn').addEventListener('click', async function () {
        const query = document.getElementById('search-input').value;
        if (!query) {
            alert('Por favor, insira uma palavra-chave');
            return;
        }

        try {
            const response = await fetch(`http://localhost:3333/api/scrape?keyword=${query}`, {
            method: 'GET',
            });

            if (response.ok) {
                const data = await response.json();
                displayResults(data);
            } else {
               console.error('Erro na requisição:', response.status);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            alert('Erro de conexão com o servidor');
        }
});

function displayResults(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (data && data.length > 0) {
        data.forEach(item => {
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('result');
        
        resultDiv.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p><strong>Nota de avaliação:</strong> ${item.rating}</p>
            ${item.badge ? `<p class="badge">${item.badge}</p>` : ''}
            ${item.reviews ? `<p><strong>Avaliações:</strong> ${item.reviews}</p>` : ''}
        `;
        
        resultsContainer.appendChild(resultDiv);
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }
}