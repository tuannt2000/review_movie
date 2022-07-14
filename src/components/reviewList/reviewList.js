// import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    heading: {
        fontSize: 30,
        color: "white",
        marginTop: 45,
        marginLeft: 15
    },
    list: {
        background: '#121212',
        color: 'white',
        margin: 30,
        [theme.breakpoints.down('xs')]: {
            marginLeft: 10
        }
    },
    text: {
        fontSize: 20,
        margin: 15,
        color: "white"
    },
    poster: {
        maxWidth: 50
    },
    avatar: {
        margin: 25
    },
    box: {
        fontSize: 20,
        margin: 15,
        [theme.breakpoints.down('xs')]: {
            display: "none"
        }
    }
}));

export default function ReviewList(props) {
    const classes = useStyles();

    // const [reviews, setReviews] = useState(0);

    const reviews = [
        {
            "user_id": "111041561359068830262",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GiH3BwdY87CN0ptGijjPUzS6NDhJ3QBxA_QsW7iUw=s96-c",
            "name": null,
            "review_id": 1070,
            "review_text": "One of the best Volleyball match in haikyuu. \nTsuki's character was by far the best in anime",
            "rating": "5.0"
        },
        {
            "user_id": "101127522603878500187",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GiJeoVysdWtqYwtQe5evOnmffGpHQiGqArKeuN7=s96-c",
            "name": null,
            "review_id": 1082,
            "review_text": ";lk,",
            "rating": "5.0"
        },
        {
            "user_id": "108892266231221672659",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GgLoWRnW_-06I2J0GVcqAOepqw_jBsi-s64RAC__Xw=s96-c",
            "name": null,
            "review_id": 1085,
            "review_text": "Karasuno wins!!!",
            "rating": "5.0"
        },
        {
            "user_id": "114021123809443234738",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14Gikkzm2E_NBzUS_KM7SLQ0k2bmyFHAcYpyEUCATvA=s96-c",
            "name": null,
            "review_id": 1099,
            "review_text": "zzz",
            "rating": "2.0"
        },
        {
            "user_id": "114021123809443234738",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14Gikkzm2E_NBzUS_KM7SLQ0k2bmyFHAcYpyEUCATvA=s96-c",
            "name": null,
            "review_id": 1100,
            "review_text": "zzz",
            "rating": "5.0"
        },
        {
            "user_id": "118273981116308843695",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1103,
            "review_text": "too many bugs\n",
            "rating": "2.0"
        },
        {
            "user_id": "118273981116308843695",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1104,
            "review_text": "too many bugs\n",
            "rating": "2.0"
        },
        {
            "user_id": "113770762488968001132",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GgLvF6Om5Z8IRMO6Wcza9Kd58SEA7LfTCzF1RAu=s96-c",
            "name": null,
            "review_id": 1110,
            "review_text": "testing",
            "rating": "2.0"
        },
        {
            "user_id": "111741165132091168390",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1112,
            "review_text": "Teest",
            "rating": "5.0"
        },
        {
            "user_id": "111741165132091168390",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1113,
            "review_text": "Teest to",
            "rating": "5.0"
        },
        {
            "user_id": "111741165132091168390",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1114,
            "review_text": "Teest to to min",
            "rating": "2.0"
        },
        {
            "user_id": "114520639786630687423",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GilpDCaCAY-jdhLkdNhehsmotSDIqBngxdONlxH=s96-c",
            "name": null,
            "review_id": 1115,
            "review_text": "xxx",
            "rating": "5.0"
        },
        {
            "user_id": "114520639786630687423",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GilpDCaCAY-jdhLkdNhehsmotSDIqBngxdONlxH=s96-c",
            "name": null,
            "review_id": 1116,
            "review_text": "xxx",
            "rating": "5.0"
        },
        {
            "user_id": "114520639786630687423",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GilpDCaCAY-jdhLkdNhehsmotSDIqBngxdONlxH=s96-c",
            "name": null,
            "review_id": 1117,
            "review_text": "ooooooooooooo",
            "rating": "5.0"
        },
        {
            "user_id": "105258683902390606878",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GgDK801jVaiPD9BfOStmMgmC_sGN_94ZHhITi0w=s96-c",
            "name": null,
            "review_id": 1131,
            "review_text": "Test review",
            "rating": "2.0"
        },
        {
            "user_id": "118403966623325255306",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14Giw7CcbgORBpB5VQjZPC7xUTa_FmAcGGS7zAA9g=s96-c",
            "name": null,
            "review_id": 1145,
            "review_text": "Vv",
            "rating": "5.0"
        },
        {
            "user_id": "111595893461060242720",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1159,
            "review_text": "ok",
            "rating": "3.0"
        },
        {
            "user_id": "114133990888421470586",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1173,
            "review_text": "cool",
            "rating": "5.0"
        },
        {
            "user_id": "117121443243331300419",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GgQHM7HQ4uXUhyGf8jVmbvF1huCx8aMtkdV4-H2=s96-c",
            "name": null,
            "review_id": 1177,
            "review_text": "test",
            "rating": "4.0"
        },
        {
            "user_id": "114895331218988692868",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1211,
            "review_text": "O",
            "rating": "2.0"
        },
        {
            "user_id": "114895331218988692868",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1212,
            "review_text": "Ooo",
            "rating": "5.0"
        },
        {
            "user_id": "111645495426514664898",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1215,
            "review_text": "11",
            "rating": "5.0"
        },
        {
            "user_id": "111645495426514664898",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1216,
            "review_text": "111",
            "rating": "5.0"
        },
        {
            "user_id": "111645495426514664898",
            "pic": "https://lh3.googleusercontent.com/a/default-user=s96-c",
            "name": null,
            "review_id": 1217,
            "review_text": "111",
            "rating": "5.0"
        },
        {
            "user_id": "113935223234167491103",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GjLN9URAtl5hWLaOb6-Wc8LtIehnyQC2wHwPj4eVg=s96-c",
            "name": null,
            "review_id": 1238,
            "review_text": "crazy",
            "rating": "5.0"
        },
        {
            "user_id": "104820957818155705061",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GhmXmsILx7ju8K4MEuNavDoqxiTnLsSdk9_2WuONA=s96-c",
            "name": null,
            "review_id": 1249,
            "review_text": "Great",
            "rating": "5.0"
        },
        {
            "user_id": "105727721870292519970",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GgqBhS9E0WkQNIEotIwZJzoqdPgCjYkl5-xEG-x=s96-c",
            "name": null,
            "review_id": 1293,
            "review_text": "123123",
            "rating": "5.0"
        },
        {
            "user_id": "105727721870292519970",
            "pic": "https://lh3.googleusercontent.com/a-/AOh14GgqBhS9E0WkQNIEotIwZJzoqdPgCjYkl5-xEG-x=s96-c",
            "name": null,
            "review_id": 1294,
            "review_text": "bad",
            "rating": "2.0"
        }
    ]

    // useEffect(() => {
    //     const id = window.location.pathname.substring(props.type === "movie" ? 7 : 8);
    //     fetch("https://popcritic.herokuapp.com/" + props.type + "/" + id + "/reviews")
    //         .then(resp => resp.json())
    //         .then((data) => setReviews(data));
    // }, [props.type])

    return (
        <div>
            <Typography className={classes.heading}>Reviews</Typography>
            <CircularProgress style={{ display: reviews ? "none" : "block", margin: "20px auto" }} />
            <List component="nav" className={classes.list}>
                {reviews ? reviews.map((x, index) => (
                    <ListItem key={index} button>
                        <Link href={"/user/" + x.user_id}><Avatar alt="PopCritic" src={x.pic} className={classes.avatar} /></Link>
                        <Typography className={classes.text}>{x.review_text}</Typography>
                        <Typography className={classes.text}><Rating readOnly value={parseInt(x.rating)} /></Typography>
                    </ListItem>
                )) : ""}
            </List>
        </div>
    );
}
