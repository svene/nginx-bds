import { balIconConsultant } from 'https://cdn.jsdelivr.net/npm/@baloise/ds-icons/index.esm.js';
import { balBrandIconTheftCarGreen } from 'https://cdn.jsdelivr.net/npm/@baloise/ds-brand-icons/index.esm.js';
import { d as defaultConfig } from 'https://cdn.jsdelivr.net/npm/@baloise/ds-core/components/config.default.js';

const defaultIcons = defaultConfig.icons;

const brandIcons = { // unfortunately BDS does not provide a map for brand-icons (as it does for defaultIcons)
	balIconConsultant: balIconConsultant,
	balBrandIconTheftCarGreen: balBrandIconTheftCarGreen,
}

const processBalIcons = () => {
	document?.body?.querySelectorAll(`bal-icon[data-icon-svg]:not([data-rsjs-processed])`).forEach(node => {
		const attrValue = node.getAttribute('data-icon-svg');
		node.svg = defaultIcons[attrValue] || brandIcons[attrValue];
		node.setAttribute('data-rsjs-processed', '')
	});
}

new MutationObserver((mutationList, observer) => processBalIcons())
	.observe(document.querySelector('body'), {subtree: true, childList: true});

const processDivIcons = () => {
	document?.body?.querySelectorAll(`div[data-icon-svg]:not([data-rsjs-processed])`).forEach(node => {
		console.log('processing')
		const attrValue = node.getAttribute('data-icon-svg');
		node.innerHTML = defaultIcons[attrValue] || brandIcons[attrValue];
		node.setAttribute('data-rsjs-processed', '')
	});
}

new MutationObserver((mutationList, observer) => processDivIcons())
	.observe(document.querySelector('body'), {subtree: true, childList: true});
