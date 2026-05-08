// ——— Petal rain ———
const petalEl = document.getElementById('petals');
const emojis = ['🌸','🌺','🌹','✨','🍃'];
for (let i = 0; i < 22; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (0.9 + Math.random() * 1.2) + 'rem';
  p.style.animationDuration = (6 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  petalEl.appendChild(p);
}

// ——— Yes ———
function handleYes() {
  document.getElementById('intro-screen').style.display = 'none';
  const acc = document.getElementById('accept-screen');
  acc.style.display = 'flex';
  launchConfetti();
}

// ——— No: sembunyikan tombol, munculkan tombol baru ———
function handleNo() {
  const noBtn = document.getElementById('no-btn');
  noBtn.classList.add('fade-out');
  setTimeout(() => {
    noBtn.classList.add('hidden');
    const jBtn = document.getElementById('jokowi-btn');
    jBtn.style.display = 'block';
  }, 400);
}

// ——— Jokowi button ———
function handleJokowi() {
  document.getElementById('jokowi-btn').style.display = 'none';

  const chatArea = document.getElementById('chat-area');
  chatArea.style.display = 'block';

  const bubble = document.getElementById('chat-bubble');
  const fullText = 'vito : yo ndak tahu kok tanya saya 😂';
  bubble.textContent = '';

  setTimeout(() => {
    bubble.classList.add('show');
    typeWriter(bubble, fullText, 0, function () {
      playJokowi();
    });
  }, 200);
}

// ——— Typing effect ———
function typeWriter(el, text, i, callback) {
  if (i < text.length) {
    el.textContent += text[i];
    setTimeout(() => typeWriter(el, text, i + 1, callback), 55);
  } else if (callback) {
    callback();
  }
}

// ——— Play audio Jokowi ———
function playJokowi() {
  const audio = document.getElementById('jokowi-audio');
  const note = document.getElementById('audio-note');
  if (audio.querySelector('source')) {
    audio.play().catch(() => {});
    note.style.display = 'block';
    note.textContent = '🔊 (suara Pak Jokowi)';
  } else {
    note.style.display = 'block';
    note.textContent = '🔊 "Yo ndak tahu kok tanya saya" — Pak Jokowi (tambahkan file yo-ndak-tahu.mp3 ya!)';
  }
}

// ——— Confetti ———
function launchConfetti() {
  const colors = ['#f2c4c4','#d4788a','#c9a86c','#7a2d3e','#fff','#ffd6e0'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.top = '-10px';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      c.style.width = (6 + Math.random() * 8) + 'px';
      c.style.height = (6 + Math.random() * 8) + 'px';
      c.style.animationDuration = (1.2 + Math.random() * 1.4) + 's';
      c.style.animationDelay = '0s';
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }, i * 30);
  }
}