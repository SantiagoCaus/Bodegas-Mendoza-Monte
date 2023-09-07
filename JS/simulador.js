//Segunda entrega Simulacion 

//un condicional 
//ciclo de repeticion
//una funcion
//un array de objetos literales, creados con funcion constructora o con class
//metodo de orden superior // find, filter, map etc

// Object Vino

console.table(bebidas);

class Bebida {
  constructor(id, marca, tipo, precio, imagen) {
    this.id = id;
    this.marca = marca;
    this.tipo = tipo;
    this.precio = precio;
    this.imagen = imagen;
  }
}



// Crear instancias de Bebida a partir de los datos

const bebidasInstancias = bebidas.map(data => new Bebida(data.id, data.marca, data.tipo, data.precio, data.imagen));

// Función para buscar bebidas por marca

function buscarBebidaPorMarca(marca) {
  return bebidasInstancias.filter(bebida =>
    bebida.marca.toLowerCase() === marca.toLowerCase()
  );
}

// Función para buscar bebidas por tipo
function buscarBebidaPorTipo(tipo) {
  return bebidasInstancias.filter(bebida =>
    bebida.tipo.toLowerCase() === tipo.toLowerCase()
  );
}

// Función para simular la compra de bebidas
function CompraDeBebidas() {
  alert("¡Bienvenido a la compra de bebidas!");

  let totalCompra = 0;
  let carrito = [];

  let cantidadBebidas = parseInt(prompt("¿Cuántas bebidas desea comprar?"));

  for (let i = 0; i < cantidadBebidas; i++) {
    let marca = prompt(`Ingrese la marca de la bebida #${i + 1}:`);
    let tipo = prompt(`Ingrese el tipo de la bebida #${i + 1}:`);

    let bebidasPorMarca = buscarBebidaPorMarca(marca);
    let bebidasPorTipo = buscarBebidaPorTipo(tipo);

    let bebidasEncontradas = bebidasPorMarca.filter(bebida =>
      bebidasPorTipo.some(bebidaTipo => bebidaTipo.id === bebida.id)
    );

    if (bebidasEncontradas.length > 0) {
      if (bebidasEncontradas.length === 1) {
        let bebidaSeleccionada = bebidasEncontradas[0];
        carrito.push(bebidaSeleccionada);
        alert(bebidaSeleccionada.marca + " " + bebidaSeleccionada.tipo + " agregado al carrito.");
      } else {
        bebidasEncontradas.forEach(bebida => {
          alert(bebida.id + ": " + bebida.marca + " " + bebida.tipo + " - $" + bebida.precio.toFixed(2));
        });

        // let idSeleccionado = parseInt(prompt("Ingrese el ID de la bebida que desea comprar:"));
        
        let bebidaSeleccionada = bebidasEncontradas.find(bebida => bebida.id === idSeleccionado);

        if (bebidaSeleccionada) {
          carrito.push(bebidaSeleccionada);
          alert(bebidaSeleccionada.marca + " " + bebidaSeleccionada.tipo + " agregado al carrito.");
        } else {
          alert("ID de bebida no válido. Por favor, seleccione una bebida válida.");
        }
      }
    } else {
      i--; // Restar 1 al contador para repetir la solicitud.
    }
  }

  // Calcular el total de la compra
  totalCompra = carrito.reduce((total, bebida) => total + bebida.precio, 0);

  // Mostrar el carrito y el total de la compra
  console.log("Carrito de compras:");
  carrito.forEach(bebida => console.log(bebida.marca, bebida.tipo, "$" + bebida.precio.toFixed(2)));
  console.log("Total de la compra: $" + totalCompra.toFixed(2));

  alert("Resumen de la compra:\nTotal de la compra: $" + totalCompra.toFixed(2) + "\n¡Compra realizada!");
}

// Llamamos a la función para simular la compra de bebidas
CompraDeBebidas();










    