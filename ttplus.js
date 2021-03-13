function add_dark_css() {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');

    link.id = 'darkcss'
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://raw.githack.com/tzaeli/DarkMode-for-TTFM/main/Darkmode.css';

    head.appendChild(link);

    let dark_active = true;
}

function remove_dark_css() {
    document.getElementById('darkcss').remove();

    let dark_active = false;
}

function toggle_dark_mode() {
    if(!dark_active) {
        add_dark_css();
    } else {
        remove_dark_css();
    }
}

function init_ttplus() {
    let toolbar = document.getElementsByClassName('header-buttons');
    let dark_mode_toggle = document.createElement(div);

    dark_mode_toggle.class = "ttplus theme-toggle";
    dark_mode_toggle.style = "color:#ffffff";
    dark_mode_toggle.onclick = "toggle_dark_mode()";

    toolbar.appendChild(dark_mode_toggle);
}