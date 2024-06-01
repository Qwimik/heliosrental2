document.addEventListener("DOMContentLoaded", function() {
    let count = 0;
    const options = {
        threshold: 0.8
    };

    const targetBlock = document.querySelector('.statistics_count_inc');

    const countElements = document.querySelectorAll('.statistics_count_inc');
    let statisticsCounts = Array.from(countElements).map(el => parseInt(el.textContent, 10));
    const values = [2500, 32, 100, 500];

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const valueIncrements = statisticsCounts.map((count, index) => Math.ceil((values[index] - count) / 100));
                const intervals = valueIncrements.map((increment, index) => {
                    return setInterval(() => {
                        if (statisticsCounts[index] >= 1000) {
                            valueIncrements[index] += 5;
                            if (valueIncrements[index] >= statisticsCounts[index]) {
                                clearInterval(intervals[index]);
                            }
                            countElements[index].textContent = valueIncrements[index];
                        } else if (statisticsCounts[index] <= 50) {
                            valueIncrements[index] += 0.1;
                            if (valueIncrements[index] >= statisticsCounts[index]) {
                                clearInterval(intervals[index]);
                            }
                            countElements[index].textContent = Math.floor(valueIncrements[index]);
                        } else if (statisticsCounts[index] <= 100) {
                            valueIncrements[index] += 0.5;
                            if (valueIncrements[index] >= statisticsCounts[index]) {
                                clearInterval(intervals[index]);
                            }
                            countElements[index].textContent = Math.floor(valueIncrements[index]);
                        } else {
                            valueIncrements[index] += 1;
                            if (valueIncrements[index] >= statisticsCounts[index]) {
                                clearInterval(intervals[index]);
                            }
                            countElements[index].textContent = valueIncrements[index];
                        }
                    }, 1);
                });
                observer.disconnect();
            }
        });
    }, options);

    observer.observe(targetBlock);
});
