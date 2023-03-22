// Define images array
const imageNames = [ 
  "adam.abs.png" ,    
 "adam.biceps.png" ,    
 "adam.calves.png" ,    
"adam.chest.png" ,    
"adam.chest.png" ,    
"adam.internal.png" ,    
"adam.kalca.png" ,    
 "adam.lats.png" ,    
 "adam.lowerback.png" ,    
  "adam.quads.png" ,    
 "adam.rear.png" , 
   "adam.shoulder.png", 
  "adam.trapez.png",   
  "adam.triceps.png", 
 "adam.upperback.png" ,  ];



// Global variables
let score = 0;
let time = 30;

// Function to generate random image and name
function generateRandomImage() {
  // Select a random image name from the array
  const index = Math.floor(Math.random() * imageNames.length);
  const imageName = imageNames[index];

  // Set the image source and alt text
  const imageElement = document.getElementById("image");
  imageElement.src = `images/${imageName}.jpg`;
  imageElement.alt = imageName;

  // Clear the input field
  document.getElementById("answer").value = "";

  // Set input focus
  document.getElementById("answer").focus();
}

// Function to update timer and score display
function updateTimerAndScore() {
  // Update timer display
  const timeElement = document.getElementById("time");
  timeElement.innerText = time;

  // Update score display
  const scoreElement = document.getElementById("score");
  scoreElement.innerText = score;
  		// Function to handle user input
      function handleInput() {
        // Get the user's answer and the correct answer
        const userAnswer = document.getElementById("answer").value.trim();
        const correctAnswer = document.getElementById("image").alt;
  
        // If the user's answer is correct, increment the score
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
          score++;
        }
  
        // Generate a new random image and name
        generateRandomImage();
      }
  
      // Function to start the game
      function startGame() {
        // Hide the start button
        document.getElementById("start").style.display = "none";
  
        // Generate a random image and name
        generateRandomImage();
  
        // Set up timer interval
        const timerInterval = setInterval(() => {
          time--;
          if (time === 0) {
            clearInterval(timerInterval);
  
            // Show the final score
            document.getElementById("time").innerText = "Time's Up!";
            document.getElementById("answer").style.display = "none";
            document.getElementById("score").style.marginTop = "50px";
            document.getElementById("score").innerText = `Final Score: ${score}`;
          } else {
            updateTimerAndScore();
          }
        }, 1000);
  
        // Add event listener to input field
        document.getElementById("answer").addEventListener("keydown", (event) => {
          if (event.key === "Enter") {
            handleInput();
          }
        });
      }
  
      // Add event listener to start button
      document.getElementById("start").addEventListener("click", startGame);
    }