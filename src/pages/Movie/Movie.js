import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';

import CreateReview from '~/components/createReview';
import ReviewList from '~/components/reviewList';

const useStyles = makeStyles((theme) => ({
    title: {
        color: "white",
        paddingTop: 10
    },
    date: {
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
    link: {
        color: "white",
        padding: 10
    },
    list: {
        display: 'inline-block'
    },
    people: {
        maxWidth: 150,
        margin: 15,
        [theme.breakpoints.down('xs')]: {
            maxWidth: 60
        }
    }
}));

function toDate(date) {
    return (new Date(date)).toDateString();
}

export default function Movie() {
    const [movie, setMovie] = useState(0);
    const classes = useStyles();

    console.log(movie)

    // const movie = {
    //     "movie_id": "461763",
    //     "title": "ハイキュー!! コンセプトの戦い",
    //     "plot": "Recap film focusing primarily on the match against shiratorizawa from the third season.",
    //     "poster": "/xihNhrJnGa04zn9pUr3ZxA8B4ZU.jpg",
    //     "release_date": "2017-09-29T00:00:00.000Z",
    //     "imdb_id": "",
    //     "cast": [
    //         {
    //             "people_id": "1325230",
    //             "name": "Ayumu Murase",
    //             "image": "/3aGM6KpcCIEKOXP9510tzaKc8uw.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "1324666",
    //             "name": "Kaito Ishikawa",
    //             "image": "/kLVhJYH73ust9ComUxGR63DOvxu.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "1253008",
    //             "name": "Yoshimasa Hosoya",
    //             "image": "/r90gExomlgr7IEt3vZ1Y0xYkXHT.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "1613352",
    //             "name": "Toshiki Masuda",
    //             "image": "/oMAk5Pu3aazmwFwiVOgyU7iW5ut.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "1245094",
    //             "name": "Nobuhiko Okamoto",
    //             "image": "/qyZpSYva9O9JQIZ0nVmXTf90FlL.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "224413",
    //             "name": "Satoshi Hino",
    //             "image": "/8ZJIiwIVF2zDyyFr7oXewj0eEuu.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "203473",
    //             "name": "Kaori Nazuka",
    //             "image": "/zTydHbhNjpwoCydvrJAd3d64C3g.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "19588",
    //             "name": "Miyu Irino",
    //             "image": "/dcZ4IJX8CBcJzxy8hhKFXv59LDE.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "1142780",
    //             "name": "Subaru Kimura",
    //             "image": "/nlqkMKrvuBL8WJIEAMeCyrpz4Hb.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         },
    //         {
    //             "people_id": "1254052",
    //             "name": "Koki Uchiyama",
    //             "image": "/sllSm3iZZWVLTBrDZQRtWrZUfEj.jpg",
    //             "profession": "Acting",
    //             "role": "Acting"
    //         }
    //     ]
    // }
    useEffect(() => {
        const query = window.location.pathname.substring(7);
        fetch("https://popcritic.herokuapp.com/movie/" + query)
            .then(resp => resp.json())
            .then((data) => {
                setMovie(data)
                console.log(data)
            }
                )
            .catch((e) => { console.log(e) });
    }, [])

    return (
        <div>
            <CircularProgress style={{ display: movie ? "none" : "block", margin: "20px auto" }} />
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <img alt="" className={classes.poster} src={movie ? ("https://image.tmdb.org/t/p/w500" + movie.poster) : "https://via.placeholder.com/400x600"} />
                </Box>
                <Box p={1}>
                    <Typography variant="h3" gutterBottom className={classes.title}>{movie ? movie.title : ""}</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.date}>{movie ? toDate(movie.release_date) : ""}</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.plot}>{movie ? movie.plot : ""}</Typography>
                    <Typography variant="h5" gutterBottom className={classes.title}>Cast:</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.title}>{movie && movie.cast.map((x, index) => <Link key={index} href={"/people/" + x.people_id} className={classes.link}>{x.name}</Link>)}</Typography>
                    <Button disabled={!(movie && movie.imdb_id)} variant="contained" href={"https://imdb.com/title/" + movie ? movie.imdb_id : ""} className={classes.button}>IMDB</Button>
                </Box>
            </Box>
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <Typography variant="h4" gutterBottom className={classes.title}>Cast:</Typography>
                    <List className={classes.list}>
                        {movie && movie.cast.map((p, index) => (<Link key={index} href={"/people/" + p.people_id}><img alt="" className={classes.people} src={"https://image.tmdb.org/t/p/w500" + p.image} /></Link>))}
                    </List>
                </Box>
            </Box>
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <CreateReview type="movie" />
                    <ReviewList type="movie" />
                </Box>
            </Box>
        </div>
    )
}