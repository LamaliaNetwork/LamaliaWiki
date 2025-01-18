import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "2.2.0", description: "- Added: Concrete Powder can now be turned into Concrete using any water source" },
  ]

  return (
    <History releasesData={data} />
  )
}