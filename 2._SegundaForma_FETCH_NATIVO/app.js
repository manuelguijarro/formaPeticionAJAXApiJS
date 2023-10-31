//EMPEZAMOS CON FUNCION AUTOEJECUTABLE
(()=>{

    const $fetch = document.getElementById("fetch"),
    $fragment = document.createDocumentFragment();


    //Le puedes pasar un segundo parametro que es un objeto con opciones
    //El metodo por defecto del objeto es GET
    //Fetch trabaja con promesas
    //El then ejecuta la parte positiva si se cumple, el catch lo contrario y 
    //finally ejecuta lo que tiene dentro siempre
    //EL then recibe un parametro que es un objeto con la respuesta HTTP si esta listo codigo 200
    //El cath recibe un parametro de error
   //tambien fetch funciona en local
   //AI QUE TENER CUIDADO USANDOLAS YA QUE PUEDE PASAR PROMISEHELL
    fetch("https://jsonplaceholder.typicode.com/users")
    /* ESTE METODO ES MAS LARGO, SE PUEDE ACER TODO EN UNA LINEA
    .then((resultado)=>{
        //En la primera promesa
        //convertimos la respuesta que nos a dado primero en JSON
        //AHORA LA DEVOLVEMOS A LA SIGUIENTE PROMESA QUE LA UTILIZARÁ
        //PARA RECHAZAR LA PROMESA EN CASO DE ERROR UTILIZAMOS UN OPERADOR TERNARIO
        return resultado.ok ? resultado.json():Promise.reject(resultado);

    })//La siguiente promesa la recibe del return como parametro en json
    *///EN UNA SOLA LINEA LA PETICION, se omite el return porque lo devuelve la arrow function
    .then((resultado) => resultado.ok ? resultado.json():Promise.reject(resultado))
    .then(json=>{
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `<p>${element.name}, ${element.phone}</p>`;
            $fragment.appendChild($li);
        });
        $fetch.appendChild($fragment);
    })
    .catch((err)=>{
        console.log("Error tipo: ",err.status, ", mensaje: ", err.satusText);
    });
})();