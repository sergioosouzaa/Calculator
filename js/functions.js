function add(a, b)
{
    return Number(a) + Number(b);
}

function subtract(a, b)
{
    return Number(a) - Number(b);
}

function multiply(a, b)
{
    return Number(a) * Number(b);
}

function divide(a, b)
{
    return Number(a) / Number(b);
}

function operate(a, b, operator)
{
    let result = 0;
    if(operator === '-')
    {
        result = subtract(a,b);
    } else if(operator === '+')
    {
        result = add(a,b);
    } else if(operator === '*')
    {
        result = multiply(a,b);
    } else if(operator === '/')
    {
        result = divide(a,b);
    } else {
        result = "Error";
    }
    return result;
}


//put the numbers on the screen

let displayValue = document.querySelector('.display');

const nums = document.querySelectorAll('.num').forEach(numButton => {
    numButton.addEventListener('click', event => {
        if(checkScreenValue === 1)
        {
            displayValue.textContent = "";
            displayValue.value = 0;
            checkScreenValue = 0;
        }
            displayValue.textContent += numButton.value;
            displayValue.value = 1;
        });
});
// put the signals
const operations = document.querySelectorAll('.op').forEach(op => {
    op.addEventListener('click', event => {
        if(checkScreenValue === 1)
        {
            displayValue.textContent = "";
            displayValue.value = 0;
            checkScreenValue = 0;
            isDot = 0;
        }
        if(displayValue.value === 1)
        {
            displayValue.textContent += op.value;
            displayValue.value = 0;
            isDot = 0;
        }
        });
});

//delete
const del = document.querySelector('.delete').addEventListener('click', event => {
    let displayExpression = Array.from(displayValue.textContent);
    let newDisplay = displayExpression.pop();
    displayValue.textContent = "";
    displayExpression.forEach( char => {
        displayValue.textContent = displayValue.textContent + char;
    });
    
});


// get the dots
let isDot = 0;

const dots = document.querySelector('.dot').addEventListener('click', event => {
    if(isDot === 0)
    {
        displayValue.textContent += ".";
    }
    isDot = 1;
});

// clear the scrren
const clearScreen = document.querySelector('.clear').addEventListener('click', event => {
    displayValue.textContent = "";
    displayValue.value = 0;
    isDot = 0;
});


//check if its the result on the screen

let checkScreenValue = 0;

//calculate the output


const calculateResults = document.querySelector('.result').addEventListener('click', event => {
    let expression = Array.from(displayValue.textContent);
    let resultFinal = 0; 
    //initialize positions and create an array for nums and for op
    let numPos = 0;
    let opPos = 0;
    let nums = [0];
    let op = [0];
    let isFLoat = 0;

    let results = expression.forEach(char => {
        if(char === "+" || char === "-" || char === "*" ||char === "/")
        {
            //update the op array
            op[opPos] = char;
            opPos++;
            ///update the num array pos
            if(isFLoat === 1)
            {
                nums[numPos] = parseFloat(nums[numPos]);
            }
            numPos++;
            nums[numPos] = 0;
        } else {
            //adds the last num and convert it to number (from char)
            if(char === '.')
            {
                isFLoat = 1;
            }
            if(isFLoat === 1)
            {
                nums[numPos] = nums[numPos] + char;
            } else {
                nums[numPos] = nums[numPos] + char;
                nums[numPos] = Number(nums[numPos]);
            }
        }



    });

    //when the expression ends with a operation, consider the last num as zero
    if(expression[expression.length - 1] === "*" || expression[expression.length - 1] === "/" )
    {
        nums[numPos] = 1;
    } 


    for (let i = 0; i < op.length; i++)
    {
        resultFinal = operate(nums[i], nums[i + 1], op[i]);
        //update the num as the result of the previus operations
        nums[i + 1] = resultFinal;
    }

    displayValue.textContent = resultFinal;
    checkScreenValue = 1;
    isDot = 0;
});