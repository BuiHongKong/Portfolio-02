(function () {
    var toggle = document.getElementById('nav-menu-toggle');
    var panel = document.getElementById('mobile-nav-panel');
    if (!toggle || !panel) return;

    var iconOpen = toggle.querySelector('.nav-icon-open');
    var iconClose = toggle.querySelector('.nav-icon-close');

    function setOpen(open) {
        toggle.setAttribute('aria-expanded', open);
        panel.classList.toggle('hidden', !open);
        panel.classList.toggle('flex', open);
        if (iconOpen) iconOpen.classList.toggle('hidden', open);
        if (iconClose) iconClose.classList.toggle('hidden', !open);
        document.body.classList.toggle('overflow-hidden', open);
    }

    toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    panel.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setOpen(false);
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });
})();
