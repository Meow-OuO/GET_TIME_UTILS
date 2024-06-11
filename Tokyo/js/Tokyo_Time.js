const API_URL = 'https://worldtimeapi.org/api/timezone/Asia/Tokyo';
const TIME_ELEMENT_ID = 'time';
const TIME_OPTIONS = {
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
};
let currentTime;

window.onload = function() {
  fetchTime();
  setInterval(updateTime, 1000);
  setInterval(fetchTime, 300000); // 每分鐘請求一次時間數據
};

async function fetchTime() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    currentTime = new Date(data.datetime);
    updateTime();
  } catch (error) {
    console.error('Error fetching time:', error);
    document.getElementById(TIME_ELEMENT_ID).innerText = '無法獲取時間';
  }
}

function updateTime() {
  if (currentTime) {
    currentTime.setSeconds(currentTime.getSeconds() + 1);
    document.getElementById(TIME_ELEMENT_ID).innerHTML = currentTime.toLocaleString('en-ca', TIME_OPTIONS) + '&ensp;' + '(台北標準時間)';
  }
}

function TO_HOME() {
  window.location.href = '../index.html';
}
