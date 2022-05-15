function resumen() {
    var cantidad = +document.getElementById("cantidad").value;
    var categoria = +document.getElementById("categoria").value;
    cantidad = validarEntero(cantidad);
    document.getElementById("total").innerHTML = cantidad * categoria;
  }
  
  function borrar() {
    document.getElementById("total").innerHTML = "";
    document.getElementById("venta").reset();
  }
  
  function validarEntero(cantidad) {
    cantidad = parseInt(cantidad);
    if (isNaN(cantidad)) {
      return "";
    } else {
      return cantidad;
    }
  }
  