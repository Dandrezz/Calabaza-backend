import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { calabazaRouters } from './routers/calabazaRouters';

export type Env = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Env }>()

app.use('/api/*', cors());

app.route('/api/calabaza', calabazaRouters );

export default app  