document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});

function toggleNews() {
  const hiddenItems = document.querySelectorAll('.hidden-news');
  const button = document.querySelector('.news-toggle');

  if (!hiddenItems.length || !button) return;

  hiddenItems.forEach(item => item.classList.toggle('show'));

  const isOpen = hiddenItems[0].classList.contains('show');
  button.textContent = isOpen ? 'Hide older news' : 'Click to see older news';
}
