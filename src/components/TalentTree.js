import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Paper } from "@material-ui/core"

import TalentIcon from "./TalentIcon"
import BlankIcon from './BlankIcon'

const assasinationBG = require("../assets/rogue/background/assasination.jpg")
const combatBG = require("../assets/rogue/background/combat.jpg")
const subtletyBG = require("../assets/rogue/background/subtlety.jpg")

const paperStyle = {
  height: 420,
  width: 240,
  padding: 20,
  color: "white",
  backgroundRepeat: "no-repeat",
  backgroundSize: "280px 460px"
}

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
}))

export default function TalentTree() {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing="2">
          <Grid item>
            <div>Assasination</div>
            <Paper className={classes.assasination}>
              <Grid container>
                <TalentIcon index="1" />
                <TalentIcon index="2" />
                <TalentIcon index="3" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="4" />
                <TalentIcon index="5" />
                <BlankIcon />
                <TalentIcon index="6" />
              </Grid>
              <Grid container>
                <TalentIcon index="7" />
                <TalentIcon index="8" />
                <TalentIcon index="9" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="10" />
                <TalentIcon index="11" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="12" />
                <TalentIcon index="13" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="14" />
                <BlankIcon />
                <BlankIcon />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="15" />
                <BlankIcon />
                <BlankIcon />
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <div>Combat</div>
            <Paper className={classes.combat}>
              <Grid container>
                <TalentIcon index="16" />
                <TalentIcon index="17" />
                <TalentIcon index="18" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="19" />
                <TalentIcon index="20" />
                <TalentIcon index="21" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="22" />
                <TalentIcon index="23" />
                <BlankIcon />
                <TalentIcon index="24" />
              </Grid>
              <Grid container>
                <TalentIcon index="25" />
                <TalentIcon index="26" />
                <TalentIcon index="27" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="28" />
                <TalentIcon index="29" />
                <TalentIcon index="30" />
                <TalentIcon index="31" />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="32" />
                <TalentIcon index="33" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="34" />
                <BlankIcon />
                <BlankIcon />
              </Grid>
            </Paper>
          </Grid>
          <Grid item>
            <div>Subtlety</div>
            <Paper className={classes.subtlety}>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="35" />
                <TalentIcon index="36" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="37" />
                <TalentIcon index="38" />
                <TalentIcon index="39" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="40" />
                <TalentIcon index="41" />
                <TalentIcon index="42" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="43" />
                <TalentIcon index="44" />
                <TalentIcon index="45" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <TalentIcon index="46" />
                <TalentIcon index="47" />
                <TalentIcon index="48" />
                <TalentIcon index="49" />
              </Grid>
              <Grid container>
                <BlankIcon />
                <BlankIcon />
                <TalentIcon index="50" />
                <BlankIcon />
              </Grid>
              <Grid container>
                <BlankIcon />
                <TalentIcon index="51" />
                <BlankIcon />
                <BlankIcon />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
