import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Tippy from "@tippy.js/react"
import TalentTooltip from "./TalentTooltip"

export default function TalentIcon(props) {
  var index = props.index
  var talentIndex = "_" + index
  var talentInfo = require("../assets/rogue/talentInfo.json")
  var iconBG = require("../assets/rogue/talent-icons/iconBG.png")
  var talentIcon = require(`../assets/rogue/talent-icons/${index}.jpg`)
  var talent = talentInfo[talentIndex]
  var maxTalentPoints = talent.maxPoints

  const useStyles = makeStyles({
    iconBG: {
      width: 44,
      height: 44,
      backgroundImage: `url(${iconBG})`,
      backgroundRepeat: "no-repeat",
      margin: "auto",
      marginBottom: "15px",
      // border: '1px solid rgba(64,191,64)',
      // borderRadius: '5px',
      // outline: '1px solid rgba(64,191,64)',
      // outlineOffset: '-4px',
    },
    _1: {
      // filter: "grayscale(95%)",
      backgroundImage: `url(${talentIcon})`,
      backgroundSize: "33px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      width: "36px",
      height: "36px",
      border: '1px solid rgba(64,191,64)',
      borderRadius: '5px',
      marginTop: '3px',
      marginLeft: '3px',
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

  const [currentPoints, setCurrentPoints] = useState(0)

  useEffect(() => {
    var talentStateStructure = {}
    talentStateStructure[talentIndex] = currentPoints
    props.changeTalentState(talentStateStructure)
  }, [currentPoints])


  function talentOnLeftClick() {
    if (currentPoints < maxTalentPoints) {
      setCurrentPoints(currentPoints + 1)

      var talentStateStructure = {}
      talentStateStructure["talentPointsLeft"] = props.talentPointsLeft - 1
      props.changeTalentState(talentStateStructure)
    }
  }

  function talentOnRightClick(event) {
    event.preventDefault()
    if (currentPoints > 0) {
      setCurrentPoints(currentPoints - 1)
    }
  }

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
        <div className={classes._1}>
          <div className={classes.currentPoints}>
            {currentPoints}/{maxTalentPoints}
          </div>
        </div>
      </Grid>
    </Tippy>
  )
}
