/*
*	Esguerra, Joshze Rica L.
*	2013-68217
*	CMSC 128 AB-7L
*/

function numToWords(){
	var num = document.forms["numToWordsInput"].elements["num"].value;
	var words = '';
	var digit;
	var is_teens = 0;

	if(num == 0) {
		words = 'Zero';
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

		if(digit == 1) is_teens = 1;
		else words = words + getDigitWordTens(digit) + ' ';
	}

	if (num == 0 && is_teens == 0){
		words = words + 'Thousand';
		returnWord();
	}

	if(num/1000 >= 1 || is_teens == 1){ // digit is at thousands place
		digit = Math.floor(num/1000);
		num = num%1000;

		if (is_teens == 1) words = words + getWordTeen(digit) + ' Thousand ';
		else words = words + getDigitWord(digit) + ' Thousand ';
		
		if (num == 0) returnWord();
	}

	is_teens = 0;

	if(num/100 >= 1){ // digit is at thousands place
		digit = Math.floor(num/100);
		num = num%100;
		words = words + getDigitWord(digit) + ' Hundred ';
		if (num == 0) returnWord();
	}

	if(num/10 >= 1){ // digit is at thousands place
		digit = Math.floor(num/10);
		num = num%10;

		if(digit == 1) is_teens = 1;
		else words = words + getDigitWordTens(digit) + ' ';
		if (num == 0 && is_teens == 0) returnWord();
	}

	if(num >= 1  || is_teens == 1){ // digit is at thousands place
		digit = parseInt(num);
		if (is_teens == 1) words = words + getWordTeen(digit);
		else words = words + getDigitWord(digit);
		returnWord();
	}

	function returnWord(){
		window.alert(words);
		throw new Error();	// will not return to parent function
	}

	function getDigitWord(digit){
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

	function getDigitWordTens(digit){
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

	function getWordTeen(digit){
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

function wordsToNum(){
	var num;
	var words = document.forms["wordsToNumInput"].elements["word"].value;
	window.alert(words);
}

function wordsToCurrency(){
	var currency;
	var word = document.forms["wordsToCurrencyInput"].elements["word"].value;
	window.alert(word);
}

function numDelimited(){
	var num_delimited;
	var num = document.forms["numDelimitedInput"].elements["num"].value;
	window.alert(num);
}