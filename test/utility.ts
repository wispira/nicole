const assertions = [];
const errors: Error[] = [];

export const start = () => {
    // console.clear();
    assertions.length = 0;
    errors.length = 0;
}

export const stop = () => {
    const result = `${assertions.length} Assertions / ${errors.length} Failures`;
    if(errors.length) {
        console.error(result);
        errors.forEach((error) => {
            console.error(error.message);
            if(error.stack) {
                console.error(error.stack.split("\n")[2]);
            }
        });
    } else {
        console.log(result);
    }
}

export const equals = (a: string, b: string) => {
    assertions.push({
        a,
        b,
    });
    if(a !== b) {
        const error = new Error(`${a} != ${b}`);
        errors.push(error);
    }
};