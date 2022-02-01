import {useEffect, useState} from "react";
import '../App.css';
import axios from 'axios';


function Data() {
    const CLIENT_ID = "b8f25a01eeb0476f8632e75fdf40db9a"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("") // Saves token into local storage 
    const [searchKey, setSearchKey] = useState("") //State to search for artist
    const [artists, setArtists] = useState([]) //State for artist 

    useEffect(() => {
        const hash = window.location.hash //hash tag from url
        let token = window.localStorage.getItem("token")

        if (!token && hash) { //Only performing above task if no token available and hash is set
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1] 
            //removes hash tag from url, splits string from each & , 
            //then splits from equal sign and grab following index [1] to only recieve token

            window.location.hash = "" //Put hash back into a empty string
            window.localStorage.setItem("token", token) //Saves into local storage
        }

        setToken(token)

    }, [])
 
    const logout = () => {  //Log out function
        setToken("")
        window.localStorage.removeItem("token")  //Removes from local storage
    }

    const searchArtists = async (e) => {  // Creates https request through axios get request
        e.preventDefault()  //To prevent page from reloading
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {  //Required for spotify API's
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,  //query is searchkey
                type: "artist"  // type is artist
            }
        })

        setArtists(data.artists.items) //Artist function to retrieve data from artist
    }

    const renderArtists = () => { //Renders artists data
        return artists.map(artist => ( //For each artist return a div with artist name and image.. if image is length return image 0 index or display "NoImage"
            <div id="container"> 
            <div key={artist.id}> 
                {artist.images.length ? <img id="images" src={artist.images[0].url} alt=""/> : <div>No Image</div>}
                {artist.type}: 
                {artist.name}
            </div>
            </div>
        ))
    }

    return (
        <div className="App">
            <header className="App-header">
               <h1 id="title"></h1>
                {!token ?  //If no token
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        For More</a>  // Accessibility to log into spotify clone
                  /* If we do have token display log out button  */  
                  : <button id="logout_btn"onClick={logout}>Logout</button>} 
                    
                {token ?  //Only visible if token is available
                    <form onSubmit={searchArtists}>
                        <input id="input_btn" type="text" placeholder="Enter Here" cols="20" rows="10" onChange={e => setSearchKey(e.target.value)}/> 
                       <button id="search_btn" type={"submit"}>Search</button>
                    </form>

                    : <h2>Please login</h2>  //If no token is available "Please Log In" will appear
                }

                {renderArtists()}

            </header>
        </div>

        
    );
}

export default Data;
