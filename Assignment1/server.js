const http = require('http')
const port = 3000

const app = http.createServer((req,res)=>{
    var url = req.url


    if(url=='/')
    {
        res.write('<html>')
        res.write('<body><p>Hi welcome here to assignment</p><br><form action="/create-user" method="POST"><input type=text><button>Username</button></form></body>')


        res.write('</html>')
        return res.end()
    }
    
    if(url === '/users')
    {
        res.write('<html>')

        res.write('<body><ul><li>User1</li><li>User2</li></ul></body>')
        res.write('</html>')
        return res.end()
    }

    if(url ==='create-user' && method ='POST')
    {
        
    }
    


})
app.listen(port)

