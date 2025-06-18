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