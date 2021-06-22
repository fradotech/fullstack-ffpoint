const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const FfUser = require('./model/ff-user')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser('secret'))
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
)
app.use(flash())

app.get('/', (req, res) =>{
    res.render('index', {
        layout: 'layouts/main-layout',
        title: 'Fradotech',
    })
})

app.get('/ff-register', (req, res) =>{
    res.render('ff-register', {
        layout: 'layouts/main-layout',
        title: 'Fradotech',
    })
})

app.post('/ff-register', (req, res) => {
    let namaTur = req.body.namaTur
    let email =  req.body.email
    let password = req.body.password

    const user = {
        namaTur: namaTur,
        email: email,
        password: password,
        data: {
            tim1: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim2: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim3: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim4: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim5: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim6: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim7: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim8: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim9: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim10: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim11: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
            tim12: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                total: null,
                rank: null,
            },
        }
    }

    FfUser.insertMany(user, (err, result) => {
        req.flash('msg', 'Turnamen Berhasil dibuat! Silakan Login')
        res.redirect('/ff-login')
    })
})

app.get('/ff-login', (req, res) =>{
    res.render('ff-login', {
        layout: 'layouts/main-layout',
        title: 'Fradotech',
    })
})

app.post('/ff-form', async (req, res) =>{
    let namaTur = req.body.namaTur
    let email =  req.body.email
    let password = req.body.password

    const user = await FfUser.findOne({namaTur: namaTur, email: email, password: password})

    if(user == null){
        res.render('ff-login-gagal', {
            layout: 'layouts/main-layout',
            title: 'Fradotech',
        })
    }else{
        res.render('ff-form', {
            layout: 'layouts/main-layout',
            title: 'Fradotech',
            user,
        })
    }
})

