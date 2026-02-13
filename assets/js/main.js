document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    
    setTimeout(function() {
        loader.classList.add('loaded');
        
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1600);
    }, 100);

    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                
                if (target) {
                    const headerHeight = document.querySelector('.main-header').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuColumns = document.querySelectorAll('.menu-column');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            menuColumns.forEach(column => {
                if (column.id === target) {
                    column.classList.add('active');
                } else {
                    column.classList.remove('active');
                }
            });
        });
    });
});
