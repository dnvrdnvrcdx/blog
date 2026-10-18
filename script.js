// denver.log: small interaction helpers.
// Replace the contact link's href in index.html with your preferred email or social profile.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    if (link.getAttribute('href') === '#') event.preventDefault();
  });
});
