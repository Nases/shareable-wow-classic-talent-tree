import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Tippy from "@tippy.js/react"
import TalentTooltip from "./TalentTooltip"
import { useTalentPoints, useDispatchTalentPoints } from "../contexts/TalentPointsProvider"


const TalentIcon = (props) => {
  var talentPoints = useTalentPoints()
  var dispatchTalentPoints = useDispatchTalentPoints()

  // const [currentPoints, setCurrentPoints] = useState(0)

  var index = props.index
  var talentIndex = "_" + index
  var talentInfo = require("../assets/rogue/talentInfo.json")
  var iconBG = require("../assets/rogue/talent-icons/iconBG.png")
  var talentIcon = require(`../assets/rogue/talent-icons/${index}.jpg`)
  var { maxPoints, spec, row, requiredPoints } = talentInfo[talentIndex]
  var talentPointsUsed = talentPoints[`talent${spec}PointsUsed`]
  var talentAvailable = talentPointsUsed >= requiredPoints
  var talentMaxedOut = currentPoints == maxPoints
  var currentPoints = talentPoints[index]


  function cumRowPointsAfter(limit) {
    var answer = 0
    for (let i = row + 1; i < limit; i++) {
      answer += talentPoints[`spec${spec}Row${i}`]
    }
    return answer
  }

  function cumRowPointsBelow() {
    var answer = 0
    for (let i = row; i > 0; i--) {
      answer += talentPoints[`spec${spec}Row${i}`]
    }
    return answer
  }

  function checkRowPointsAfter() {
    for (let i = row + 1; i <= 7; i++) {
      if (talentPoints[`spec${spec}Row${i}`] > 0) {
        if (cumRowPointsBelow() <= (5 * (i - 1)) - cumRowPointsAfter(i)) {
          return false
        }
      }
    }
    return true
  }

  function talentOnLeftClick() {
    if (currentPoints < maxPoints && talentAvailable) {
      dispatchTalentPoints({ type: `INCREASE_TALENT_${spec}` })
      dispatchTalentPoints({ type: `INCREASE_SPEC${spec}_ROW${row}` })
      dispatchTalentPoints({ type: `INCREASE_${index}` })
    }
  }
  function talentOnRightClick(event) {
    event.preventDefault()
    if (currentPoints > 0 && talentAvailable && checkRowPointsAfter()) {
      dispatchTalentPoints({ type: `DECREASE_TALENT_${spec}` })
      dispatchTalentPoints({ type: `DECREASE_SPEC${spec}_ROW${row}` })
      dispatchTalentPoints({ type: `DECREASE_${index}` })
    }
  }

  const useStyles = makeStyles({
    iconBG: {
      width: 44,
      height: 44,
      backgroundImage: `url(${iconBG})`,
      backgroundRepeat: "no-repeat",
      margin: "auto",
      marginBottom: "15px"
    },
    icon: {
      filter: (talentAvailable ? "grayscale(0%)" : "grayscale(95%)"),
      backgroundImage: `url(${talentIcon})`,
      backgroundSize: "33px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "37px",
      height: "37px",
      border: (talentMaxedOut ? '1px solid rgba(255,209,0)' : '1px solid rgba(64,191,64)'),
      borderRadius: '5px',
      marginTop: '3px',
      marginLeft: '3px',
      '&:hover': {
        boxShadow: "inset 0px 0px 12px rgba(255,255,255,0.6)"
      }
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
      paddingLeft: '3px',
      borderRadius: '4px',
      zIndex: '1'
    }
  })

  const classes = useStyles()

  return (
    <Tippy
      content={<TalentTooltip index={index} currentPoints={currentPoints} />}
      hideOnClick={false}
      duration={[0, 0]}
      placement='top-end'
    >
      <Grid
        item
        xs={2.1}
        className={classes.iconBG}
        onClick={talentOnLeftClick}
        onContextMenu={talentOnRightClick}
      >
        <div className={classes.icon}>
          <div className={classes.currentPoints}>
            {currentPoints}/{maxPoints}
          </div>
        </div>
      </Grid>
    </Tippy>
  )
}

export default TalentIcon