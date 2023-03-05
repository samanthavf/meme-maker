function enablePhotoUpload(){
    const imageInput = document.querySelector("#image-input")

imageInput.addEventListener("change", function(){
    const reader = new FileReader()
    reader.addEventListener("load", ()=>{
        const uploadImage = reader.result

        changeMemePicture(uploadImage)
        //document.querySelector("#display-image").style.backgroundImage = `url(${uploadImage})`
    })
    reader.readAsDataURL(this.files[0])
})
}

async function mapImageList(){
    const memesObject = [{
        "name": "chapolin",
        "path":"icons/chapolin.jpg"
    },
    {
        "name": "meme",
        "path": "Icons/meme.jpg"
    },
    {
        "name": "meme2",
        "path": "Icons/meme2.jpg"
       
    },
    {
        "name": "meme3",
        "path": "Icons/meme3.jpg"
    },
    {
        "name": "meme4",
        "path": "Icons/meme4.jpg"
    },
    {
        "name": "meme5",
        "path": "Icons/meme5.jpg"
    },
    {
        "name": "meme6",
        "path": "Icons/meme6.png"
    },
    {
        "name": "meme7",
        "path": "Icons/meme7.jpg"
    },
    ]
    return memesObject

}
 
async function createGallery(imageList){
    const memeSelector = document.querySelector("#memes-List")
   
    imageList.forEach(Icons => {
 let newOption = document.createElement("option")
 newOption.text = Icons.name.toUpperCase()
 newOption.value = Icons.path
 memeSelector.appendChild(newOption)
});
}

async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image")
    displayImage.style.backgroundImage = `url('${photo}')`
}

async function main(){
    const memesImageList = await mapImageList()

    enablePhotoUpload()
    await createGallery(memesImageList)
    await changeMemePicture(memesList[1].path)
}
main()



