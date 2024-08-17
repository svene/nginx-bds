const openButton = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const okBtn = document.getElementById('okBtn');
const cancelBtn = document.getElementById('cancelBtn');

openButton.addEventListener('click', (event) => {
	modal.open();
});
okBtn.addEventListener('click', (event) => {
	// Unfortnuately data is not used by BDS-modal in html/js mode:
	// modal.dismiss({name: 'Bart'}, 'role');
	// Therefore a custom event will be used here as a workaround:
	const x = new CustomEvent('app_modal-ok', { detail: {name: 'Bart'} });
	modal.dispatchEvent(x);
	modal.dismiss();
});
modal.addEventListener('balModalWillDismiss', (event) => {
	console.log('balModalWillDismiss', event);
});
modal.addEventListener('app_modal-ok', (event) => {
	console.log('app_modal-ok', event.detail);
});
modal.onWillDismiss().then(d => console.log('onWillDismiss: ', d));

cancelBtn.addEventListener('click', (event) => {
	modal.dismiss();
});
