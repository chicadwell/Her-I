// Function to handle button clicks
function showHeart(choice) {
  // Hide page1 and show page2
  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';

  // Create heart element
  const heart = document.createElement('div');
  heart.classList.add('heart');
  if (choice === 'yes') {
    heart.innerHTML = '❤️'; // Pink heart
  } else {
    heart.innerHTML = '💔'; // Broken heart
  }
  document.body.appendChild(heart);

  // Start text animation after 1 second
  setTimeout(() => {
    document.getElementById('jumpText').style.animation = 'jump 2s ease-in-out';
  }, 1000);
  
  // Stop video after 10 seconds
  setTimeout(() => {
    document.getElementById('video').pause();
  }, 10000);
}
