import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "1.4.0", description: "- Added: /mirror command to Astral Rank." },
  ]

  return (
    <History lang={props.lang || 'en'} releasesData={data} />
  )
}