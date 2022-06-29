import React from "react";
//import memesData from "./memedata.js"

export default function Meme(props){

    const [meme, setmeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bip.jpg"
    })
    // const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    })

    //USING ASYNC INSTEAD OF ".then"
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])

    ////console.log(meme)


    //let url
     function getMemeImage(){
         //const allMemes = allMemes.data.memes
         const randomNumber = Math.floor(Math.random() * allMemes.length)
         const url = allMemes[randomNumber].url
         setmeme( prevMeme => {  
                return {...prevMeme, randomImage: url}
            })
     }

    // LOGIC USED IN FIRST DISPLAY MEME

//     const [memeImage, setmemeImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")
//    //let url
//     function getMemeImage(){
        
//         // const random = Math.floor(Math.random() * memesData.length);
//         // console.log(memesData[random])
//         const memesArray = memesData.data.memes
//         const randomNumber = Math.floor(Math.random() * memesArray.length)
//         //memesArray[randomNumber].url
//         //console.log(url) 
//         setmemeImage( memesArray[randomNumber].url)
//     }

 function handleMeme(event){
    // console.log(event.target.value)
     const {name,value} = event.target
     setmeme( prevMemeEvent => {
        return {...prevMemeEvent, [name] : value}
     })
 }


    return(
        <main>
        <div className="form">

            
            <input 
                type="text"
                placeholder="Top text" 
                className="form--input"
                name="topText"
                onChange={handleMeme}
                value={meme.topText}
            /> 
            <input 
                type="text" 
                placeholder="Bottom text"
                className="form--input"
                name="bottomText"
                onChange={handleMeme}
                value={meme.bottomText}
              /> 
              
            <button onClick={getMemeImage} className="form--button">Get a new meme image</button >
           {/* <img src={meme.randomImage} className="memeImage"/> */}
        </div>
        <div className="meme">
        <img src={meme.randomImage} className="memeImage" alt=""/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
       
        </main>
    )
}