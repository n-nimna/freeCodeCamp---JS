
//js code
document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const resultElement = document.getElementById('result');
    const isPalindrome = checkPalindrome(inputText);
    
    if (isPalindrome) {
        resultElement.textContent = `"${inputText}" is a palindrome.`;
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = `"${inputText}" is not a palindrome.`;
        resultElement.style.color = 'red';
    }
});

function checkPalindrome(text) {
    const cleanedText = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
}
