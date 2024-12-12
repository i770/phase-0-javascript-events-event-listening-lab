// This function will be called when the button is clicked
function clickAlert() {
    alert('I was clicked!');
}

// This function sets up the event listener
function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', clickAlert);
}

// Call the function to set up the event listener
addingEventListener();

