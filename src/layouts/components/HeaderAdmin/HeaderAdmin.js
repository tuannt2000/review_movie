import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getInfoUser } from '../../../redux/user';
import { REACT_APP_BASE_URL } from '~/constants/config';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const pages1 = [
    {
        name: "User",
        href: "/admin/users",
    },
    {
        name: "Movie",
        href: "/admin/movies",
    },
    {
        name: "People",
        href: "/admin/people",
    },
];

const HeaderAdmin = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(REACT_APP_BASE_URL + "me", { headers: { token: window.localStorage.getItem("token") } })
            .then(resp => resp.json())
            .then(data => {
                dispatch(getInfoUser(data));
                if (!Object.keys(data).length || data.role !== 1) {
                    navigate("/");
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        {pages1.map((page, key) => (
                            <Link
                                key={key}
                                onClick={handleCloseNavMenu}
                                to={page.href}
                                className="nav__link"
                                style={{
                                    display: "block",
                                    margin: "5px",
                                    textDecoration: "none",
                                    fontSize: "16px",
                                    color: "white",
                                }}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderAdmin;
