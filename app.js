const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const session = require('express-session')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

require('./utils/db')
const FfUser = require('./model/ff-user')
const PubgUser = require('./model/pubg-user')

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

//Free Fire
app.get('/ff-register', (req, res) =>{
    res.render('ff-register', {
        layout: 'layouts/main-layout',
        title: 'Frandatech',
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
        title: 'Frandatech',
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
            title: 'Frandatech',
        })
    }else{
        res.render('ff-form', {
            layout: 'layouts/main-layout',
            title: 'Frandatech',
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
    (getRank(req.body.m3r1) + (req.body.m3k1 * 1)) +
    (getRank(req.body.m4r1) + (req.body.m4k1 * 1)) +
    (getRank(req.body.m5r1) + (req.body.m5k1 * 1))

    let total2 = 
    (getRank(req.body.m1r2) + (req.body.m1k2 * 1)) +
    (getRank(req.body.m2r2) + (req.body.m2k2 * 1)) +
    (getRank(req.body.m3r2) + (req.body.m3k2 * 1)) +
    (getRank(req.body.m4r2) + (req.body.m4k2 * 1)) +
    (getRank(req.body.m5r2) + (req.body.m5k2 * 1))

    let total3 = 
    (getRank(req.body.m1r3) + (req.body.m1k3 * 1)) +
    (getRank(req.body.m2r3) + (req.body.m2k3 * 1)) +
    (getRank(req.body.m3r3) + (req.body.m3k3 * 1)) +
    (getRank(req.body.m4r3) + (req.body.m4k3 * 1)) +
    (getRank(req.body.m5r3) + (req.body.m5k3 * 1))

    let total4 = 
    (getRank(req.body.m1r4) + (req.body.m1k4 * 1)) +
    (getRank(req.body.m2r4) + (req.body.m2k4 * 1)) +
    (getRank(req.body.m3r4) + (req.body.m3k4 * 1)) +
    (getRank(req.body.m4r4) + (req.body.m4k4 * 1)) +
    (getRank(req.body.m5r4) + (req.body.m5k4 * 1))

    let total5 = 
    (getRank(req.body.m1r5) + (req.body.m1k5 * 1)) +
    (getRank(req.body.m2r5) + (req.body.m2k5 * 1)) +
    (getRank(req.body.m3r5) + (req.body.m3k5 * 1)) +
    (getRank(req.body.m4r5) + (req.body.m4k5 * 1)) +
    (getRank(req.body.m5r5) + (req.body.m5k5 * 1))

    let total6 = 
    (getRank(req.body.m1r6) + (req.body.m1k6 * 1)) +
    (getRank(req.body.m2r6) + (req.body.m2k6 * 1)) +
    (getRank(req.body.m3r6) + (req.body.m3k6 * 1)) +
    (getRank(req.body.m4r6) + (req.body.m4k6 * 1)) +
    (getRank(req.body.m5r6) + (req.body.m5k6 * 1))

    let total7 = 
    (getRank(req.body.m1r7) + (req.body.m1k7 * 1)) +
    (getRank(req.body.m2r7) + (req.body.m2k7 * 1)) +
    (getRank(req.body.m3r7) + (req.body.m3k7 * 1)) +
    (getRank(req.body.m4r7) + (req.body.m4k7 * 1)) +
    (getRank(req.body.m5r7) + (req.body.m5k7 * 1))

    let total8 = 
    (getRank(req.body.m1r8) + (req.body.m1k8 * 1)) +
    (getRank(req.body.m2r8) + (req.body.m2k8 * 1)) +
    (getRank(req.body.m3r8) + (req.body.m3k8 * 1)) +
    (getRank(req.body.m4r8) + (req.body.m4k8 * 1)) +
    (getRank(req.body.m5r8) + (req.body.m5k8 * 1))

    let total9 = 
    (getRank(req.body.m1r9) + (req.body.m1k9 * 1)) +
    (getRank(req.body.m2r9) + (req.body.m2k9 * 1)) +
    (getRank(req.body.m3r9) + (req.body.m3k9 * 1)) +
    (getRank(req.body.m4r9) + (req.body.m4k9 * 1)) +
    (getRank(req.body.m5r9) + (req.body.m5k9 * 1))

    let total10 = 
    (getRank(req.body.m1r10) + (req.body.m1k10 * 1)) +
    (getRank(req.body.m2r10) + (req.body.m2k10 * 1)) +
    (getRank(req.body.m3r10) + (req.body.m3k10 * 1)) +
    (getRank(req.body.m4r10) + (req.body.m4k10 * 1)) +
    (getRank(req.body.m5r10) + (req.body.m5k10 * 1))

    let total11 = 
    (getRank(req.body.m1r11) + (req.body.m1k11 * 1)) +
    (getRank(req.body.m2r11) + (req.body.m2k11 * 1)) +
    (getRank(req.body.m3r11) + (req.body.m3k11 * 1)) +
    (getRank(req.body.m4r11) + (req.body.m4k11 * 1)) +
    (getRank(req.body.m5r11) + (req.body.m5k11 * 1))

    let total12 = 
    (getRank(req.body.m1r12) + (req.body.m1k12 * 1)) +
    (getRank(req.body.m2r12) + (req.body.m2k12 * 1)) +
    (getRank(req.body.m3r12) + (req.body.m3k12 * 1)) +
    (getRank(req.body.m4r12) + (req.body.m4k12 * 1)) +
    (getRank(req.body.m5r12) + (req.body.m5k12 * 1))

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
                    m4r: req.body.m4r1,
                    m4k: req.body.m4k1,
                    m5r: req.body.m5r1,
                    m5k: req.body.m5k1,
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
                    m4r: req.body.m4r2,
                    m4k: req.body.m4k2,
                    m5r: req.body.m5r2,
                    m5k: req.body.m5k2,
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
                    m4r: req.body.m4r3,
                    m4k: req.body.m4k3,
                    m5r: req.body.m5r3,
                    m5k: req.body.m5k3,
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
                    m4r: req.body.m4r4,
                    m4k: req.body.m4k4,
                    m5r: req.body.m5r4,
                    m5k: req.body.m5k4,
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
                    m4r: req.body.m4r5,
                    m4k: req.body.m4k5,
                    m5r: req.body.m5r5,
                    m5k: req.body.m5k5,
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
                    m4r: req.body.m4r6,
                    m4k: req.body.m4k6,
                    m5r: req.body.m5r6,
                    m5k: req.body.m5k6,
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
                    m4r: req.body.m4r7,
                    m4k: req.body.m4k7,
                    m5r: req.body.m5r7,
                    m5k: req.body.m5k7,
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
                    m4r: req.body.m4r8,
                    m4k: req.body.m4k8,
                    m5r: req.body.m5r8,
                    m5k: req.body.m5k8,
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
                    m4r: req.body.m4r9,
                    m4k: req.body.m4k9,
                    m5r: req.body.m5r9,
                    m5k: req.body.m5k9,
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
                    m4r: req.body.m4r10,
                    m4k: req.body.m4k10,
                    m5r: req.body.m5r10,
                    m5k: req.body.m5k10,
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
                    m4r: req.body.m4r11,
                    m4k: req.body.m4k11,
                    m5r: req.body.m5r11,
                    m5k: req.body.m5k11,
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
                    m4r: req.body.m4r12,
                    m4k: req.body.m4k12,
                    m5r: req.body.m5r12,
                    m5k: req.body.m5k12,
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
                    title: 'Frandatech',
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
        title: 'Frandatech',
        user,
    })
})


