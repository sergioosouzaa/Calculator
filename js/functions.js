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