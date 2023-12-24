// const menu = document.querySelector('.menu-opener');

function showMenu() {
    if (document.querySelector('nav').style.display == 'block') {
        document.querySelector('nav').style.display = 'none';
    } else {
        document.querySelector('nav').style.display = 'block';
    }
}