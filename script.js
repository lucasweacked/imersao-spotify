const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})

function atualizarSaudacao() {
    const saudacao = document.getElementById('greeting');
    const horaAtual = new Date().getHours();

    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao.textContent = 'Bom dia!';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao.textContent = 'Boa tarde!';
    } else {
        saudacao.textContent = 'Boa noite!';
    }
}

// Chama a função assim que a página carrega
atualizarSaudacao();