fetch('http://localhost:8080/hotias')
    .then(response => response.json())
    .then(data => {
        const hoteisList = document.getElementById('hoteis-list');
        data.array.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.innerHTML = `
                <h2>${hotel.nome}</h2>
                <img src="${hotel.foto}" alt="${hotel.nome}">
                <p><strong>Descrição:</strong> ${hotel.descricao}</p>
                <p><strong>Local:</strong> ${hotel.local}</p>
                <p><strong>Valor:</strong> ${hotel.valor}</p>
            `;
            hoteisList.appendChild(hotelDiv);
        });
    })
    .catch(eror => console.error('Erro ao carregar os hoteis', error));