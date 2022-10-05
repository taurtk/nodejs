const fs = require('fs')

const requestHandler = (req,res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const method = req.method;
if(url == '/')
{
res.write('<html>')
res.write('<head><title>Enter Message</title></head>')
res.write('<body><form action ="/aalo" method="POST"><input type="text" name="message"><button type="submit">Send</button></form> </body>')
res.write('</html>')
return res.end();
}

if(url==='/aalo' && method === 'POST')
{
    const body = [];
    req.on('data',(chunk) => {
         console.log(chunk)
        body.push(chunk)
    })
    req.on('end', () => {
        const parseBody =  Buffer.concat(body).toString();
        const message = parseBody.split('=')[1];
        fs.writeFileSync('message.txt',message)
        fs.writeFileSync('message.txt','DUMMY');
    res.statusCode = 302
    res.setHeader('Location','/')
    return res.end()
    })
    
}

res.write('<html>')
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Hello from Nodejs</h1></body>')
res.write('</html>')
res.end()

};
module.exports = requestHandler;