
// Functionality of navbar for mobile devices:
function myFunctionResize(){
	if (window.innerWidth < 768) {
		document.getElementById("navIcon").style.display = "block";
		document.getElementById("navBar").style.display = "none";
		document.getElementsByClassName("links").style.display = "block";
		document.getElementById("top-header-image").style.display = "none";
		if(window.innerWidth < 370){
			document.getElementById("header-images").style.display = "none";
		}else{
			document.getElementById("header-images").style.display = "block";
		}
	}else{
		document.getElementById("navIcon").style.display = "none";
		document.getElementById("navBar").style.display = "block";
		document.getElementById("top-header-image").style.display = "block";
	}
}
	
function myFunction() {
	var x = document.getElementById("navBar");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}

// Start countdown after submit form:
window.onload = function(e){
	var form = document.getElementById('myForm');
	var timeleft = document.getElementById("countdown").value;
	console.log(timeleft);
	var downloadTimer = setInterval(function(){
		form.style.display = "none";
	  document.getElementById("timeLeft").innerHTML = timeleft + " seconds remaining";
	  timeleft -= 1;
	  if(timeleft <= 0){
	    clearInterval(downloadTimer);
	    form.style.display = "block";
	    document.getElementById("displayCountDown").style.display = "none";
	  }
	}, 1000);
}