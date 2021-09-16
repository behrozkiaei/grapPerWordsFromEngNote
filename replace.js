const fs = require('fs');
const readline = require('readline');

async function processLineByLine(file, folder) {

    if (file.split(".")[1] !== "pug") {
        return false;
    }
    console.log(file);

    var persian = "";
    const fileStream = fs.createReadStream(folder + "/" + file);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    var stream = fs.createWriteStream("./toTranslate/" + folder + "/" + file + ".per");

    for await (line of rl) {
        while (
            line.includes("a") || line.includes("b") || line.includes("c") || line.includes("d") || line.includes("e") || line.includes("f") || line.includes("g") || line.includes("h") || line.includes("i") || line.includes("j") || line.includes("k") || line.includes("l") || line.includes("m") || line.includes("n") || line.includes("o") || line.includes("p") || line.includes("q") || line.includes("r") || line.includes("s") || line.includes("t") || line.includes("u") || line.includes("v") || line.includes("w") || line.includes("x") || line.includes("y") || line.includes("z") ||
            line.includes("A") || line.includes("B") || line.includes("C") || line.includes("D") || line.includes("E") || line.includes("F") || line.includes("G") || line.includes("H") || line.includes("I") || line.includes("J") || line.includes("K") || line.includes("L") || line.includes("M") || line.includes("N") || line.includes("O") || line.includes("P") || line.includes("Q") || line.includes("R") || line.includes("S") || line.includes("T") || line.includes("U") || line.includes("V") || line.includes("W") || line.includes("X") || line.includes("Y") || line.includes("Z") ||
            line.includes("0") || line.includes("1") || line.includes("2") || line.includes("3") || line.includes("4") || line.includes("5") || line.includes("6") || line.includes("7") || line.includes("8") || line.includes("9") ||
            line.includes("!") || line.includes("@") || line.includes("#") || line.includes("$") || line.includes("%") || line.includes("^") || line.includes("&") || line.includes("*") || line.includes("(") || line.includes(")") || line.includes("_") || line.includes("-") || line.includes("=") || line.includes("+") ||
            line.includes("{") || line.includes("[") || line.includes("]") || line.includes("|") || line.includes("|") || line.includes(";") || line.includes(":") ||
            line.includes("?") || line.includes(">") || line.includes("<") || line.includes(".") || line.includes(",") ||
            line.includes("/") || line.includes("'") || line.includes('"') || line.includes('  ') || line.includes('\t') || line.includes('`') || line.includes('\/')
        ) {
            // code block to be executed
            line = line.replace("a", "");
            line = line.replace("b", "");
            line = line.replace("c", "");
            line = line.replace("d", "");
            line = line.replace("e", "");
            line = line.replace("f", "");
            line = line.replace("g", "");
            line = line.replace("h", "");
            line = line.replace("i", "");
            line = line.replace("j", "");
            line = line.replace("k", "");
            line = line.replace("l", "");
            line = line.replace("m", "");
            line = line.replace("n", "");
            line = line.replace("o", "");
            line = line.replace("p", "");
            line = line.replace("q", "");
            line = line.replace("r", "");
            line = line.replace("s", "");
            line = line.replace("t", "");
            line = line.replace("u", "");
            line = line.replace("v", "");
            line = line.replace("w", "");
            line = line.replace("x", "");
            line = line.replace("y", "");
            line = line.replace("z", "");

            //CAPITALL 
            line = line.replace("A", "");
            line = line.replace("B", "");
            line = line.replace("C", "");
            line = line.replace("D", "");
            line = line.replace("E", "");
            line = line.replace("F", "");
            line = line.replace("G", "");
            line = line.replace("H", "");
            line = line.replace("I", "");
            line = line.replace("J", "");
            line = line.replace("K", "");
            line = line.replace("L", "");
            line = line.replace("M", "");
            line = line.replace("N", "");
            line = line.replace("O", "");
            line = line.replace("P", "");
            line = line.replace("Q", "");
            line = line.replace("R", "");
            line = line.replace("S", "");
            line = line.replace("T", "");
            line = line.replace("U", "");
            line = line.replace("V", "");
            line = line.replace("W", "");
            line = line.replace("X", "");
            line = line.replace("Y", "");
            line = line.replace("Z", "");


            //         // NUMBERS  
            line = line.replace("0", "");
            line = line.replace("1", "");
            line = line.replace("2", "");
            line = line.replace("3", "");
            line = line.replace("4", "");
            line = line.replace("5", "");
            line = line.replace("6", "");
            line = line.replace("7", "");
            line = line.replace("8", "");
            line = line.replace("9", "");

            // SYMBOLS

            line = line.replace("!", "");
            line = line.replace("@", "");
            line = line.replace("#", "");
            line = line.replace("$", "");
            line = line.replace("%", "");
            line = line.replace("^", "");
            line = line.replace("&", "");
            line = line.replace("*", "");
            line = line.replace("(", "");
            line = line.replace(")", "");
            line = line.replace("_", "");
            line = line.replace("+", "");
            line = line.replace("-", "");
            line = line.replace("=", "");

            line = line.replace("}", "");
            line = line.replace("{", "");
            line = line.replace("]", "");
            line = line.replace("[", "");
            line = line.replace("|", "");
            line = line.replace(";", "");
            line = line.replace(":", "");


            line = line.replace("?", "");
            line = line.replace(">", "");
            line = line.replace("<", "");
            line = line.replace(".", "");
            line = line.replace(",", "");

            line = line.replace("/", "");
            line = line.replace("'", "");
            line = line.replace('"', "");
            line = line.replace('  ', " ");
            line = line.replace("\t", "");
            line = line.replace("`", "");
            line = line.replace("\/", "");



            // console.log(line)
        }

        if (line.length > 1) {
            console.log(line)

            persian = persian + (line) + '<br>';

            stream.write(line + " = \n");
        }


    }
    stream.close();

}

// folder = "./view";
// const folder = "./view/datatables"
// const folder = "./view/stations"
const folder = "./view/tickets"
getAllFiles(folder)
console.log(folder)
async function getAllFiles(folder) {
    var files = fs.readdirSync(folder);
    // await processLineByLine(files[0]);
    console.log(files)
    for await (file of files) {
        await processLineByLine(file, folder);
    }
}