//fetch para traernos datos de api`s

import { rejects } from "assert";
import { log } from "console";
import { get } from "http";

/**funcion que explica como funciona el fetch internamente */
function esperar(ms: number) {
    return new Promise<string>((resolve, reject) => {
        if (ms < 0) {
            reject(new Error(`el tiempo de espera no puede ser negativo`))
        } else {
            setTimeout(() => { resolve(`Se ha realizado una espera de ${ms} ms`) }, ms)
        }
    })
}
/**
 * pendiente
 * console.log(esperar(1000));
 */

/**
 * no puede ser negativo , salta el catch
 * esperar(-1).then((resultado:string)=>{console.log(resultado)}).catch((e:Error)=>{console.log(`se ha producido un error ${e.message}`)});
 * esperar(1000).then((resultado:string)=>{console.log(resultado)}).catch((e:Error)=>{console.log(`se ha producido un error ${e.message}`)});
 * PARA TERMINAR LA PROMESA 
 * esperar(1000).then((resultado:string)=>{console.log(resultado)}).catch((e:Error)=>{console.log(`se ha producido un error ${e.message}`)}).finally(()=>{console.log(`LA PROMESA HA TERMINADO`);
})
 */


console.log("holaMundo");
async function getDetos(): Promise<string> {
    const URL_POST = "https://hp-api.onrender.com/api/spells";
    let respuesta: Response = await fetch(URL_POST)
    let data = (await respuesta.json() as string); 
    return data
}
/**
 * para verlo
 */
getDetos().then((datos:string)=>{console.log(datos);})
/**
 * para verlo y controlar errores
 */
console.log("----------------------------");

getDetos().then((datos:string)=>{console.log(datos)}).catch((e:Error)=>{console.log(e.message);
})
interface Post {
    UserId:number;
    id:number;
    title:string;
    body:string;
}
async function getPost(id:number): Promise<Post> {
    const URL_POST = `https://jsonplaceholder.typicode.com/posts/${id}`
    let respuesta: Response = await fetch(URL_POST)
    let data = (await respuesta.json() as Post); 
    return data
}
/**
 * getPost(4).then((datos:Post)=>{console.log(datos)}).catch((e:Error)=>{console.log(e.message)});
/**
 * mostrar titulo por id 
 */
/**
 * getPost(4).then((datos:Post)=>{console.log(`el titulo del id ${datos.id} es (${datos.title})`)}).catch((e:Error)=>{console.log(e.message)});

/**
 * esta funcion va a devolver un array de datos de una api
 * @param id 
 * @returns 
 */
let posts:Post[] = [];
async function getPostArray(): Promise<Post[]> {
    const URL_POST = `https://jsonplaceholder.typicode.com/posts/`
    let respuesta: Response = await fetch(URL_POST)
    let data = (await respuesta.json() as Post[]); 
    return data
}

 getPostArray().then((datos:Post[])=>{console.log(datos)}).catch((e:Error)=>{console.log(e.message)});
 
 
posts = await getPostArray();
console.log("objeto enetero ",posts[0]);
console.log("titulo "+posts[0].title);


console.log("longitud "+posts.length);
