const fullDetails = [
    {
        paragraph:"Their attention to detail and commitment to quality is unmatched. The software they developed for us is robust, user-friendly, and exceeded all expectations.",
        name: "Bill Gates",
        img: "./Assets/background-bill-gates-transparent-8.png", // Update with the actual image path
        designation: "Founder of Microsoft"
    },
    {
        paragraph: "This software agency is out of this world! They delivered a highly efficient solution for our project, pushing the boundaries of what's possible. Truly impressive work!",
        name: "Elon Musk",
        img: "./Assets/elon-removebg-preview.png", // Update with the actual image path
        designation: "Founder of Tesla"
    },
    {
        paragraph: "The team at this agency is incredibly innovative. They helped us implement cutting-edge technology that significantly improved our platform's performance and user engagement.",
        name: "Mark Zuckerberg",
        img: "./Assets/mark.png", // Update with the actual image path
        designation: "Founder of Facebook"
    },
    {
        paragraph: "As a developer myself, I was blown away by the expertise and professionalism of this software agency. They brought my vision to life with precision and creativity, making the entire process smooth and enjoyable.",
        name: "Raj Tushal",
        img: "./Assets/434126313_3773381776270594_2580497460612244755_n-Photoroom-removebg-preview.png", // Update with the actual image path
        designation: "Web Developer"
    }
];

const prsPreviousButton = document.querySelector(".previous")
const next = document.querySelector(".next");
const prsdetails = document.querySelector(".details");
const prsprofilePic = document.querySelector(".profilePic");
const prsName = document.querySelector(".name");
const prsdesignation = document.querySelector(".designation");

let currentIndex = 0; // Track the current person being displayed

function updatePersonDetails() {
    if (currentIndex >= fullDetails.length) {
        currentIndex = 0; // Loop back to the start
    }
    if (currentIndex < 0) {
        currentIndex = fullDetails.length - 1; // Loop back to the end if index is negative
    }

    prsName.innerHTML = fullDetails[currentIndex].name;
    prsdesignation.innerHTML = fullDetails[currentIndex].designation;
    prsdetails.innerHTML = fullDetails[currentIndex].paragraph;
    prsprofilePic.src = fullDetails[currentIndex].img; // Update the image source

    // Move to the next person on the next click
    currentIndex++;
}

// Attach the event listeners for both buttons
next.addEventListener("click", updatePersonDetails);
prsPreviousButton.addEventListener("click", () => {
    currentIndex -= 2; // Adjust index to show the previous person
    updatePersonDetails();
});

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        // Right arrow key pressed
        updatePersonDetails();
    } else if (event.key === "ArrowLeft") {
        // Left arrow key pressed
        currentIndex -= 2; // Adjust index to show the previous person
        updatePersonDetails();
    }
});
