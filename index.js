const startTime = new Date('2022/01/31 00:00:00').getTime();
const initFrequency = 1000 * 60; // 1m

const initTime = () => {
    const currentTime = new Date().getTime();
    const totalTime = new Date(currentTime - startTime);
    const days = Math.floor(totalTime / 1000 / 60 / 60 / 24);

    const dayText = days !== 0 ? `${days}d ` : '';
    const hourText = totalTime.getUTCHours() !== 0
        ? `${totalTime.getUTCHours()}h ` : '';
    const minuteText = totalTime.getUTCMinutes() !== 0
        ? `${totalTime.getUTCMinutes()}m ` : '';

    const text = document.getElementById('milestoneTime');
    text.innerHTML = `${dayText}${hourText}${minuteText}ago`;

    const singleYearPercentage = days / 365 * 100;
    const percentageMap = {
        1: Math.floor(singleYearPercentage),
        2: Math.floor(singleYearPercentage / 2),
        3: Math.floor(singleYearPercentage / 5),
        4: Math.floor(singleYearPercentage / 10),
        5: Math.floor(singleYearPercentage / 15)
    }

    for (let i = 1; i <= 5; i += 1) {
        const text = document.getElementById(`percentage_${i}`);
        const bar = document.getElementById(`bar_${i}`);
        text.innerHTML = `${percentageMap[i]}%`;
        bar.style.width = `${percentageMap[i]}%`;
    }
}

initTime();

setInterval(() => {
    initTime();
}, initFrequency);