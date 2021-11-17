import express from 'express';
const app = express();
const PORT = 9124;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
