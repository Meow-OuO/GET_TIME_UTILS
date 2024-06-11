window.onload = function() {
  window.setInterval(Time_now,1000);
}

async function Time_now() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Taipei');
    const data = await response.json();
    const dateTime = new Date(data.datetime);

    document.getElementById("time").innerHTML = dateTime.toLocaleString('en-ca', {
      weekday: 'short',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hourCycle: 'h23',
      timeZone: 'Asia/Taipei',
      timeZoneName: 'longOffset'
    }) + '&ensp;' + '(台北標準時間)';
  } catch (error) {
    console.error('Error fetching time:', error);
  }
}

function TO_HOME() {
  window.location.href = '../index.html';
}
