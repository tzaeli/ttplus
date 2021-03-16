/*
    Dark Mode Helpers

    add_dark_css: creates a new link element in the head with darkmode CSS
    remove_dark_css: removes the created link element from the head
    toggle_dark_mode: on/off toggle for the button
 */

function add_dark_css() {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');

    link.id = 'coolcss'
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://cdn.jsdelivr.net/gh/tzaeli/ttplus/gh-pages/css/room-view-cool.min.css';
    link.href = 'https://cdn.jsdelivr.net/gh/tzaeli/ttplus/gh-pages/css/room-cool.min.css';
    /*link.href = 'https://cdn.jsdelivr.net/gh/tzaeli/ttplus/darkmode.min.css';
    link.href = 'https://cdn.jsdelivr.net/gh/tzaeli/ttplus/coolmode.min.css'; */
    

    head.appendChild(link);

    window.dark_active = true;
}

function remove_dark_css() {
    document.getElementById('coolcss').remove();

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
    Timestamp Helpers

    onAppend: general listener for changes to elements
 */

function onAppend(elem, f) {
    let observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            if (m.addedNodes.length) {
                f(m.addedNodes)
            }
        })
    })
    observer.observe(elem, {childList: true})
}

/*
    Start TTPlus

    Currently only adds a Theme toggle to the toolbar
 */
function init_ttplus() {

    // init toolbar
    let toolbar = document.getElementsByClassName('header-buttons')[0];

    // add theme toggle to toolbar
    let dark_mode_toggle = document.createElement('div');
    dark_mode_toggle.appendChild(document.createTextNode("Theme"));
    dark_mode_toggle.className = 'ttplus-toggle ttplus-theme';
    dark_mode_toggle.style = 'color:#ffffff';
    dark_mode_toggle.onclick = function() {
        toggle_dark_mode();
    };
    toolbar.appendChild(dark_mode_toggle);
    window.dark_active = false;

    // start message listener
    onAppend(document.getElementsByClassName('messages')[0], function(added_elements) {
        let message =  added_elements[0];

        // create timestamp
        let timestamp = document.createElement('span');
        timestamp.className = 'ttplus-timestamp'
        timestamp.innerText = ' • ' + (new Date()).toLocaleTimeString();

        // differentiate between messages and actions
        if(message.querySelectorAll('.speaker').length != 0) {
            let speaker_element = message.getElementsByClassName('speaker')[0];
            speaker_element.appendChild(timestamp);
        }
    });
}