import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const assasinationBG = require("../assets/img/rogue/background/assasination.jpg");
const combatBG = require("../assets/img/rogue/background/combat.jpg");
const subtletyBG = require("../assets/img/rogue/background/subtlety.jpg");
const iconBG = require("../assets/img/rogue/talent-icons/iconBG.png");

const _1 = require("../assets/img/rogue/talent-icons/assasination/1.jpg");

const paperStyle = {
  height: 420,
  width: 240,
  padding: 20,
  color: "white",
  backgroundRepeat: "no-repeat",
  backgroundSize: "280px 460px"
};

// const iconStyle = {
//   width: 44,
//   height: 44,
//   backgroundImage: `url(${iconBG})`,
//   backgroundRepeat: "no-repeat",
//   margin: "auto"
// };

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  assasination: {
    ...paperStyle,
    backgroundImage: `url(${assasinationBG})`
  },
  combat: {
    ...paperStyle,
    backgroundImage: `url(${combatBG})`
  },
  subtlety: {
    ...paperStyle,
    backgroundImage: `url(${subtletyBG})`
  },
  control: {
    padding: theme.spacing(2)
  },
  iconBG: {
    width: 44,
    height: 44,
    backgroundImage: `url(${iconBG})`,
    backgroundRepeat: "no-repeat",
    margin: "auto"
  },
  _1: {
    backgroundImage: `url(${_1})`,
    backgroundSize: "33px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%"
  }
}));

export default function TalentTree() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="2">
          <Grid item>
            <div>Assasination</div>
            <Paper className={classes.assasination}>
              <Grid container>
                <Grid item xs={2.1} className={classes.iconBG}>
                  <div className={classes._1}>1</div>
                </Grid>
                <Grid item xs={2.1} className={classes.iconBG}>
                  2
                </Grid>
                <Grid item xs={2.1} className={classes.iconBG}>
                  3
                </Grid>
                <Grid item xs={2.1} className={classes.iconBG}>
                  .
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  4
                </Grid>
                <Grid item xs={3}>
                  5
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  6
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  7
                </Grid>
                <Grid item xs={3}>
                  8
                </Grid>
                <Grid item xs={3}>
                  9
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  10
                </Grid>
                <Grid item xs={3}>
                  11
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  12
                </Grid>
                <Grid item xs={3}>
                  13
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  14
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  15
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
                <Grid item xs={3}>
                  .
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <div>Combat</div>
            <Paper className={classes.combat}>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <div>Subtlety</div>
            <Paper className={classes.subtlety}>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3}>
                  1
                </Grid>
                <Grid item xs={3}>
                  2
                </Grid>
                <Grid item xs={3}>
                  3
                </Grid>
                <Grid item xs={3}>
                  4
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
