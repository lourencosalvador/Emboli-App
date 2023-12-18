import { fastify  } from "fastify";
import { Databasememory } from "./database-memor.js";
const server = fastify()



const database = new Databasememory()

server.post('/emboli', (request, reply) => {

const {title, descripiton, duration} = request.body

    database.create({
        title,
        descripiton,
        duration
    })

    return reply.status(201).send();
})

server.get('/emboli', (request, reply) => {
    const videos = database.list()

    return videos
})

server.put('/emboli/:id', (request, reply) => {
    const {id} = request.params.id
    const {title, descripiton, duration} = request.body
    database.update(id, {
        title,
        descripiton,
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