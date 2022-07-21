import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import UserReviewList from '~/components/userReviewList';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

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

export default function Me() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    const classes = useStyles();

    function logOut() {
        window.localStorage.clear();
        window.location.href = "/";
    }

    const redirectAdmin = () => {
        navigate("/admin/users");
    }

    return (
        <div>
            <CircularProgress style={{ display: Object.keys(user.current_user).length > 0 ? "none" : "block", margin: "20px auto" }} />
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <Avatar alt="Profile Avatar" src={Object.keys(user.current_user).length ? user.current_user.pic : ""} className={classes.avatar} />
                </Box>
                <Box p={1}>
                    <Typography variant="h5" gutterBottom className={classes.text}>Email:</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.text}>{Object.keys(user.current_user).length ? user.current_user.email : ""}</Typography>
                    <Typography variant="h5" gutterBottom className={classes.text}>Joined:</Typography>
                    <Typography variant="subtitle1" gutterBottom className={classes.text} style={{ color: "lightgrey" }}>{Object.keys(user.current_user).length ? toDate(user.current_user.join_date) : ""}</Typography>
                </Box>
            </Box>
            {
                user.current_user.role && (
                    <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                        <Box p={1}>
                            <Button variant="contained" onClick={redirectAdmin} className={classes.btn}>Admin</Button>
                        </Box>
                    </Box>
                )
            }
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    <Button variant="contained" onClick={logOut} className={classes.btn}>Log Out</Button>
                </Box>
            </Box>
            <Box display="flex" className={classes.box} justifyContent="flex-start" m={1} p={1}>
                <Box p={1}>
                    {
                        user.current_user.pic ? <UserReviewList id={user.current_user.user_id} /> : ""
                    }
                </Box>
            </Box>
        </div>
    )
}