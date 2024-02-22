//your JS code here. If required.
const savedusername = localStorage.getItem("username");
const savedpassword = localStorage.getItem("password");

if(savedpassword && savedpassword){
	const existingButton = document.createElement("button");
	existingButton.Id = "existing";
	existingButton.textContent = "Login as existing user";
	document.body.appendChild = (existingButton);

	existingButton.addEventListener('click', function(){
		alert("Logged in as.");
	});
	
}

const loginForm = document.getElementById("loginForm").addEventListener("submit", function(event){
	event.preventDefault();

	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const rememberMecheckBox = document.getElementById('checkbox');

	if(rememberMecheckBox.checked){
		localStorage.setItem('username' , username);
		localStorage.setItem('password', password);
	}
	else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	alert("Logged in as.");
	
});


