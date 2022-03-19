const startTime = new Date('2022/01/31 00:00:00').getTime();

const initTime = () => {
    const currentTime = new Date().getTime();
    const totalTime = new Date(currentTime - startTime);
    const days = Math.floor(totalTime / 1000 / 60 / 60 / 24);

    const text = document.getElementById('milestoneText');
    text.innerHTML = `${days} DAYS SMOKE-FREE`;

    const percentageMap = {
        1: Math.floor(days / 365 * 100),
        2: Math.floor(days / 365 / 2 * 100),
        3: Math.floor(days / 365 / 5 * 100),
        4: Math.floor(days / 365 / 10 * 100),
        5: Math.floor(days / 365 / 15 * 100)
    }

    for (let i = 1; i <= 5; i += 1) {
        const text = document.getElementById(`percentage_${i}`);
        const bar = document.getElementById(`bar_${i}`);
        text.innerHTML = `${percentageMap[i]}%`;
        bar.style.width = `${percentageMap[i]}%`;
    }
}

initTime();