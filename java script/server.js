const http = require ('http')

const server = http.createServer((req,res)=>{
    const URL = req.url //for give request
    res.statusCode=200//given request is okay
    res.setHeader('content-type','text/html')//for html
    if(URL == '/home'){
        res.end('Home page')    
        console.log('home page run successfully')
        res.end();
    }
    else if(URL == '/about'){
        res.end('About....')
        console.log('about run successfully')
        res.end();
    }
    else if(URL == '/contact'){
        res.end('<h1>contact....</h1>')
        console.log('contact run successfully')
        res.end();
    }
    else if(URL == '/feedback'){
        res.end('feedback....')
        console.log('feedback run successfully')
        res.end();
    }
    else if(URL == '/register'){
        res.end('register....')
        console.log('register run successfully')
        res.end();
    }
    else{
        res.end('hello world')
        res.end()
    }
    
    //about contact feedback register
})
server.listen(3000,()=>{
    console.log('server start at 3000')
})  
