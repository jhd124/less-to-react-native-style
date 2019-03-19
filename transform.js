const RNC = require("react-native-css").default;
const _ = require("lodash");
const readline = require("readline");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const config = require("./config");
const generate = require("@babel/generator").default;
const types = require("@babel/types");
const transform = require('css-to-react-native');

const rl = readline.createInterface({
    input: process.stdin,
});

let code = "";
rl.on("line", (input) => {
    code += input;
});

rl.on("close", () => {
    // const styles = _(RNC`${css}`).mapKeys((value, key) => _.camelCase(key)).value();
    // const code = `const styles = ${JSON.stringify(styles)}`;
    const ast = parser.parse(code)
    traverse(ast, {
        enter(path) {
            if (path.node.type === "ObjectProperty") {
                const key = path.node.key.name;
                if (config.sizeValues.includes(key)) {
                    const value = path.node.value.value;
                    path.node.value = types.callExpression(types.identifier("size"), [types.numericLiteral(value)])
                }
            }
        }
    })
    const transformedCode = generate(ast).code;
    console.log(transformedCode)
});