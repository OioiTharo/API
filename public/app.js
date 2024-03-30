fetch('http://localhost:8080/hoteis')
    .then(response => response.json())
    .then(data => {
        const hoteisList = document.getElementById('hoteis-list');
        data.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.innerHTML = `
                <div class="container">
                    <img src="${hotel.foto}" alt="${hotel.nome}" style="width:500px">
                    <h2>${hotel.nome}</h2>
                    <p><strong>Descrição:</strong> ${hotel.descricao}</p>
                    <p><strong>Local:</strong> ${hotel.local}</p>
                    <p><strong>Valor:</strong> ${hotel.valor}</p>
                </div>
            `;
            hoteisList.appendChild(hotelDiv);
        });
    })
    .catch(error => console.error('Erro ao carregar os hotéis', error));
