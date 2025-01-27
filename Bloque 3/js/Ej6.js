function calcularTotal() {
    let SeleccionarPizza=document.getElementById("SeleccionarPizza");
    let precioPizza=SeleccionarPizza.value;
    let cantidad=parseInt(document.getElementById("cantidad").value);
    let total=precioPizza*cantidad;
    document.getElementById("total").value=total;
}