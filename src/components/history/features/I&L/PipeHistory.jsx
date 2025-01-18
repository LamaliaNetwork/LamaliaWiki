import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "2.0.0", description: "- Added: Pipes Mechanic Transfer 1 stack from an item source per usage." }
  ]

  return (
    <History releasesData={data} />
  )
}