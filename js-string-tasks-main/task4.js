
function checkResult(n) {
    if(test.includes('x')){
            return test.replace(/x/g, 'Y');
        }
        if(test.includes('X')){
            return test.replace(/X/g, 'Y');
        }
    }
    let test = 'This is an example with X and x.';
    const result = checkResult(test);
    console.log(result);