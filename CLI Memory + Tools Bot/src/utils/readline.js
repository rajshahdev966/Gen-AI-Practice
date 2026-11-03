import { stdin, stdout } from "process"
import readline from "readline/promises"


const rl = readline.createInterface({
    input: stdin,
    output: stdout,
});

export default rl;