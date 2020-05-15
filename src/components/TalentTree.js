import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import TalentIcon from "./TalentIcon";

const assasinationBG = require("../assets/rogue/background/assasination.jpg");
const combatBG = require("../assets/rogue/background/combat.jpg");
const subtletyBG = require("../assets/rogue/background/subtlety.jpg");

const paperStyle = {
  height: 420,
  width: 240,
  padding: 20,
  color: "white",
  backgroundRepeat: "no-repeat",
  backgroundSize: "280px 460px"
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    userSelect: "none"
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
  }
}));

export default function TalentTree() {
  const classes = useStyles();

  const [state, setState] = useState({
    talentPointsLeft: 51
  });
  // console.log(maxTalentPoints);

  function changeTalentState(updatedState) {
    setState(prevState => ({
      ...prevState,
      ...updatedState
    }));
  }

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="2">
          <div>{state.talentPointsLeft}</div>
          <Grid item>
            <div>Assasination</div>
            <Paper className={classes.assasination}>
              <Grid container>
                <TalentIcon
                  index="1"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="2"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="3"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon
                  index="4"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="5"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="6"
                  changeTalentState={changeTalentState}
                  state={state}
                />
              </Grid>
              <Grid container>
                <TalentIcon
                  index="7"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="8"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="9"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="10"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="11"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="12"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="13"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="14"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="15"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <div>Combat</div>
            <Paper className={classes.combat}>
              <Grid container>
                <TalentIcon
                  index="16"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="17"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="18"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon
                  index="19"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="20"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="21"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon
                  index="22"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="23"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="24"
                  changeTalentState={changeTalentState}
                  state={state}
                />
              </Grid>
              <Grid container>
                <TalentIcon
                  index="25"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="26"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="27"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon
                  index="28"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="29"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="30"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="31"
                  changeTalentState={changeTalentState}
                  state={state}
                />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="32"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon
                  index="33"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon
                  index="34"
                  changeTalentState={changeTalentState}
                  state={state}
                />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <div>Subtlety</div>
            <Paper className={classes.subtlety}>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="35" changeTalentState={changeTalentState} />
                <TalentIcon index="36" changeTalentState={changeTalentState} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="37" changeTalentState={changeTalentState} />
                <TalentIcon index="38" changeTalentState={changeTalentState} />
                <TalentIcon index="39" changeTalentState={changeTalentState} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="40" changeTalentState={changeTalentState} />
                <TalentIcon index="41" changeTalentState={changeTalentState} />
                <TalentIcon index="42" changeTalentState={changeTalentState} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="43" changeTalentState={changeTalentState} />
                <TalentIcon index="44" changeTalentState={changeTalentState} />
                <TalentIcon index="45" changeTalentState={changeTalentState} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="46" changeTalentState={changeTalentState} />
                <TalentIcon index="47" changeTalentState={changeTalentState} />
                <TalentIcon index="48" changeTalentState={changeTalentState} />
                <TalentIcon index="49" changeTalentState={changeTalentState} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="50" changeTalentState={changeTalentState} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
              <Grid container>
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="51" changeTalentState={changeTalentState} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
                <TalentIcon index="blank" changeTalentState={changeTalentState}
                  state={state} />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
