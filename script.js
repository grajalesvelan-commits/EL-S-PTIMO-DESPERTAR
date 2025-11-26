console.log("SCRIPT CARGÓ DINÁMICO");


const body = document.body;
const heroTitle = document.querySelector('.hero-section h1');
const header = document.getElementById('mainHeader');
const nightmareToggle = document.getElementById('nightmareToggle'); 
const anchorToggle = document.getElementById('anchorToggle'); 
const sectionBlocks = document.querySelectorAll('.section-block');
const navLinks = document.querySelectorAll('.nav-link');
const float1 = document.getElementById('floatingElement1'); 
const float2 = document.getElementById('floatingElement2'); 
const float3 = document.getElementById('floatingElement3'); 

const acto4Video = document.querySelector('#acto4 video'); 
let acto4Animated = false; 


if (nightmareToggle) {
    nightmareToggle.addEventListener('click', () => {
        body.classList.toggle('nightmare');

        if (body.classList.contains('nightmare')) {
            nightmareToggle.textContent = 'Salir de la Pesadilla';
            heroTitle.classList.add('glitch');
        } else {
            nightmareToggle.textContent = 'Activar Pesadilla';
            heroTitle.classList.remove('glitch');
        }
        
       
    });
}


if (anchorToggle && header) {
    anchorToggle.addEventListener('click', () => {
        header.classList.toggle('unanchored');

        if (header.classList.contains('unanchored')) {
            anchorToggle.textContent = '🪢'; 
            anchorToggle.title = "Navegación Desanclada (Flotando)";
        } else {
            anchorToggle.textContent = '⚓'; 
            anchorToggle.title = "Navegación Anclada (Fija)";
        }
    });
}



function revealOnScroll() {


    sectionBlocks.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('active');
            
            const id = el.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active-nav');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active-nav');
                }
            });
        }
    });
}

document.querySelectorAll('.section-block h2, .section-block h3').forEach(title => {
    title.setAttribute('data-text', title.textContent);
    
    title.addEventListener("mouseenter", () => {
        title.classList.add("glitch-effect"); 
    });
    title.addEventListener("mouseleave", () => {
        title.classList.remove("glitch-effect");
    });
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            let offset = 0;

            if (header && !header.classList.contains('unanchored')) {
                offset = header.offsetHeight + 10;
            }
            
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    });
});



const hero = document.querySelector('.hero-section');

window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.4;
    hero.style.backgroundPositionY = offset + "px";
});


if (heroTitle) {
    heroTitle.setAttribute('data-text', heroTitle.textContent); 
    heroTitle.addEventListener("mouseenter", () => {
        heroTitle.classList.add("glitch");
    });

    heroTitle.addEventListener("mouseleave", () => {
        if (!body.classList.contains('nightmare')) {
            heroTitle.classList.remove("glitch");
        }
    });
}


document.querySelectorAll("video").forEach(video => {
    video.addEventListener("play", () => {
        video.classList.add("video-playing");
    });
});



function animateActo4OnScroll() {
    if (acto4Video && !acto4Animated) {
        const position = acto4Video.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 200) { 
            acto4Video.classList.add('awake-animation-active');
            acto4Animated = true; 
            window.removeEventListener('scroll', animateActo4OnScroll); 
        }
    }
}



window.addEventListener("scroll", revealOnScroll);
window.addEventListener('scroll', animateActo4OnScroll);

revealOnScroll(); 
animateActo4OnScroll();