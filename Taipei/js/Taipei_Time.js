const API_URL = "https://timeapi.io/api/timezone/zone?timeZone=Asia/Taipei";
const TIME_ELEMENT_ID = "time";

const TIME_OPTIONS = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: 'h23',
};

let currentTime;

window.onload = function() {
    fetchTime();
    setInterval(updateTime, 1000); // 每秒更新一次時間顯示
    setInterval(fetchTime, 300000); // 每5分鐘重新請求一次時間
};

async function fetchTime() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        currentTime = new Date(data.currentLocalTime);
    } catch (error) {
        console.error("Error fetching time:", error);
        document.getElementById(TIME_ELEMENT_ID).innerText = "無法獲取時間";
    }
}

function updateTime() {
    if (currentTime) {
        currentTime.setSeconds(currentTime.getSeconds() + 1);
        document.getElementById(TIME_ELEMENT_ID).innerHTML = currentTime.toLocaleString("en-ca", TIME_OPTIONS) + "&ensp;GMT+08:00&ensp;(台北標準時間)";
    }
}

function TO_HOME() {
    window.location.href = "../index.html";
}