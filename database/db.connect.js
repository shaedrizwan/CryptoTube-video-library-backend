const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@neog-cluster.tdvpj.mongodb.net/cryptotube?retryWrites=true&w=majority`,
{
useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(()=>console.log("Connected"))
.catch(err => console.log('Error in connecting to DB:',err))