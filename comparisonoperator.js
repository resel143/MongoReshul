const getDocument = async ()=>{
    const result = await Playlist.find({videos:{$lt: 5}});
    console.log(result);
}


getDocument();
