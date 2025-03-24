import express from "express";
import { engine as expressHandlebars } from "express-handlebars";

const app = express();

// configure Handlebars view engine
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

// Routes
app.get("/", (req, res) => {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

// Custom 404 page
app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
});

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}\n` +
    `Press Ctrl+C to terminate.`
));