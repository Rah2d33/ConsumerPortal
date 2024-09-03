document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const footer = document.querySelector('.footer');
    let lastScrollTop = 0;

    // Handle nav link clicks
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            if (link.classList.contains('disabled')) {
                e.preventDefault();
                return;
            }

            link.classList.add('disabled');
            document.body.classList.add('disable-click');

            setTimeout(function () {
                window.location.href = link.href;
            }, 300);

            setTimeout(function () {
                link.classList.remove('disabled');
                document.body.classList.remove('disable-click');
            }, 1000);
        });
    });



    // Set the active nav link based on the current page
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }


    setActiveNavLink(); // Call this when the page loads

    // Handle footer hide/show on scroll
    window.addEventListener('scroll', function () {
        const currentScrollTop = window.scrollY;
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;

        if (currentScrollTop > lastScrollTop && isFooterVisible) {
            footer.classList.add('hidden');
        } else {
            footer.classList.remove('hidden');
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
});




