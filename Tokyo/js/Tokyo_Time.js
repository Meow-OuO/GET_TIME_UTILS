window.setInterval(Time_now);

function Time_now() {
	let date = new Date();
	document.getElementById("time").innerHTML = date.toLocaleString('en-ca',{weekday: 'short',year: 'numeric', month: 'numeric', day: 'numeric',hour: 'numeric', minute: 'numeric',second:'numeric',hourCycle:'h23',timeZone:'Asia/Tokyo',timeZoneName: 'longOffset'})+'&ensp;'+'(東京標準時間)';
}

function TO_HOME() {
window.location.href ='../index.html';
}