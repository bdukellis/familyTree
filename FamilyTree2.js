class GrandParents {
	constructor(hairColor, eyeColor) {
		this.hair = hairColor,
		this.eye = eyeColor;
	}

	vertical() {
		console.log('Grandmas vertical is 27 feet');
	}
}


class Parents extends GrandParents {

	vertical() {

		console.log('Moms vertical is 84 feet');
	}
}

class Children extends GrandParents {
	vertical() {
		console.log('Sons vertial is 102 feet')
	}
}
let myGrandparent = new GrandParents('Brown', 'Brown');
myGrandparent.vertical();


let myParent = new Parents('Blonde', 'Brown');
myParent.vertical();


let myChildren = new Children("Red", "Brown");
myChildren.vertical();

let familyTree = [];
familyTree.push(myGrandparent);
familyTree.push(myParent);
familyTree.push(myChildren);

for (let i = 0; i < familyTree.length; i++) {
	familyTree[i].vertical();
}
