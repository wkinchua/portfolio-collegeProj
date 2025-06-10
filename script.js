// for smaller screen
//for the navigation thing
function toggleMenu() { 
  const panel = document.getElementById('sidePanel'); 
  const overlay = document.getElementById('overlay');
  const content = document.getElementById('content');

  panel.classList.toggle('open'); //press to open the overlay
  overlay.classList.toggle('show'); // after overlay open it will show the block/content inside
  content.classList.toggle('blurred'); //blurs the background <-- so only focus on the navigation
}


//this display the word count for the Message Box
document.addEventListener("DOMContentLoaded", function () { 
  const messagebox = document.getElementById("message");
  const wordCountDisplay = document.getElementById("wordCount");

  if (messagebox && wordCountDisplay) {
    messagebox.addEventListener("input", function () {
      const words = messagebox.value.trim().split(/\s+/).filter(Boolean);
      wordCountDisplay.textContent = `${words.length} / 250 words`;

      if (words.length > 250) {
        alert("You have exceeded the 250-word limit.");
        const trimmed = words.slice(0, 250).join(" ");
        messagebox.value = trimmed;
        wordCountDisplay.textContent = `250 / 250 words`;
      }
    });
  }


//only for the contact page
// after pressing the submit button, it will show SEND SUCCESFULLY
const form = document.getElementById('contactForm'); 
const successMessage = document.getElementById('success');

  if (form && successMessage) {
    form.addEventListener('submit', function (prev) {
      prev.preventDefault();  

      successMessage.style.display = 'block'; //show the "send success" message 

      form.reset();
      if (wordCountDisplay) {
        wordCountDisplay.textContent = '0 / 250 words'; // reset the form
      }

      setTimeout(() => {
        successMessage.style.display = 'none'; // hide the "send succesfully" message after some time
      }, 3000);
    });
  }

});
