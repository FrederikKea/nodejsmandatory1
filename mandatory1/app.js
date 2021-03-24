const express = require('express');
const app = express()


app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/homepage.html')
})

app.get("/gettingStarted", (req, res) => {
    res.sendFile(__dirname + '/public/getting-started.html')
})

app.get("/nodejsSetup", (req, res) => {
    res.sendFile(__dirname + '/public/nodejsSetup.html')
})

app.get("/crudApi", (req, res) => {
    res.sendFile(__dirname + '/public/crud-api.html')
})

app.get("/appjs", (req, res) => {
    res.sendFile(__dirname + '/public/appjs.html')
})

app.get("/postman", (req, res) => {
    res.sendFile(__dirname + '/public/postman.html')
})

app.get("/functions", (req, res) => {
    res.sendFile(__dirname + '/public/functions.html')
})

app.get("/environment", (req, res) => {
    res.sendFile(__dirname + '/public/environment-variables.html')
})

app.get("/jquery", (req, res) => {
    res.sendFile(__dirname + '/public/jquery.html')
})

app.get("/terminalCommands", (req, res) => {
    res.sendFile(__dirname + '/public/terminal-commands.html')
})

app.get("/test", (req, res) => {
    res.send({"message": "Hello World"});
});

app.get("/extraInfo", (req, res) => {
    res.sendFile(__dirname + '/public/exstra-info.html')
})



// setting the port in package.json if it faills on that port it starts on 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) =>{
    if (error) {
        console.log(error);
    }
    console.log('server is now running on port', Number(PORT))
});