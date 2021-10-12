$( document ).ready(function() 
{
   console.log( "El DOM esta listo" );
  
});





// Ingreso de información por el usuario

let entradaNombre = prompt("Ingresa tu nombre: ");

while (entradaNombre == "") {
    alert("Debes escribir tu nombre");
    entradaNombre = prompt("Ingresa tu nombre: ");
}

let entradaEdad = "";
entradaEdad = prompt("Ingresa tu edad: ");

while (entradaEdad  == "") {
    alert("Debes escribir tu edad");
    entradaEdad = prompt("Ingresa tu edad: ");
}

entradaEdad = parseInt(entradaEdad);





// Array de objetos (Base de datos de las bebidas)
const bebidas = [{id: 1, nombre: "Vino", informacion: "El vino  es una bebida obtenida de la uva mediante la fermentación alcohólica de su mosto o zumo"},
                {id: 2, nombre: "Cerveza", informacion: "La cerveza es una bebida alcohólica, no destilada, de sabor amargo, que se fabrica con granos de cebada germinados u otros cereales cuyo almidón se fermenta en agua con levadura y se aromatiza a menudo con lúpulo, entre otras plantas."},
                {id: 3, nombre: "Vodka", informacion: "El vodka es una bebida destilada. Se discute el origen de la misma aunque el nombre actual es ruso. Se produce generalmente a través de la fermentación de granos y otras plantas ricas en almidón, como el centeno, trigo, patata o remolacha." }];



// Si el ususario es menor de edad no puede ingresar a la página
if(entradaEdad < 18){
    alert("Lo siento " + entradaNombre +" pero no puedes interactuar en la página, porque eres menor de edad.")
  
    let despedidaMenor18 = document.createElement("p"); 
    $('.pantallaConsulta').append("<div><h2>Cuando tengas 18 años o más puedes volver a disfrutar de esta página.</h2></div>");
    document.body.appendChild(despedidaMenor18);
    } 



// Si el ususario es mayor de edad  puede ingresar a la página e interactuar
else {

    $('#saludo').append("¡Te doy la bienvenida " + entradaNombre +"!");
   
    $('#formConsulta').append(` <label for="bebidaEscogida">Selecciona tu bebida favorita: </label>
                                <select name="bebidaEscogida" id="bebidaEscogida" required"> 
                                <option value="1"> Vino </option>
                                <option value="2"> Cerveza </option>
                                <option value="3"> Vodka </option>
                                </select>`
                            );
    
    $('#pantallaConsulta').append("<h3>¡Aquí podrás visualizar tu consulta!</h3>");

    $("select").change(function () {
        let bebidaMostrada = " ";
        $("select option:selected").each(function() {
            bebidaMostrada += $(this).text()+" ";
        });
        // $('#pantallaConsulta').text(bebidaMostrada)
        console.log(bebidaMostrada);
        sessionStorage.setItem('bedidaSelected', bebidaMostrada);
        let bebidaConsultada  =  sessionStorage.getItem('bedidaSelected');

        switch( bebidaConsultada ){
                        case "Vino":
                           
                            $('#pantallaConsulta').append(`<h3> Bebida Consultada: ${bebidas[0].nombre}</h3>
                                                            <p>  Información: ${bebidas[0].informacion}</p>`
                                                        );

                            console.log("El usuario " + entradaNombre + " cosultó sobre vinos.")
                            bebidaEscogida = "";
                            break
                        case "Cerveza":
                            
                            $('#pantallaConsulta').append(`<h3> Bebida Consultada: ${bebidas[1].nombre}</h3>
                                                            <p>  Información: ${bebidas[1].informacion}</p>`
                                                        );                        
            
                            console.log("El usuario " + entradaNombre + " cosultó sobre cervezas.")
                            bebidaEscogida = "";
                            break
                        case "Vodka":
                            
                            $('#pantallaConsulta').append(`<h3> Bebida Consultada: ${bebidas[2].nombre}</h3>
                                                            <p>  Información: ${bebidas[2].informacion}</p>`
                                                        );
            
                            console.log("El usuario " + entradaNombre + " cosultó sobre vodkas.")
                            bebidaEscogida = "";
                            break
                                
                        }    

    })
    .change();
}

