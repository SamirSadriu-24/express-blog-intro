import express from 'express'

const app = express();
app.use('/images', express.static('images'));

app.get('/', (req, res) => res.send('server del mio blog'));
app.listen(3000, () => console.log('Server attivo su http://localhost:3000'));

const blogPost = [
    {
        id: 1,
        titolo: "Come fare un Ciambellone",
        contenuto: "Ricetta per fare un ciambellone a prova di ospite schizzinoso!",
        image: "images/ciambellone.jpeg"
    },
    {
        id: 2,
        titolo: "Cracker di Barbabietole!",
        contenuto: "Ricetta per fare un cracker gustoso e veloce!",
        image: "images/cracker_barbabietola.jpeg"
    },
    {
        id: 3,
        titolo: "Pane Fritto Dolce",
        contenuto: "Ricetta con ingredienti semplici ma gustosi!",
        image: "images/pane_fritto_dolce.jpeg"
    },
    {
        id: 4,
        titolo: "Come fare la pasta Rosa!",
        contenuto: "Ricetta per una pasta rosa ma buonissima!",
        image: "images/pasta_barbabietola.jpeg"
    },
    {
        id: 5,
        titolo: "Torta Paesana",
        contenuto: "Ricetta del contadino, invidiata dal re!!",
        image: "images/torta_paesana.jpeg"
    }

]

app.get('/blogs', (req, res) => {
    const blogHtml = blogPost.map(post => {
        return `
            <div>
                <h2>${post.titolo}</h2>
                <p>${post.contenuto}</p>
                <img src="${post.image}" alt="${post.titolo}" width="400" height="250">
            </div>
        `;
    }).join('');

    res.send(`
           <html>
      <head>
        <title>Blog</title>
      </head>
      <body>
        <h1>Benvenuto nel mio Blog!</h1>
        ${blogHtml}
      </body>
    </html>
        `);
});

app.get('/bacheca', (req,res) => {
    res.json(blogPost)
});

