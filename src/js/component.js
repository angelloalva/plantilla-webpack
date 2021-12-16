
import '../css/component.css'
export const elemento= (nombre)=>{
    console.log("Entro aqui")
    const titulo=document.createElement('h1')
    titulo.innerHTML=`Hola ${nombre}, papichulo`
    document.body.append(titulo)
}

