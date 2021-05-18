// reading from the document 

const getDocument = async ()=>{
    const result = await Playlist.find({name: "Reshul"});
    console.log(result);
}


getDocument();
