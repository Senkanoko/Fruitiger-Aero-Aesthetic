document.addEventListener('DOMContentLoaded', function() {
    // Get all elements with submenu toggles
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    // Add click event listener to each toggle
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle active class on the parent li element
            const parentLi = this.closest('.has-submenu');
            parentLi.classList.toggle('active');
        });
    });
});
