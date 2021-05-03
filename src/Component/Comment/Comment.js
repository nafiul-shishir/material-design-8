import { Avatar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Comment = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
        
        const url2 = 'https://randomuser.me/api/?results=5';
        fetch(url2)
            .then(res => res.json())
            .then(data => setPhotos(data.results));
    }, [postId])
    
    let pictures = [];
    for (let i = 0; i < photos.length; i++) {
        const item = photos[i];
        const images = item.picture;
        const imgMedium = images.medium;
        pictures.push(imgMedium);
        console.log(imgMedium)
    }
    return (
        <>
            <h3>Comments({comments.length}):</h3>
            {
                comments.map((comment, idx) =>
                    <Typography style={{marginBottom:'30px',padding:'15px 0',border:'1px solid lightgrey',borderRadius:'5px'}}>
                        <Typography style={{ float: 'left',margin:'10px 20px 0 0' }}>
                            <Avatar src={pictures[idx]} alt="S" />
                        </Typography>
                        <Typography style={{ overflow: 'hidden'}}>
                            <h4 style={{margin:'5px 0'}}>{comment.name}</h4>
                            <p style={{margin:'5px 0'}}>Email: {comment.email}</p>
                            <p style={{margin:'5px 0'}}>{comment.body}</p>
                        </Typography>
                    </Typography>

                )
            }
        </>
    );
};

export default Comment;