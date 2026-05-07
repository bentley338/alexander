// --- Loading Screen ---
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});

// --- Mouse Glow Effect ---
const mouseGlow = document.getElementById('mouse-glow');
document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = e.clientX + 'px';
    mouseGlow.style.top = e.clientY + 'px';
});

// --- Scroll Navbar ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// --- Reveal Animations ---
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);

// --- Music System ---
const musicBtn = document.getElementById('music-toggle');
const audio = document.getElementById('bg-music');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        musicBtn.classList.remove('playing');
    } else {
        audio.play().catch(e => console.log("Audio play blocked by browser"));
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// --- Modal System ---
const modal = document.getElementById('payment-modal');
const closeModal = document.querySelector('.close-modal');
const modalPkgName = document.getElementById('modal-package-name');
const modalPriceText = document.getElementById('modal-price');
const waConfirmBtn = document.getElementById('wa-confirm-btn');

function openPayment(pkg, price) {
    modalPkgName.innerText = pkg;
    modalPriceText.innerText = "Rp" + price.toLocaleString();
    
    // Create WA Message
    const phoneNumber = "6282328437656";
    const message = encodeURIComponent(`Halo admin Alex Cloud Game, saya ingin membeli paket ${pkg}.`);
    waConfirmBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

closeModal.onclick = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// --- FAQ Accordion ---
document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const icon = header.querySelector('i');
        
        // Toggle current
        if (body.style.display === 'block') {
            body.style.display = 'none';
            icon.style.transform = 'rotate(0deg)';
        } else {
            // Close others (optional)
            document.querySelectorAll('.faq-body').forEach(b => b.style.display = 'none');
            document.querySelectorAll('.faq-header i').forEach(i => i.style.transform = 'rotate(0deg)');
            
            body.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// --- Scroll Functions ---
function scrollToPricing() {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
}

function scrollToGames() {
    document.getElementById('games').scrollIntoView({ behavior: 'smooth' });
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.querySelector('.nav-links');

mobileToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.classList.toggle('active-mobile');
});
