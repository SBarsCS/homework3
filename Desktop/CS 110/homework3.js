
//Perimeter of triangle 
const perimeter = function(edge1, edge2, edge3) {
return edge1 + edge2 + edge3;
};
const a = perimeter (5, 12, 13);
console.log(a);



//A function that takes no arguments and returns something
const noarguments = function() {
return	 "yay";
};
const b = noarguments() ;
console.log (b);



//A function that takes arguments, does something but does not return anything
const noReturn = function(num1, num2 ) {
	return num1 / num2;
};
const c = noReturn (1, 9);



//fullName
const fullName = function(firstname, lastname) {
	return firstname +' ' + lastname;
};
const d = fullName ('Satenik', 'Barseghyan');
console.log(d);



//A function that takes three strings and returns the string that is the longest.
const string = function(a, b, c) {
	if (a.length > b.length && a.length > c.length) {
		return a;
	}
	if (b.length > a.length && b.length > c.length) {
	return b;
}
     if (c.length > a.length && c.length > b.length) {
     return c;
}
};
const e = string("AUA", "I", "LOVE");
console.log (e);



//equal
const equal = function(x, y) {
	if (x === y) {
		return 0;
	}
	if (x > y) {
		return 1;
	}
	if (x < y) {
		return -1;
	}
};
const f = equal(-5, -4);
console.log (f);



//he first truethy value
const isTruethy = function( st1, st2, st3) {
if ( st1 ) {
	return st1;
}
else if ( st2 ) {
	return st2;
}
if ( st3 ) {
	return st3;
}
};
const g = isTruethy( 0, "CS", 4);
console.log (g);

















