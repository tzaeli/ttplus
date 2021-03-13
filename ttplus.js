/*
    Dark Mode Helpers

    add_dark_css: creates a new link element in the head with darkmode CSS
    remove_dark_css: removes the created link element from the head
    toggle_dark_mode: on/off toggle for the button
 */

function add_dark_css() {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');

    link.id = 'darkcss'
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/Madtanker/DarkMode-for-TTFM/main/Darkmode.css';

    head.appendChild(link);

    window.dark_active = true;
}

function remove_dark_css() {
    document.getElementById('darkcss').remove();

    window.dark_active = false;
}

function toggle_dark_mode() {
    if(!window.dark_active) {
        add_dark_css();
    } else {
        remove_dark_css();
    }
}

/*
    Start TTPlus

    Currently only adds a Theme toggle to the toolbar
 */
function init_ttplus() {
    let toolbar = document.getElementsByClassName('header-buttons')[0];
    let dark_mode_toggle = document.createElement('div');
    dark_mode_toggle.appendChild(document.createTextNode("Theme"));

    dark_mode_toggle.class = "ttplus theme-toggle";
    dark_mode_toggle.style = "color:#ffffff";
    dark_mode_toggle.onclick = function() {
        toggle_dark_mode();
    };

    toolbar.appendChild(dark_mode_toggle);

    window.dark_active = false;
}