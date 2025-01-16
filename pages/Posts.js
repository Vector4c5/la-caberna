
import axios from "axios";
import { useState, useEffect } from "react";

export default function Posts(){
    const [posts, setPost]=useState()

    useEffect(async()=> {
        const response= await  axios.get('dnd5eapi.co/api')
        console.log(response)
        setPost(response)
    },[]
)


    return(
        <div>
            <h1>
                posts
            </h1>
            {posts && posts?.length >0 && posts?.map}
            
            <>
            <h2>{posts.ability-scores}</h2>
            </>


        </div>
    )
}