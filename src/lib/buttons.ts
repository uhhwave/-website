let isHidden = true; // Initial state: element to hide is hidden

  // Find all buttons with the `alert` class on the page.
  const buttons = document.querySelectorAll('#b');

  // Handle clicks on each button.
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
toggleElements();
	});
  });

function toggleElements() {
  isHidden = !isHidden; // Toggle state

  document.getElementById("s").style.display = "flex";
  document.getElementById("b").style.display = "none";
}
