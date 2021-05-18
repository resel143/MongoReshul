// reading from the document 

const getDocument = async ()=>{
    const result = await Playlist.find();
    console.log(result);
}


getDocument();
