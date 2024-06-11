window.onload = function() {
  window.setInterval(Time_now);
}

async function Time_now() {
  try {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Tokyo');
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
      timeZone: 'Asia/Tokyo',
      timeZoneName: 'longOffset'
    }) + '&ensp;' + '(東京標準時間)';
  } catch (error) {
    console.error('Error fetching time:', error);
  }
}

function TO_HOME() {
  window.location.href = '../index.html';
}
