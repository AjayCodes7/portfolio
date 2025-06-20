// const setVanta = () => {
//     if (window.VANTA) window.VANTA.DOTS({
//     el: ".s-page-1 .s-section-1 .s-section",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0xffffff,
//     color2: 0x939393,
//     size: 3.20,
//     spacing: 25.00,
//     showLines: false
//     });
// };
// document.addEventListener("DOMContentLoaded", setVanta);


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


document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeOverlay');
    const overlayTitle = document.getElementById('overlayTitle');
    const overlayDescription = document.getElementById('overlayDescription');
    const overlayImage = document.getElementById('overlayImage');

    // Function to show the overlay
    function showOverlay(title, description, imageUrl) {
        overlayTitle.textContent = title;
        overlayDescription.textContent = description;
        overlayImage.src = imageUrl;
        overlayImage.alt = title + " Image"; // Set alt text for accessibility
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the body when overlay is active
    }

    // Function to hide the overlay
    function hideOverlay() {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling on the body
        // Clear content for next display
        overlayTitle.textContent = '';
        overlayDescription.textContent = '';
        overlayImage.src = '';
    }

    // Add event listeners to each grid item
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.dataset.title;
            const description = item.dataset.description;
            const imageUrl = item.dataset.image;
            showOverlay(title, description, imageUrl);
        });
    });

    // Close overlay when close button is clicked
    closeButton.addEventListener('click', hideOverlay);

    // Close overlay when clicking outside the content (on the dark background)
    overlay.addEventListener('click', (event) => {
        if (event.target === overlay) {
            hideOverlay();
        }
    });

    // Close overlay with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && overlay.classList.contains('active')) {
            hideOverlay();
        }
    });
});

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
        statusMessage.style.color = " #25D366";
      form.reset();
    } else {
      statusMessage.textContent = "Oops! There was a problem submitting your form.";
        statusMessage.style.color = " #E64C4C";
    }
  } catch (error) {
    statusMessage.textContent = "Network error. Please try again later.";
    statusMessage.style.color = " #E64C4C";
  }
});