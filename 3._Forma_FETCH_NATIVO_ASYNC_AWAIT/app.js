//EMPEZAMOS CON FUNCION AUTOEJECUTABLE
(()=>{

    const $fetchAsync = document.getElementById("fetch-async"),
    $fragment = document.createDocumentFragment();
    //Primero nos creamos una funcion asyncrona para usar await
    //entramos el fetch para obtener los datos
    async function getData(){
        //Se crea la estructura tryCatch para manejar el error
        try {
            //utilizamos el await
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users"),
            //volvemos a usar el await para que espere el resultado y luego obtener
            //el JSON
            json = await respuesta.json();
            //Para validar el error acemos lo siguiente:
            //!respuesta.ok si la respuesta no es correcta, entrara y lanzara la excepcion
            //El throw es como un return, pero envia el flujo al cath y no se ejecutará mas el try
            //Creamos un objeto con las propiedades que obtenemos de respuesta y lo
            //devolvemos al cath
            if(!respuesta.ok)throw{
                status: respuesta.status,
                mensajeStatus: respuesta.statusText
            };
            
            //Luego cargamos los datos como en las otras formas 
            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `<p>${element.name}, ${element.phone}</p>`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
            console.log(respuesta,json);
        } catch (error) {
            console.log("numero de error: ", error.status,", mensaje: ", error.mensajeStatus);
            let mensajeError = "numero de error: "+ error.status+", mensaje: " + error.mensajeStatus;
            $fetchAsync.innerHTML = `<p>${mensajeError}</p>`;
        }
    }
    //Luego la llamamos
    getData();
})();