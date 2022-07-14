// import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    list: {
        background: '#121212',
        color: 'white',
        margin: 30,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 10
        }
    },
    heading: {
        fontSize: 30,
        color: "white",
        margin: 45
    },
    text: {
        fontSize: 20,
        margin: 15,
        color: "white"
    },
    poster: {
        maxWidth: 50
    },
    box: {
        fontSize: 20,
        margin: 15,
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    },
    link: {
        textDecoration: "none"
    }
}));

export default function UserReviewList(props) {
    const classes = useStyles();

    // const [reviews, setReviews] = useState(0);

    const reviews = {
        "movies": [
            {
                "movie_id": "44729",
                "title": "ワンピース the movie オマツリ男爵と秘密の島",
                "poster": "/8rgWeWMG48GakXCempvyBBhgyl3.jpg",
                "review_id": 1084,
                "review_text": "abc",
                "rating": "5.0"
            }
        ],
        "people": []
    }

    // useEffect(() => {
    //     var query = props.id || window.location.pathname.substring(6);
    //     fetch("https://popcritic.herokuapp.com/user/" + query + "/  ")
    //         .then(resp => resp.json())
    //         .then((data) => setReviews(data));
    // }, [props.id])

    return (
        <div>
            <CircularProgress style={{ display: reviews ? "none" : "block", margin: "20px auto" }} />
            <Typography className={classes.heading}>Movie Reviews:</Typography>
            <List component="nav" className={classes.list}>
                {reviews ? reviews.movies.map((x, index) => (
                    <ListItem key={index} button>
                        <Link href={"/movie/" + x.movie_id} className={classes.link}>
                            <img alt="" src={x.poster ? ("https://image.tmdb.org/t/p/w500" + x.poster) : "https://via.placeholder.com/400x600"} className={classes.poster} />
                        </Link>
                        <Link href={"/movie/" + x.movie_id} className={classes.link}>
                            <Typography className={classes.text}>{x.title}</Typography>
                        </Link>
                        <Link href={"/movie/" + x.movie_id} className={classes.link}>
                            <Typography className={classes.box}><Rating readOnly value={parseInt(x.rating)} /></Typography>
                        </Link>
                        <Link href={"/movie/" + x.movie_id} className={classes.link}>
                            <Typography className={classes.text}>{x.review_text}</Typography>
                        </Link>
                    </ListItem>
                )) : ""}
            </List>
            <Typography className={classes.heading}>People Reviews:</Typography>
            <List component="nav" className={classes.list}>
                {reviews ? reviews.people.map(x => (
                    <ListItem button>
                        <Link href={"/people/" + x.people_id} className={classes.link}>
                            <img alt="" src={x.image ? ("https://image.tmdb.org/t/p/w500" + x.image) : "https://via.placeholder.com/400x600"} className={classes.poster} />
                        </Link>
                        <Link href={"/people/" + x.people_id} className={classes.link}>
                            <Typography className={classes.text}>{x.name}</Typography>
                        </Link>
                        <Link href={"/people/" + x.people_id} className={classes.link}>
                            <Typography className={classes.box}><Rating readOnly value={parseInt(x.rating)} /></Typography>
                        </Link>
                        <Link href={"/people/" + x.people_id} className={classes.link}>
                            <Typography className={classes.text}>{x.review_text}</Typography>
                        </Link>
                    </ListItem>
                )) : ""}
            </List>
        </div>
    );
}
