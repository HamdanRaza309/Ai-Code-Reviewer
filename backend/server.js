import app from "./src/app.js";



app.get('/', (req, res) => {
    res.send('Hamdan Raza')
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
})