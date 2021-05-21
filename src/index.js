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

const badCondition = (value) => {
    if (value == 2) {
        return true;
    }
    return false;
}

const infiniteLoop = (value) => {
    infiniteLoop(value);
}

const hello = () => {
    console.log('hello');
    return true;
}

module.exports = {
    hello,
    badCondition
}