function reset(){
	while(ul.children.length>0){
		ul.removeChild(ul.children[0]);
	}
	display();
	const buttonContent = document.getElementsByTagName('button');
	const qwertyChild = qwerty.children;
	for(i=0; i<=26; i++){
		if(i<=10){
			let removedChild = qwertyChild[0].children[i];
			qwertyChild[0].removeChild(removedChild);
			let buttonI = document.createElement('button');
			buttonI.textContent = buttonContent[i].textContent;
			qwertyChild[0].appendChild(buttonI);
		}
	}
	console.log(qwertyChild[0]);
}


while(qwerty.children.length>0){
	qwerty.removeChild(qwerty.children[0]);
}



const newButton = document.createElement('button');
newButton.textContent = buttonContent[1].textContent;
console.log(newButton);
