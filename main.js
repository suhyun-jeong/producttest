const numbersContainer = document.getElementById('numbers');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {
    numbersContainer.innerHTML = '';
    const lottoNumbers = new Set();

    while(lottoNumbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        lottoNumbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(lottoNumbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number');
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    });
});
