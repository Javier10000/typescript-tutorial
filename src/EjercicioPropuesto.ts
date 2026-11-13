import { Usuario } from "./14-modulos/modelos/usuario.model";


type Geo = {
    lat:string;
    lng:string;
}
type User = {
    id:number,
    name:string,
    username:string,
    email:Gmail,
    address:Address,
    iphone:string,
    website:string,
    company:Company,
}
type Address = {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:Geo;
}

type Company = {
    name:string
    catchPharase:string
    bs:string
}
type Gmail = `${string}@${string}.${string}`
async function obtenerUsuario(id:number):Promise<User[]> {
    const Url = "https://jsonplaceholder.typicode.com/users";
    let respuestas:Response = await fetch(Url)
    if (!respuestas.ok) {
        throw new Error("no se pudieron obtener las tareas ")
        
    }
    let datos = await respuestas.json() as  User[]
    return datos
}
obtenerUsuario(1).then((usuario:User[])=> {console.dir(usuario, {depth: null})})