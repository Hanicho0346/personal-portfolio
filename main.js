document.addEventListener('DOMContentLoaded', (event) => {
   
        emailjs.init('ZJFEPvEntKeT_s6J_'); // Initialize EmailJS with your user ID
        console.log("EmailJS initialized successfully.");
   
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Check if all fields are filled
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    emailjs.send("service_uycyhxc", "template_zebi1tp", {
        from_name: name,
        from_email: email,
        message: message,
        to_email: "hanagebremedhin2019@gmail.com" 
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); 
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
});




// Function to toggle navigation menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

// Function to close navigation menu on click
const navLink = document.querySelectorAll('.nav__link');
function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Function to add active class to navigation links on scroll
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link');
    } else {
      sectionsClass.classList.remove('active-link');
    }
  });
};




