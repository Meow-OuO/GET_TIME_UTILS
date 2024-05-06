setInterval(Time_now);

function Time_now() {
	let date = new Date();
	document.getElementById("time").innerHTML = date.toLocaleString('sv-SE',{hourCycle:'h23',timeZone:'Asia/Taipei'});
}
