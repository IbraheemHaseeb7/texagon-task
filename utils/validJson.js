module.exports = (text) => {
    const stack = [];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "{") stack.push("{");
        if (text[i] === "}") {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }

    return stack.length === 0 ? true : false;
};
