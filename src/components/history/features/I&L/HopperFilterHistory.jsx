
import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "2.2.0", description: "- Added: Hopper Filter to Beta Testers." },
    { release: "2.3.0", description: "- Changed: Hopper Filter Moved Out From Beta Testers to quest shop (1000 Quest Points)" },
  ]

  return (
    <History lang={props.lang || 'en'} releasesData={data} />
  )
}