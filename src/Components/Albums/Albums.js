import React, {useEffect, useState} from 'react';
import {albumService} from "../../services/album.service";
import Album from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getAll().then(value => value.data).then(value => setAlbums(value))
    }, [])
    return (
        <div>
            <h3>Review albums</h3>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export default Albums;