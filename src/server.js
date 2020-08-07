
//datas of "proffys" stored in beck-end
const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "(15)9856-6489", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1200]
    },
    {
        name: "Chunulão Tococão", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "(15)9856-6489", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1200]
    }
]

//all the lines below it's the get() for showing all archives html in servidor
function pageLanding(req,res){
    return res.render("index.html") 
}
function pageStudy(req,res){
    return res.render("study.html", {proffys})
}
function pageGiveClasses(req,res){
    return res.render("give-classes.html")
}

const express = require('express')
const server = express()


//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configure static files (css, scripts, images)
.use(express.static("public"))
//rotes of application
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
 .listen(5500)
