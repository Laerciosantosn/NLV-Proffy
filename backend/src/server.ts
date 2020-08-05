import expres from 'express';

const app = expres();

app.use(expres.json());

app.get('/users', (request, response) => {
  return response.json({ message: 'Rota get' });
});

app.listen(3333, () => {
  console.log('🚀 Server is running! in Localhost: 3333');
});
