import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
const talentInfo = require("../assets/rogue/talentInfo.json")

const useStyles = makeStyles({
  root: {
    color: "white",
    width: "auto",
    border: "2px solid gray",
    borderRadius: "2px",
    background: "rgb(0, 0, 0, 0.75)",
    padding: "6px"
  },
  clickToLearn: {
    color: "rgb(33, 255, 0)"
  },
  rank: {
    color: "#ffd100"
  }
})

export default function TalentTooltip(props) {
  const classes = useStyles()

  var index = "_" + props.index
  var talent = talentInfo[index]
  var title1 = talent.title1
  var title2 = talent.title2
  var maxPoints = talent.maxPoints
  var currentPoints = props.currentPoints
  var currentRank = talent["rank" + currentPoints]
  var nextRank = talent["rank" + (currentPoints + 1)]

  var renderRank
  var renderNextRank

  if (currentPoints === 0) {
    renderRank = nextRank
    renderNextRank = ""
  } else {
    renderRank = currentRank
    renderNextRank = nextRank
  }

  var talentLearnable = true
  if (currentPoints < maxPoints) {
    talentLearnable = true
  } else {
    talentLearnable = false
  }

  return (
    <div className={classes.root}>
      <div>{title1}</div>
      <div>{title2}</div>
      <div className={classes.rank}>{renderRank}</div>
      <div className={classes.rank}>{renderNextRank}</div>

      <div className={classes.clickToLearn}>
        {talentLearnable ? "Click to learn" : "Right-click to unlearn"}
      </div>
    </div>
  )
}
