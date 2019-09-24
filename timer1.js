let input =  process.argv.slice(2);

let timer = [];
for (let i = 0; i < input.length; i++) {
  timer.push(input[i] * 1000);
}


const alarmClock = function(input) {
  for (let i = 0; i < timer.length; i++) {
    if (input[i] > 0) {
      setTimeout(() => {
        process.stdout.write('beep! \n');
      }, timer[i]);
    }
  }
};

alarmClock(timer);
