const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const playIndexSound = () => {
  if (!document.body.classList.contains("index-page")) {
    return;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return;
  }

  const context = new AudioContextClass();
  const now = context.currentTime;

  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(0.18, now + 0.03);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 0.55);
  master.connect(context.destination);

  const oscA = context.createOscillator();
  oscA.type = "triangle";
  oscA.frequency.setValueAtTime(392, now);
  oscA.frequency.exponentialRampToValueAtTime(523.25, now + 0.22);

  const oscB = context.createOscillator();
  oscB.type = "sine";
  oscB.frequency.setValueAtTime(523.25, now + 0.08);
  oscB.frequency.exponentialRampToValueAtTime(659.25, now + 0.3);

  oscA.connect(master);
  oscB.connect(master);

  oscA.start(now);
  oscB.start(now + 0.08);
  oscA.stop(now + 0.55);
  oscB.stop(now + 0.55);
};

if (document.readyState === "complete") {
  playIndexSound();
} else {
  window.addEventListener("load", playIndexSound, { once: true });
}
