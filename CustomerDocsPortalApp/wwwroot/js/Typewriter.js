document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const text = typingText.getAttribute('data-text');
    typingText.setAttribute('data-text', ''); // Clear the initial data-text

    let index = 0;
    const speed = 100; // Speed of typing in milliseconds
    const cursorSpeed = 500; // Speed of cursor blink in milliseconds

    // Create a span element for the cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.display = 'inline-block';
    cursor.style.opacity = 1;
    typingText.appendChild(cursor);

    // Function to toggle the cursor's visibility
    function toggleCursor() {
        cursor.style.opacity = cursor.style.opacity === '1' ? '0' : '1';
    }

    // Start the cursor blinking
    const cursorInterval = setInterval(toggleCursor, cursorSpeed);

    // Function to type the text
    function typeText() {
        if (index < text.length) {
            typingText.textContent = text.substring(0, index + 1); // Update text without the cursor
            typingText.appendChild(cursor); // Reattach the cursor
            index++;
            setTimeout(typeText, speed);
        } else {
            setTimeout(() => {
                typingText.textContent = ''; // Clear the text after it finishes
                index = 0; // Reset index
                typeText(); // Restart the typing effect
            }, speed * 10); // Delay before restarting the typing
        }
    }

    // Delay before starting the typing effect to allow cursor to blink first
    setTimeout(typeText, cursorSpeed * 2); // Adjust the timing as needed
});

