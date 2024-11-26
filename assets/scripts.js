document.addEventListener('DOMContentLoaded', () => {
    const toggleCheckbox = document.getElementById('toggle');
    const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const projectsLink = document.getElementById('projects');

    homeLink.addEventListener('click', () => {
        toggleCheckbox.checked = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleCheckbox.checked = false;
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });

    projectsLink.addEventListener('click', () => {
        toggleCheckbox.checked = false;
    });
});