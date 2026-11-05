(() => {
  const $ = (id) => document.getElementById(id);
  const envelope = $('envelope'), hint = $('hint'), song = $('song'), mute = $('mute');
  const photo = $('photo'), note = $('note');

  // Falling hearts: a fixed pool, animated purely by CSS (no per-frame JS).
  const colors = ['#ff4d79', '#ff8fa8', '#ffb3c6', '#ff2e63', '#f4c76b'];
  const count = matchMedia('(max-width: 600px)').matches ? 14 : 26; // fewer on phones
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = '♥';
    h.style.cssText =
      `--x:${Math.random() * 96}vw;` +
      `--s:${(0.8 + Math.random() * 1.2).toFixed(2)}rem;` +
      `--d:${(7 + Math.random() * 7).toFixed(1)}s;` +
      `--delay:-${(Math.random() * 14).toFixed(1)}s;` + // negative: screen is already full on load
      `--drift:${(Math.random() * 20 - 10).toFixed(1)}vw;` +
      `--c:${colors[i % colors.length]}`;
    frag.appendChild(h);
  }
  $('hearts').appendChild(frag);

  const show = (el, focusEl) => {
    el.classList.add('show');
    el.setAttribute('aria-hidden', 'false');
    focusEl.focus({ preventScroll: true });
  };
  const hide = (el) => {
    el.classList.remove('show');
    el.setAttribute('aria-hidden', 'true');
  };

  let step = 0; // 0 = closed, 1 = photo showing, 2 = message showing

  envelope.addEventListener('click', () => {
    if (step) return;
    step = 1;
    envelope.classList.add('open');
    hint.classList.add('gone');
    // Autoplay is only allowed after a user gesture, so the first tap starts the song.
    song.play().then(() => { mute.hidden = false; }).catch(() => {}); // no song file yet: stay silent
    setTimeout(() => show(photo, $('photoCard')), 1100); // let the letter slide out first
  });

  $('photoCard').addEventListener('click', () => {
    if (step !== 1) return;
    step = 2;
    hide(photo);
    setTimeout(() => show(note, $('noteCard')), 250);
  });

  mute.addEventListener('click', () => {
    song.muted = !song.muted;
    mute.setAttribute('aria-pressed', String(song.muted));
    mute.setAttribute('aria-label', song.muted ? 'Unmute music' : 'Mute music');
  });
})();
