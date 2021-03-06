import React from "react"
import TalentTree from "./components/TalentTree"
import { makeStyles } from "@material-ui/styles"
import { TalentPointsProvider } from "./contexts/TalentPointsProvider"

var WebFont = require("webfontloader")

WebFont.load({
  google: {
    families: ["Alegreya Sans", "sans-serif"]
  }
})

const useStyles = makeStyles({
  root: {
    cursor: "url(/assets/cursor/wow_cursor.png), auto"
  },
  title: {
    textAlign: "center",
    fontFamily: "Alegreye Sans, sans-serif",
  }
})

export default function App() {
  const classes = useStyles()
  return (
    <TalentPointsProvider>
      <div className='bg-teal-900 min-h-screen text-gray-100'>
        <div className={classes.root}>
          <h1 className={classes.title}>Rogue Talent Tree</h1>
          <TalentTree />
        </div>
      </div>
    </TalentPointsProvider>
  )
}
