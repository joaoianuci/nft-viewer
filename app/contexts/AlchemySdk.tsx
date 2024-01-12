'use client'

import { Alchemy, Network, OwnedNft } from 'alchemy-sdk'
import { createContext, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const config = {
  apiKey: '0vuVnwl6k3IUT4iW56EvUrylApY2Mwf7',
  network: Network.ETH_MAINNET
}
const alchemy = new Alchemy(config)

interface AlchemyContext {
  alchemy: Alchemy
  nfts: OwnedNft[]
  isLoadingNfts: boolean
}

export const AlchemyContext = createContext({} as AlchemyContext)

export function AlchemySdk({ children }: { children: React.ReactNode }) {
  const [nfts, setNfts] = useState<OwnedNft[]>([])
  const [isLoadingNfts, setIsLoadingNfts] = useState(false)
  const { address } = useAccount()

  useEffect(() => {
    async function fetchNfts() {
      setIsLoadingNfts(true)
      if (address) {
        const nfts = await alchemy.nft.getNftsForOwner(address)
        setIsLoadingNfts(false)
        setNfts(nfts.ownedNfts || [])
      }
    }
    fetchNfts()

    return () => {
      setNfts([])
      setIsLoadingNfts(false)
    }
  }, [address])

  useEffect(() => {
    console.log(nfts)
  }, [nfts])

  return (
    <AlchemyContext.Provider
      value={{
        alchemy,
        nfts,
        isLoadingNfts
      }}
    >
      {children}
    </AlchemyContext.Provider>
  )
}
