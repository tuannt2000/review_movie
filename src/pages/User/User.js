// import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import UserReviewList from '~/components/userReviewList';

const useStyles = makeStyles((theme) => ({
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
    text: {
        color: "white",
        paddingTop: 10
    },
    btn: {
        margin: 25,
        fontWeight: "bolder"
    },
    avatar: {
        margin: 20,
        height: 200,
        width: 200
    }
}));

function toDate(date) {
    return (new Date(date)).toDateString();
}

export default function User() {
    // const [profile, setProfile] = useState(0);

    const profile = {
        "user_id": "100579896006844434691",
        "name": null,
        "join_date": "2021-05-15T00:00:00.000Z",
        "authenticity": "0.00",
        "email": "sk.ekanayake1@gmail.com",
        "pic": "https://lh3.googleusercontent.com/a-/AOh14GhoAGkmLftyH_j4HlxY0FuOLPUS-qiHUR777HBeOQ=s96-c"
    }

    const classes = useStyles();

    // useEffect(() => {
    //     var id = window.location.pathname.substring(6);
    //     fetch("https://popcritic.herokuapp.com/user/" + id).then(resp => resp.json()).then((data) => setProfile(data)).catch(console.log);
    // }, [])

    return (
        <div>
            <CircularProgress style={{ display: profile ? "none" : "block", margin: "20px auto" }} />
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <Avatar alt="Profile Avatar" src={profile ? profile.pic : ""} className={classes.avatar} />
                </Box>
                <Box p={1}>
                    <Typography variant="h5" gutterBottom className={classes.text}>Email:</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.text}>{profile ? profile.email : ""}</Typography>
                    <Typography variant="h5" gutterBottom className={classes.text}>Joined:</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.text} style={{ color: "lightgrey" }}>{profile ? toDate(profile.join_date) : ""}</Typography>
                </Box>
            </Box>
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <UserReviewList />
                </Box>
            </Box>
        </div>
    )
}