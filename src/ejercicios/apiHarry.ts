interface Post {
    UserId:number;
    id:number;
    title:string;
    body:string;
}
let posts:Post[] = [];
async function getPostArray(): Promise<Post[]> {
    const URL_POST = `https://jsonplaceholder.typicode.com/posts/`
    let respuesta: Response = await fetch(URL_POST)
    let data = (await respuesta.json() as Post[]); 
    return data
}

 getPostArray().then((datos:Post[])=>{console.log(datos)}).catch((e:Error)=>{console.log(e.message)});
 
 
posts = await getPostArray();
let sumaTotalId:number = posts.reduce((acc:number,act:Post)=>acc+act.id,0)
let cantidadId:number = posts.length
console.log("objeto enetero ",posts[0]);
console.log("titulo "+posts[0].title);

console.log("longitud "+posts.length);
console.log(sumaTotalId);
console.log(cantidadId/sumaTotalId);



export { };
