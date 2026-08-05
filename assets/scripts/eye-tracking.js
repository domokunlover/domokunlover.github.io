const pupils = document.querySelectorAll(".eye .pupil");

window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    const eye = pupil.parentElement;

    const eyeRect = eye.getBoundingClientRect();
    const pupilRect = pupil.getBoundingClientRect();

    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const dx = e.clientX - eyeCenterX;
    const dy = e.clientY - eyeCenterY;

    const angle = Math.atan2(dy, dx);

    const maxMove =
      eyeRect.width / 2 - pupilRect.width / 2;

    const x = Math.cos(angle) * Math.min(maxMove, Math.hypot(dx, dy));
    const y = Math.sin(angle) * Math.min(maxMove, Math.hypot(dx, dy));

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});