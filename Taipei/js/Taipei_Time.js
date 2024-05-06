setInterval(Time_now,1000);

function Time_now() {
	let date = new Date();
	document.getElementById("time").innerHTML = date.toLocaleString('sv-SE',{hourCycle:'h23',timeZone:'Asia/Taipei'}) +'&ensp;'+'GMT+08:00'+'&ensp;'+'(台北標準時間)';
}

function TO_HOME() {
window.location.href ='../index.html';
}
