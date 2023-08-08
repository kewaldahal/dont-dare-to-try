let clickCount = 0;

function moveSwitch() {
  const switchElement = document.querySelector('.switch');
  const maxX = window.innerWidth - switchElement.offsetWidth;
  const maxY = window.innerHeight - switchElement.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  const switchWidth = switchElement.offsetWidth;
  const switchHeight = switchElement.offsetHeight;

  const newX = Math.max(0, Math.min(randomX, maxX - switchWidth));
  const newY = Math.max(0, Math.min(randomY, maxY - switchHeight));

  switchElement.style.left = `${newX}px`;
  switchElement.style.top = `${newY}px`;

  clickCount++;
  if (clickCount === 15) {
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  } else if (clickCount < 15) {
    alert(`One more time! (${15 - clickCount} left)`);
  }
}
