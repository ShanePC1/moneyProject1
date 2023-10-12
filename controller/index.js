
let checkingStartAmtUSD ;



if ($("body").data("title") === "indexPage") {
		const checkingform = document.querySelector('#currentCheckingAmtForm');
		const checkingStartAmt = document.querySelector('#currentCheckingAmtInput');
		checkingform.addEventListener('submit', function(e){
			e.preventDefault();
			//Here would go the function that sends the name.value and email.values to the database //
				getChecking();
					
			});

		function getChecking(){
			const formatter = new Intl.NumberFormat('en-US', {
  				style: 'currency',
  				currency: 'USD',

				// These options are needed to round to whole numbers if that's what you want.
  				//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  				//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
			});
			sessionStorage.setItem(checkingStartAmtUSD, (formatter.format(checkingStartAmt.value)));
				console.log(checkingStartAmtUSD);
				window.location = "/dataEntry";						
		}
	
}else if ($("body").data("title") === "dataEntry") {
	 const monthlyBills = document.querySelector('#monthlyBillForm');
	 const pText = document.querySelector('.pTagChkAmt');
	checkingStartAmtUSD=(sessionStorage.getItem(checkingStartAmtUSD));

		pText.innerHTML = `Alright so you have ${checkingStartAmtUSD} in your checking currnetly.`
//this now works by using session storage. the correct thing would be to store in DB and access but thas fine
// To collect all the bill options I think it needs to be an array of objects.
		//to add more rows of bills I think it needs to create the row the form the drop down etc. for each click.

monthlyBills.addEventListener('submit', function(e){
	e.preventDefault();
				window.location = "/incomeEntry";		
})

}

