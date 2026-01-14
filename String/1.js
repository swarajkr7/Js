"Hello, world"
'Hello, world'
`Hello, world`//this type of string is called template strings
//both the above method are correct way to define string
//but we mostly follow 'Hello, world' single quote one
//When double quotes is required
"I'am learning javascript"
//But we can also use escape character to write the above line
"I\'am learning javascript"
//"\'" is considered as single character

`Hello
world `//next line
//In template string we can write in multiple lines
//but in single or double quote we cant do that
//Interpolation in template string
//${} is used for interpolation
let name="swaraj"
let greeting=`Hello, ${name}`
console.log(greeting)
