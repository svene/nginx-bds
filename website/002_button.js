const listenerButton = document.getElementById('listenerButton');
const linkBtn = document.getElementById('linkBtn');
const output = document.getElementById('output');

listenerButton.addEventListener('click', (event) => {
	console.log('click listener', event);
	output.innerText = 'output: click listener';
});
linkBtn.addEventListener('balNavigate', (event) => console.log('linkBtn: balNavigate', event));
linkBtn.addEventListener('click', (event) => console.log('linkBtn: click', event));

export function ccc(event) {
	output.innerText = 'output: onclick attribute';
}

window.app = {
	ccc: ccc,
}
