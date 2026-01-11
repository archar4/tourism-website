document.addEventListener('DOMContentLoaded', () => {
    console.log('Tourism Website Loaded');

    // Highlight active link
    const currentInfo = location.href.split('/').pop().split('.')[0] || 'index';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentInfo)) {
            link.classList.add('active');
        }
    });

    // Gallery Modal Logic
    const modal = document.getElementById("imageModal");
    if (modal) {
        const modalImg = document.getElementById("modalImg");
        const images = document.querySelectorAll(".gallery-item img");
        const closeBtn = document.getElementsByClassName("close")[0];

        images.forEach(img => {
            img.onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        });

        if (closeBtn) {
            closeBtn.onclick = function () {
                modal.style.display = "none";
            }
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // Contact Form Validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            let isValid = true;

            // Name Validation
            if (name.value.trim() === '') {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('nameError').style.display = 'none';
            }

            // Email Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('emailError').style.display = 'none';
            }

            // Message Validation
            if (message.value.trim() === '') {
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('messageError').style.display = 'none';
            }

            if (isValid) {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            }
        });
    }
});
