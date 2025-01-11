// Get all the links with a hash
const links = document.querySelectorAll('a[href*="#"]');

// Add an event listener to each link
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the hash from the link
    const hash = link.getAttribute('href').split('#')[1];

    // Get the element with the matching ID
    const element = document.getElementById(hash);

    // If the element exists, scroll to it smoothly
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
 