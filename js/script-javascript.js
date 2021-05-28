/*Funcion que cambia el titulo de txtEjemplo y desaparece el boton*/
function changeTitle(){
    document.getElementById('txtEjemplo').innerText='Nuevo Titulo';
    document.getElementById('btnClick').remove();
    document.getElementById('txtTitulo').innerText= 'JavaScript';
}
function operar(tipo){
    alert(tipo);
    var t1 = document.getElementById('txtNumero1').value;
    var t2 = document.getElementById('txtNumero2').value;
    var n1= parseInt(t1);
    var n2 = parseInt(t2);
    document.getElementById('txtResultadoSuma').value= sumar(n1, n2);
    document.getElementById('txtResultadoResta').value= restar(n1, n2);
    document.getElementById('txtResultadoMulti').value= multiplicacion(n1, n2);
    document.getElementById('txtResultadoDivi').value= division(n1, n2);
    document.getElementById('txtDescripcion').innerHTML = tipo;
}
function sumar(n1,n2){
    console.log('sumar: '+ n1 + '+' + n2);
    var r = n1 + n2;
    return r;
}
function restar(n1,n2){
    console.log('restar: '+ n1 + '-' + n2);
    var r = n1 - n2;
    return r;
}
function multiplicacion(n1,n2){
    console.log('restar: '+ n1 + '*' + n2);
    var r = n1 * n2;
    return r;
}
function division(n1,n2){
    console.log('restar: '+ n1 + '/' + n2);
    var r = n1 / n2;
    return r;
}