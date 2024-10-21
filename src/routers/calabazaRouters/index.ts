import { Hono } from 'hono';
import { Env } from '../..';
import { drizzle } from 'drizzle-orm/d1';
import { calabaza } from '../../db/schema';
import { eq } from 'drizzle-orm';

export const calabazaRouters = new Hono<{ Bindings: Env }>();

calabazaRouters.get('/', async(c) => {
    const db = drizzle(c.env.DB);
    const data = await db.select().from(calabaza)
    return c.json(data)
})

calabazaRouters.post('/', async(c) => {
    const db = drizzle(c.env.DB);
    const body = await c.req.json();
    const data = await db.insert(calabaza).values(body).returning();
    return c.json(data);
})

calabazaRouters.put('/:id', async(c) => {
    const db = drizzle(c.env.DB);
    const body = await c.req.json();
    const data = await db.update(calabaza).set(body).where(eq(calabaza.id, Number(c.req.param('id')))).returning();
    return c.json(data);
})
