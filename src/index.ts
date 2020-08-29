export * from './components';
export * from './hooks';

function resize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', resize);
window.addEventListener('orientationchange', resize);
resize();
