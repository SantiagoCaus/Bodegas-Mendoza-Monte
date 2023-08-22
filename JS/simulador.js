// Primer Preentrega Simulación

// Función para calcular el precio con el descuento

function calcularPrecioConDescuento(precio, descuento) {
  return precio - (precio * descuento / 100);
} 

// Función para simular el proceso de compra de vinos

function CompraDeVinos() {
  let numeroDeVinos = parseInt(prompt("¿Cuántos vinos desea comprar?"));
  let totalCompra = 0;
  
  for (let i = 1; i <= numeroDeVinos; i++) {
      console.log("Vino #" + i);
      
      let nombreVino = prompt("Ingrese el nombre del vino #" + i + ":");
      let precioVino = parseFloat(prompt("Ingrese el precio del vino #" + i + ":"));
      let descuento = parseFloat(prompt("Ingrese el descuento en porcentaje para el vino #" + i + " (%):"));
      
      let precioConDescuento = calcularPrecioConDescuento(precioVino, descuento);
      totalCompra += precioConDescuento;
      
      console.log("Resumen del vino #" + i + ":");
      console.log("Vino:", nombreVino);
      console.log("Precio original: $" + precioVino.toFixed(2));
      console.log("Descuento:", descuento + "%");
      console.log("Precio con descuento: $" + precioConDescuento.toFixed(2));
  }
  
  // Muestra el total de la compra

  console.log("Total de la compra: $" + totalCompra.toFixed(2));

  alert("¡Compra realizada!\nTotal de la compra: $" + totalCompra.toFixed(2));
}

// Llamamos a la función para simular la compra de vinos
CompraDeVinos();

    