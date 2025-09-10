const express = require('express');
const app = express();
app.use(express.json());

// Simulación de cursores virtuales (simplificado)
let cursores = {}; // { pid: { x: 0, y: 0 } }

app.post('/cursor', (req, res) => {
  const { pid, accion, x, y } = req.body;
  if (!cursores[pid]) cursores[pid] = { x: 0, y: 0 };
  if (accion === 'mover') {
    cursores[pid].x = x;
    cursores[pid].y = y;
    // Aquí iría la lógica para mover el cursor virtual tipo hardware usando vMulti
    res.json({ ok: true, msg: `Cursor de PID ${pid} movido a (${x}, ${y})` });
  } else if (accion === 'click') {
    // Aquí iría la lógica para hacer click con el cursor virtual tipo hardware
    res.json({ ok: true, msg: `Cursor de PID ${pid} hizo click` });
  } else {
    res.status(400).json({ ok: false, msg: 'Acción no reconocida' });
  }
});

app.listen(3001, () => {
  console.log('API lista en http://localhost:3001');
});