//PUBG
app.get('/pubg-register', (req, res) =>{
    res.render('pubg-register', {
        layout: 'layouts/main-layout',
        title: 'Frandatech',
    })
})

app.post('/pubg-register', (req, res) => {
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
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
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim13: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim14: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim15: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim16: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim17: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim18: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim19: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim20: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim21: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim22: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim23: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim24: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
            tim25: {
                namaTim: null,
                m1r: null,
                m1k: null,
                m2r: null,
                m2k: null,
                m3r: null,
                m3k: null,
                m4r: null,
                m4k: null,
                m5r: null,
                m5k: null,
                total: null,
                rank: null,
            },
        }
    }

    PubgUser.insertMany(user, (err, result) => {
        req.flash('msg', 'Turnamen Berhasil dibuat! Silakan Login')
        res.redirect('/pubg-login')
    })
})

app.get('/pubg-login', (req, res) =>{
    res.render('pubg-login', {
        layout: 'layouts/main-layout',
        title: 'Frandatech',
    })
})

app.post('/pubg-form', async (req, res) =>{
    let namaTur = req.body.namaTur
    let email =  req.body.email
    let password = req.body.password

    const user = await PubgUser.findOne({namaTur: namaTur, email: email, password: password})

    if(user == null){
        res.render('pubg-login-gagal', {
            layout: 'layouts/main-layout',
            title: 'Frandatech',
        })
    }else{
        res.render('pubg-form', {
            layout: 'layouts/main-layout',
            title: 'Frandatech',
            user,
        })
    }
})

