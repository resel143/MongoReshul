
const deleteDocument = async (_id)=>{
    try {
        const result = await Playlist.deleteOne({_id});
        console.log(result);
    } catch (error) {
        console.log(error);
        
    }
}

deleteDocument("60a374d026907173d0f2da51");
