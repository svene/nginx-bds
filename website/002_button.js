// Card 1:
const output1 = document.getElementById('output1');
export function handleClickFromAttribute(element, event) {
	console.log(element	);
	console.log(event);
	console.log(event.target);
	output1.innerText = 'output: onclick attribute';
}

// Card 2:
const listenerButton = document.getElementById('listenerButton');
const output2 = document.getElementById('output2');
listenerButton.addEventListener('click', (event) => { // note: (element, event) does not work. Only one parameter (the event) is passed id
	console.log('click listener: event: ', event);
	console.log('click listener: event.target: ', event.target);
	output2.innerText = 'output: click event from listenerButton';
});

const linkBtn = document.getElementById('linkBtn');

linkBtn.addEventListener('balNavigate', (event) => { // TODO-DS: event 'balNavigate' not emitted
	console.log('linkBtn: balNavigate', event);
});
linkBtn.addEventListener('click', (event) => {
	output2.innerText = 'output: click event from linkBtn';
	console.log('linkBtn: click', event);
});


// global:
window.app = {
	handleClickFromAttribute: handleClickFromAttribute,
}
