// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Lazy Loading Observer
const images = document.querySelectorAll('img[loading="lazy"]');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src || entry.target.src;
            observer.unobserve(entry.target);
        }
    });
});
images.forEach(img => observer.observe(img));

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chart.js Interactive Histogram (Sample for Sepal Length)
const ctx = document.getElementById('histogramChart')?.getContext('2d');
if (ctx) {
    const data = {
        labels: ['4.0-4.5', '4.5-5.0', '5.0-5.5', '5.5-6.0', '6.0-6.5', '6.5-7.0', '7.0-7.5', '7.5-8.0'],
        datasets: [{
            label: 'Sepal Length Distribution',
            data: [0, 10, 30, 50, 40, 10, 5, 5],  // Sample data
            backgroundColor: 'rgba(13, 110, 253, 0.6)',
            borderColor: '#0d6efd',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            animation: {
                duration: 1000,
                easing: 'easeInOutQuad'
            },
            scales: {
                y: {
                    title: { display: true, text: 'Count', color: '#e0e0e0' },
                    grid: { borderColor: '#333333' }
                },
                x: {
                    title: { display: true, text: 'Sepal Length (cm)', color: '#e0e0e0' },
                    grid: { borderColor: '#333333' }
                }
            },
            plugins: {
                legend: { labels: { color: '#e0e0e0' } }
            }
        }
    });
}