document.addEventListener('DOMContentLoaded', () => {
	//all global variables---------------------------------------------------
	const qwerty = document.getElementById('qwerty');
	const phrase = document.getElementById('phrase');
	const overlay = document.getElementById('overlay');
	const ul = document.querySelector('#phrase ul');
	const li = document.createElement('li');
	const start = document.querySelector('.btn__reset');

	let missed = 0;
	let tries = [];

	const randPhrase = [
		"leave a little sparkle wherever you go",
		"diffult roads often lead to beautiful destinations",
		"it always seems impossible until it is done",
		"an eye for an eye will make the whole world blind",
		"expect nothing and you will never be disappointed",
		"do not count your chickens before they hatch",
	];

	//all functions ---------------------------------------------------------
	function getRandomPhraseArray(arrPhrase){
		let randomNum = Math.floor(Math.random()*5) + 1;
		const parsed = randPhrase[randomNum].split('');
		return parsed;
	}

	function addPhraseToDisplay(arrChar){
		for(i=0; i<arrChar.length; i++){
			const li = document.createElement('li');
			li.textContent = arrChar[i];
			ul.appendChild(li);
			if (li.textContent != " "){
				li.className = "letter";
			} else {
				li.className = "space";
			}
		};
		return ul;
	}

	function display(){
		const phraseArray = getRandomPhraseArray(randPhrase);
		addPhraseToDisplay(phraseArray);
	}

	function checkedLetter(btn){
		const letters = document.querySelectorAll('.letter');
		let letter = '';
		let found = null;
		for(i=0; i<letters.length; i++){
			letter = letters[i];
			if(letter.textContent === btn.textContent){
				letter.className += " show";
				found = letter;
			}
		}
		return found;
	}

	function whileLoop (parent){
		while(parent.children.length>0){
			parent.removeChild(parent.children[0]);
		}
	}

	function reset(){
		//removing phrase
		whileLoop(ul);
		display();

		//removing text from overlay
		const h3 = document.getElementsByTagName('h3');
		if(h3.length>=1){
			overlay.removeChild(h3[0]);
		}

		//storing button info in array
		const oldButtons = document.getElementsByTagName('button');
		const buttonContent = [];
		for(i=0; i<oldButtons.length; i++){
			let content = oldButtons[i].textContent;
			buttonContent.push(content);
		}

		//removing buttons
		const qwertyChild = qwerty.children;
		for(i=0; i<qwertyChild.length; i++){
			let parent1 = qwertyChild[i];
			whileLoop(parent1);
		}

		function addNewButtons(num){
			let newButton = document.createElement('button');
			newButton.textContent = buttonContent[i];
			qwertyChild[num].appendChild(newButton);
		}

		//adding new buttons
		for(i=0; i<26; i++){
			if(i<10){
				addNewButtons(0);
			} else if(i>=10 && i<19){
				addNewButtons(1);
			} else {
				addNewButtons(2);
			}
		}
		styleButtons();
		missed = 0;

		//placing hearts back on screen
		const ol = document.querySelector('#scoreboard ol');
		for(i=0; i<tries.length; i++){
			ol.appendChild(tries[i]);
		}
	}

	function overlayStart(oClass, content, winLose){
		const text = document.createElement('h3');
		overlay.className = oClass;
		overlay.style.display = "flex";
		start.textContent = content;
		start.addEventListener('click', reset());
		text.textContent = winLose;
		overlay.appendChild(text);
	}

	function checkWin() {
		const totalLetters = document.getElementsByClassName("letter");
		const totalGuessed = document.getElementsByClassName("show");
		if(totalLetters.length === totalGuessed.length){
			overlayStart("win","Play Again","You Win!");
		}
		if(missed === 5){
			overlayStart("lose", "Try Again","You Lose!");
		}
	}

	function styleButtons(){
		const buttons = document.querySelectorAll('button');
		let letterFound = "";
		for(i=0; i<buttons.length; i++){
			let button = buttons[i];
			button.addEventListener('click', (e)=>{
				letterFound = checkedLetter(e.target);
				if(letterFound==null){
					missed += 1;
					const parentTries = document.querySelector("#scoreboard ol");
					const childTries = document.getElementsByClassName('tries')[0];
					tries.push(childTries);
					parentTries.removeChild(childTries);
					e.target.className = "chosen";
				} else {
					e.target.className = "matched";
				}
				e.target.disabled = true;
				checkWin();
			});
		}
	}

	//initialize game....................................................
	start.addEventListener('click', ()=>{
		overlay.style.display = 'none';
	});
	display();
	styleButtons();
});
