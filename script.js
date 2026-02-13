const aprendices = [
    "ALEJANDRO JOSE MURIEL TORRES",
    "ANGEL DAVID GIL CAMPILLO",
    "CHRISTIAN JESUS REYES ECHENIQUE",
    "CIELO MARGARITA RODRIGUEZ PEREZ",
    "CRHISTIAN DAVID CAÑATE VALDEZ",
    "GREY CAROLINA TURIZO DIAZ",
    "JAN CAMILO GOMEZ LOPEZ",
    "JAVIER ANTONIO ESCOBAR DE AVILA",
    "JEFFRY ENRIQUE ARRIETA ROSERO",
    "JUAN CAMILO SANTANDER RUIZ",
    "KENNER AGRESOTT VALENCIA",
    "NELSON ENRRIQUE DIAZ OLASCOAGA",
    "STIVENSSON ANDREY CARDALES PAJARO",
    "VICTOR ANDRES ROMERO RIVERA",
    "YEISON DAVID MACHADO FLOREZ",
    "YURANIS ANDREA VILLARREAL BRACAMONTE"
];

// Mostrar secciones
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.classList.add('oculto');
    });
    document.getElementById(id).classList.remove('oculto');
}

// Cargar tabla de registro
function cargarAprendices() {
    const tabla = document.getElementById("tablaAprendices");
    tabla.innerHTML = "";

    aprendices.forEach(nombre => {
        tabla.innerHTML += `
            <tr>
                <td><input type="checkbox"></td>
                <td>${nombre}</td>
            </tr>
        `;
    });
}

// Registrar asistencia (simulado)
function registrarAsistencia() {
    const fecha = document.getElementById("fechaInput").value;

    if (!fecha) {
        alert("Por favor seleccione una fecha válida.");
        return;
    }

    const dia = new Date(fecha).getDay();

    // Permitir solo lunes(1) a sábado(6)
    if (dia === 0) {
        alert("Solo se permite registrar asistencia de lunes a sábado.");
        return;
    }

    alert("Asistencia registrada correctamente para la fecha " + fecha);
}

// Generar reporte aleatorio
function generarReporte() {
    const tabla = document.getElementById("tablaReporte");
    tabla.innerHTML = "";

    aprendices.forEach(nombre => {
        let fila = `<tr><td>${nombre}</td>`;

        for (let i = 0; i < 5; i++) {
            const presente = Math.random() > 0.3;
            fila += `<td>${presente ? "✔" : "✘"}</td>`;
        }

        fila += "</tr>";
        tabla.innerHTML += fila;
    });
}

// Inicialización
window.onload = function () {
    cargarAprendices();
    generarReporte();
};
