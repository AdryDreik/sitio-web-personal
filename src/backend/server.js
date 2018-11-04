import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../build/webpack.config';
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// middlewares client
app.use(webpackDevMiddleware(webpack(webpackConfig)));
// routes

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

// init app

app.listen(app.get('port'), () => {
  console.log('------------------------------------');
  console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
  console.log('------------------------------------');
});