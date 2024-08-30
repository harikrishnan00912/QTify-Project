import React , {useEffect, useState} from "react";
import styles from "./Section.module.css";
import axios from 'axios';
import Card from '../Card/Card'


   const Section = () => {
    
    const [albums,setAlbums] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleCollaspe = () => {
        setIsCollapsed(!isCollapsed)
    }

    useEffect(()=>{
      axios.get("https://qtify-backend-labs.crio.do/albums/top")
      .then(response =>{
        setAlbums(response.data)
        console.log("Albums", response)
      })
      .catch(error =>{
        console.log("Error fetching top albums:", error)
      })
    },[])

    return(

     <div className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.title}>Top Albums</h2>
            <button className={styles.collaspeButton} onClick={handleCollaspe}>
              {isCollapsed ? 'Expand' : 'Collaspe'}
            </button>
            {!isCollapsed && (
                <div className={styles.grid}>
                  {albums.map((album)=>{
                    return (
                    <Card 
                        key = {album.id}
                        albumImage = {album.image}
                        albumName={album.slug} 
                        follows={album.follows}
                    />
                    )
                  })}
                </div>
            )}
        </div>
     </div>
    )
}

export default Section