app.post('/pubg-edit', (req, res) => {
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
    let namaTim13 = req.body.namaTim13
    let namaTim14 = req.body.namaTim14
    let namaTim15 = req.body.namaTim15
    let namaTim16 = req.body.namaTim16
    let namaTim17 = req.body.namaTim17
    let namaTim18 = req.body.namaTim18
    let namaTim19 = req.body.namaTim19
    let namaTim20 = req.body.namaTim20
    let namaTim21 = req.body.namaTim21
    let namaTim22 = req.body.namaTim22
    let namaTim23 = req.body.namaTim23
    let namaTim24 = req.body.namaTim24
    let namaTim25 = req.body.namaTim25


    let total1 = 
    (getRank(req.body.m1r1) + (req.body.m1k1 * 1)) +
    (getRank(req.body.m2r1) + (req.body.m2k1 * 1)) +
    (getRank(req.body.m3r1) + (req.body.m3k1 * 1)) +
    (getRank(req.body.m4r1) + (req.body.m4k1 * 1)) +
    (getRank(req.body.m5r1) + (req.body.m5k1 * 1))

    let total2 = 
    (getRank(req.body.m1r2) + (req.body.m1k2 * 1)) +
    (getRank(req.body.m2r2) + (req.body.m2k2 * 1)) +
    (getRank(req.body.m3r2) + (req.body.m3k2 * 1)) +
    (getRank(req.body.m4r2) + (req.body.m4k2 * 1)) +
    (getRank(req.body.m5r2) + (req.body.m5k2 * 1))

    let total3 = 
    (getRank(req.body.m1r3) + (req.body.m1k3 * 1)) +
    (getRank(req.body.m2r3) + (req.body.m2k3 * 1)) +
    (getRank(req.body.m3r3) + (req.body.m3k3 * 1)) +
    (getRank(req.body.m4r3) + (req.body.m4k3 * 1)) +
    (getRank(req.body.m5r3) + (req.body.m5k3 * 1))
    
    let total4 = 
    (getRank(req.body.m1r4) + (req.body.m1k4 * 1)) +
    (getRank(req.body.m2r4) + (req.body.m2k4 * 1)) +
    (getRank(req.body.m3r4) + (req.body.m3k4 * 1)) +
    (getRank(req.body.m4r4) + (req.body.m4k4 * 1)) +
    (getRank(req.body.m5r4) + (req.body.m5k4 * 1))
    
    let total5 = 
    (getRank(req.body.m1r5) + (req.body.m1k5 * 1)) +
    (getRank(req.body.m2r5) + (req.body.m2k5 * 1)) +
    (getRank(req.body.m3r5) + (req.body.m3k5 * 1)) +
    (getRank(req.body.m4r5) + (req.body.m4k5 * 1)) +
    (getRank(req.body.m5r5) + (req.body.m5k5 * 1))
    
    let total6 = 
    (getRank(req.body.m1r6) + (req.body.m1k6 * 1)) +
    (getRank(req.body.m2r6) + (req.body.m2k6 * 1)) +
    (getRank(req.body.m3r6) + (req.body.m3k6 * 1)) +
    (getRank(req.body.m4r6) + (req.body.m4k6 * 1)) +
    (getRank(req.body.m5r6) + (req.body.m5k6 * 1))
    
    let total7 = 
    (getRank(req.body.m1r7) + (req.body.m1k7 * 1)) +
    (getRank(req.body.m2r7) + (req.body.m2k7 * 1)) +
    (getRank(req.body.m3r7) + (req.body.m3k7 * 1)) +
    (getRank(req.body.m4r7) + (req.body.m4k7 * 1)) +
    (getRank(req.body.m5r7) + (req.body.m5k7 * 1))
    
    let total8 = 
    (getRank(req.body.m1r8) + (req.body.m1k8 * 1)) +
    (getRank(req.body.m2r8) + (req.body.m2k8 * 1)) +
    (getRank(req.body.m3r8) + (req.body.m3k8 * 1)) +
    (getRank(req.body.m4r8) + (req.body.m4k8 * 1)) +
    (getRank(req.body.m5r8) + (req.body.m5k8 * 1))
    
    let total9 = 
    (getRank(req.body.m1r9) + (req.body.m1k9 * 1)) +
    (getRank(req.body.m2r9) + (req.body.m2k9 * 1)) +
    (getRank(req.body.m3r9) + (req.body.m3k9 * 1)) +
    (getRank(req.body.m4r9) + (req.body.m4k9 * 1)) +
    (getRank(req.body.m5r9) + (req.body.m5k9 * 1))
        
    let total10 = 
    (getRank(req.body.m1r10) + (req.body.m1k10 * 1)) +
    (getRank(req.body.m2r10) + (req.body.m2k10 * 1)) +
    (getRank(req.body.m3r10) + (req.body.m3k10 * 1)) +
    (getRank(req.body.m4r10) + (req.body.m4k10 * 1)) +
    (getRank(req.body.m5r10) + (req.body.m5k10 * 1))
            
    let total11 = 
    (getRank(req.body.m1r11) + (req.body.m1k11 * 1)) +
    (getRank(req.body.m2r11) + (req.body.m2k11 * 1)) +
    (getRank(req.body.m3r11) + (req.body.m3k11 * 1)) +
    (getRank(req.body.m4r11) + (req.body.m4k11 * 1)) +
    (getRank(req.body.m5r11) + (req.body.m5k11 * 1))
            
    let total12 = 
    (getRank(req.body.m1r12) + (req.body.m1k12 * 1)) +
    (getRank(req.body.m2r12) + (req.body.m2k12 * 1)) +
    (getRank(req.body.m3r12) + (req.body.m3k12 * 1)) +
    (getRank(req.body.m4r12) + (req.body.m4k12 * 1)) +
    (getRank(req.body.m5r12) + (req.body.m5k12 * 1))
            
    let total13 = 
    (getRank(req.body.m1r13) + (req.body.m1k13 * 1)) +
    (getRank(req.body.m2r13) + (req.body.m2k13 * 1)) +
    (getRank(req.body.m3r13) + (req.body.m3k13 * 1)) +
    (getRank(req.body.m4r13) + (req.body.m4k13 * 1)) +
    (getRank(req.body.m5r13) + (req.body.m5k13 * 1))
            
    let total14 = 
    (getRank(req.body.m1r14) + (req.body.m1k14 * 1)) +
    (getRank(req.body.m2r14) + (req.body.m2k14 * 1)) +
    (getRank(req.body.m3r14) + (req.body.m3k14 * 1)) +
    (getRank(req.body.m4r14) + (req.body.m4k14 * 1)) +
    (getRank(req.body.m5r14) + (req.body.m5k14 * 1))
            
    let total15 = 
    (getRank(req.body.m1r15) + (req.body.m1k15 * 1)) +
    (getRank(req.body.m2r15) + (req.body.m2k15 * 1)) +
    (getRank(req.body.m3r15) + (req.body.m3k15 * 1)) +
    (getRank(req.body.m4r15) + (req.body.m4k15 * 1)) +
    (getRank(req.body.m5r15) + (req.body.m5k15 * 1))
            
    let total16 = 
    (getRank(req.body.m1r16) + (req.body.m1k16 * 1)) +
    (getRank(req.body.m2r16) + (req.body.m2k16 * 1)) +
    (getRank(req.body.m3r16) + (req.body.m3k16 * 1)) +
    (getRank(req.body.m4r16) + (req.body.m4k16 * 1)) +
    (getRank(req.body.m5r16) + (req.body.m5k16 * 1))
            
    let total17 = 
    (getRank(req.body.m1r17) + (req.body.m1k17 * 1)) +
    (getRank(req.body.m2r17) + (req.body.m2k17 * 1)) +
    (getRank(req.body.m3r17) + (req.body.m3k17 * 1)) +
    (getRank(req.body.m4r17) + (req.body.m4k17 * 1)) +
    (getRank(req.body.m5r17) + (req.body.m5k17 * 1))
            
    let total18 = 
    (getRank(req.body.m1r18) + (req.body.m1k18 * 1)) +
    (getRank(req.body.m2r18) + (req.body.m2k18 * 1)) +
    (getRank(req.body.m3r18) + (req.body.m3k18 * 1)) +
    (getRank(req.body.m4r18) + (req.body.m4k18 * 1)) +
    (getRank(req.body.m5r18) + (req.body.m5k18 * 1))
            
    let total19 = 
    (getRank(req.body.m1r19) + (req.body.m1k19 * 1)) +
    (getRank(req.body.m2r19) + (req.body.m2k19 * 1)) +
    (getRank(req.body.m3r19) + (req.body.m3k19 * 1)) +
    (getRank(req.body.m4r19) + (req.body.m4k19 * 1)) +
    (getRank(req.body.m5r19) + (req.body.m5k19 * 1))
            
    let total20 = 
    (getRank(req.body.m1r20) + (req.body.m1k20 * 1)) +
    (getRank(req.body.m2r20) + (req.body.m2k20 * 1)) +
    (getRank(req.body.m3r20) + (req.body.m3k20 * 1)) +
    (getRank(req.body.m4r20) + (req.body.m4k20 * 1)) +
    (getRank(req.body.m5r20) + (req.body.m5k20 * 1))
            
    let total21 = 
    (getRank(req.body.m1r21) + (req.body.m1k21 * 1)) +
    (getRank(req.body.m2r21) + (req.body.m2k21 * 1)) +
    (getRank(req.body.m3r21) + (req.body.m3k21 * 1)) +
    (getRank(req.body.m4r21) + (req.body.m4k21 * 1)) +
    (getRank(req.body.m5r21) + (req.body.m5k21 * 1))
            
    let total22 = 
    (getRank(req.body.m1r22) + (req.body.m1k22 * 1)) +
    (getRank(req.body.m2r22) + (req.body.m2k22 * 1)) +
    (getRank(req.body.m3r22) + (req.body.m3k22 * 1)) +
    (getRank(req.body.m4r22) + (req.body.m4k22 * 1)) +
    (getRank(req.body.m5r22) + (req.body.m5k22 * 1))
            
    let total23 = 
    (getRank(req.body.m1r23) + (req.body.m1k23 * 1)) +
    (getRank(req.body.m2r23) + (req.body.m2k23 * 1)) +
    (getRank(req.body.m3r23) + (req.body.m3k23 * 1)) +
    (getRank(req.body.m4r23) + (req.body.m4k23 * 1)) +
    (getRank(req.body.m5r23) + (req.body.m5k23 * 1))
            
    let total24 = 
    (getRank(req.body.m1r24) + (req.body.m1k24 * 1)) +
    (getRank(req.body.m2r24) + (req.body.m2k24 * 1)) +
    (getRank(req.body.m3r24) + (req.body.m3k24 * 1)) +
    (getRank(req.body.m4r24) + (req.body.m4k24 * 1)) +
    (getRank(req.body.m5r24) + (req.body.m5k24 * 1))
            
    let total25 = 
    (getRank(req.body.m1r25) + (req.body.m1k25 * 1)) +
    (getRank(req.body.m2r25) + (req.body.m2k25 * 1)) +
    (getRank(req.body.m3r25) + (req.body.m3k25 * 1)) +
    (getRank(req.body.m4r25) + (req.body.m4k25 * 1)) +
    (getRank(req.body.m5r25) + (req.body.m5k25 * 1))
    
    function getRank (rank) {
        if(rank == 1){
            return 15
        }
        else if(rank == 2){
            return 12
        }
        else if(rank == 3){
            return 10
        }
        else if(rank == 4){
            return 8
        }
        else if(rank == 5){
            return 6
        }
        else if(rank == 6){
            return 4
        }
        else if(rank == 7){
            return 2
        }
        else if(rank > 0 && rank <= 12){
            return 1
        }
        else{
            return 0
        }
    }

    let arrayRank = 
    [
        total1, total2, total3, total4,
        total5, total6, total7, total8,
        total9, total10, total11, total12,
        total13, total14, total15, total16,
        total17, total18, total19, total20,
        total21, total22, total23, total24,
        total25
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
        let rank13 = arrayRank.indexOf(total13) + 1
        let rank14 = arrayRank.indexOf(total14) + 1
        let rank15 = arrayRank.indexOf(total15) + 1
        let rank16 = arrayRank.indexOf(total16) + 1
        let rank17 = arrayRank.indexOf(total17) + 1
        let rank18 = arrayRank.indexOf(total18) + 1
        let rank19 = arrayRank.indexOf(total19) + 1
        let rank20 = arrayRank.indexOf(total20) + 1
        let rank21 = arrayRank.indexOf(total21) + 1
        let rank22 = arrayRank.indexOf(total22) + 1
        let rank23 = arrayRank.indexOf(total23) + 1
        let rank24 = arrayRank.indexOf(total24) + 1
        let rank25 = arrayRank.indexOf(total25) + 1
        
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
                    m4r: req.body.m4r1,
                    m4k: req.body.m4k1,
                    m5r: req.body.m5r1,
                    m5k: req.body.m5k1,
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
                    m4r: req.body.m4r2,
                    m4k: req.body.m4k2,
                    m5r: req.body.m5r2,
                    m5k: req.body.m5k2,
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
                    m4r: req.body.m4r3,
                    m4k: req.body.m4k3,
                    m5r: req.body.m5r3,
                    m5k: req.body.m5k3,
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
                    m4r: req.body.m4r4,
                    m4k: req.body.m4k4,
                    m5r: req.body.m5r4,
                    m5k: req.body.m5k4,
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
                    m4r: req.body.m4r5,
                    m4k: req.body.m4k5,
                    m5r: req.body.m5r5,
                    m5k: req.body.m5k5,
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
                    m4r: req.body.m4r6,
                    m4k: req.body.m4k6,
                    m5r: req.body.m5r6,
                    m5k: req.body.m5k6,
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
                    m4r: req.body.m4r7,
                    m4k: req.body.m4k7,
                    m5r: req.body.m5r7,
                    m5k: req.body.m5k7,
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
                    m4r: req.body.m4r8,
                    m4k: req.body.m4k8,
                    m5r: req.body.m5r8,
                    m5k: req.body.m5k8,
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
                    m4r: req.body.m4r9,
                    m4k: req.body.m4k9,
                    m5r: req.body.m5r9,
                    m5k: req.body.m5k9,
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
                    m4r: req.body.m4r10,
                    m4k: req.body.m4k10,
                    m5r: req.body.m5r10,
                    m5k: req.body.m5k10,
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
                    m4r: req.body.m4r11,
                    m4k: req.body.m4k11,
                    m5r: req.body.m5r11,
                    m5k: req.body.m5k11,
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
                    m4r: req.body.m4r12,
                    m4k: req.body.m4k12,
                    m5r: req.body.m5r12,
                    m5k: req.body.m5k12,
                    total: total12,
                    rank: rank12,
                },
                tim13: {
                    namaTim: namaTim13,
                    m1r: req.body.m1r13,
                    m1k: req.body.m1k13,
                    m2r: req.body.m2r13,
                    m2k: req.body.m2k13,
                    m3r: req.body.m3r13,
                    m3k: req.body.m3k13,
                    m4r: req.body.m4r13,
                    m4k: req.body.m4k13,
                    m5r: req.body.m5r13,
                    m5k: req.body.m5k13,
                    total: total13,
                    rank: rank13,
                },
                tim14: {
                    namaTim: namaTim14,
                    m1r: req.body.m1r14,
                    m1k: req.body.m1k14,
                    m2r: req.body.m2r14,
                    m2k: req.body.m2k14,
                    m3r: req.body.m3r14,
                    m3k: req.body.m3k14,
                    m4r: req.body.m4r14,
                    m4k: req.body.m4k14,
                    m5r: req.body.m5r14,
                    m5k: req.body.m5k14,
                    total: total14,
                    rank: rank14,
                },
                tim15: {
                    namaTim: namaTim15,
                    m1r: req.body.m1r15,
                    m1k: req.body.m1k15,
                    m2r: req.body.m2r15,
                    m2k: req.body.m2k15,
                    m3r: req.body.m3r15,
                    m3k: req.body.m3k15,
                    m4r: req.body.m4r15,
                    m4k: req.body.m4k15,
                    m5r: req.body.m5r15,
                    m5k: req.body.m5k15,
                    total: total15,
                    rank: rank15,
                },
                tim16: {
                    namaTim: namaTim16,
                    m1r: req.body.m1r16,
                    m1k: req.body.m1k16,
                    m2r: req.body.m2r16,
                    m2k: req.body.m2k16,
                    m3r: req.body.m3r16,
                    m3k: req.body.m3k16,
                    m4r: req.body.m4r16,
                    m4k: req.body.m4k16,
                    m5r: req.body.m5r16,
                    m5k: req.body.m5k16,
                    total: total16,
                    rank: rank16,
                },
                tim17: {
                    namaTim: namaTim17,
                    m1r: req.body.m1r17,
                    m1k: req.body.m1k17,
                    m2r: req.body.m2r17,
                    m2k: req.body.m2k17,
                    m3r: req.body.m3r17,
                    m3k: req.body.m3k17,
                    m4r: req.body.m4r17,
                    m4k: req.body.m4k17,
                    m5r: req.body.m5r17,
                    m5k: req.body.m5k17,
                    total: total17,
                    rank: rank17,
                },
                tim18: {
                    namaTim: namaTim18,
                    m1r: req.body.m1r18,
                    m1k: req.body.m1k18,
                    m2r: req.body.m2r18,
                    m2k: req.body.m2k18,
                    m3r: req.body.m3r18,
                    m3k: req.body.m3k18,
                    m4r: req.body.m4r18,
                    m4k: req.body.m4k18,
                    m5r: req.body.m5r18,
                    m5k: req.body.m5k18,
                    total: total18,
                    rank: rank18,
                },
                tim19: {
                    namaTim: namaTim19,
                    m1r: req.body.m1r19,
                    m1k: req.body.m1k19,
                    m2r: req.body.m2r19,
                    m2k: req.body.m2k19,
                    m3r: req.body.m3r19,
                    m3k: req.body.m3k19,
                    m4r: req.body.m4r19,
                    m4k: req.body.m4k19,
                    m5r: req.body.m5r19,
                    m5k: req.body.m5k19,
                    total: total19,
                    rank: rank19,
                },
                tim20: {
                    namaTim: namaTim20,
                    m1r: req.body.m1r20,
                    m1k: req.body.m1k20,
                    m2r: req.body.m2r20,
                    m2k: req.body.m2k20,
                    m3r: req.body.m3r20,
                    m3k: req.body.m3k20,
                    m4r: req.body.m4r20,
                    m4k: req.body.m4k20,
                    m5r: req.body.m5r20,
                    m5k: req.body.m5k20,
                    total: total20,
                    rank: rank20,
                },
                tim21: {
                    namaTim: namaTim21,
                    m1r: req.body.m1r21,
                    m1k: req.body.m1k21,
                    m2r: req.body.m2r21,
                    m2k: req.body.m2k21,
                    m3r: req.body.m3r21,
                    m3k: req.body.m3k21,
                    m4r: req.body.m4r21,
                    m4k: req.body.m4k21,
                    m5r: req.body.m5r21,
                    m5k: req.body.m5k21,
                    total: total21,
                    rank: rank21,
                },
                tim22: {
                    namaTim: namaTim22,
                    m1r: req.body.m1r22,
                    m1k: req.body.m1k22,
                    m2r: req.body.m2r22,
                    m2k: req.body.m2k22,
                    m3r: req.body.m3r22,
                    m3k: req.body.m3k22,
                    m4r: req.body.m4r22,
                    m4k: req.body.m4k22,
                    m5r: req.body.m5r22,
                    m5k: req.body.m5k22,
                    total: total22,
                    rank: rank22,
                },
                tim23: {
                    namaTim: namaTim23,
                    m1r: req.body.m1r23,
                    m1k: req.body.m1k23,
                    m2r: req.body.m2r23,
                    m2k: req.body.m2k23,
                    m3r: req.body.m3r23,
                    m3k: req.body.m3k23,
                    m4r: req.body.m4r23,
                    m4k: req.body.m4k23,
                    m5r: req.body.m5r23,
                    m5k: req.body.m5k23,
                    total: total23,
                    rank: rank23,
                },
                tim24: {
                    namaTim: namaTim24,
                    m1r: req.body.m1r24,
                    m1k: req.body.m1k24,
                    m2r: req.body.m2r24,
                    m2k: req.body.m2k24,
                    m3r: req.body.m3r24,
                    m3k: req.body.m3k24,
                    m4r: req.body.m4r24,
                    m4k: req.body.m4k24,
                    m5r: req.body.m5r24,
                    m5k: req.body.m5k24,
                    total: total24,
                    rank: rank24,
                },
                tim25: {
                    namaTim: namaTim25,
                    m1r: req.body.m1r25,
                    m1k: req.body.m1k25,
                    m2r: req.body.m2r25,
                    m2k: req.body.m2k25,
                    m3r: req.body.m3r25,
                    m3k: req.body.m3k25,
                    m4r: req.body.m4r25,
                    m4k: req.body.m4k25,
                    m5r: req.body.m5r25,
                    m5k: req.body.m5k25,
                    total: total25,
                    rank: rank25,
                },
            }
        }
        await PubgUser.findOneAndUpdate({ _id: _id }, user, { new: true }, async (err, doc) => {
            if(!err) {
                const user = await PubgUser.findOne({ _id: _id })

                res.render('pubg-form', {
                    layout: 'layouts/main-layout',
                    title: 'Frandatech',
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

app.get('/pubg-hasil/:_id', async (req, res) =>{
    const user = await PubgUser.findOne({_id: req.params._id})

    res.render('pubg-hasil', {
        layout: 'layouts/main-layout',
        title: 'Frandatech',
        user,
    })
})

app.listen(port, () =>{
    console.log(`Point Count App | Listening at http://127.0.0.1:${port}`)
})