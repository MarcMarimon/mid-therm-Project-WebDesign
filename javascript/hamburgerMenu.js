document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.hamburger-menu');
    const navLinkList = document.querySelector('.nav-link-list');

    menuButton.addEventListener('click', function () {
        navLinkList.classList.toggle('show');
    });
});
