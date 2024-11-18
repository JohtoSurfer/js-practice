// Variables
const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

// Function to check for palindrome and display result
function checkForPalindrome(input) {
  const originalInput = input; // Store for later output

  if (input === '') {
    alert('Please input a value');
    return;
  }

  // Remove the previous result
  resultDiv.innerHTML = '';

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  var resultMsg = '<strong>' + originalInput + '</strong> ' +
    (lowerCaseStr === lowerCaseStr.split('').reverse().join('') ? 'is' : 'is not') +
    ' a palindrome.';

  var pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.appendChild(pTag);

  // Show the result.
  resultDiv.classList.remove('hidden');
}

// Event Listener for the button
checkPalindromeBtn.addEventListener('click', function() {
  checkForPalindrome(userInput.value);
  userInput.value = '';
});

// Event Listener for the input field (Enter key)
userInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
