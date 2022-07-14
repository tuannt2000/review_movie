// import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';

import CreateReview from '~/components/createReview';
import ReviewList from '~/components/reviewList';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "white",
        paddingTop: 10
    },
    prof: {
        color: "lightgrey"
    },
    plot: {
        color: "white",
        paddingTop: 10
    },
    button: {
        margin: 10,
        fontWeight: "bolder"
    },
    poster: {
        maxWidth: 250,
        margin: 20,
        display: "inline-block",
        [theme.breakpoints.down('xs')]: {
            maxWidth: "80%"
        }
    },
    box: {
        [theme.breakpoints.down('xs')]: {
            flexWrap: "wrap"
        }
    },
    list: {
        display: 'inline-block'
    },
    movies: {
        maxWidth: 150,
        margin: 15,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 60
        }
    }
}));

export default function Movie() {
    // const [people, setPeople] = useState(0);

    const classes = useStyles();

    const people = {
        "people_id": "65510",
        "name": "Mayumi Tanaka",
        "image": "/dvwL1Uqqm8eyVLbTqCyyiSnpG83.jpg",
        "profession": "Acting",
        "movies": [
            {
                "movie_id": "568012",
                "title": "ワンピーススタンピード",
                "plot": "One Piece: Stampede is a stand-alone film that celebrates the anime's 20th Anniversary and takes place outside the canon of the \"One Piece\" TV series. Monkey D. Luffy and his Straw Hat pirate crew are invited to a massive Pirate Festival that brings many of the most iconic characters from throughout the franchise to participate in competition with the Straw Hats to find Roger's treasure. It also pits the Straw Hats against a new enemy named Bullet, a former member of Roger's crew.",
                "poster": "/4E2lyUGLEr3yH4q6kJxPkQUhX7n.jpg",
                "release_date": "2019-08-09T00:00:00.000Z",
                "role": "Acting"
            },
            {
                "movie_id": "19576",
                "title": "ワンピース",
                "plot": "There once was a pirate known as the Great Gold Pirate Woonan, who obtained almost one-third of the world's gold. Over the course of a few years, the pirate's existence faded, and a legend grew that he disappeared with his gold to a remote island, an island pirates continue to search for. Aboard the Going Merry, Luffy and his crew, starved and reckless, are robbed of their treasure. In an attempt to get it back, they wreck the getaway ship, guided by a young boy named Tobio, who's a captured part of El Drago's pirate crew. El Drago's love for gold has driven him to look for Woonan's island, and thanks to Woonan's treasure map, he finds it. During this time, Luffy's crew have been split up, and despite their own circumstances, they must find a way to stop El Drago from obtaining Woonan's gold.",
                "poster": "/6QOrTYafoqzXPWLnR2K8129jTHH.jpg",
                "release_date": "2000-03-04T00:00:00.000Z",
                "role": "Acting"
            },
            {
                "movie_id": "44729",
                "title": "ワンピース the movie オマツリ男爵と秘密の島",
                "plot": "The Straw Hats visit a recreational island, run by Baron Omatsuri, the former captain of a pirate crew, who were all killed years ago. Being the only survivor, he then started hating all close-knit groups of pirates and wishing to separate them. He and his henchmen seed distrust among the Straw Hats and capture them one by one, leaving only Luffy to free his crew from the Baron's hold.",
                "poster": "/8rgWeWMG48GakXCempvyBBhgyl3.jpg",
                "release_date": "2005-03-05T00:00:00.000Z",
                "role": "Acting"
            },
            {
                "movie_id": "39104",
                "title": "ドラゴンボールＺ 極限バトル！三大超サイヤ人",
                "plot": "Dr. Gero's Androids #13, #14, and #15 are awakened by the laboratory computers and immediately head to the mall where Goku is shopping. After Goku, Trunks, and Vegeta defeat #14 and #15, #13 absorbs their inner computers and becomes a super being greater than the original three separately were. Now it is up to Goku to stop him.",
                "poster": "/uVJqC187rKxQ1sJsWlKjNfAzeTk.jpg",
                "release_date": "1992-07-11T00:00:00.000Z",
                "role": "Acting"
            }
        ]
    }

    // useEffect(() => {
    //     const query = window.location.pathname.substring(8);
    //     fetch("https://popcritic.herokuapp.com/people/" + query)
    //         .then(resp => resp.json())
    //         .then((data) => setPeople(data))
    //         .catch(() => { window.location.href = "/" });
    // }, [])

    return (
        <div>
            <CircularProgress style={{ display: people ? "none" : "block", margin: "20px auto" }} />
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <img alt="" className={classes.poster} src={people ? ("https://image.tmdb.org/t/p/w500" + people.image) : "https://via.placeholder.com/400x600"} />
                </Box>
                <Box p={1}>
                    <Typography variant="h3" gutterBottom className={classes.title}>{people ? people.name : ""}</Typography>
                    <Typography variant="h6" gutterBottom className={classes.prof}>{people ? people.profession : ""}</Typography>
                </Box>
            </Box>
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <Typography variant="h4" gutterBottom className={classes.title}>Movies:</Typography>
                    <List className={classes.list}>
                        {people ? people.movies.map((m, index) => (<Link key={index} href={"/movie/" + m.movie_id}><img alt="" className={classes.movies} src={"https://image.tmdb.org/t/p/w500" + m.poster} /></Link>)) : ""}
                    </List>
                </Box>
            </Box>
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <CreateReview type="people" />
                    <ReviewList type="people" />
                </Box>
            </Box>
        </div>
    )
}