console.log("Seasonal Sales");

// ________________________________________
// display products

	var data;
	function getProducts(e) {
	data = JSON.parse(e.target.responseText)
	console.log(data)

	var productContent = "";
	for (var i = 0; i < data.products.length; i ++) {
		productContent += 	`
							<div class="idProducts">
								<h2 id="underline">${data.products[i].name}</h2>
								<p>${data.products[i].price}</p>
							</div>
							`
	}

	document.getElementById("productID").innerHTML = productContent
}


var userRequest = new XMLHttpRequest()
	userRequest.addEventListener("load", getProducts)
	userRequest.open("GET", "products.json")
	userRequest.send()

// ________________________________________
// display departments

	var departments;

	function getDepartment(e) {
	departments = JSON.parse(e.target.responseText)
	console.log(departments)


	var getDepartment = "";
	for (var i = 0; i < departments.categories.length; i ++) {
		getDepartment +=	`
							<div class="idCategories">
							<h2>${departments.categories[i].name}</h2>
							`
	}

	document.getElementById("categoriesID").innerHTML = getDepartment
}


var departmentRequest = new XMLHttpRequest()
	departmentRequest.addEventListener("load", getDepartment)
	departmentRequest.open("GET", "departments.json")
	departmentRequest.send()


// ________________________________________


	// <p>${data.products[i].category_id}</p>



// //function
// 	var user;

// 	function saveUser(e) {
// 	user = JSON.parse(e.target.responseText)
// 	console.log("user", user);
// 	}

// 	function getUser() {
// 	//create a request


// //display the data with a button



// document.getElementById("displayUser").addEventListener("click", displayUser)

// function displayUser() {
// 	console.log("user", user)
// 	var stuffToDisplay = `
// 						<h3>${"* " + user.results[0].name.first}
// 							${user.results[0].name.last + " *"} </h3>
// 						<img src="${user.results[0].picture.large}">

// 						`
// 	document.getElementById("user").innerHTML = stuffToDisplay
// }






// Your job is to build a web page that lists all of the products, the name of the department it's in, and the price. Additionally, put a <select> element at the top of the page that contains all possible values of the season_discount key in the categories file. As soon as you select one of the seasons, all prices on the page should immediately be discounted by the corresponding percentage.

// For example, when Spring is chosen, all products in the corresponding Household category should have their prices updated with a 15% discount off the base price.

// The two JSON representations above should be in two files: products.json, and categories.json. You should load both file via XHRs and store the contents in two different JavaScript variables in your code.
