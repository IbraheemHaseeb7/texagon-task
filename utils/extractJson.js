const validJson = require("./validJson");

module.exports = (text) => {
    const isValid = validJson(text);

    if (isValid) {
        const stack = [];

        for (let i = 0; i < text.length; i++) {
            if (text[i] === "{" || text[i] === "}") stack.push(i);
        }

        const sub = text.substring(stack[0], stack[stack.length - 1] + 1);
        return JSON.parse(sub);
    } else {
        throw new Error("Not a valid json");
    }
};
