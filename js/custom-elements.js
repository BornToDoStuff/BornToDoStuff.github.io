class SpellElement extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}
}
customElements.define("magic-spell", SpellElement);
// if (customElements.get("magic-spell"))
// 	console.log("magic-spell tag added");
//HTMLAnchorElement

class MagicItemElement extends HTMLElement { constructor() { super(); } }
customElements.define("magic-item", MagicItemElement);
class ItemNameElement extends HTMLElement { constructor() { super(); } }
customElements.define("item-name", ItemNameElement);
class ItemTagsElement extends HTMLElement { constructor() { super(); } }
customElements.define("item-tags", ItemTagsElement);
class ItemDescriptionElement extends HTMLElement { constructor() { super(); } }
customElements.define("item-description", ItemDescriptionElement);

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
