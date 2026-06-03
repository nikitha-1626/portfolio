// Fade animation on scroll
const elements = document.querySelectorAll('.fade');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('show');
    }
  });
});

// Form validation
function validateForm() {
  const email = document.getElementById("email").value;

  if (!email.includes("@")) {
    alert("Please enter a valid email!");
    return false;
  }

  alert("Message Sent Successfully!");
  return true;
}