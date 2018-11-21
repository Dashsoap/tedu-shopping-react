import * as proxy from 'http-proxy-middleware';
import * as Bundler from 'parcel-bundler';
import * as express from 'express';

const bundler = new Bundler('index.html');

const app = express();

app.use(
	'/api',
	proxy({
        target: 'http://tedu.sxyori.com',
        changeOrigin: true
	})
);

app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234), () => {
	console.log('Server running at http://localhost:1234');
});
