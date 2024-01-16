(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
})(jQuery);



function submitForm() {
    var email = document.getElementById('emailInput').value;

    // Check if the email is in a valid format
    if (/^\S+@\S+\.\S+$/.test(email)) {
        // Assume you have a server-side script to handle form submission (e.g., submit.php)
        // Make an AJAX request to the server
        // var xhr = new XMLHttpRequest();
        // xhr.open('POST', 'submit.php', true);
        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // // Handle the response from the server
        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         // Clear the input field after successful submission
        //         document.getElementById('emailInput').value = '';
        //         alert('Thank you for signing up! You have successfully subscribed.');
        //     }
        // };

        // // Send the data to the server
        // xhr.send('email=' + encodeURIComponent(email));
        alert('Thank you for signing up! You have successfully subscribed.');
        document.getElementById('emailInput').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

function submitForm1() {
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var mobile = document.getElementById('mobileInput').value;
    var service = document.getElementById('serviceInput').value;
    var note = document.getElementById('noteInput').value;

    // Validate the form fields
    if (name.trim() === '' || email.trim() === '' || mobile.trim() === '' || service === 'Select A Service') {
        alert('Please fill in all required fields.');
        return;
    }

    alert('Thank you for connecting with us! Your inquiry has been submitted.');
    // Clear the form fields after successful submission
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('mobileInput').value = '';
    document.getElementById('serviceInput').value = 'Select A Service';
    document.getElementById('noteInput').value = '';
}


document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function onScroll() {
        var scrollPosition = window.scrollY;

        navLinks.forEach(function (link) {
            var sectionId = link.getAttribute('href').substring(1);
            var section = document.getElementById(sectionId);

            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }


    var navLinks = document.querySelectorAll('.nav-item.nav-link');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var navbarCollapse = document.getElementById('navbarCollapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Smooth scroll when clicking on links
    var links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', onScroll);

    // Call onScroll initially to set the initial active link
    onScroll();
});



