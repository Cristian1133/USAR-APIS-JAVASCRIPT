document.addEventListener("DOMContentLoaded", function() {
    cargarPermisosPendientes();
    setInterval(cargarPermisosPendientes, 5000);
    document.getElementById("formPermiso").addEventListener("submit", function(event) {
        event.preventDefault();
        solicitarPermiso();
    });
});

// Función para solicitar un permiso
function solicitarPermiso() {
    const idUsuario = document.getElementById("idUsuario").value;
    const motivo = document.getElementById("motivo").value;

    fetch("http://localhost:5000/api/v1/solicitar_permiso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_usuario: idUsuario, motivo: motivo })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensaje);
    })
    .catch(error => console.error("Error al solicitar permiso:", error));
}

// Función para cargar permisos pendientes (solo coordinador)
function cargarPermisosPendientes() {
    fetch("http://localhost:5000/api/v1/permisos_pendientes")
    .then(response => response.json())
    .then(data => {
        const tabla = document.getElementById("tablaPermisos");
        tabla.innerHTML = "<tr><th>ID</th><th>Usuario</th><th>Motivo</th><th>Fecha</th><th>Acción</th></tr>";
        data.forEach(permiso => {
            let fila = `<tr>
                <td>${permiso.id}</td>
                <td>${permiso.id_usuario}</td>
                <td>${permiso.motivo}</td>
                <td>${permiso.fecha_solicitud}</td>
                <td>
                    <button onclick="gestionarPermiso(${permiso.id}, 'aprobado')">Aprobar</button>
                    <button onclick="gestionarPermiso(${permiso.id}, 'rechazado')">Rechazar</button>
                </td>
            </tr>`;
            tabla.innerHTML += fila;
        });
    })
    .catch(error => console.error("Error al cargar permisos:", error));
}

// Función para aprobar o rechazar un permiso
function gestionarPermiso(idPermiso, estado) {
    fetch("http://localhost:5000/api/v1/gestionar_permiso", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_permiso: idPermiso, estado: estado })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.mensaje);
        cargarPermisosPendientes();
    })
    .catch(error => console.error("Error al gestionar permiso:", error));
} 






























// // Ejemplo de async/await
// //peticiones de api jsonplaceholder
// async function fetchData() {
//     let respuesta = await fetch('http://127.0.0.1:5000/api/v1/users');
//     let data = await respuesta.json();
//     for(let i = 0; i < data.length;i++){
//         console.log(data[i].title);
    
//         const table = document.getElementById("tabla1")
//         const tr = document.createElement("tr")
//         console.log(data[i])
//         elementos = data[i]

//             for(let [clave, valor] of Object.entries(elementos)){
//             const td = document.createElement("td")
//             td.innerHTML = valor
//             tr.appendChild(td)
//             table.appendChild(tr)//agregarle una condicioon
//     }
// }  
// }

// fetchData();