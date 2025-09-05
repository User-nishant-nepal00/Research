// navbar.js

// Define the navbar HTML as a template literal
const navbarHTML = `
<nav class="navigation">
  <div class="nav-container">
    <ul class="nav-menu">
        <li><a href="index.html" class="nav-link">HOME</a></li>
        <li><a href="fund.html" class="nav-link">RESEARCH FUND GUIDELINES</a></li>
        <li><a href="internal.html" class="nav-link">INTERNAL RESEARCH FUND</a></li>
        <li><a href="rmc.html" class="nav-link">RMC GUIDELINES</a></li>
        <li><a href="paper.html" class="nav-link active">PAPERS</a></li>
    </ul>
  </div>
</nav>
`;

// Function to insert navbar into page
function loadNavbar() {
  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHTML;

    // Highlight active link
    const links = navbarContainer.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();
    links.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);
