//EMPEZAMOS CON FUNCION AUTOEJECUTABLE
(()=>{

    const $axiosAsync = document.getElementById("axios-async"),
    $fragment = document.createDocumentFragment();
    async function getData(){
        //las funciones asyncronas trabajan con la estructura
        //try catch
        try {
            let resultado = await axios.get("https://jsonplaceholder.typicode.com/users"),
            json = await resultado.data;


            json.forEach(element => {
                const $li = document.createElement("li");
                $li.innerHTML = `<p>${element.name}, ${element.phone}</p>`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch (error) {
            let mensajeError = "tipo de error: " + error.message;
            $axiosAsync.innerHTML = `<p>${mensajeError}</p>`;
        }
    }
    
    
    getData();
})();