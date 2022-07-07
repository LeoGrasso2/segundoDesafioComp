let listaCompras=[];
let prom=0;
cant=0;
opcion=Number.parseInt(prompt('Cuantos productos quiere comprar?'));

for(let i=0;i<opcion;i++){
    listaCompras[i]= {
        nombre:prompt('Ingrese el nombre del prod n° ' + (i+1)),
        precio:Number.parseInt(prompt('Ingrese el precio del producto n°' + (i+1))),
}
}
for(let i=0;i<listaCompras.length;i++){
    alert(listaCompras[i].nombre + ": $" + listaCompras[i].precio);
    prom=prom+listaCompras[i].precio;
}
alert('El promedio de precios es de $' + prom/listaCompras.length);