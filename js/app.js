// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação de entrada para os cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

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
