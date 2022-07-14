// import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// const tmdb_api_key = ""; //Your TMDB API KEY

const useStyles = makeStyles((theme) => ({
    list: {
        background: '#121212',
        color: 'white',
        margin: 30
    },
    heading: {
        fontSize: 30,
        color: "white",
        margin: 15
    },
    poster: {
        maxWidth: 50
    },
    date: {
        fontSize: 16,
        margin: 5,
        color: "lightgrey"
    },
    title: {
        fontSize: 20,
        margin: 15
    }
}));

function addMovie(id) {
    fetch("https://popcritic.herokuapp.com/add/" + id, { method: "POST", headers: { token: window.localStorage.getItem("token") } }).then(x => x.text()).then(function () {
        window.location.href = "/movie/" + id;
    }).catch(console.log);
}

export default function Search() {
    const classes = useStyles();

    const movies = [
        {
            "adult": false,
            "backdrop_path": "/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg",
            "genre_ids": [
                28,
                53,
                80
            ],
            "id": 864116,
            "original_language": "en",
            "original_title": "A Day to Die",
            "overview": "A disgraced parole officer is indebted to a local gang leader and forced to pull off a series of dangerous drug heists within twelve hours in order to pay the $2 million dollars he owes, rescue his kidnapped pregnant wife, and settle a score with the city's corrupt police chief, who is working with the gang leader and double-crossed him years ago.",
            "popularity": 629.836,
            "poster_path": "/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg",
            "release_date": "2022-03-04",
            "title": "A Day to Die",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 105
        },
        {
            "adult": false,
            "backdrop_path": "/2zhKBlsQbYfqe1H2pz8O0kk3Uk2.jpg",
            "genre_ids": [
                35,
                27
            ],
            "id": 893338,
            "original_language": "en",
            "original_title": "Gatlopp: Hell of a Game",
            "overview": "Four friends get together for a nostalgic evening of fun and games after a decade of absence, which takes a dark turn.",
            "popularity": 477.088,
            "poster_path": "/tc5Y4HDyb0I0z3MvKkLuPb1rVmj.jpg",
            "release_date": "2022-06-27",
            "title": "Gatlopp: Hell of a Game",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 9
        },
        {
            "adult": false,
            "backdrop_path": "/6fRVz7ZIZIGFEOq4THY2pdBBhfS.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 934761,
            "original_language": "en",
            "original_title": "A Perfect Pairing",
            "overview": "To land a major client, an LA wine exec travels to an Australian sheep station, where she signs on as a ranch hand and hits it off with a rugged local.",
            "popularity": 184.194,
            "poster_path": "/h65lLhYEfRGOWVZzwX9n7vYOixf.jpg",
            "release_date": "2022-05-19",
            "title": "A Perfect Pairing",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 232
        },
        {
            "adult": false,
            "backdrop_path": "/u2HrA8BMvvHURz5mVOIe9EM1zGx.jpg",
            "genre_ids": [
                12,
                16,
                35,
                10751
            ],
            "id": 9487,
            "original_language": "en",
            "original_title": "A Bug's Life",
            "overview": "On behalf of \"oppressed bugs everywhere,\" an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.",
            "popularity": 88.878,
            "poster_path": "/hFamOus53922agTlKxhcL7ngJ9h.jpg",
            "release_date": "1998-11-25",
            "title": "A Bug's Life",
            "video": false,
            "vote_average": 7,
            "vote_count": 7750
        },
        {
            "adult": false,
            "backdrop_path": "/88J6waYVTta8Qz3iX3qUeWNA5d5.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 447362,
            "original_language": "en",
            "original_title": "Life in a Year",
            "overview": "A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.",
            "popularity": 218.493,
            "poster_path": "/bP7u19opmHXYeTCUwGjlLldmUMc.jpg",
            "release_date": "2020-11-27",
            "title": "Life in a Year",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 1078
        },
        {
            "adult": false,
            "backdrop_path": "/ytTQoYkdpsgtfDWrNFCei8Mfbxu.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                14,
                35
            ],
            "id": 529203,
            "original_language": "en",
            "original_title": "The Croods: A New Age",
            "overview": "Searching for a safer habitat, the prehistoric Crood family discovers an idyllic, walled-in paradise that meets all of its needs. Unfortunately, they must also learn to live with the Bettermans -- a family that's a couple of steps above the Croods on the evolutionary ladder. As tensions between the new neighbors start to rise, a new threat soon propels both clans on an epic adventure that forces them to embrace their differences, draw strength from one another, and survive together.",
            "popularity": 216.249,
            "poster_path": "/tbVZ3Sq88dZaCANlUcewQuHQOaE.jpg",
            "release_date": "2020-11-25",
            "title": "The Croods: A New Age",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 3019
        },
        {
            "adult": false,
            "backdrop_path": "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
            "genre_ids": [
                10751,
                16,
                35,
                878
            ],
            "id": 379686,
            "original_language": "en",
            "original_title": "Space Jam: A New Legacy",
            "overview": "When LeBron and his young son Dom are trapped in a digital space by a rogue A.I., LeBron must get them home safe by leading Bugs, Lola Bunny and the whole gang of notoriously undisciplined Looney Tunes to victory over the A.I.'s digitized champions on the court. It's Tunes versus Goons in the highest-stakes challenge of his life.",
            "popularity": 207.635,
            "poster_path": "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
            "release_date": "2021-07-08",
            "title": "Space Jam: A New Legacy",
            "video": false,
            "vote_average": 7,
            "vote_count": 3200
        },
        {
            "adult": false,
            "backdrop_path": "/c2cb0lLvbzvHlSUo35W8CfP0kYO.jpg",
            "genre_ids": [
                53,
                18
            ],
            "id": 714968,
            "original_language": "de",
            "original_title": "Plan A",
            "overview": "Germany 1945, Max, a Jewish Holocaust survivor, meets a radical group of Jewish resistance fighters, who, like him, lost all hope for their future after they were robbed of their existence and their entire families were killed by the Nazis. They dream of retaliation on an epic scale for the Jewish people. An eye for an eye, a tooth for a tooth. Max starts identifying with the group's monstrous plans...",
            "popularity": 59.967,
            "poster_path": "/hPk01ALAAuQoXC8XL2dSqqbsQ4d.jpg",
            "release_date": "2021-08-16",
            "title": "Plan A",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 55
        },
        {
            "adult": false,
            "backdrop_path": "/4rsomWxlqnHt3muGYK06auhOib6.jpg",
            "genre_ids": [
                10749,
                18
            ],
            "id": 818647,
            "original_language": "es",
            "original_title": "A través de mi ventana",
            "overview": "Raquel's longtime crush on her next-door neighbor turns into something more when he starts developing feelings for her, despite his family's objections.",
            "popularity": 249.698,
            "poster_path": "/6gg7fvKc1ZxP9yCczweSxIGYp4S.jpg",
            "release_date": "2022-02-04",
            "title": "Through My Window",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 2083
        },
        {
            "adult": false,
            "backdrop_path": "/69hvi7xf6VIRRJduSYl1yZIzJn8.jpg",
            "genre_ids": [
                18,
                14
            ],
            "id": 258230,
            "original_language": "en",
            "original_title": "A Monster Calls",
            "overview": "A boy imagines a monster that helps him deal with his difficult life and see the world in a different way.",
            "popularity": 94.256,
            "poster_path": "/vNzWJwVqjszWwXrA7ZfsrJmhgV9.jpg",
            "release_date": "2016-10-07",
            "title": "A Monster Calls",
            "video": false,
            "vote_average": 7.2,
            "vote_count": 2811
        },
        {
            "adult": false,
            "backdrop_path": "/edXuLjxjYu1SkyMHd55hRasME8b.jpg",
            "genre_ids": [
                27
            ],
            "id": 636879,
            "original_language": "en",
            "original_title": "A Nun's Curse",
            "overview": "A group of travelers are forced to seek shelter inside an abandoned jail where a notorious nun named Sister Monday had once been assigned and was suspected of murdering prisoners.",
            "popularity": 62.953,
            "poster_path": "/eutNRwSguV0NCx7BNAXOibWzjP6.jpg",
            "release_date": "2020-05-12",
            "title": "A Nun's Curse",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 85
        },
        {
            "adult": false,
            "backdrop_path": "/gftDU03xnFig2yrNYrNFPCBMQZC.jpg",
            "genre_ids": [
                18,
                36,
                10749
            ],
            "id": 28005,
            "original_language": "en",
            "original_title": "Kama Sutra: A Tale of Love",
            "overview": "Tara and Maya are two inseparable friends in India. Their tastes, habits, and hobbies are the same. Years later, the two have matured, but have maintained their friendship. Tara gets married to the local prince, Raj Singh, who soon succeeds the throne as the sole heir. After the marriage, Raj gets bored of Tara and starts seeking another female to satisfy his sexual needs. He notices Maya and is instantly attracted to her. He has her included as one of his courtesans, and is intimate with her. Watch what happens when Tara finds out and the extent she will go to keep her marriage intact.",
            "popularity": 216.632,
            "poster_path": "/dwbLcEPIjVISly6DW8GLX8vsZlE.jpg",
            "release_date": "1996-09-11",
            "title": "Kama Sutra: A Tale of Love",
            "video": false,
            "vote_average": 5.6,
            "vote_count": 124
        },
        {
            "adult": false,
            "backdrop_path": "/akKBMXHEesqfuoYFt7LaRptFAO0.jpg",
            "genre_ids": [
                35,
                27
            ],
            "id": 139038,
            "original_language": "en",
            "original_title": "A Haunted House",
            "overview": "Malcolm and Kisha move into their dream home, but soon learn a demon also resides there. When Kisha becomes possessed, Malcolm - determined to keep his sex life on track - turns to a priest, a psychic, and a team of ghost-busters for help in this spoof of all the \"found-footage/documentary style\" films released in recent years.",
            "popularity": 81.42,
            "poster_path": "/skQt53YE2iyOftXj5afJkHmYxLW.jpg",
            "release_date": "2013-01-11",
            "title": "A Haunted House",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 1446
        },
        {
            "adult": false,
            "backdrop_path": "/am782sUaTOGcEPEdUUjybwUZP1f.jpg",
            "genre_ids": [
                878,
                53,
                27
            ],
            "id": 520763,
            "original_language": "en",
            "original_title": "A Quiet Place Part II",
            "overview": "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.",
            "popularity": 183.553,
            "poster_path": "/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg",
            "release_date": "2021-05-21",
            "title": "A Quiet Place Part II",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 4491
        },
        {
            "adult": false,
            "backdrop_path": "/nBHKT3pm5DmidZd5VS4bD5Hc2S3.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 820446,
            "original_language": "en",
            "original_title": "Downton Abbey: A New Era",
            "overview": "The Crawley family goes on a grand journey to the south of France to uncover the mystery of the dowager countess's newly inherited villa.",
            "popularity": 123.596,
            "poster_path": "/r5n4CLoIjUcnT3shWDi6MHdJ25a.jpg",
            "release_date": "2022-04-27",
            "title": "Downton Abbey: A New Era",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 149
        },
        {
            "adult": false,
            "backdrop_path": "/x78cvxbmpBNcHON7x3Iv8vih5Sj.jpg",
            "genre_ids": [
                16,
                35,
                10751
            ],
            "id": 774741,
            "original_language": "en",
            "original_title": "Diary of a Wimpy Kid",
            "overview": "Greg Heffley is a scrawny but ambitious kid with an active imagination and big plans to be rich and famous – he just has to survive middle school first.",
            "popularity": 183.274,
            "poster_path": "/obg6lWuNaZkoSlwrVG4VVk4SmT.jpg",
            "release_date": "2021-12-03",
            "title": "Diary of a Wimpy Kid",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 241
        },
        {
            "adult": false,
            "backdrop_path": "/iEIcBVnttD9KOnpxtN1adVqKQkv.jpg",
            "genre_ids": [
                16,
                10751,
                35,
                14
            ],
            "id": 741074,
            "original_language": "en",
            "original_title": "Once Upon a Snowman",
            "overview": "The previously untold origins of Olaf, the innocent and insightful, summer-loving snowman are revealed as we follow Olaf’s first steps as he comes to life and searches for his identity in the snowy mountains outside Arendelle.",
            "popularity": 112.053,
            "poster_path": "/hddzYJtfYYeMDOQVcH58n8m1W3A.jpg",
            "release_date": "2020-10-23",
            "title": "Once Upon a Snowman",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 434
        },
        {
            "adult": false,
            "backdrop_path": "/roYyPiQDQKmIKUEhO912693tSja.jpg",
            "genre_ids": [
                27,
                18,
                878
            ],
            "id": 447332,
            "original_language": "en",
            "original_title": "A Quiet Place",
            "overview": "A family is forced to live in silence while hiding from creatures that hunt by sound.",
            "popularity": 71.549,
            "poster_path": "/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
            "release_date": "2018-04-03",
            "title": "A Quiet Place",
            "video": false,
            "vote_average": 7.4,
            "vote_count": 11767
        },
        {
            "adult": false,
            "backdrop_path": "/i109vzdCkG7W3H9FxHmfpZjgh61.jpg",
            "genre_ids": [
                10751,
                12,
                18
            ],
            "id": 522518,
            "original_language": "en",
            "original_title": "A Dog's Journey",
            "overview": "A dog finds the meaning of his own existence through the lives of the humans he meets.",
            "popularity": 43.995,
            "poster_path": "/wquJChp0NpoqthYdE3YjXNNxvVC.jpg",
            "release_date": "2019-05-03",
            "title": "A Dog's Journey",
            "video": false,
            "vote_average": 8.1,
            "vote_count": 1128
        },
        {
            "adult": false,
            "backdrop_path": "/g3qg4cUjlBxLxdAob6C2of04t8B.jpg",
            "genre_ids": [
                16,
                10751
            ],
            "id": 851907,
            "original_language": "en",
            "original_title": "Furry Friends Forever: Elmo Gets a Puppy",
            "overview": "An upcoming animated Sesame Street special premiering on HBO Max on August 5, 2021. The special serves as an introduction to Tango, Elmo's new pet puppy.",
            "popularity": 219.35,
            "poster_path": "/eP8A6bJxbaP5wsYgCXPafMZKFwB.jpg",
            "release_date": "2021-08-05",
            "title": "Furry Friends Forever: Elmo Gets a Puppy",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 3
        }
    ]

    const query = 'a';

    // const [movies, setMovies] = useState(0);

    // const [query, setQuery] = useState(0);

    // useEffect(() => {
    //     var query = window.location.pathname.substring(8);
    //     setQuery(decodeURIComponent(query));
    //     fetch("https://api.themoviedb.org/3/search/movie?api_key=" + tmdb_api_key + "&query=" + query)
    //         .then(resp => resp.json())
    //         .then((data) => setMovies(data.results));
    // }, [])

    return (
        <div>
            <Typography className={classes.heading}>{"Search Results For " + query}</Typography>
            <CircularProgress style={{ display: movies ? "none" : "block", margin: "20px auto" }} />
            <List component="nav" className={classes.list} aria-label="mailbox folders">
                {movies ? movies.map(x => (
                    <ListItem button onClick={() => addMovie(x.id)} key={x.id}>
                        <img alt="" src={x.poster_path ? ("https://image.tmdb.org/t/p/w500" + x.poster_path) : "https://via.placeholder.com/400x600"} className={classes.poster} />
                        <Typography className={classes.title}>{x.original_title}</Typography>
                        <Typography className={classes.date}>({x.release_date ? x.release_date.split("-")[0] : ""})</Typography>
                    </ListItem>
                )) : ""}
            </List>
        </div>
    );
}
