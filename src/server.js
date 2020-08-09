
//datas of "proffys" stored in beck-end
const proffys = [
    {
        name: "Jean Izidoro", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "15997556688", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20,00", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1200]
    },
    {
        name: "Ivel Maldade", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "1598566489", 
        bio: "Gosto de vender minha arte com as coisas que a natureza dá.  Biologia é o conhecimento do planeta no qual convivemos com os outros seres em comunhão. Cola que é tudo", 
        subject: "Biologia", 
        cost: "20,00", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1200]
    },
    {
        name: "Jamelão da Silva", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "1565487556", 
        bio: "Gosto de vender minha arte com as coisas que a natureza dá.  Biologia é o conhecimento do planeta no qual convivemos com os outros seres em comunhão. Cola que é tudo", 
        subject: "Biologia", 
        cost: "20,00", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1200]
    }
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Functions
function getSubjects (subjectNumber){
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

//all the lines below it's the get() for showing all archives html in servidor
function pageLanding(req,res){
    return res.render("index.html") 
}
function pageStudy(req,res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}
function pageGiveClasses(req,res){
    const datas = req.query
    
    //adicionando a lista de proffys
    const isNotEmpty = Object.keys(datas).length != 0
    //se tiver dados : add
    if (isNotEmpty) {
        datas.subject = getSubjects(datas.subject)

        proffys.push(datas)

        return res.redirect("/study")
    }
    //se não: not add
   
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()


//configure nunjucks
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
