function show(tab) {
  document.querySelectorAll('.tab').forEach(t => t.style.display = 'none');
  document.getElementById(tab).style.display = 'block';
}

// Cargar código fuente para mostrarlo en la pestaña "Código Fuente"
fetch('../backend/api.js')
  .then(res => res.text())
  .then(code => document.getElementById('codigo-fuente').textContent = code);

function crearCursores() {
  const cantidad = parseInt(document.getElementById('cantidad').value, 10);
  let estado = '';
  for (let i = 0; i < cantidad; i++) {
    estado += `<div>Cursor virtual #${i+1} (PID: ${1000+i}) creado</div>`;
    // Aquí podrías agregar la llamada real a la API para crear el cursor
  }
  document.getElementById('estadoCursores').innerHTML = estado;
}
