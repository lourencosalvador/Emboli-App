import { randomUUID } from "crypto"
import sql from "./db.js"

export class DatabasePostGres {

   async list(search){
      let videos

    if(search){
        videos = await sql`select * from videos where title ilike "%${search}%"`
    } else{
        videos = await sql`select * from videos`
    }

    return videos
   }

   async create(video){
    const videosId = randomUUID()

    const {
        title,
        description,
        duration
    } = video

    await sql`insert into videos (id, title, description, duration) VALUES (${videosId}, ${title}, ${description}, ${duration})`
   }

   update(id, video){
     
   }

     delete(id){
       
     }
}