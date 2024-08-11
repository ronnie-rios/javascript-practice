//synchronus example
function task1() {
  console.log('turn on stove');
  task2()
  console.log('stove is ready');
}

function task2() {
  for(let i=0; i < 35; i++) {
    console.log('warming up');
  }
  console.log('prep eggs');
}

function task3() {
  console.log('cook eggs');
}

task1()
task3()