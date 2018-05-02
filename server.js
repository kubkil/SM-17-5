const express = require('express');
const app = express();

// różnica przy takim rozwiązaniu?
// const store = (req, res, next) => {
//   console.log('Jestem pośrednikiem przy żądaniu do /store');
//   next();
// }

// const bye = (req, res, next) => {
//   console.log('Bye');
//   res.end();
// }

app.use('/store', (req, res, next) => {
  console.log('Jestem pośrednikiem przy żądaniu do /store');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

// app.use(store);

// app.get('/store', (req, res) => {
//   console.log('To jest sklep');
// }, store);

app.get('/store', (req, res) => {
  console.log('To jest sklep');
});

const server = app.listen(3000, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Przykładowa aplikacja nasłuchuje na http://${host}:${port}`);
});

app.use(express.static('assets'));

app.use((req, res, next) => {
  res.status(404).send('Page not found');
});