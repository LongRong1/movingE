// Try edit me

function countdown() {
    let count = 0;
    let count2 = 0;
    const interval = setInterval(() => {
        const seconds = count.toString().padStart(2, '0');
        const milliseconds = count2.toString().padStart(1, '0');
        //console.log(`${seconds}:${milliseconds}`);
        a = `${seconds}:${milliseconds} X`;
        document.getElementById('header').innerText = a;
        count2++;
        if (count2 > 100){
          count2 = 0;
          count++;
        }
        if (count > 5) {
            clearInterval(interval);
            setTimeout(countdown, 3000); // Wait for 1 millisecond before starting again
        }
    }, 40); // 1 millisecond interval
}

countdown()