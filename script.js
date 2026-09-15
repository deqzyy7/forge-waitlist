// Cloud generation script
let sky = document.querySelector('.sky');
let clone = document.querySelector('#cloud');
let cloneChild = document.querySelector('#cloud').children;

// Generate multiple clouds with random properties
for (let num = 1; num < 26; num++) {
    let newCloud = clone.cloneNode(true);
    newCloud.className = 'cloud cloud-' + num;
    
    // Random properties for each cloud
    const randomSpeed = Math.random() * 200 + 100;
    const randomDelay = -Math.random() * 60;
    const randomTop = num <= 15 ? Math.random() * 15 - 5 : Math.random() * 60 + 20;
    const randomWidth = num <= 15 ? Math.random() * 500 + 200 : Math.random() * 200 + 150;
    const randomHeight = num <= 15 ? Math.random() * 230 + 100 : Math.random() * 100 + 50;
    const randomOpacity = num <= 15 ? 1 : 0.7;
    
    newCloud.style.animation = `animateCloud ${randomSpeed}s linear infinite ${randomDelay}s`;
    newCloud.style.top = `${randomTop}vh`;
    
    // Update child cloud parts
    const cloudParts = newCloud.querySelectorAll('.cloud-part');
    cloudParts.forEach(part => {
        part.style.width = `${randomWidth}px`;
        part.style.height = `${randomHeight}px`;
        part.style.opacity = randomOpacity;
        part.style.left = '-50vw';
    });
    
    sky.appendChild(newCloud);
}

// Remove original template cloud
clone.style.display = 'none';

// Smooth scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
});

// Form handling with smooth animation
const form = document.getElementById('waitlistForm');
const emailInput = document.getElementById('emailInput');
const successMessage = document.getElementById('successMessage');
const submitBtn = form.querySelector('.submit-btn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    
    if (!email || !isValidEmail(email)) {
        shakeInput();
        return;
    }

    // Add loading state
    submitBtn.classList.add('loading');
    submitBtn.querySelector('.btn-text').textContent = 'Joining';

    // Simulate API call (replace with your actual endpoint)
    setTimeout(() => {
        // Hide form with fade out
        form.style.transition = 'opacity 0.5s, transform 0.5s';
        form.style.opacity = '0';
        form.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            form.style.display = 'none';
            successMessage.classList.add('show');
            
            // Store email (you can send this to your backend)
            saveToWaitlist(email);
            
            // Reset form
            emailInput.value = '';
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-text').textContent = 'Join Waitlist';
        }, 500);
    }, 1500);
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function shakeInput() {
    const inputWrapper = form.querySelector('.input-wrapper');
    inputWrapper.style.animation = 'shake 0.5s';
    
    setTimeout(() => {
        inputWrapper.style.animation = '';
    }, 500);
}

function saveToWaitlist(email) {
    // Save to localStorage for demo purposes
    // Replace this with your actual API call
    const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
    waitlist.push({
        email,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('waitlist', JSON.stringify(waitlist));
    
    console.log('Email saved to waitlist:', email);
    
    // Example: Send to your backend
    /*
    fetch('https://your-api.com/waitlist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
    */
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Enhanced cursor effect on interactive elements
const interactiveElements = document.querySelectorAll('button, a, .feature-card, .avatar');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    el.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Add keyboard accessibility
emailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});

// Performance optimization: Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach(el => {
        el.style.animation = 'none';
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    
    document.querySelectorAll('.cloud').forEach(cloud => {
        cloud.style.animation = 'none';
    });
}

// Countdown animation for social proof number
function animateNumber(element, start, end, duration) {
    let startTime = null;
    
    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Animate the counter when it comes into view
const proofText = document.querySelector('.proof-text strong');
const proofObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumber(proofText, 1000, 1247, 2000);
            proofObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (proofText) {
    proofObserver.observe(proofText);
}

