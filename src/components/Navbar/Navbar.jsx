import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    zIndex: 1000,
  },
  title: {
    marginRight: 50,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "contents",
  },
  rightToolbar: {
    display: "flex",
    marginLeft: "auto",
  },
  navbarElements: {
    fontWeight: "bold",
    margin: "0 0.5rem",
  },
  list: {
    width: 300,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [navDrawer, setNavDrawer] = React.useState({
    left: false,
  });

  const overrideTheme = createTheme({
    overrides: {
      // Style sheet name ⚛️
      MuiDrawer: {
        // Name of the rule
        paper: {
          // Some CSS
          backgroundColor: "#FBF6F6",
        },
      },
      MuiDivider: {
        root: {
          backgroundColor: "black",
        },
      },
      MuiIconButton: {
        root: {
          backgroundColor: "#443454",
          borderRadius: 0,
        },
        label: {
          color: "white",
        },
      },
    },
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setNavDrawer({ ...navDrawer, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Home",
          "About",
          "Service & Package",
          "Gallery",
          "FAQ",
          "Contact",
        ].map((text, index) => (
          <>
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );

  return (
    <ThemeProvider theme={overrideTheme}>
      <div className={classes.root}>
        <Toolbar>
          {isMobile ? (
            <>
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(anchor, true)}
                  >
                    <MenuIcon style={{ width: "1.4em", height: "1.4em" }} />
                  </IconButton>
                  <Drawer
                    anchor={anchor}
                    open={navDrawer[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </>
          ) : (
            <div className={classes.headerOptions}>
              <div className={classes.rightToolbar}>
                <Button className={classes.navbarElements}>Home</Button>
                <Button className={classes.navbarElements}>About</Button>
                <Button className={classes.navbarElements}>
                  Service & Package
                </Button>
                <Button className={classes.navbarElements}>Gallery</Button>
                <Button className={classes.navbarElements}>FAQ</Button>
                <Button className={classes.navbarElements}>Contact</Button>
              </div>
            </div>
          )}
        </Toolbar>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
