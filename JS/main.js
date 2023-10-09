let imagen;


document.addEventListener("DOMContentLoaded", ()=>{
    const archivo = document.getElementById("archivo");
    const botonFile = document.getElementById("boton-file")
    botonFile.addEventListener("click", ()=>{
        archivo.click();
    });
    archivo.addEventListener("change", ()=>{
            imagen = URL.createObjectURL(archivo.files[0]);
            
    });
});


function guardarBebida(array){
    let bebidaInput = document.getElementById("tipoInput")
    let marcaInput = document.getElementById("marcaInput")
    let precioInput = document.getElementById("precioInput")
    
    if(bebidaInput.value == "" || marcaInput.value == "" || precioInput.value == "" || archivo.value == ""){

        Toastify({
            text: "Rellene todos los campos",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, red, brown )",
            },
            }).showToast();
    }else{
        
    let bebidaIngresada = new Vino (array.length+1, tipoInput.value, marcaInput.value, parseInt(precioInput.value), imagen);
    
    let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebidaIngresada.id} <div class="card" style="width: 14rem;">
    <img src="${bebidaIngresada.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${bebidaIngresada.marca}</h5>
        <p class="card-text">${bebidaIngresada.tipo}</p>
        <p class="card-text">${bebidaIngresada.precio}</p>
        
        <button id="btn-carrito${bebidaIngresada.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)

    let btnAgregar = document.getElementById(`btn-carrito${bebidaIngresada.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(bebidaIngresada)
    })

    array.push(bebidaIngresada)
    
    
    
    //reset

    bebidaInput.value = ""
    marcaInput.value = ""
    precioInput.value = "" 

    //Libreria Toastify 

    Toastify({
        text: "Bebida guardada con exito",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, blue, darkblue )",
        },
        }).showToast();
    
    

    localStorage.setItem("stock", JSON.stringify(array))
}}

let btnGuardar = document.getElementById("botonGuardar")
btnGuardar.addEventListener("click",()=>{
    guardarBebida(stock)
})



//function agregar al carrito

function agregarAlCarrito(bebida){

    let bebidaAgregada = productosEnCarrito.find((elem)=>(elem.id == bebida.id))
    if(bebidaAgregada == undefined){ 
        productosEnCarrito.push(bebida)
        sessionStorage.setItem("carrito",JSON.stringify(productosEnCarrito))
        Swal.fire({
        title : 'Ha agregado un producto',
        icon : "success",
        showCancelButton : true ,
        confirmButtonText : "Acepto",
        timer : 2000,
        confirmButtonColor : "black",
        text : `La Bebida ${bebida.marca} ha sido agregada al carrito`,
        imageHeight : 300,
        imageWidth : 300,
        imageAlt : 'No encontrada'
        })
    }else{
        Toastify({
            text: "Producto ya agregado",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "brown",
            },
            }).showToast();
        }

        

    
}



//function filter para seleccionar bebidas de un mismo tipo

function filtrarMalbec(){
    let filtroMalbec = "Malbec"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroMalbec)
    console.log(busqueda)
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)

    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    btnAgregar.addEventListener("click",()=>{
            agregarAlCarrito(vino)
    })

    
    
    
    
    }) 
}

function filtrarDulce(){
    let filtroVinoDulce = "Dulce"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroVinoDulce)
    
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    
    }) 
}

function filtrarEspumante(){
    let filtroEspumante = "Espumante"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroEspumante)
    
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
        
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    
    }) 
}

function filtrarRoble(){
    let filtroRoble = "Roble"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroRoble)
    
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    }) 
}

function filtrarCabernet(){
    let filtroCabernet = "Cabernet"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroCabernet)
    
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    }) 
}
function filtrarCognac(){
    let filtroCognac = "Cognac"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroCognac)
    
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    }) 
}
function filtrarLicoroso(){
    let filtroLicoroso = "Licoroso"
    let busqueda = stock.filter((vino)=> vino.tipo == filtroLicoroso)
    
    
    divProductos.innerHTML = ""
    busqueda.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    }) 
}




//capturando checkbox    

    let searchMalbec = document.getElementById("search-malbec")
    searchMalbec.addEventListener("click",()=>{
            filtrarMalbec()
    })

    let searchDulce = document.getElementById("search-dulce")
    searchDulce.addEventListener("click",()=>{
        filtrarDulce()
    })

    let searchChampagne = document.getElementById("search-champagne")
    searchChampagne.addEventListener("click",()=>{
        filtrarEspumante()
    })


    let searchRoble = document.getElementById("search-roble")
    searchRoble.addEventListener("click",()=>{
        filtrarRoble()
    })

    let searchCabernet = document.getElementById("search-cabernet")
    searchCabernet.addEventListener("click",()=>{
        filtrarCabernet()
    })

    let searchCognac = document.getElementById("search-cognac")
    searchCognac.addEventListener("click",()=>{
        filtrarCognac()
    })

    let searchLicoroso = document.getElementById("search-licoroso")
    searchLicoroso.addEventListener("click",()=>{
        filtrarLicoroso()
    })



    //filtro por buscador

    const inputBusqueda = document.getElementById("inputBuscador")

    const buscador = document.getElementById("search")
    buscador.addEventListener("click",()=>{
        
        filtroBusqueda()
    })

    

    //funcion de buscador
    
    function filtroBusqueda(){
        nombreBuscado = inputBusqueda.value
        let busquedaInput = stock.filter((vino)=> vino.tipo.toLowerCase() == nombreBuscado.toLowerCase())
        

        divProductos.innerHTML = ""
    busquedaInput.forEach((vino)=>{
        
        let nuevoProducto  =  document.createElement("div")
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

        <p class="${vino.precio} fs-3 fw-bold  card-text text-success">$ ${vino.precio}</p>
    
        <button id="btn-carrito${vino.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${vino.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(vino)
    })
    
    }) 


        
    }


//DOM CARRITO
let modalBody = document.getElementById("modal-body")
let parrafoCompra = document.getElementById('precioTotal') 


//finalizar compra
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

botonFinalizarCompra.addEventListener("click",()=>{
finalizarCompra()
})

function finalizarCompra(){
    
    Swal.fire({
        title : 'Esta seguro de realizar la compra?',
        icon : "info",
        showCancelButton: true,
        confirmButtonText : "Si, seguro",
        cancelButtonText : "No, no quiero",
        confirmButtonColor: 'green',
        cancelButtonColor : 'red',
        timer : 4000,
        }).then((result)=>{
            if(result.isConfirmed){
                swal.fire({
                    title: 'Compra realizada',
                    icon: 'succes',
                    confirmButtonColor: 'green',
                    text: `Muchas gracias por su compra ha adquirido nuestros productos`

                })
                
                productosEnCarrito = []
                sessionStorage.removeItem("carrito")

            }else{
                Swal.fire({
                    title:'Compra no realizada',
                    icon: 'info',
                    text: 'La compra no ha sido realizada, sus productos siguen en el carrito',
                    confirmButtonColor: 'green',
                    timer: 3000
                })
            }
        })
    

}

    

let buttonCarrito = document.getElementById(`botonCarrito`)

    buttonCarrito.addEventListener("click",()=>{

    cargarProductosCarrito(productosEnCarrito)
}) 



let productosEnCarrito = JSON.parse(sessionStorage.getItem("carrito"))|| [] 


function cargarProductosCarrito (array){
    modalBody.innerHTML = ""
    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
            <img class="card-img-top" src="./${productoCarrito.imagen}" alt="${productoCarrito.tipo}">
            <div class="card-body">
                    <h4 class="card-title">${productoCarrito.marca}</h4>
                
                    <p class="card-text text-success">$${productoCarrito.precio}</p> 
                    <button id="botonEliminar" class= "btn btn-danger"><i class="fas fa-trash-alt text-white"></i></button>
            </div>    
        
        
        </div>
`


let borrarProducto = document.getElementById(`botonEliminar`)
    let id = productoCarrito.id
        
    borrarProducto.addEventListener("click",()=>{
    let productosIndex = productosEnCarrito.find(element => element.id == id)
    
    productosEnCarrito.splice(productosIndex,1)
    sessionStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito(productosEnCarrito)
    Toastify({
        text: "Su producto se ha quitado",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "black",
        },
        }).showToast();
    
})  
})

    //calcular el total
    compraTotal(...array)

}


function compraTotal(...array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio

    },0)

    acumulador == 0 ? parrafoCompra.innerHTML = `
    <p class="d-flex justify-content-center py-4 "> <strong > No hay productos en el carrito</strong>  <i class="fa-solid fa-wine-glass-empty m-2 fs-3" style="color: #511f24;"></i> </p>
        `
        : parrafoCompra.innerHTML = `<p class="btn-success fs-2 m-4"> El total de su carrito es <strong class="text-success"</strong> $ ${acumulador} </p>`
}   