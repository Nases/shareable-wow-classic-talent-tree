import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Tippy from "@tippy.js/react"
import TalentTooltip from "./TalentTooltip"
import { useTalentPoints, useDispatchTalentPoints } from "../contexts/TalentPointsProvider"


// deal with component rerender for every icon on total points change

// const select = () => {
//   var dispatchTalentPoints = useDispatchTalentPoints()
//   return {
//     dispatchTalentPoints: dispatchTalentPoints
//   }
// }

// let B = React.memo(({ dispatch, string }) => {
//   console.log("this is the only render of B")
//   return (
//     <div>
//       <p>B: {string}</p>
//       <button onClick={() => dispatch("increment")}>+1</button>
//     </div>
//   )
// })

// function connect(WrappedComponent, select) {
//   return function (props) {
//     const selectors = select()
//     return <WrappedComponent {...selectors} {...props} />
//   }
// }

// B = connect(
//   B,
//   select
// )

const TalentIcon = (props) => {
  var talentPoints = useTalentPoints()
  var dispatchTalentPoints = useDispatchTalentPoints()
  console.log(talentPoints)

  var index = props.index
  var talentIndex = "_" + index
  var talentInfo = require("../assets/rogue/talentInfo.json")
  var iconBG = require("../assets/rogue/talent-icons/iconBG.png")
  var talentIcon = require(`../assets/rogue/talent-icons/${index}.jpg`)
  var talent = talentInfo[talentIndex]
  var maxTalentPoints = talent.maxPoints
  var talentTree = talent.talentTree


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
      width: "37px",
      height: "37px",
      border: '1px solid rgba(64,191,64)',
      // border: '1px solid rgba(255,209,0)',
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

  const [currentPoints, setCurrentPoints] = useState(0)

  function talentOnLeftClick() {
    if (currentPoints < maxTalentPoints) {
      setCurrentPoints(currentPoints + 1)
      dispatchTalentPoints({ type: `INCREASE_TALENT_${talentTree}` })
    }
  }

  function talentOnRightClick(event) {
    event.preventDefault()
    if (currentPoints > 0) {
      setCurrentPoints(currentPoints - 1)
      dispatchTalentPoints({ type: `DECREASE_TALENT_${talentTree}` })
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

export default TalentIcon