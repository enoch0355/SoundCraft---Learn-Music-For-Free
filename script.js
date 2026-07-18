const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

const testimonials = [
    {
        url: "https://images.pexels.com/photos/17541441/pexels-photo-17541441.jpeg",
        text: "I wasted hours jumping between random videos without a clear path.",
        author: "Anonymous"
    },
    {
        url: "https://images.pexels.com/photos/38277694/pexels-photo-38277694.jpeg",
        text: "Most tutorials have absolutely no structure for a true beginner.",
        author: "Anonymous"
    },
    {
        url: "https://images.pexels.com/photos/14491727/pexels-photo-14491727.jpeg",
        text: "I felt completely lost without a structured, step-by-step plan.",
        author: "Anonymous"
    },
    {
        url: "https://images.pexels.com/photos/5662850/pexels-photo-5662850.png",
        text: "Most beginner courses feel like a disorganized collection of random tips.",
        author: "Anonymous"
    },
    {
        url: "https://images.pexels.com/photos/4977867/pexels-photo-4977867.jpeg",
        text: "Creators constantly skipped the fundamentals and rushed into advanced chords.",
        author: "Anonymous"
    }
];

const testimonialCard = document.getElementById("testimonial-card");
const quote = document.getElementById("text");
const author = document.getElementById("author");
const dotsContainer = document.getElementById("buttons");

const previousBtn = document.getElementById("left");
const nextBtn = document.getElementById("right");

const AUTO_PLAY_DELAY = 7000;

let currentIndex = 0;
let autoPlayTimer;

function createDots() {

    testimonials.forEach((_, index) => {

        const dot = document.createElement("button");

        dot.className = "dots";

        dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);

        dot.addEventListener("click", () => {

            currentIndex = index;

            updateCarousel();

            restartAutoPlay();

        });

        dotsContainer.appendChild(dot);

    });

}

function updateCarousel() {

    const current = testimonials[currentIndex];

    testimonialCard.style.backgroundImage = `url(${current.url})`;

    quote.textContent = current.text;

    author.textContent = current.author;

    document
        .querySelectorAll(".dots")
        .forEach((dot, index) => {

            dot.classList.toggle("active", index === currentIndex);

        });

}

function changeSlide(direction) {

    currentIndex += direction;

    if (currentIndex >= testimonials.length) {

        currentIndex = 0;

    }

    if (currentIndex < 0) {

        currentIndex = testimonials.length - 1;

    }

    updateCarousel();

    restartAutoPlay();

}

function restartAutoPlay() {

    clearInterval(autoPlayTimer);

    autoPlayTimer = setInterval(() => {

        changeSlide(1);

    }, AUTO_PLAY_DELAY);

}

previousBtn.addEventListener("click", () => {

    changeSlide(-1);

});

nextBtn.addEventListener("click", () => {

    changeSlide(1);

});

createDots();

updateCarousel();

restartAutoPlay();
