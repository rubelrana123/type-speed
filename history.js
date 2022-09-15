const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, words_per_seconde) {
	console.log(questionText, timeTaken, errorCount);
	const newRow = document.createElement('div');
	newRow.classList.add('card');

	newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>Your Speed: <span class="bold green">${parseInt(words_per_seconde)}</span> WPM</p>
  <p>You took: <span class="bold">${parseInt(timeTaken)}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

	histories.appendChild(newRow);

	let previousTests = JSON.parse(localStorage.getItem('testHistory')) || [];
	previousTests.push({ questionText, timeTaken, errorCount,words_per_seconde });
	localStorage.setItem('testHistory', JSON.stringify(previousTests));

	displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>Your speed: <span class="bold">${parseInt(test.words_per_seconde)}</span> WPM</p>
  <p>You took: <span class="bold">${parseInt(test.timeTaken)}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
