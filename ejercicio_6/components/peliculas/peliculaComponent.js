let peliculaComponent = {
    template: `
        <div>
            <img :src="caratula" alt="Caratula de pelicula"/>
            <h2 v-text="titulo"></h2>
            <p v-text="descrip"></p>
        </div>
    `,
    props: [
        'id',
        'titulo',
        'descrip',
        'caratula'
    ]
}