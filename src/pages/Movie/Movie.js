import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import axios from "axios";
import { REACT_APP_BASE_URL } from "~/constants/config";
import CreateReview from "~/components/createReview";
import ReviewList from "~/components/reviewList";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "white",
    paddingTop: 10,
  },
  date: {
    color: "lightgrey",
  },
  plot: {
    color: "white",
    paddingTop: 10,
  },
  button: {
    margin: 10,
    fontWeight: "bolder",
  },
  poster: {
    maxWidth: 250,
    margin: 20,
    display: "inline-block",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
    },
  },
  box: {
    [theme.breakpoints.down("xs")]: {
      flexWrap: "wrap",
    },
  },
  link: {
    color: "white",
    padding: 10,
  },
  list: {
    display: "inline-block",
  },
  people: {
    maxWidth: 150,
    margin: 15,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 60,
    },
  },
}));

function toDate(date) {
  return new Date(date).toDateString();
}

export default function Movie() {
  const [movie, setMovie] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const query = window.location.pathname.substring(7);
    axios(REACT_APP_BASE_URL + "movie/" + query)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <CircularProgress
        style={{ display: movie ? "none" : "block", margin: "20px auto" }}
      />
      <Box
        display="flex"
        className={classes.box}
        justifyContent="flex-start"
        m={1}
        p={1}
      >
        <Box p={1}>
          <img
            alt=""
            className={classes.poster}
            src={
              movie
                ? "https://image.tmdb.org/t/p/w500" + movie.poster
                : "https://via.placeholder.com/400x600"
            }
          />
        </Box>
        <Box p={1}>
          <Typography variant="h3" gutterBottom className={classes.title}>
            {movie ? movie.title : ""}
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.date}>
            {movie ? toDate(movie.release_date) : ""}
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.plot}>
            {movie ? movie.plot : ""}
          </Typography>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Cast:
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            {movie &&
              movie.cast.map((x, index) => (
                <Link
                  key={index}
                  href={"/people/" + x.people_id}
                  className={classes.link}
                >
                  {x.name}
                </Link>
              ))}
          </Typography>
          <Button
            disabled={!(movie && movie.imdb_id)}
            variant="contained"
            href={"https://imdb.com/title/" + movie ? movie.imdb_id : ""}
            className={classes.button}
          >
            IMDB
          </Button>
        </Box>
      </Box>
      <Box
        display="flex"
        className={classes.box}
        justifyContent="flex-start"
        m={1}
        p={1}
      >
        <Box p={1}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            Cast:
          </Typography>
          <List className={classes.list}>
            {movie &&
              movie.cast.map((p, index) => {
                return p.image !== null ? (
                  <Link key={index} href={"/people/" + p.people_id}>
                    <img
                      alt=""
                      className={classes.people}
                      src={"https://image.tmdb.org/t/p/w500" + p.image}
                    />
                  </Link>
                ) : (
                  ""
                );
              })}
          </List>
        </Box>
      </Box>
      <Box
        display="flex"
        className={classes.box}
        justifyContent="flex-start"
        m={1}
        p={1}
      >
        <Box p={1}>
          <CreateReview type="movie" />
          <ReviewList type="movie" />
        </Box>
      </Box>
    </div>
  );
}
