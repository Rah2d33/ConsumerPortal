document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const text = typingText.getAttribute('data-text'); // Get the text from data attribute
    typingText.setAttribute('data-text', ''); // Clear the initial content

    let index = 0;
    let isTyping = true; // To track whether we're typing or erasing
    const typingSpeed = 100; // Speed for typing
    const backspaceSpeed = 50; // Speed for backspacing
    const pauseBeforeBackspace = 1000; // Delay before starting to backspace
    const pauseBeforeTypingAgain = 500; // Delay before restarting typing after erasing

    // Function to handle typing and backspacing
    function typeAndErase() {
        if (isTyping) {
            // Typing phase
            if (index < text.length) {
                typingText.textContent = text.substring(0, index + 1); // Add one character at a time
                index++;
                setTimeout(typeAndErase, typingSpeed);
            } else {
                // Once typing is finished, pause, then switch to backspacing
                setTimeout(() => {
                    isTyping = false;
                    setTimeout(typeAndErase, backspaceSpeed); // Start erasing
                }, pauseBeforeBackspace); // Wait before erasing
            }
        } else {
            // Backspacing phase
            if (index > 0) {
                typingText.textContent = text.substring(0, index - 1); // Remove one character at a time
                index--;
                setTimeout(typeAndErase, backspaceSpeed);
            } else {
                // Once erasing is finished, pause, then switch back to typing
                isTyping = true;
                setTimeout(typeAndErase, pauseBeforeTypingAgain); // Start typing again after a short pause
            }
        }
    }

    // Start typing the text initially
    setTimeout(typeAndErase, typingSpeed);
});
