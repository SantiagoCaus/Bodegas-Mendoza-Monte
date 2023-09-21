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
const Vino1= new Vino(1,"Finca Gabriel" , "Espumante", 3300, "../IMG/finca-gabriel-brut-nature-espumante.jpg" )
const Vino2= new Vino(2,"Finca Gabriel", "Espumante", 3300, "../IMG/finca-gabriel-espumante-demiSec.jpeg" )
const Vino3= new Vino(3,"Finca Gabriel", "Cabernet", 2160, "../IMG/finca-gabriel-cabernet-roble.png" )
const Vino4= new Vino(4,"Finca Gabriel", "Roble", 2160, "../IMG/finca-gabriel-merlot-roble.png" )
const Vino5= new Vino(5,"Finca Gabriel", "Roble", 2160, "../IMG/finca-gabriel-syrah-roble.png" )
const Vino6= new Vino(6,"Finca Gabriel", "Roble", 3300, "../IMG/finca-gabriel-tempranillo-roble.png" )
const Vino7= new Vino(7,"Privado", "Roble", 3840, "../IMG/privado-chardonnay-roble.jpeg" )
const Vino8= new Vino(8,"Privado", "Roble", 3840, "../IMG/privado-malbec-roble.png" )
const Vino9= new Vino(9,"Privado", "Roble", 3840, "../IMG/privado-tempranillo-roble.jpg" )
const Vino10= new Vino(10,"Mil Vientos", "Malbec", 6200, "../IMG/milVientos-malbec.png" )
const Vino11= new Vino(11,"Mil Vientos", "Cabernet", 3900, "../IMG/milVientos-cabernet-sauvignon.png" )
const Vino12= new Vino(12,"Mil Vientos", "Dulce", 3900, "../IMG/milVientos-malbec-rose.png" )
const Vino13= new Vino(13,"Mil Vientos", "Dulce", 3900, "../IMG/milVientos-torrontes-dulce-natural.png" )
const Vino14= new Vino(14,"Finca Gabriel", "Roble", 2400, "../IMG/finca-gabriel-chardonnay-roble.png" )
const Vino15= new Vino(15,"Finca Gabriel", "Dulce", 2400, "../IMG/finca-gabriel-dulce-natural.jpg" )
const Vino16= new Vino(16,"Finca Gabriel", "Malbec Roble", 2160, "../IMG/finca-gabriel-malbec-roble.png" )
const Vino17= new Vino(17,"Finca Gabriel", "Tinto Tardio Edicion Especial", 2880, "../IMG/finca-gabriel-tintoTardio.jpeg" )
const Vino18= new Vino(18,"Finca Gabriel", "Dulce", 2800, "../IMG/finca-gabriel-rose.jpg" )
const Vino19= new Vino(19,"Privado", "Espumante", 3300, "../IMG/finca-gabriel-brut-nature-espumante.jpg" )
const Vino20= new Vino(20,"Tucumen", "Malbec", 1950, "../IMG/tucumen-malbec.jpg" )
const Vino21= new Vino(21,"Siempre Tengo Un Plan B", "Malbec", 1800, "../IMG/stupb-malbec.jpeg" )
const Vino22= new Vino(22,"Sinergia", "Malbec", 1647, "../IMG/sinergia-malbec.jpg" )
const Vino23= new Vino(23,"Marginal", "Licoroso", 4560, "../IMG/marginal-tintoLicoroso.png" )
const Vino24= new Vino(24,"Viejo Gabriel", "Cognac", 15480, "../IMG/cognac-viejoGabriel.jpeg" )
const Vino25= new Vino(25,"Premiado", "Malbec", 1900, "../IMG/premiado-malbec.jpg" )


const stock =[]
stock.push(Vino1, Vino2, Vino3, Vino4, Vino5, Vino6, Vino7,Vino8,Vino9, Vino10, Vino11, Vino12, Vino13,Vino14, Vino15, Vino16, Vino17,Vino18, Vino19, Vino20,Vino21,Vino22,Vino23,Vino24,Vino25)

let divProductos = document.getElementById("productos")
stock.forEach((vino)=>{
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<div id="${vino.id}"class="card" style="width: 18rem;">
    <img src="../img/${vino.imagen}" class="card-img-top" alt="...">
    <div class="card-body">

        <h5 class="card-title fs-2 py-3">${vino.marca}</h5>
        <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style="height: 1px;">
    <div class="progress-bar bg-danger" style="width: 100%"></div>
    </div>

        <p class="tipo fs-4 py-3">${vino.tipo}.</p>

        <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"  style="height: 1px;">
    <div class="progress-bar bg-danger" style="width: 100%"></div>
    </div>
        
        <p class="text-success precio fs-3 py-2"> $${vino.precio} </p>
        <button class="btn btn-danger carrito">Agregar al carrito</button>
    </div>
    </div>`
divProductos.append(nuevoProducto)

})

let carrito = document.getElementsByClassName("carrito")
for (let compra of carrito) {
    compra.addEventListener("click", () => {
        // Usa SweetAlert en lugar de `alert`
        Swal.fire({
            title: 'Agregado al Carrito!',
            icon: 'success', // Cambia el icono según tus preferencias
            confirmButtonText: 'OK'
        });
    });
}