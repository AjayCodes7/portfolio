const setVanta = () => {
    if (window.VANTA) window.VANTA.GLOBE({
        el: ".s-page-1 .s-section-1 .s-section",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xc2c2c2,
        color2: 0x6067b6,
        backgroundColor: 0x101010,
    });
};
document.addEventListener("DOMContentLoaded", setVanta);


const smooth = () =>{
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true
  });
}
document.addEventListener("DOMContentLoaded", smooth);



document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default form submit (no page reload)

  const form = e.target;
  const formData = new FormData(form);
//   const statusMessage = document.getElementById("status-message");
  const statusMessage = document.getElementById("status-message");

  try {
    const response = await fetch("https://formspree.io/f/xrbkzyoa", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
        statusMessage.innerText = "Message sent! Thank you!";
      form.reset();
    } else {
      statusMessage.textContent = "Oops! There was a problem submitting your form.";
    }
  } catch (error) {
    statusMessage.textContent = "Network error. Please try again later.";
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const offcanvasLinks = document.querySelectorAll('#offcanvasNavbar .offcanvas-nav-link');
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement); // Get instance or create if not already initialized

    offcanvasLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor link behavior immediately

            const targetId = this.getAttribute('href'); // Get the #id from the href
            
            // First, hide the offcanvas
            bsOffcanvas.hide();

            // Use a small timeout to allow the offcanvas to start closing before scrolling
            // This creates a smoother experience and prevents the scroll from being interrupted.
            setTimeout(() => {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Smooth scroll to the target element
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });

                    // Update the URL hash without a jump (optional, but good for direct links)
                    // history.pushState(null, null, targetId); // If you want to update the URL without adding to history
                    window.location.hash = targetId; // This adds to history and updates the URL
                }
            }, 300); // Adjust this delay (in milliseconds) if needed. 300ms is a good starting point.
        });
    });
});