class SpellElement extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();
	}
}
customElements.define('magic-spell', SpellElement);
if (customElements.get("magic-spell"))
	console.log("magic-spell tag added");

class ItemNameElement extends HTMLElement { //HTMLAnchorElement
	constructor() {
		// Always call super first in constructor
		super();
	}
}
customElements.define('item-name', ItemNameElement);
if (customElements.get("item-name"))
	console.log("item-name tag added");

let Inline = Quill.import('blots/inline');
let Block = Quill.import('blots/block');

class SpellBlot extends Inline { }
SpellBlot.blotName = 'spell';
SpellBlot.tagName = 'magic-spell';

class CurseBlot extends Block {
	static create(id){
		let node = super.create();
		node.setAttribute("id", id);

		return node;
	}

	static formats(node){
		node.getAttribute("id");
	}
}
CurseBlot.blotName = "curse";
CurseBlot.tagName = "section";

//register custom tags as items Quill that can use
Quill.register(SpellBlot); 
Quill.register(CurseBlot); 


//make sure to add custom blots to whitelist