import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "2.2.0", description: "- Added: Worldedit tools to Beta Testers." },
    { release: "2.3.0", description: "- Changed: Player Worldedit Tools Moved Out From Beta Testers to Astral Rank and Above (just to use)" },
    { release: "2.3.0", description: "- Changed: to obtain worldedit tools, you need to buy it from quest shop (1000 Quest Points)" },
  ]

  return (
    <History lang={props.lang || 'en'} releasesData={data} />
  )
}


