const addBtn = document.getElementById('addBtn');
const formArea = document.getElementById('formArea');
const containerArea = document.getElementById('containerArea');

addBtn.addEventListener('click', () => {
  const form = document.createElement('div');
  form.className = 'form';
  form.innerHTML = `
    <h2 class="titulo-inputs">Fale sobre o seu vício!</h2>
    <div class="inputs">
    <input type="text" placeholder="Nome do vício" id="nome"><br>
    <input type="number" placeholder="Semanas" id="semanas" min="0"><br>
    <input type="number" placeholder="Dias" id="dias" min="0"><br>
    <input type="number" placeholder="Horas" id="horas" min="0"><br>
    <input type="number" placeholder="Minutos" id="minutos" min="0"><br>
    <input type="number" placeholder="Segundos" id="segundos" min="0"><br>
    <button id="finalizar">Finalizar</button>
    </div>
  `;
  formArea.appendChild(form);

  form.querySelector('#finalizar').addEventListener('click', () => {
    const nome = form.querySelector('#nome').value;
    const semanas = parseInt(form.querySelector('#semanas').value) || 0;
    const dias = parseInt(form.querySelector('#dias').value) || 0;
    const horas = parseInt(form.querySelector('#horas').value) || 0;
    const minutos = parseInt(form.querySelector('#minutos').value) || 0;
    const segundos = parseInt(form.querySelector('#segundos').value) || 0;
    
    const metaSegundos = 
      semanas * 7 * 24 * 3600 +
      dias * 24 * 3600 +
      horas * 3600 +
      minutos * 60 +
      segundos;

    if (metaSegundos <= 0) {
      alert("Informe uma meta maior que zero!");
      return;
    }

    form.remove();
    criarContainer(nome, metaSegundos);
  });
});

function criarContainer(nome, metaSegundos) {
  const container = document.createElement('div');
  container.className = 'container';
  container.innerHTML = `
    <div class="nome-vicio">${nome}</div>
    <div class="meta-vicio"><span class="meta">Meta:</span> <br>${formatarTempo(metaSegundos)}</div>
    <div class="timer">0s</div>
    <button class="resetBtn">Recomeçar</button>
  `;
  containerArea.appendChild(container);

  const timerDiv = container.querySelector('.timer');
  const resetBtn = container.querySelector('.resetBtn');

  let tempo = 0;
  let interval = iniciarTimer();

  function iniciarTimer() {
    return setInterval(() => {
      tempo++;
      timerDiv.textContent = formatarTempo(tempo);
      if (tempo >= metaSegundos) {
        clearInterval(interval);
        timerDiv.textContent += ' ✅';
      }
    }, 1000);
  }

  resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    tempo = 0;
    timerDiv.textContent = '0s';
    interval = iniciarTimer();
  });
}

function formatarTempo(segundos) {
  const semanas = Math.floor(segundos / (7 * 24 * 3600));
  segundos %= 7 * 24 * 3600;
  const dias = Math.floor(segundos / (24 * 3600));
  segundos %= 24 * 3600;
  const horas = Math.floor(segundos / 3600);
  segundos %= 3600;
  const minutos = Math.floor(segundos / 60);
  segundos %= 60;

  const partes = [];
  if (semanas) partes.push(`${semanas} sem`);
  if (dias) partes.push(`${dias} d`);
  if (horas) partes.push(`${horas} h`);
  if (minutos) partes.push(`${minutos} min`);
  if (segundos || partes.length === 0) partes.push(`${segundos} s`);

  return partes.join(' ');
}
