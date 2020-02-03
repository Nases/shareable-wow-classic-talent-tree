import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";

export default function TalentIcon(props) {
  var index = props.index;

  if (index == "blank") {
    return (
      <Grid item xs={3} style={{ visibility: "hidden" }}>
        .
      </Grid>
    );
  }

  var talentIndex = "_" + index;
  var talentInfo = require("../../public/assets/rogue/talentInfo.json");
  var iconBG = require("../../public/assets/rogue/talent-icons/iconBG.png");
  var talentIcon = require(`../../public/assets/rogue/talent-icons/${index}.jpg`);
  var maxTalentPoints = talentInfo[talentIndex].maxPoints;

  const useStyles = makeStyles({
    iconBG: {
      width: 44,
      height: 44,
      backgroundImage: `url(${iconBG})`,
      backgroundRepeat: "no-repeat",
      margin: "auto",
      marginBottom: "15px"
    },
    _1: {
      // filter: "grayscale(95%)",
      backgroundImage: `url(${talentIcon})`,
      backgroundSize: "33px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "100%",
      height: "100%"
    },
    currentPoints: {
      display: "inline-block",
      backgroundColor: "black",
      width: "20px",
      fontSize: "13px",
      marginTop: "33px",
      marginLeft: "27px",
      fontFamily: "Alegreya Sans",
      color: "white",
      userSelect: "none"
    }
  });

  const classes = useStyles();

  const [currentPoints, setCurrentPoints] = useState(0);

  function talentOnLeftClick() {
    setCurrentPoints(currentPoints + 1);
  }

  function talentOnRightClick(event) {
    event.preventDefault();
    setCurrentPoints(currentPoints - 1);
  }

  useEffect(() => {
    var talentStateStructure = {};
    talentStateStructure[talentIndex] = currentPoints;
    // props.changeTalentState(talentStateStructure);
    console.log(talentIndex);
  });

  return (
    <Grid
      item
      xs={2.1}
      className={classes.iconBG}
      onClick={talentOnLeftClick}
      onContextMenu={talentOnRightClick}
    >
      <div className={classes._1}>
        <div className={classes.currentPoints}>
          {currentPoints}/{maxTalentPoints}
        </div>
      </div>
    </Grid>
  );
}
