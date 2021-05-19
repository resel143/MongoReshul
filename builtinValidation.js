  const playlistSchema = mongoose.Schema({
    name: {type: String, required : true, unique: true, lowercase : true, minlength: 3, maxlength: 30, trim: true},
    ctype: {
        type: String,
        enum = ["FrontEnd", "Party", "BackEnd"]
    },
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});
