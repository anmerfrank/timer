
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
 


const action = (data) => {
  if (data === "\u0003") {
      console.log("Thanks for using me, ciao!");
      process.exit();
    }
  if (data === 'b') {
    process.stdout.write('beep! \n');
  }  
  if (data >= 1 && data <= 9){
    process.stdout.write(`A timer will beep in ${data} seconds! \n`)
    setTimeout(() => {
      process.stdout.write('boop! \n');
    }, data * 1000);
  }
}


stdin.on('data', action);


