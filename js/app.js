// contoh: pause animasi saat diklik
document.addEventListener('DOMContentLoaded', () => {
  const car = document.querySelector('.car');
  car.addEventListener('click', () => {
    car.style.animationPlayState =
      car.style.animationPlayState === 'paused' ? 'running' : 'paused';
  });
});
