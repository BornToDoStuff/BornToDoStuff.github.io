class SpellElement extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}
}
customElements.define("magic-spell", SpellElement);
if (customElements.get("magic-spell"))
	console.log("magic-spell tag added");
//HTMLAnchorElement

class ItemNameElement extends HTMLElement { constructor() { super(); } }
customElements.define("item-name", ItemNameElement);
if (customElements.get("item-name")) { console.log("item-name tag added"); }

class MagicItemElement extends HTMLElement { constructor() { super(); } }
customElements.define("magic-item", MagicItemElement);
if (customElements.get("magic-item")) { console.log("magic-item tag added"); }

class ItemTagsElement extends HTMLElement { constructor() { super(); } }
customElements.define("item-tags", ItemTagsElement);
if (customElements.get("item-tags")) { console.log("item-tags tag added"); }

var QuillIsDeclared = true;
try{ Quill; }
catch(e) {
	if(e.name == "ReferenceError") {
		QuillIsDeclared = false;
	}
}

if (QuillIsDeclared)
{
	let Inline = Quill.import('blots/inline');
	class SpellBlot extends Inline { }
	SpellBlot.blotName = 'spell';
	SpellBlot.tagName = 'magic-spell';
	Quill.register(SpellBlot); //register custom tag as an item Quill can use
}
