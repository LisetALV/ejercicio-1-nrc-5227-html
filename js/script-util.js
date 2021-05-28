function logAccess(name){
    var hoy = new Date();
    console.log('Acceso Registrado a ' + name);
    console.log(hoy.getHours()+ ":" + hoy.getMinutes() + ":" + hoy.getSeconds());
}