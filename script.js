

const typingElement = document.querySelector(".typing");

const words = [
    "FULL STACK DEVELOPER",
    "WEB DEVELOPER",
    "FRONTEND DEVELOPER",
    "PROBLEM SOLVER"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();



const cursor = document.querySelector(".cursor");
const cursorDot = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", function(e) {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

});



const clickableElements =
    document.querySelectorAll(
        "a, button, input, textarea, .project-card, .service-card"
    );

clickableElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.style.width = "55px";
        cursor.style.height = "55px";

    });

    element.addEventListener("mouseleave", () => {

        cursor.style.width = "35px";
        cursor.style.height = "35px";

    });

});



const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function() {

    navLinks.classList.toggle("mobile-open");

});




const mobileStyle = document.createElement("style");

mobileStyle.textContent = `

@media(max-width:900px){

    .nav-links.mobile-open{

        display:flex;

        position:absolute;

        top:75px;
        left:0;
        right:0;

        padding:25px;

        flex-direction:column;

        background:rgba(8,8,12,.97);

        border:1px solid rgba(255,255,255,.08);

        border-radius:15px;

        gap:20px;

    }

}

`;

document.head.appendChild(mobileStyle);




document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});



const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 250;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



const counters =
    document.querySelectorAll("[data-count]");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(".stats");

    const position =
        statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(counter.dataset.count);

            let current = 0;

            const increment =
                Math.max(1, Math.ceil(target / 60));

            const timer =
                setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(timer);

                    }

                    counter.textContent = current + "+";

                }, 25);

        });

    }

}

window.addEventListener("scroll", startCounters);

startCounters();



const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .service-card, .about-card, .skill-box"
    );

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});



const developerCard =
    document.querySelector(".developer-card");

document.addEventListener("mousemove", e => {

    if (window.innerWidth < 900) return;

    const x =
        (window.innerWidth / 2 - e.clientX) / 45;

    const y =
        (window.innerHeight / 2 - e.clientY) / 45;

    developerCard.style.transform =
        `perspective(1000px)
         rotateY(${-x}deg)
         rotateX(${y}deg)`;

});




const scrollTop =
    document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        scrollTop.classList.add("show");

    } else {

        scrollTop.classList.remove("show");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});






const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        if (window.innerWidth < 800) return;

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 35;

        const rotateY =
            (centerX - x) / 35;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});



document.getElementById("year").textContent =
    new Date().getFullYear();



document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


