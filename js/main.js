
const productos = [
    { nombre: "Alfajores", precio: 250 },
    { nombre: "Caramelos", precio: 10 },
    { nombre: "Gomitas", precio: 100 },
    { nombre: "Chocolates", precio: 150 },
    { nombre: "Bebidas energéticas", precio: 400 },
    { nombre: "Agua", precio: 120 },
    { nombre: "Gaseosas", precio: 280 },
    { nombre: "Jugos", precio: 170 },
    { nombre: "Marlboro", precio: 500 },
    { nombre: "Camel", precio: 600 },
    { nombre: "Chesterfield", precio: 300 },
    { nombre: "Lucky Strike", precio: 450 }
  ];
  
  function calculoMonto(productoIndex, cantidad) {
    const producto = productos[productoIndex];
    if (producto) {
      return producto.precio * cantidad;
    } else {
      alert("Opción no válida");
      return 0;
    }
  }
  
  function ingresarOpcion() {
    const opciones = [
      "Comprar golosinas",
      "Comprar bebidas",
      "Comprar cigarrillos",
      "Cargar SUBE"
    ];
  
    let opcion = Number(prompt(`Bienvenido a Kioskito De Maní! Presione lo que necesite para continuar\n${opciones.map((o, index) => `${index + 1}. ${o}`).join("\n")}`));
  
    if (opcion > opciones.length || opcion < 1) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
      return null;
    } else {
      return opcion;
    }
  }
  
  let opcionSeleccionada = ingresarOpcion();
  
  if (opcionSeleccionada === 1) {
    function golosinas() {
      const opcionesGolosinas = [
        "Alfajores",
        "Caramelos",
        "Gomitas",
        "Chocolates"
      ];
  
      let golosina = Number(prompt(`¿Qué golosina está buscando?\n${opcionesGolosinas.map((g, index) => `${index + 1}. ${g}`).join("\n")}`));
  
      if (golosina < 1 || golosina > opcionesGolosinas.length) {
        alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
      } else {
        return golosina - 1;
      }
    }
  
    let golosinaSeleccionada = golosinas();
  
    let cantidad = Number(prompt("Seleccione la cantidad que desee"));
    let monto = calculoMonto(golosinaSeleccionada, cantidad);
    alert("El monto a pagar es de: $" + monto);
    alert ("Elija un metodo de pago")

  } else if (opcionSeleccionada === 2) {
    function bebidas() {
      const opcionesBebidas = [
        "Bebidas energéticas",
        "Agua",
        "Gaseosas",
        "Jugos"
      ];
  
      let bebida = Number(prompt(`¿Qué bebida está buscando?\n${opcionesBebidas.map((b, index) => `${index + 1}. ${b}`).join("\n")}`));
  
      if (bebida < 1 || bebida > opcionesBebidas.length) {
        alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
      } else {
        return bebida + 4;
      }
    }
  
    let bebidaSeleccionada = bebidas();
  
    let cantidad = Number(prompt("Seleccione la cantidad que desee"));
    let monto = calculoMonto(bebidaSeleccionada, cantidad);
    alert("El monto a pagar es de: $" + monto);
    alert ("Elija un metodo de pago")
    
  } else if (opcionSeleccionada === 3) {
    function cigarrillos() {
      const opcionesCigarrillos = [
        "Marlboro",
        "Chesterfield",
        "Camel",
        "Lucky Strike"
      ];
  
      let cigarrillo = Number(prompt(`¿Qué marca de cigarrillo está buscando?\n${opcionesCigarrillos.map((c, index) => `${index + 1}. ${c}`).join("\n")}`));
  
      if (cigarrillo < 1 || cigarrillo > opcionesCigarrillos.length) {
        alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
      } else {
        return cigarrillo + 8;
      }
    }
  
    let cigarrilloSeleccionado = cigarrillos();
  
    let cantidad = Number(prompt("Seleccione la cantidad que desee"));
    let monto = calculoMonto(cigarrilloSeleccionado, cantidad);
    alert("El monto a pagar es de: $" + monto);
    alert ("Elija un metodo de pago")

  } else if (opcionSeleccionada === 4) {
    function cargarSUBE() {
      let sube = Number(prompt("Ingrese el monto que desea cargar a la SUBE:"));
      return sube;
    }
    let montoCargaSUBE = cargarSUBE();
    alert("El monto a pagar es de: " + montoCargaSUBE );
    alert ("Elija un metodo de pago")
  }

  

  function pago() {
    const metodosPago = [
      "Efectivo",
      "Mercado Pago",
      "Crédito/Débito"
    ];
  
    const container = document.getElementById("metodo-pago-container");
  
    metodosPago.forEach((metodo, index) => {
      const button = document.createElement("button");
      button.textContent = metodo;
      button.addEventListener("click", () => {
        if (index === 0) {
          alert("Págale al vendedor. ¡Muchas gracias por su compra!");
        } else if (index === 1) {
          alert("Pídale al vendedor el QR. ¡Muchas gracias por su compra!");
        } else if (index === 2) {
          alert("Pásele la tarjeta al vendedor. ¡Muchas gracias por su compra!");
        } else {
          alert("Opción no válida");
        }
      });
  
      container.appendChild(button);
    });
  }
  
  pago();
  