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