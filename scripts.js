document.addEventListener('DOMContentLoaded', () => {

    const artistsData = [
        { name:'Ze Neto & Cristiano'  ,image: 'assets/artista-ze-neto.jpg'},
        { name:'Mateus & Kauan'  ,image: 'assets/artista-mateus-kauan.jpg'},
        { name:'Luan Santana'  ,image: 'assets/artista-luan-santana.jpg'},
        { name:'Jorge & Mateus'  ,image: 'assets/artista-jorge-mateus.jpg'},
        { name:'Henrique & Juliano'  ,image: 'assets/artista-henrique-juliano.jpg'},
        { name:'Gustavo Lima'  ,image: 'assets/artista-gustavo-limma.jpg'},
        
    ];

    const albumsData = [
        { name: 'White Noise', artist:'Sleepy John', image: 'assets/album-white-noise.jpg'},
        { name: 'Vida Loka', artist:'Racionais MC' , image: 'assets/album-vida-loka.jpg'},
        { name: 'Hit Me', artist:'Billie Eilish' , image: 'assets/album-hit-me.jpg'},
        { name: 'Escandalo intimo' , artist:'Luisa Sonza', image: 'assets/album-escandalo.jpg'},
        { name: 'Ceu Explica Tudo' , artist:'Henrique e Juliano', image: 'assets/album-ceu-explica.jpg'},
        { name: 'Caju', artist:'Liniker' , image: 'assets/album-caju.jpg'},

    ]

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
        <img src="${artist.image}" alt= "imagem do ${artist.name}" >
        <div>
            <h3>${artist.name}</h3>
            <p>Artista</p>
        </div>
        `
        
        artistGrid.appendChild(artistCard)

    })



    albumsData.forEach( album => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
        <img src="${album.image}" alt= "imagem do ${album.name}" >
        <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
        </div>
        `
        
        albumsGrid.appendChild(albumCard)

    })
})






