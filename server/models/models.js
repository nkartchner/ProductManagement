const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productManager', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { });

const ProductsSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, "Title is required"], 
        minlength:[4, 'The products title must be a least 4 characters long']
    },
    price: { type:Number, required:[true, "Price is required"] },
    imgUrl: { type:String, default:"https://static.thenounproject.com/png/145280-200.png" }
}, { timestamps: true });

module.exports = mongoose.model('products', ProductsSchema);