function numberFormat( number, decimals, dec_point, thousands_sep ) {  // Format a number with grouped thousands
    var i, j, kw, kd, km;
  
    if( isNaN(decimals = Math.abs(decimals)) ){
      decimals = 2;
    }
    if( dec_point == undefined ){
      dec_point = ".";
    }
    if( thousands_sep == undefined ){
      thousands_sep = " ";
    }
  
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
  
    if( (j = i.length) > 3 ){
      j = j % 3;
    } else{
      j = 0;
    }
  
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
  
    return km + kw + kd;
}
	
let bnbInput = document.getElementById('bnbInput');
let bnbDays = 30;

bnbInput.addEventListener('input', () => { 
	var amount = bnbInput.value;
	var rate = Number(document.getElementById('bnbRate').value);
	var usd = amount * rate;

	if (usd >= 1500) {
		percent = 0.05;
	} else if (usd >= 750) {
		percent = 0.045;
	} else if (usd >= 250) {
		percent = 0.04;
	} else if (usd >= 25) {
		percent = 0.035;
	} else if (usd >= 1) {
		percent = 0.03;
	} else {
		percent = 0.02;
	}

	var profit = (usd * percent) * bnbDays;
	var ghs = usd * 40;

	document.getElementById("bnbGHs").innerHTML = numberFormat(ghs, 0);
	document.getElementById("bnbProfit").innerHTML = numberFormat(profit, 2);
	// document.getElementById("contract_1").value = contract;
	document.getElementById("bnbPlan").innerHTML = numberFormat(percent * 100, 1);
	document.getElementById("bnbDollar").value = numberFormat(usd, 2, '.', '');
});

function bnbPeriod(value){
	bnbDays = Number(value);
	input = document.getElementById('bnbInput');
	input.dispatchEvent(new Event('input', { bubbles: true }));
}

let trxInput = document.getElementById('trxInput');
let trxDays = 30;

trxInput.addEventListener('input', () => { 
	var amount = trxInput.value;
	var rate = Number(document.getElementById('trxRate').value);
	var usd = amount * rate;

	if (usd >= 1500) {
		percent = 0.05;
	} else if (usd >= 750) {
		percent = 0.045;
	} else if (usd >= 250) {
		percent = 0.04;
	} else if (usd >= 25) {
		percent = 0.035;
	} else if (usd >= 1) {
		percent = 0.03;
	} else {
		percent = 0.02;
	}

	var profit = (usd * percent) * trxDays;
	var ghs = usd * 40;

	document.getElementById("trxGHs").innerHTML = numberFormat(ghs, 0);
	document.getElementById("trxProfit").innerHTML = numberFormat(profit, 2);
	// document.getElementById("contract_1").value = contract;
	document.getElementById("trxPlan").innerHTML = numberFormat(percent * 100, 1);
	document.getElementById("trxDollar").value = numberFormat(usd, 2, '.', '');
});

function trxPeriod(value){
	trxDays = Number(value);
	input = document.getElementById('trxInput');
	input.dispatchEvent(new Event('input', { bubbles: true }));
}

let ltcInput = document.getElementById('ltcInput');
let ltcDays = 30;

ltcInput.addEventListener('input', () => { 
	var amount = ltcInput.value;
	var rate = Number(document.getElementById('ltcRate').value);
	var usd = amount * rate;

	if (usd >= 1500) {
		percent = 0.05;
	} else if (usd >= 750) {
		percent = 0.045;
	} else if (usd >= 250) {
		percent = 0.04;
	} else if (usd >= 25) {
		percent = 0.035;
	} else if (usd >= 1) {
		percent = 0.03;
	} else {
		percent = 0.02;
	}

	var profit = (usd * percent) * ltcDays;
	var ghs = usd * 40;

	document.getElementById("ltcGHs").innerHTML = numberFormat(ghs, 0);
	document.getElementById("ltcProfit").innerHTML = numberFormat(profit, 2);
	// document.getElementById("contract_1").value = contract;
	document.getElementById("ltcPlan").innerHTML = numberFormat(percent * 100, 1);
	document.getElementById("ltcDollar").value = numberFormat(usd, 2, '.', '');
});

function ltcPeriod(value){
	ltcDays = Number(value);
	input = document.getElementById('ltcInput');
	input.dispatchEvent(new Event('input', { bubbles: true }));
}

let shibInput = document.getElementById('shibInput');
let shibDays = 30;

shibInput.addEventListener('input', () => { 
	var amount = shibInput.value;
	var rate = Number(document.getElementById('shibRate').value);
	var usd = amount * rate;

	if (usd >= 1500) {
		percent = 0.05;
	} else if (usd >= 750) {
		percent = 0.045;
	} else if (usd >= 250) {
		percent = 0.04;
	} else if (usd >= 25) {
		percent = 0.035;
	} else if (usd >= 1) {
		percent = 0.03;
	} else {
		percent = 0.02;
	}

	var profit = (usd * percent) * shibDays;
	var ghs = usd * 40;

	document.getElementById("shibGHs").innerHTML = numberFormat(ghs, 0);
	document.getElementById("shibProfit").innerHTML = numberFormat(profit, 2);
	// document.getElementById("contract_1").value = contract;
	document.getElementById("shibPlan").innerHTML = numberFormat(percent * 100, 1);
	document.getElementById("shibDollar").value = numberFormat(usd, 2, '.', '');
});

function shibPeriod(value){
	shibDays = Number(value);
	input = document.getElementById('shibInput');
	input.dispatchEvent(new Event('input', { bubbles: true }));
}