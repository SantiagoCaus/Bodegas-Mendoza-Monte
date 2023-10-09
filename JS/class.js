//clase constructora


class Vino{

    constructor(id, marca, tipo, precio, imagen){

//Propiedades o atributos

        this.id = id,
        this.marca = marca,
        this.tipo = tipo,
        this.precio = precio,
        this.imagen = imagen
    }

//metodos

mostrarData()
{
    console.log(`el vino se llama ${this.marca}, su aroma es ${this.tipo}, y el precio esta ${this.precio}`);
}

}

let divProductos = document.getElementById("productos")
let stock = []



const cargarStock = async ()=>{
    const res = await fetch('bebidas.json')
    const data = await res.json()
    console.log(data)
    for (let vino of data){
        let bebidaNueva = new Vino(vino.id,vino.marca,vino.tipo , vino.precio , vino.imagen)
        stock.push(bebidaNueva)
    }

    divProductos.innerHTML = ""
    for (let vino of data){
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${vino.id} <div class="card" style="width: 14rem;">
    <img src="${vino.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title fs-2 py-2">${vino.marca}</h5>
    <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style="height: 1px;">
    <div class="progress-bar bg-danger" style="width: 100%"></div>
    </div>
        <p class="tipo fs-4 py-3">${vino.tipo}.</p>
        <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style="height: 1px;">
    <div class="progress-bar bg-danger" style="width: 100%"></div>
    </div> 
    
        <p class="${vino.precio} fs-3 fw-bold card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.appendChild(nuevoProducto)


    localStorage.setItem("stock", JSON.stringify(stock))

    //Boton Carrito

    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    btnAgregar.addEventListener("click",()=>{
        agregarAlCarrito(vino)
    })
    
    }
}
cargarStock()