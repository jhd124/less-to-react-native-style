const RNC = require("react-native-css").default;
const readline = require("readline");
const _ = require("lodash");

const rl = readline.createInterface({
    input: process.stdin,
});

let css = "";
rl.on("line", (input) => {
    css += input;
});

rl.on("close", () => {
    const styles = _(RNC`${css}`).mapKeys((value, key) => _.camelCase(key)).value();
    console.log("const styles = ", styles);
})
