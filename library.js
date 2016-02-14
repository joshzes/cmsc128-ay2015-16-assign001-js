/*
*	Esguerra, Joshze Rica L.
*	2013-68217
*	CMSC 128 AB-7L
*/

function numToWords(){
	var num = document.forms["numToWordsInput"].elements["num"].value;	// get input from html form
	var words = '';	// will hold output
	var digit;	// will hold one digit
	var is_teens = 0;	// if number is twelve, sixteen, seventeen, etc.

	if(num == 0) {
		words = 'Zero';	// special case of zero
		returnWord();
	};

	if(num/1000000 >= 1){ // first digit is at millions place
		digit = Math.floor(num/1000000);
		num = num%1000000;
		words = words + getDigitWord(digit) + ' Million ';
	}

	if (num == 0) returnWord();

	if(num/100000 >= 1){ // digit is at hundred thousands place
		digit = Math.floor(num/100000);
		num = num%100000;
		words = words + getDigitWord(digit) + ' Hundred ';
	}

	if(num/10000 >= 1){ // digit is at ten thousands place
		digit = Math.floor(num/10000);
		num = num%10000;

		if(digit == 1) is_teens = 1;	// if 11, 12, 13, etc.
		else words = words + getDigitWordTens(digit) + ' ';
	}

	if (num == 0 && is_teens == 0){	// if the next digits are 0
		words = words + 'Thousand';	// return output
		returnWord();
	}

	if(num/1000 >= 1 || is_teens == 1){ // digit is at thousands place
		digit = Math.floor(num/1000);
		num = num%1000;

		if (is_teens == 1) words = words + getWordTeen(digit) + ' Thousand ';	// if 11, 12, 13
		else words = words + getDigitWord(digit) + ' Thousand ';
		
		if (num == 0) returnWord();	// if next digits are 0, return output
	}

	is_teens = 0;	// reset is_teens for the tens place

	if(num/100 >= 1){ // digit is at hundreds place
		digit = Math.floor(num/100);
		num = num%100;
		words = words + getDigitWord(digit) + ' Hundred ';
		if (num == 0) returnWord();
	}

	if(num/10 >= 1){ // digit is at tens place
		digit = Math.floor(num/10);
		num = num%10;

		if(digit == 1) is_teens = 1;
		else words = words + getDigitWordTens(digit) + ' ';
		if (num == 0 && is_teens == 0) returnWord();
	}

	if(num >= 1  || is_teens == 1){ // digit is at ones place
		digit = parseInt(num);	// convert num to int
		if (is_teens == 1) words = words + getWordTeen(digit);
		else words = words + getDigitWord(digit);
		returnWord();
	}

	function returnWord(){
		window.alert(words);
		throw new Error();	// so it will not return to parent function
	}

	function getDigitWord(digit){	// return equivalent words
		switch(digit){
			case 1: return 'One';
			case 2: return 'Two';  
			case 3: return 'Three';  
			case 4: return 'Four';  
			case 5: return 'Five';  
			case 6: return 'Six';  
			case 7: return 'Seven';  
			case 8: return 'Eight';  
			case 9: return 'Nine';
			case 0: return;  
		}
	}

	function getDigitWordTens(digit){	// return equivalent words
		switch(digit){
			case 2: return 'Twenty';  
			case 3: return 'Thirty';  
			case 4: return 'Forty';  
			case 5: return 'Fifty';  
			case 6: return 'Sixty';  
			case 7: return 'Seventy';  
			case 8: return 'Eighty';  
			case 9: return 'Ninety';
			case 0: return;  
		}
	}

	function getWordTeen(digit){	// return equivalent words
		switch(digit){  
			case 1: return 'Eleven';
			case 2: return 'Twelve';  
			case 3: return 'Thirteen';  
			case 4: return 'Fourteen';  
			case 5: return 'Fifteen';  
			case 6: return 'Sixteen';  
			case 7: return 'Seventeen';  
			case 8: return 'Eighteen';  
			case 9: return 'Nineteen';
			case 0: return 'Ten';
		}
	}
}

function wordsToNum(words_given, x){	// words_given is passed from another function, can be none; x is either 1 or 0, depending on words_given
	var num = 0;
	var hold = 0;
	var word;
	if(words_given == "none") word = document.forms["wordsToNumInput"].elements["word"].value;
	else word = words_given;	// if there are words given, the input will be from another function
	var words = word.split(" ");	// split word into an array
	var i;

	if(words[0] == "zero"){	// special case of zero
		num = 0;
	}

	for (i = 0; i < words.length; i++){
		hold = (getNum(words[i])) * 1;	// get the equivalent word
		if(words[i+1] == "million") hold = hold * 1000000;	// get the place
		else if(words[i+1] == "hundred" && (words[i+2]=="thousand"||words[i+3]=="thousand"||words[i+4]=="thousand")) hold = hold *100000;
		else if(words[i+1] == "thousand" || words[i+2] == "thousand") hold = hold * 1000;
		else if(words[i+1] == "hundred") hold = hold * 100;
		num += hold;	// add to accumulator
	}

	if (x == 0) window.alert(num);	// if from html file, alert
	else return num;	// else return to calling function

	function getNum(word){
		switch(word){	// return equivalent word
			case "one": return 1;
			case "two": return 2;
			case "three": return 3;
			case "four": return 4;
			case "five": return 5;
			case "six": return 6;
			case "seven": return 7;
			case "eight": return 8;
			case "nine": return 9;
			case "ten": return 10;
			case "eleven": return 11;
			case "twelve": return 12;
			case "thirteen": return 13;
			case "fourteen": return 14;
			case "fifteen": return 15;
			case "sixteen": return 16;
			case "seventeen": return 17;
			case "eighteen": return 18;
			case "nineteen": return 19;
			case "twenty": return 20;
			case "thirty": return 30;
			case "forty": return 40;
			case "fifty": return 50;
			case "sixty": return 60;
			case "seventy": return 70;
			case "eighty": return 80;
			case "ninety": return 90;
			default: return '';
		}
	}
}

function wordsToCurrency(){
	var currency = document.forms["wordsToCurrencyInput"].elements["currency"].value;
	var word = document.forms["wordsToCurrencyInput"].elements["word"].value;
	var num = wordsToNum(word, 1);

	window.alert(currency + num);	// alert currency and the output of wordsToNum function
}

function numDelimited(){
	var delimiter = document.forms["numDelimitedInput"].elements["delimiter"].value;
	var jumps = document.forms["numDelimitedInput"].elements["jumps"].value;
	jumps = jumps * 1;	// convert to int
	var num = document.forms["numDelimitedInput"].elements["num"].value;

	var temp1 = num.substr(0, num.length - jumps);	// get the substring
	var temp2 = num.substr(num.length - jumps, num.length);	// get the substring

	var num_delimited = temp1 + delimiter + temp2;	// and combine with the delimiter

	window.alert(num_delimited); // alert output
}