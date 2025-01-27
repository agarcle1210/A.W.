function verificar(control) {
    if (control.value.length < 7 || control.value.length > 20) {
        alert('La clave debe contener entre 7-20 caracteres)');
    }
}