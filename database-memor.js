import { randomUUID } from "crypto"

export class Databasememory {
   #video = new Map()

   list(search){
    return  Array.from(this.#video.entries())
    .map((videoTodos) => {
      const id = videoTodos[0]
      const data = videoTodos[1]

      return {
         id,
         ...data,
      }
    }).filter(video => {
      if(search){
         return video.title.includes(search)
      }

      return true
    } )
   }

   create(video){
    const videosId = randomUUID()
    
    this.#video.set(videosId, video)
   }

   update(id, video){
      this.#video.set(id, video)
   }

     delete(id){
        this.#video.delete(id)
     }
}