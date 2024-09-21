// Get all the panel links
var panelLinks = document.querySelectorAll('.panel-link-list li a');

// Add click event listener to all the panel links
panelLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Remove active class from all panel links
        panelLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        // Add active class to the clicked panel link
        this.classList.add('active');

        // Hide all the panels
        var panels = document.querySelectorAll('.panel');
        panels.forEach(function(panel) {
            panel.classList.remove('active');
            panel.classList.add('inactive');
        });

        // Show the panel corresponding to the clicked link
        var panelId = this.getAttribute('data-panel');
        var panel = document.querySelector('#' + panelId);
        panel.classList.remove('inactive');
        panel.classList.add('active');
    });
});