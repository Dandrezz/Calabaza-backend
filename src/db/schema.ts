import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const calabaza = sqliteTable('Calabazas',{
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    autor: text('autor', {  length: 255 }).notNull(),
    puntos: integer('puntos', { mode: 'number' }),
    url: text('url', {  length: 255 }).notNull()
})