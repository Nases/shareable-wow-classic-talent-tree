import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid } from "@material-ui/core";
import Tippy from "@tippy.js/react";
import { followCursor } from "tippy.js";
import TalentTooltip from "./TalentTooltip";

export default function TalentIcon(props) {
  var index = props.index;

  if (index == "blank") {
    index = 1
    // return (
    //   <Grid item xs={3} style={{ visibility: "hidden" }}>
    //     .
    //   </Grid>
    // );
  }

  var talentIndex = "_" + index;
  var talentInfo = require("../assets/rogue/talentInfo.json");
  var iconBG = require("../assets/rogue/talent-icons/iconBG.png");
  var talentIcon = require(`../assets/rogue/talent-icons/${index}.jpg`);
  var talent = talentInfo[talentIndex];
  var maxTalentPoints = talent.maxPoints;

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
      color: "white"
    }
  });

  const classes = useStyles();

  const [currentPoints, setCurrentPoints] = useState(0);

  useEffect(() => {
    var talentStateStructure = {};
    talentStateStructure[talentIndex] = currentPoints;
    props.changeTalentState(talentStateStructure);
  }, [currentPoints]);


  function talentOnLeftClick() {
    if (currentPoints < maxTalentPoints) {
      setCurrentPoints(currentPoints + 1);

      var talentStateStructure = {};
      talentStateStructure["talentPointsLeft"] = props.talentPointsLeft - 1;
      props.changeTalentState(talentStateStructure);
    }
  }

  function talentOnRightClick(event) {
    event.preventDefault();
    if (currentPoints > 0) {
      setCurrentPoints(currentPoints - 1);
    }
  }


  return (
    <Tippy
      content={<TalentTooltip index={index} currentPoints={currentPoints} />}
      theme="bootstrap"
      hideOnClick={false}
      followCursor={true}
      duration={[0, 0]}
      plugins={[followCursor]}
    >
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
    </Tippy>
  );
}
