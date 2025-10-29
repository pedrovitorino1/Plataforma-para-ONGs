const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('nav a');

function showPage(pageId) {
  pages.forEach(page => page.style.display = 'none');
  const page = document.getElementById(pageId);
  if(page) page.style.display = 'block';
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);
    showPage(target);
  });
});

showPage('home');


