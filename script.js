const funcButton = document.querySelectorAll('.gridBtn')

 // Adding a single event listener to the parent container
 document.querySelector('.mainGrid').addEventListener('click', (event) => {
    const clickedButton = event.target;

    // Checking if the clicked element is a button with the 'gridBtn' class
    if (clickedButton.classList.contains('gridBtn')) {
        // Your event handling code here
        console.log(clickedButton.id);
    }
});