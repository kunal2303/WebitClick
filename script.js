    //  top button
      // Get the button
      let mybutton = document.getElementById("myBtn");

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      //Typewriter Effect

      const texts = ["Web Development","Social Media Managing","Graphic Designing","Digital Marketing"];

      let speed = 100;

      const textElements = document.querySelector(".typewriter-text");

      let textIndex = 0;
      let characterIndex = 0;

      function typeWriter (){
        if(characterIndex < texts[textIndex].length){
            textElements.innerHTML += texts[textIndex].charAt(characterIndex);
            characterIndex++;
            setTimeout(typeWriter, speed)
        }
        else{
            setTimeout(eraseText, 1000)
        }
      }

      function eraseText(){
        if(textElements.innerHTML.length > 0){
            textElements.innerHTML = textElements.innerHTML.slice(0,-1);
            setTimeout(eraseText, 50);
        }
        else{
            textIndex = (textIndex + 1) % texts.length;
            characterIndex = 0;
            setTimeout(typeWriter,500)
        }
      }

      window.onload = typeWriter;

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const searchContainer = document.querySelector('.search-container');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('active');

        // Move search container to nav-links when active
        if (nav.classList.contains('active')) {
            nav.appendChild(searchContainer);
        } else {
            document.querySelector('nav').insertBefore(searchContainer, burger);
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                burger.classList.remove('active');
                document.querySelector('nav').insertBefore(searchContainer, burger);
            }
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
                let animation = 'fadeInUp';
                if (element.classList.contains('about-text')) {
                    animation = 'fadeInLeft';
                } else if (element.classList.contains('about-image')) {
                    animation = 'fadeInRight';
                }
                element.style.animation = `${animation} 1s ease forwards`;
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check on page load

    // Form submission (you can add your own logic here)
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We will get back to you soon.');
        form.reset();
    });

    // Search functionality
    const searchButton = document.querySelector('.search-container button');
    const searchInput = document.querySelector('.search-container input');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // You can implement your search logic here
            alert(`Searching for: ${searchTerm}`);
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            document.querySelector('nav').insertBefore(searchContainer, burger);
        }
    });

    // Testimonial Carousel
    const testimonialContainer = document.querySelector('.testimonial-container');
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    }

    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);

    // Auto-advance carousel every 5 seconds
    setInterval(nextTestimonial, 5000);
});