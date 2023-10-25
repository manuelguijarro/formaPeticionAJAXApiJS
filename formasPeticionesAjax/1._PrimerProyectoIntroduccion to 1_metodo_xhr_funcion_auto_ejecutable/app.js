/*
ESTA MANERA DE CONSUMIR DE UNA API ES CON UNA FUNCION AUTOEJECUTABLE QUE SI INICIA 
LA PRIMERA CUANDO CARGAMOS LA PAGINA
*/
(()=>{
    //Creamos una instancia del objeto XMLHttpRequest
    const xhr = new XMLHttpRequest(),
    $xhrList = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();//Para optimizar el manejo de los nodos en el DOM
    //este evento "readystatechange" detecta cualquier cambio posible.. 1 , 2 , 3 , 4.
    xhr.addEventListener("readystatechange", (e) =>{
        if(xhr.readyState !== 4) return;
        
        if(xhr.status >= 200 && xhr.status < 300){
            //Mostramos el codigo de exito en nuestra conexion
            console.log("Exito en la conexion, numero de codigo http/https: ",xhr.status);
           
            //pasamos datos de json a javascript en forma de Arreglo si son varios o objeto
            let json = JSON.parse(xhr.responseText);
            
            //Recorremos el arreglo y manimulamos el objeto accediendo a el con un forEach
            json.forEach(element => {
                //Se utiliza el elemento html li porque vamos a insertar cada elemento del
                //array en un item list.
                const $li = document.createElement("li");
                $li.innerHTML = `<p>Nombre: ${element.name}, Email: ${element.email}, teléfono: ${element.phone}.</p>`;
               //utilizamos fragmentos para no insertar directamente en el html y estar mandando peticiones 
               //constantemente al Dom

                $fragment.appendChild($li);
            });
            
            //Una vez terminado el ForEach insertamos el fragmento en la Lista ordenada
            $xhrList.appendChild($fragment);
        }else{
            //este mensaje es para obtener el codigo de error y el mensaje de el error, depende de la api puede
            // ser un String "" o con mensaje.
            console.warn("Error en la conexion, numero de codigo http: ", xhr.status ," mensaje de error: ",xhr.statusText);
            const mensajeError ="Error en la conexion, numero de codigo http/https: "+ xhr.status +" mensaje de error: "+xhr.statusText;
            $xhrList.innerHTML = mensajeError;
        }
    });
    //De esta manera lo acemos accediendo a la url
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    /*
    De esta manera lo acemos accediendo al json(local) previamente
     importado de la url de la api(la carpeta assets es para recursos)
    xhr.open("GET","assets/users.json");
*/
    xhr.send();
    
})();