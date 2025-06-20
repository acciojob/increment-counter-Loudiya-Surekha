let counter = 0;

document.addEventListener("DOMContentLoaded", function(){
	const btn= document.getElementById("incrementBtn");
	let countElem=document.getElementById("counter");

	btn.addEventListener("click", function(){
		alert(counter);
		counter++;
		countElem.innerText=counter;
	})
})