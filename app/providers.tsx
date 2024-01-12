'use client'

import { AlchemySdk } from './contexts/AlchemySdk'
import { Web3Modal } from './contexts/Web3Context'

// create providers tree
const providers = [Web3Modal, AlchemySdk]

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>
      }, children)}
    </>
  )
}
