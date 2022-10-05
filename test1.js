const fs = require('fs');
const { mainModule } = require('process');
process.stdin.resume()
var std_input = ""

process.stdin.on('data',(input) =>
{
    std_input +=input;
    // console.log(std_input, performance.now())
    fs.writeFileSync('new.txt',std_input)

}
)
process.stdin.on('end',(std_input) => {
    main(std_input)
})

function main(input)
{
    console.log(input)
}
