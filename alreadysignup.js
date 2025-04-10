document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".movies-slider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateScrollAmount() {
        return document.querySelector(".movie-card").offsetWidth + 15; // Card width + gap
    }

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({ left: updateScrollAmount() * 4, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -updateScrollAmount() * 4, behavior: "smooth" });
    });

    // Update scroll amount on window resize
    window.addEventListener("resize", () => {
        updateScrollAmount();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const animeSlider = document.querySelector(".anime-slider");
    const prevAnimeBtn = document.getElementById("prevAnimeBtn");
    const nextAnimeBtn = document.getElementById("nextAnimeBtn");

    function updateAnimeScrollAmount() {
        return document.querySelector(".anime-card").offsetWidth + 15; // Card width + gap
    }

    nextAnimeBtn.addEventListener("click", () => {
        animeSlider.scrollBy({ left: updateAnimeScrollAmount() * 4, behavior: "smooth" });
    });

    prevAnimeBtn.addEventListener("click", () => {
        animeSlider.scrollBy({ left: -updateAnimeScrollAmount() * 4, behavior: "smooth" });
    });

    window.addEventListener("resize", () => {
        updateAnimeScrollAmount();
    });
});

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

// Listen for user input
searchInput.addEventListener("input", async () => {
    let query = searchInput.value.trim();
    if (query.length > 2) { // Start searching after 3 characters
        fetchResults(query);
    } else {
        resultsDiv.innerHTML = ""; // Clear results when input is empty
    }
});



// Handle Sign-Up Form Submission
document.querySelector("#signupForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
        const response = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.message || "Something went wrong!");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while signing up.");
    }
});



