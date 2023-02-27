let startTime;
let currentTime;
let totalDays = 0;

const initFrequency = 1000 * 60; // 1m
const formatMap = {
    years: 'y',
    months: 'm',
    weeks: 'w',
    days: 'd',
    hours: 'h',
    minutes: 'm'
};
const formatList = Object.keys(formatMap);

const milestoneTime = document.getElementById('milestoneTime')

const initMilestone = () => {
    const startTime = moment(new Date('2022/01/31 00:00:00'));
    const currentTime = moment(new Date());
    const textList = [];

    for(var i = 0; i < formatList.length; i += 1) {
        const diff = currentTime.diff(startTime, formatList[i]);

        startTime.add(diff, formatList[i]);

        if (diff !== 0) textList.push(diff + formatMap[formatList[i]]);
    }

    milestoneTime.innerHTML = `${textList.join(' ')} ago`;
}

const initPercentage = () => {
    const singleYearPercentage = totalDays / 365 * 100;
    const percentageMap = {
        1: Math.floor(singleYearPercentage),      // 1 years
        2: Math.floor(singleYearPercentage / 2),  // 2 years
        3: Math.floor(singleYearPercentage / 5),  // 5 years
        4: Math.floor(singleYearPercentage / 10), // 10 years
        5: Math.floor(singleYearPercentage / 15)  // 15 years
    }

    for (let i = 1; i <= 5; i += 1) {
        const text = document.getElementById(`percentage_${i}`);
        const bar = document.getElementById(`bar_${i}`);
        const percent = `${percentageMap[i] >= 100 ? 100 : percentageMap[i]}%`;

        text.innerHTML = percent;
        bar.style.width = percent;
    }
}

startTime = moment(new Date('2022/01/31 00:00:00'));
currentTime = moment(new Date());
totalDays = currentTime.diff(startTime, 'days');

initMilestone();
initPercentage();

setInterval(() => {
    initMilestone();
}, initFrequency);
