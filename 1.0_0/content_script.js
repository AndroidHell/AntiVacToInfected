walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	//v = v.replace(/\relpace_me\b/g, "with_me");

	// anti-vaccer/vaxxer to the infected
	v = v.replace(/\bAnti-Vaccer\b/g, "The Infected");
	v = v.replace(/\banti-vaccer\b/g, "the infected");
	v = v.replace(/\bAnti-vaccer\b/g, "The infected");
	v = v.replace(/\bAnti-Vaccers\b/g, "The Infected");
	v = v.replace(/\banti-vaccers\b/g, "the infected");
	v = v.replace(/\bAnti-vaccers\b/g, "The infected");

	v = v.replace(/\bAnti Vaccer\b/g, "The Infected");
	v = v.replace(/\banti vaccer\b/g, "the infected");
	v = v.replace(/\bAnti vaccer\b/g, "The infected");
	v = v.replace(/\bAnti Vaccers\b/g, "The Infected");
	v = v.replace(/\banti vaccers\b/g, "the infected");
	v = v.replace(/\bAnti vaccers\b/g, "The infected");

	v = v.replace(/\bAnti-Vaxxer\b/g, "The Infected");
	v = v.replace(/\banti-vaxxer\b/g, "the infected");
	v = v.replace(/\bAnti-vaxxer\b/g, "The infected");
	v = v.replace(/\bAnti-Vaxxers\b/g, "The Infected");
	v = v.replace(/\banti-vaxxers\b/g, "the infected");
	v = v.replace(/\bAnti-vaxxers\b/g, "The infected");

	v = v.replace(/\bAnti Vaxxer\b/g, "The Infected");
	v = v.replace(/\banti vaxxer\b/g, "the infected");
	v = v.replace(/\bAnti vaxxer\b/g, "The infected");
	v = v.replace(/\bAnti Vaxxers\b/g, "The Infected");
	v = v.replace(/\banti vaxxers\b/g, "the infected");
	v = v.replace(/\bAnti vaxxers\b/g, "The infected");

	// anti-vaccine to zombie
	v = v.replace(/\bAnti-Vaccine\b/g, "Zombie");
	v = v.replace(/\bvnti-vaccine\b/g, "zombie");
	v = v.replace(/\bAnti-vaccine\b/g, "Zombie");
	v = v.replace(/\bAnti Vaccine\b/g, "zombie");
	v = v.replace(/\banti vaccine\b/g, "zombie");
	v = v.replace(/\bAnti vaccine\b/g, "Zombie");

	// anti-vaccination to zombie
	v = v.replace(/\bAnti-Vaccination\b/g, "Zombie");
	v = v.replace(/\banti-vaccination\b/g, "zombie");
	v = v.replace(/\bAnti-vaccination\b/g, "Zombie");
	v = v.replace(/\bAnti Vaccination\b/g, "zombie");
	v = v.replace(/\banti vaccination\b/g, "zombie");
	v = v.replace(/\bAnti vaccination\b/g, "Zombie");

	textNode.nodeValue = v;
}




