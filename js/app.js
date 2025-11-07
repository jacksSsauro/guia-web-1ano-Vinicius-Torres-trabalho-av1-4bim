// Banco de dados falso com músicas
const musicas = [
    {
        titulo: "Shape of You",
        artista: "Ed Sheeran",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96"
    },
    {
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
    },
    {
        titulo: "Dance Monkey",
        artista: "Tones and I",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b27348246c30c53f65c44b87d2b6"
    },
    {
        titulo: "Don't Start Now",
        artista: "Dua Lipa",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b273bd26ede1ae69327010d49946"
    },
    {
        titulo: "Watermelon Sugar",
        artista: "Harry Styles",
        capaUrl: "https://i.scdn.co/image/ab67616d0000b2734e0362c225863f6ae2432651"
    }
];

// Estado do player
let musicaAtualIndex = -1;
let isPlaying = false;

// Elementos do DOM
const listaDeMusicas = document.getElementById('lista-de-musicas');
const btnPlay = document.getElementById('btn-play');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');
const volumeControl = document.getElementById('volume-control');
const capaAtual = document.getElementById('capa-atual');
const tituloAtual = document.getElementById('titulo-atual');
const artistaAtual = document.getElementById('artista-atual');

// Função para renderizar as músicas na lista
function renderizarMusicas() {
    listaDeMusicas.innerHTML = musicas.map((musica, index) => `
        <article class="musica-card" onclick="tocarMusica(${index})">
            <img src="${musica.capaUrl}" alt="Capa de ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        </article>
    `).join('');
}

// Função para atualizar o player
function atualizarPlayer() {
    if (musicaAtualIndex >= 0) {
        const musica = musicas[musicaAtualIndex];
        capaAtual.src = musica.capaUrl;
        tituloAtual.textContent = musica.titulo;
        artistaAtual.textContent = musica.artista;
        btnPlay.textContent = isPlaying ? "⏸️" : "▶️";
    }
}

// Função para tocar música
function tocarMusica(index) {
    if (musicaAtualIndex === index) {
        // Toggle play/pause se for a mesma música
        isPlaying = !isPlaying;
    } else {
        // Trocar de música
        musicaAtualIndex = index;
        isPlaying = true;
    }
    atualizarPlayer();
}

// Event Listeners
btnPlay.addEventListener('click', () => {
    if (musicaAtualIndex >= 0) {
        isPlaying = !isPlaying;
        atualizarPlayer();
    }
});

btnAnterior.addEventListener('click', () => {
    if (musicaAtualIndex > 0) {
        musicaAtualIndex--;
        isPlaying = true;
        atualizarPlayer();
    }
});

btnProximo.addEventListener('click', () => {
    if (musicaAtualIndex < musicas.length - 1) {
        musicaAtualIndex++;
        isPlaying = true;
        atualizarPlayer();
    }
});

<<<<<<< HEAD
// Banco de dados falso de músicas
const musicas = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        capaUrl: "https://via.placeholder.com/300?text=Queen"
    },
    {
        titulo: "Imagine",
        artista: "John Lennon",
        capaUrl: "https://via.placeholder.com/300?text=Lennon"
    },
    {
        titulo: "Billie Jean",
        artista: "Michael Jackson",
        capaUrl: "https://via.placeholder.com/300?text=MJ"
    },
    {
        titulo: "Sweet Child O' Mine",
        artista: "Guns N' Roses",
        capaUrl: "https://via.placeholder.com/300?text=GNR"
    },
    {
        titulo: "Like a Rolling Stone",
        artista: "Bob Dylan",
        capaUrl: "https://via.placeholder.com/300?text=Dylan"
    },
    {
        titulo: "Smells Like Teen Spirit",
        artista: "Nirvana",
        capaUrl: "https://via.placeholder.com/300?text=Nirvana"
    }
];

// Função para renderizar os cards de música
function renderizarMusicas() {
    const container = document.getElementById('lista-de-musicas');
    
    // Limpa o container antes de renderizar
    container.innerHTML = '';
    
    // Renderiza cada música do array
    musicas.forEach(musica => {
        const musicaCard = document.createElement('div');
        musicaCard.className = 'musica-card';
        
        musicaCard.innerHTML = `
            <img src="${musica.capaUrl}" alt="Capa do álbum - ${musica.titulo}">
            <h3>${musica.titulo}</h3>
            <p>${musica.artista}</p>
        `;
        
        // Adiciona evento de clique no card
        musicaCard.addEventListener('click', () => {
            // Atualiza o player com a música selecionada
            document.querySelector('.track-name').textContent = musica.titulo;
            document.querySelector('.artist-name').textContent = musica.artista;
            document.querySelector('.album-thumb').src = musica.capaUrl;
        });
        
        container.appendChild(musicaCard);
    });
}

// Inicializa a renderização quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderizarMusicas();
});

// Adiciona funcionalidade ao botão de play
document.querySelector('.play-button').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('fa-play')) {
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
});

// Adiciona funcionalidade ao botão de like
document.querySelector('.like-button').addEventListener('click', function() {
    const icon = this.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
});
=======
volumeControl.addEventListener('input', (e) => {
    const volume = e.target.value;
    // Em um player real, aqui ajustaríamos o volume do áudio
    console.log(`Volume ajustado para: ${volume}%`);
});

// Inicializar a aplicação
renderizarMusicas();
>>>>>>> b22a687fb71a2190967cb655709fb769f25a655e
