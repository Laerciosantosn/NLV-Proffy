import expres from 'express';
import cors from 'cors';
import routes from './routes';

const app = expres();

app.use(cors());
app.use(expres.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server is running! in Localhost: 3333');
});
