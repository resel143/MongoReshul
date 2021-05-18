const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/rbegin01",{ useUnifiedTopology: true, useNewUrlParser: true  }).then(()=>{
    console.log("connection Successfull");
}).catch((err)=>{
    console.log(err);
});


// creating schema 
const playlistSchema = mongoose.Schema({
    name: {type: String, required : true},
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});


// create collection
const Playlist = new mongoose.model("Playlist",playlistSchema);

// insert document 

const createDocument = async ()=>{
    try{
        const reactPlaylist = new Playlist({
            name: "Naturally",
            ctype: "Party",
            videos: 1,
            author: "Selena Gomez",
            active: true,
        })
        
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(err){
            console.log(err);
    }
}


createDocument();
