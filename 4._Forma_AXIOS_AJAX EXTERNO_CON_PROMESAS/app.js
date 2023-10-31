//EMPEZAMOS CON FUNCION AUTOEJECUTABLE
(()=>{

    const $axios = document.getElementById("axios"),
    $fragment = document.createDocumentFragment();
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((resultado)=>{
        let json = resultado.data;
        json.forEach(element => {
            const $li = document.createElement("li");
            $li.innerHTML = `<p>${element.name}, ${element.phone}</p>`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch((err)=>{
        console.log("Error tipo: ", err.message);
    });
})();