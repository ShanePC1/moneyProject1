const checkingform = document.querySelector('#currentCheckingAmtForm');
const checkingStartAmt = document.querySelector('#currentCheckingAmtInput');
// const monthlyBills = document.querySelector('#monthlyBillForm');

// //Stoped here added ^bills listener above and below. both now commented out. I think each event listenr needs to only be access on the relevent page but before and after I get the error cannot read property of null (reading 'addEventListener')

checkingform.addEventListener('submit', function(e){
	e.preventDefault();
	//Here would go the function that sends the name.value and email.values to the database //
	getChecking();
});

// monthlyBills.addEventListener('submit', function(e){
// 	e.preventDefault();
// 	console.log(checkingStartAmtUSD);
// })


function getChecking(){
	
	const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const checkingStartAmtUSD = (formatter.format(checkingStartAmt.value)); 
console.log(checkingStartAmtUSD);
window.location = "/dataEntry.html";
return checkingStartAmtUSD;
}