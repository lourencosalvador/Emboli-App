import { fastify  } from "fastify";
import { DatabasePostGres } from "./database-postgress.js";
// import { Databasememory } from "./database-memor.js";
const server = fastify()



const database = new  DatabasePostGres()

server.post('/emboli', async(request, reply) => {

const {title, description, duration} = request.body

   await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send();
})

server.get('/emboli', async(request, reply) => {
    const search = request.query.search
    const videos = await database.list(search)

    return videos
})

server.put('/emboli/:id', (request, reply) => {
    const {id} = request.params.id
    const {title, description, duration} = request.body
    database.update(id, {
        title,
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete('/emboli/:id', (request, reply) => {
    const id = request.params.id

    database.delete(id)

    return reply.status(204).send()
})

server.listen({
    port: 8888,
})