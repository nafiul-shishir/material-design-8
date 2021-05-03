import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });



const PostDetail = () => {
    const { postId} = useParams()
    const [postDetail, setPostDetail] = useState({});
    const { title, body } = postDetail;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [postId]);
    const classes = useStyles();

    return (
        <React.Fragment>
            
            
            <Container fixed>
            <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {postId}
        </Typography>
        
        <Typography className={classes.pos} color="textSecondary">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
          <br />
          {'"a benevolent smile"'}
        </Typography>
        <Typography>
            <Comment postId={postId}></Comment>
        </Typography>
      </CardContent>
    </Card>
            </Container>
        </React.Fragment>
    );
};

export default PostDetail;