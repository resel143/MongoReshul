
const updateDocument = async (_id)=>{
    const result = await Playlist.updateOne({_id},{$set: {"name": "MujhseShadiKarogi?"}} );
}


updateDocument("60a374d026907173d0f2da51");
