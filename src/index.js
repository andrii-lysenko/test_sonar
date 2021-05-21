const overrideParam = (value) => {
    console.log(value);
    value = 2;
    console.log(value);
    for (let i = 2; i < 10; i++) {
        const value = 3;
        console.log(value);
    }
    console.log(value);
}

const duplicateFunction = (value) => {
    console.log(value);
    value = 2;
    console.log(value);
    for (let i = 2; i < 10; i++) {
        const value = 3;
        console.log(value);
    }
    console.log(value);
}

const duplicateFunction2 = (value) => {
    console.log(value);
    value = value;
    value = 2;
    do {
        if (value === 3) break;
        console.log(value);
        break;
    } while (true);
    
    for (let i = 2; i < 10; i++) {
        const value = 3;
        console.log(value);
    }
    try {
        console.log(value);
    } catch (error) {
        alert(error.stack);
    }
    
}

const badCondition = (value) => {
    if (value == 2) {
        return true;
    }
    return false;
}

const infiniteLoop = (value) => {
    infiniteLoop(value);
}

const messWindow = () => {
    window.top.location.href = location.href;
}

const hello = () => {
    console.log('hello');
    return true;
}

const hello2 = () => {
    console.log('hello');
    return true;
}

module.exports = {
    hello,
    hello2,
    badCondition,
    overrideParam,
    duplicateFunction,
    messWindow
}