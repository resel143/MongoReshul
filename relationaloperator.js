const getDocument = async ()=>{
    const result = await Playlist.find({$and :[{author: "Selena Gomez"},{videos: 5}]});
    console.log(result);
}


getDocument();
