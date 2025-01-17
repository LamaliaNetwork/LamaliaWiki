import History from "@site/src/components/history/HistoryTable.jsx"

import React from 'react'

export default function DispenserHistory(props) {

  const data = [
    { release: "2.2.0", description: "- Added: BlockCycle to Donators." },
  ]

  return (
    <History lang={props.lang || 'en'} releasesData={data} />
  )
}