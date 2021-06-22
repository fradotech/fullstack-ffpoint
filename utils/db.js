const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://fradojr:frado007@cluster0.sfoui.mongodb.net/point-count?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})