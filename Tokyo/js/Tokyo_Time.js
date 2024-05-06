setInterval(Time_now,1000);

function Time_now() {
	let date = new Date();
	document.getElementById("time").innerHTML = date.toLocaleString('sv-SE',{hourCycle:'h23',timeZone:'Asia/Tokyo'}) +'&ensp;'+'GMT+09:00'+'&ensp;'+'(東京標準時間)';
}

function TO_HOME() {
window.location.href ='../index.html';
}
