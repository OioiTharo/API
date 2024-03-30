fetch('http://localhost:8080/hoteis')
    .then(response => response.json())
    .then(data => {
        const hoteisList = document.getElementById('hoteis-list');
        data.array.forEach(hotel => {
            const hotelDiv = document.createElement('div');
            hotelDiv.innerHTML = `
                <img src="${hotel.foto}" alt="${hotel.nome}" style="width:100px">
                <div class="container">
                    <h2>${hotel.nome}</h2>
                    <p><strong>Descrição:</strong> ${hotel.descricao}</p>
                    <p><strong>Local:</strong> ${hotel.local}</p>
                    <p><strong>Valor:</strong> ${hotel.valor}</p>
                </div>
            `;
            hoteisList.appendChild(hotelDiv);
        });
    })
    .catch(eror => console.error('Erro ao carregar os hoteis', error));