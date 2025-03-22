/* Typing Effect for Introduction
 * Using Typed.js
 * -------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    // Only initialize typing effect after the preloader is done
    const initTyping = function() {
        if (document.querySelector("#typing-text")) {
            const typed = new Typed('#typing-text', {
                strings: [
                    "TypeScript, JavaScript, <br>React.js, and more.",
                    "C# (WinForms/Unity), <br>PHP, and Laravel.",
                    "user-centric design <br>and clean code."
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                startDelay: 1000,
                loop: true,
                smartBackspace: true,
                cursorChar: '|',
                html: true
            });
        }
    };

    // Check if preloader exists and wait for it to finish
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        // If the main.js animation timeline exists, hook into it
        if (typeof tl !== 'undefined') {
            // Add callback to the end of the animation timeline
            tl.finished.then(initTyping);
        } else {
            // Fallback if animation timeline isn't available
            window.addEventListener('load', function() {
                setTimeout(initTyping, 1000);
            });
        }
    } else {
        // No preloader, initialize immediately
        initTyping();
    }
});
