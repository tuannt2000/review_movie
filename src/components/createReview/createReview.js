import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Rating from '@mui/material/Rating';
import Button from "@material-ui/core/Button";
import { REACT_APP_BASE_URL } from "~/constants/config";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: 30,
    color: "white",
    margin: 15,
  },
  rating: {
    margin: "0px 0px 20px 20px",
  },
  reviewBox: {
    maxWidth: 500,
    fontSize: 20,
    fontWeight: "bolder",
    width: "250%",
    background: "rgb(30,30,30)",
    border: "none",
    padding: 15,
    color: "white",
    borderRadius: 30,
    letterSpacing: 3,
    wordSpacing: 7,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    "&:focus": {
      outline: "none",
    },
  },
  postButton: {
    background: "transparent",
    border: "2px solid white",
    color: "white",
    fontWeight: "bolder",
    borderRadius: 17,
  },
  disabledButton: {
    borderColor: "grey",
  },
}));

export default function CreateReview(props) {
  const classes = useStyles();
  const [review, setReview] = useState(
    window.localStorage.getItem("review") || ""
  );
  const [rating, setRating] = useState(5);
  var isLoggedIn = window.localStorage.getItem("token") ? true : false;

  function postReview(rating, review, type) {
    var id = window.location.pathname.substring(type === "movie" ? 7 : 8);
    fetch(REACT_APP_BASE_URL + type + "/" + id + "/reviews", {
      method: "POST",
      body: JSON.stringify({ rating, review }),
      headers: {
        "Content-Type": "application/json",
        token: window.localStorage.getItem("token"),
      },
    })
      .then((x) => x.text())
      .then(function () {
        window.location.reload();
        setReview("");
        setRating(5);
      })
      .catch(console.log);
  }

  return (
    <div>
      {window.localStorage.setItem("review", review)}
      <Typography className={classes.heading}>Post Review</Typography>
      <Rating
        name="rating-review"
        button="true"
        value={rating}
        onChange={(event, newValue) => {
            setRating(newValue);
            console.log(rating)
        }}
        className={classes.rating}
      />
      <TextareaAutosize
        disabled={!isLoggedIn}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        maxLength={300}
        className={classes.reviewBox}
        boxshadow={3}
        minRows={6}
        placeholder={
          isLoggedIn
            ? "Write Your Review Here ..."
            : "Please Log In to Write Your Review Here ..."
        }
      />
      <Button
        onClick={() => postReview(rating, review, props.type)}
        className={classes.postButton}
        classes={{ disabled: classes.disabledButton }}
        disabled={!review.length > 0}
      >
        Post Review
      </Button>
    </div>
  );
}
