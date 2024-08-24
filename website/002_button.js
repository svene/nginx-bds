// Card 1:
const output1 = document.getElementById('output1');
export function handleClickFromAttribute(element, event) {
	console.log(element	);
	console.log(event);
	console.log(event.target);
	output1.innerText = 'button was clicked';
	setTimeout(() => output1.innerText = '', 1000);
}

// Card 2:
const listenerButton = document.getElementById('listenerButton');
const output2a = document.getElementById('output2a');
listenerButton.addEventListener('click', (event) => { // note: (element, event) does not work. Only one parameter (the event) is passed id
	console.log('click listener: event: ', event);
	console.log('click listener: event.target: ', event.target);
	output2a.innerText = 'button was clicked';
	setTimeout(() => output2a.innerText = '', 1000);
});

const linkBtn = document.getElementById('linkBtn');
const output2b = document.getElementById('output2b');
linkBtn.addEventListener('balNavigate', (event) => { // TODO-DS: event 'balNavigate' not emitted
	console.log('linkBtn: balNavigate', event);
});
linkBtn.addEventListener('click', (event) => {
	console.log('linkBtn: click', event);
	output2b.innerText = 'link button was clicked (balNavigate event should be emitted, but is not)';
	setTimeout(() => output2b.innerText = '', 1000);
});


// global:
window.app = {
	handleClickFromAttribute: handleClickFromAttribute,
}

// Card 3:
const nativeListenerButton = document.getElementById('nativeListenerButton');
const output3 = document.getElementById('output3');
nativeListenerButton.addEventListener('click', (event) => { // note: (element, event) does not work. Only one parameter (the event) is passed id
	console.log('click listener: event: ', event);
	console.log('click listener: event.target: ', event.target);
	output3.innerText = 'native button was clicked';
	setTimeout(() => output3.innerText = '', 1000);
});
