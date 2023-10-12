
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
	 const bttnMoreRow = document.querySelector('.addMoreRows');
	 
	checkingStartAmtUSD=(sessionStorage.getItem(checkingStartAmtUSD));

		pText.innerHTML = `Alright so you have ${checkingStartAmtUSD} in your checking currnetly.`
//this now works by using session storage. the correct thing would be to store in DB and access but thas fine
// To collect all the bill options I think it needs to be an array of objects.
		//to add more rows of bills I think it needs to create the row the form the drop down etc. for each click.

bttnMoreRow.addEventListener('click', function(e){
	e.preventDefault();
				createNewForm();

})
monthlyBills.addEventListener('submit', function(e){
	e.preventDefault();
				window.location = "/incomeEntry";		
})

}

function createNewForm(){
	const Billrow= document.querySelector('.bills');
	createRow(Billrow);

}

function createRow(appendRow,rowId, colId,colText){
	console.log(appendRow);
//If text is need it will go in a column
//need to add parameter for col quanitiy
const row =  document.createElement('div');;
appendRow.appendChild(row);
row.classList.add("row");
row.setAttribute('class', rowId);
row.appendChild(createSelect(appendRow));
appendRow.appendChild(row);
return row;
}

function createSelect(colId, colText){
const selectTag= document.createElement('select');;
//selectTag.classList.add('col');
//selectTag.setAttribute('id', colId);
selectTag.innerText ='colText';
selectTag.appendChild(createOptions());
return selectTag;
}


function createOptions(){

	// create an array of choices function that takes user inout and adds to array
	//add the other row elements to create row the date and the currenyc box
const optionTag= document.createElement('option');;
//selectTag.classList.add('col');
optionTag.setAttribute('value', 'Amazon');
optionTag.innerText ='Amazon';
return optionTag;
}


