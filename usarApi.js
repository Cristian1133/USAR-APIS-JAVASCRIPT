// Ejemplo de async/await
//peticiones de api jsonplaceholder
async function fetchData() {
    let respuesta = await fetch('http://127.0.0.1:5000/api/v1/users');
    let data = await respuesta.json();
    for(let i = 0; i < data.length;i++){
        console.log(data[i].title);
    
        const table = document.getElementById("tabla1")
        const tr = document.createElement("tr")
        console.log(data[i])
        elementos = data[i]

            for(let [clave, valor] of Object.entries(elementos)){
            const td = document.createElement("td")
            td.innerHTML = valor
            tr.appendChild(td)
            table.appendChild(tr)//agregarle una condicioon
    }
}  
}

fetchData();