document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  let formData = new FormData(this);

  const email = formData.get("email");
  if (email.endsWith("@qu.edu.qa")) {
    // Show error message
    document.querySelector("#emailError").innerHTML =
      "Sorry, submissions from this domain are not allowed.";
    document.querySelector("#emailError").style.color = "red";
    document.querySelector("#emailError").style.display = "block";
    return;
  }

  const number = formData.get("mobilephone");

  var expr = /^(0|91)?[6-9][0-9]{9}$/;
  if (!expr.test(number)) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter a valid 10 digit mobile number";
    document.querySelector("#mobileError").style.color = "red";
    document.querySelector("#mobileError").style.display = "block";
    return;
  }

  // Send post request to the server
  fetch(
    "https://forms.hubspot.com/uploads/form/v2/23736002/688d8b8a-37c8-4bf1-bd94-9e2e31d4c0d8",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        // Show success message
        document.querySelector("#thankYou").innerHTML =
          "Thank you for submitting the form!";
        document.querySelector("#thankYou").style.color = "green";
        document.querySelector("#thankYou").style.display = "block";
      } else {
        // Show error message
        document.querySelector("#thankYou").innerHTML =
          "An error occurred while submitting the form. Please try again later.";
        document.querySelector("#thankYou").style.color = "red";
        document.querySelector("#thankYou").style.display = "block";
      }

      // Remove form
      this.remove();
    })
    .catch((error) => {
      console.error(error);
      // Show error message
      document.querySelector("#thankYou").innerHTML =
        "Something went wrong, please try again later.";
      document.querySelector("#thankYou").style.color = "red";
      document.querySelector("#thankYou").style.display = "block";
      // Remove form
      this.remove();
    });
});


const moveSliderToLeft = () => {
  const scrollableElement = document.querySelector("#sliderCont");

  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth < 760 ? 280 : 520;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const moveSliderToRight = () => {
  const scrollableElement = document.querySelector("#sliderCont");

  const screenWidth = window.innerWidth;
  const scrollAmount = screenWidth < 760 ? -280 : -520;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

// Slider Movements
const moveSliderToLeft2 = () => {
  console.log("hi2");

  const scrollableElement = document.querySelector("#gridSlider");
  console.log(scrollableElement);

  const screenWidth = window.innerWidth;
  const scrollAmount = 400;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const moveSliderToRight2 = () => {
  console.log("hi1");
  const scrollableElement = document.querySelector("#gridSlider");
  console.log(scrollableElement);

  const screenWidth = window.innerWidth;
  const scrollAmount = -400;

  scrollableElement.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
};

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;

// Slider Movements
const slidesContent = [
  {
    right:
      "“Dropbox has been tremendously helpful for social media. I can hop on anytime and pull whatever photo is inspiring me to post.”",
    author: "Mary Ashley Krogh (MAK)",
    post: " Illustrator and Graphic Designer",
    src: "/dropbox/carouselimg1.webp",
  },
  {
    right:
      "“Dropbox increased our team’s collaboration while working from home, which has increased our flexibility and could revolutionise our office culture.”",
    author: "Adam Montgomery",
    post: "Senior Manager of Programming, Sundance Film Festival",
    src: "/dropbox/carouselimg2.webp",
  },
  {
    right:
      "“We’re a grass-roots non-profit. When we use a tool that the rest of the design world uses, it helps professionalise our organisation.”",
    author: "Ann Kappes",
    post: "Director of Art Partnerships at Creativity Explored",
    src: "/dropbox/carouselimg3.webp",
  },
  {
    right:
      "“My sister and I store and share recipes, and I use the app on my phone to look up ingredients while I’m at the grocery store. It’s very convenient and user friendly, without a lot of overhead.”      ",
    author: "Lynette Elliot",
    post: "",
    src: "/dropbox/carouselimg4.webp",
  },
  {
    right:
      "“Our team is working remotely – everyone’s in a different time zone. Dropbox is a great hub for us to all work at once and seamlessly share files.” ",
    author: "Sophia Chang",
    post: "Illustrator and Designer",
    src: "/dropbox/carouselimg5.webp",
  },
  {
    right:
      "“Dropbox version control is very important. You may want to go back to an earlier version because there’s an idea in there that you really like.”",
    author: "Sahir Zaveri",
    post: "CEO of King Children",
    src: "/dropbox/carouselimg6.webp",
  },
  {
    right:
      "“We store important photos and documents for our family on Dropbox. Not only do I know they are in a safe location, but I’m also able to access them from anywhere.” ",
    author: "Sarah Shelton",
    post: "",
    src: "/dropbox/carouselimg7.webp",
  },
];

const leftSlide = document.getElementById("left-slide");
const rightSlide = document.getElementById("right-slide");

function updateSlide(index) {
  // document.getElementById("left-paragraph").innerText =
  //   slidesContent[index].left;
  document.getElementById("right-paragraph").innerText =
    slidesContent[index].right;
  document.getElementById("right-author").innerText =
    slidesContent[index].author;
  document.getElementById("right-author-post").innerText =
    slidesContent[index].post;
  document.getElementById("right-image").src = slidesContent[index].src;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
  leftSlide.style.transform = `translateX(-${index * 100}%)`;
  rightSlide.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slidesContent.length - 1;
  updateSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide = currentSlide < slidesContent.length - 1 ? currentSlide + 1 : 0;
  updateSlide(currentSlide);
});

indicators.forEach((indicator) => {
  indicator.addEventListener("click", (event) => {
    currentSlide = parseInt(event.target.getAttribute("data-slide"));
    updateSlide(currentSlide);
  });
});

updateSlide(currentSlide);

// Slider Movements