app.post('/ff-edit', (req, res) => {
    let _id = req.body._id
    let namaTur = req.body.namaTur
    let email =  req.body.email
    let password = req.body.password

    let namaTim1 = req.body.namaTim1
    let namaTim2 = req.body.namaTim2
    let namaTim3 = req.body.namaTim3
    let namaTim4 = req.body.namaTim4
    let namaTim5 = req.body.namaTim5
    let namaTim6 = req.body.namaTim6
    let namaTim7 = req.body.namaTim7
    let namaTim8 = req.body.namaTim8
    let namaTim9 = req.body.namaTim9
    let namaTim10 = req.body.namaTim10
    let namaTim11 = req.body.namaTim11
    let namaTim12 = req.body.namaTim12

    let total1 = 
    (getRank(req.body.m1r1) + (req.body.m1k1 * 1)) +
    (getRank(req.body.m2r1) + (req.body.m2k1 * 1)) +
    (getRank(req.body.m3r1) + (req.body.m3k1 * 1))

    let total2 = 
    (getRank(req.body.m1r2) + (req.body.m1k2 * 1)) +
    (getRank(req.body.m2r2) + (req.body.m2k2 * 1)) +
    (getRank(req.body.m3r2) + (req.body.m3k2 * 1))

    let total3 = 
    (getRank(req.body.m1r3) + (req.body.m1k3 * 1)) +
    (getRank(req.body.m2r3) + (req.body.m2k3 * 1)) +
    (getRank(req.body.m3r3) + (req.body.m3k3 * 1))

    let total4 = 
    (getRank(req.body.m1r4) + (req.body.m1k4 * 1)) +
    (getRank(req.body.m2r4) + (req.body.m2k4 * 1)) +
    (getRank(req.body.m3r4) + (req.body.m3k4 * 1))

    let total5 = 
    (getRank(req.body.m1r5) + (req.body.m1k5 * 1)) +
    (getRank(req.body.m2r5) + (req.body.m2k5 * 1)) +
    (getRank(req.body.m3r5) + (req.body.m3k5 * 1))

    let total6 = 
    (getRank(req.body.m1r6) + (req.body.m1k6 * 1)) +
    (getRank(req.body.m2r6) + (req.body.m2k6 * 1)) +
    (getRank(req.body.m3r6) + (req.body.m3k6 * 1))

    let total7 = 
    (getRank(req.body.m1r7) + (req.body.m1k7 * 1)) +
    (getRank(req.body.m2r7) + (req.body.m2k7 * 1)) +
    (getRank(req.body.m3r7) + (req.body.m3k7 * 1))

    let total8 = 
    (getRank(req.body.m1r8) + (req.body.m1k8 * 1)) +
    (getRank(req.body.m2r8) + (req.body.m2k8 * 1)) +
    (getRank(req.body.m3r8) + (req.body.m3k8 * 1))

    let total9 = 
    (getRank(req.body.m1r9) + (req.body.m1k9 * 1)) +
    (getRank(req.body.m2r9) + (req.body.m2k9 * 1)) +
    (getRank(req.body.m3r9) + (req.body.m3k9 * 1))

    let total10 = 
    (getRank(req.body.m1r10) + (req.body.m1k10 * 1)) +
    (getRank(req.body.m2r10) + (req.body.m2k10 * 1)) +
    (getRank(req.body.m3r10) + (req.body.m3k10 * 1))

    let total11 = 
    (getRank(req.body.m1r11) + (req.body.m1k11 * 1)) +
    (getRank(req.body.m2r11) + (req.body.m2k11 * 1)) +
    (getRank(req.body.m3r11) + (req.body.m3k11 * 1))

    let total12 = 
    (getRank(req.body.m1r12) + (req.body.m1k12 * 1)) +
    (getRank(req.body.m2r12) + (req.body.m2k12 * 1)) +
    (getRank(req.body.m3r12) + (req.body.m3k12 * 1))

    function getRank (rank) {
        if(rank == 1){
            return 12
        }
        else if(rank == 2){
            return 9
        }
        else if(rank == 3){
            return 8
        }
        else if(rank == 4){
            return 7
        }
        else if(rank == 5){
            return 6
        }
        else if(rank == 6){
            return 5
        }
        else if(rank == 7){
            return 4
        }
        else if(rank == 8){
            return 3
        }
        else if(rank == 9){
            return 2
        }
        else if(rank == 10){
            return 1
        }
        else if(rank == 11){
            return 0
        }
        else if(rank == 12){
            return 0
        }
        else{
            return 0
        }
    }

    let arrayRank = 
    [
        total1, total2, total3, total4,
        total5, total6, total7, total8,
        total9, total10, total11, total12
    ]

    async function finalRank(arrayRank){
        arrayRank.sort((a, b) => a - b)
        arrayRank.reverse()
    
        let rank1 = arrayRank.indexOf(total1) + 1
        let rank2 = arrayRank.indexOf(total2) + 1
        let rank3 = arrayRank.indexOf(total3) + 1
        let rank4 = arrayRank.indexOf(total4) + 1
        let rank5 = arrayRank.indexOf(total5) + 1
        let rank6 = arrayRank.indexOf(total6) + 1
        let rank7 = arrayRank.indexOf(total7) + 1
        let rank8 = arrayRank.indexOf(total8) + 1
        let rank9 = arrayRank.indexOf(total9) + 1
        let rank10 = arrayRank.indexOf(total10) + 1
        let rank11 = arrayRank.indexOf(total11) + 1
        let rank12 = arrayRank.indexOf(total12) + 1
        
        let user = 
        {
            namaTur: namaTur,
            email: email,
            password: password,
            data: {
                tim1: {
                    namaTim: namaTim1,
                    m1r: req.body.m1r1,
                    m1k: req.body.m1k1,
                    m2r: req.body.m2r1,
                    m2k: req.body.m2k1,
                    m3r: req.body.m3r1,
                    m3k: req.body.m3k1,
                    total: total1,
                    rank: rank1,
                },
                tim2: {
                    namaTim: namaTim2,
                    m1r: req.body.m1r2,
                    m1k: req.body.m1k2,
                    m2r: req.body.m2r2,
                    m2k: req.body.m2k2,
                    m3r: req.body.m3r2,
                    m3k: req.body.m3k2,
                    total: total2,
                    rank: rank2,
                },
                tim3: {
                    namaTim: namaTim3,
                    m1r: req.body.m1r3,
                    m1k: req.body.m1k3,
                    m2r: req.body.m2r3,
                    m2k: req.body.m2k3,
                    m3r: req.body.m3r3,
                    m3k: req.body.m3k3,
                    total: total3,
                    rank: rank3,
                },
                tim4: {
                    namaTim: namaTim4,
                    m1r: req.body.m1r4,
                    m1k: req.body.m1k4,
                    m2r: req.body.m2r4,
                    m2k: req.body.m2k4,
                    m3r: req.body.m3r4,
                    m3k: req.body.m3k4,
                    total: total4,
                    rank: rank4,
                },
                tim5: {
                    namaTim: namaTim5,
                    m1r: req.body.m1r5,
                    m1k: req.body.m1k5,
                    m2r: req.body.m2r5,
                    m2k: req.body.m2k5,
                    m3r: req.body.m3r5,
                    m3k: req.body.m3k5,
                    total: total5,
                    rank: rank5,
                },
                tim6: {
                    namaTim: namaTim6,
                    m1r: req.body.m1r6,
                    m1k: req.body.m1k6,
                    m2r: req.body.m2r6,
                    m2k: req.body.m2k6,
                    m3r: req.body.m3r6,
                    m3k: req.body.m3k6,
                    total: total6,
                    rank: rank6,
                },
                tim7: {
                    namaTim: namaTim7,
                    m1r: req.body.m1r7,
                    m1k: req.body.m1k7,
                    m2r: req.body.m2r7,
                    m2k: req.body.m2k7,
                    m3r: req.body.m3r7,
                    m3k: req.body.m3k7,
                    total: total7,
                    rank: rank7,
                },
                tim8: {
                    namaTim: namaTim8,
                    m1r: req.body.m1r8,
                    m1k: req.body.m1k8,
                    m2r: req.body.m2r8,
                    m2k: req.body.m2k8,
                    m3r: req.body.m3r8,
                    m3k: req.body.m3k8,
                    total: total8,
                    rank: rank8,
                },
                tim9: {
                    namaTim: namaTim9,
                    m1r: req.body.m1r9,
                    m1k: req.body.m1k9,
                    m2r: req.body.m2r9,
                    m2k: req.body.m2k9,
                    m3r: req.body.m3r9,
                    m3k: req.body.m3k9,
                    total: total9,
                    rank: rank9,
                },
                tim10: {
                    namaTim: namaTim10,
                    m1r: req.body.m1r10,
                    m1k: req.body.m1k10,
                    m2r: req.body.m2r10,
                    m2k: req.body.m2k10,
                    m3r: req.body.m3r10,
                    m3k: req.body.m3k10,
                    total: total10,
                    rank: rank10,
                },
                tim11: {
                    namaTim: namaTim11,
                    m1r: req.body.m1r11,
                    m1k: req.body.m1k11,
                    m2r: req.body.m2r11,
                    m2k: req.body.m2k11,
                    m3r: req.body.m3r11,
                    m3k: req.body.m3k11,
                    total: total11,
                    rank: rank11,
                },
                tim12: {
                    namaTim: namaTim12,
                    m1r: req.body.m1r12,
                    m1k: req.body.m1k12,
                    m2r: req.body.m2r12,
                    m2k: req.body.m2k12,
                    m3r: req.body.m3r12,
                    m3k: req.body.m3k12,
                    total: total12,
                    rank: rank12,
                },
            }
        }
        await FfUser.findOneAndUpdate({ _id: _id }, user, { new: true }, async (err, doc) => {
            if(!err) {
                const user = await FfUser.findOne({ _id: _id })

                res.render('ff-form', {
                    layout: 'layouts/main-layout',
                    title: 'Fradotech',
                    user,
                })
            }
            else {
                res.send(err)
            }
        })
        
    }
    finalRank(arrayRank)
})

app.get('/ff-hasil/:_id', async (req, res) =>{
    const user = await FfUser.findOne({_id: req.params._id})

    res.render('ff-hasil', {
        layout: 'layouts/main-layout',
        title: 'Fradotech',
        user,
    })
})



app.get('/pubg-register', (req, res) =>{
    res.render('pubg-register', {
        layout: 'layouts/main-layout',
        title: 'Fradotech',
    })
})

app.listen(port, () =>{
    console.log(`Point Count App | Listening at http://127.0.0.1:${port}`)
})