function firstChar(text) {
  // your code here
	if(text.length===0) return "";
	text.trim();
	if(text.length===0) return "";
	return text.slice(0,1);
}

// Do not change the code below

  const text = prompt("Enter text:");
alert(firstChar(text));
