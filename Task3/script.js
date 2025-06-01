   // Function to smoothly scroll to a section
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Highlight active navigation link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            // Adjust offset for fixed header height. Roughly 96px (pt-24 on main) + header height itself
            const headerHeight = document.querySelector('header').offsetHeight;
            const scrollOffset = headerHeight + 50; // Add some extra buffer

            sections.forEach(section => {
                const sectionTop = section.offsetTop - scrollOffset;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(current)) {
                    link.classList.add('active');
                }
            });
        });

        // Initialize active link on page load
        document.addEventListener('DOMContentLoaded', () => {
            const initialSection = window.location.hash.substring(1) || 'home';
            // Use setTimeout to ensure initial scroll happens after layout is stable
            setTimeout(() => {
                scrollToSection(initialSection);
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.href.includes(initialSection)) {
                        link.classList.add('active');
                    }
                });
            }, 100); // Small delay
        });


        // Function to toggle "Read More" for project descriptions
        function toggleDescription(button) {
            const descriptionElement = button.previousElementSibling; // The <p> tag before the button
            const hiddenText = descriptionElement.querySelector('.hidden-text');

            if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
                hiddenText.style.display = 'inline';
                button.textContent = 'Read Less';
            } else {
                hiddenText.style.display = 'none';
                button.textContent = 'Read More';
            }
        }