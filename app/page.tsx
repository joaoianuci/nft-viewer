'use client'
import { useContext } from 'react'
import ConnectButton from './components/dapp/ConnectButton'
import { useAccount } from 'wagmi'
import { AlchemyContext, AlchemySdk } from './contexts/AlchemySdk'
import Image from 'next/image'
import { NFTCardComponent } from './components/dapp/NFTCardComponent'

export default function Home() {
  const { address, isConnected, isReconnecting } = useAccount()
  const { alchemy, isLoadingNfts, nfts } = useContext(AlchemyContext)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isConnected && !isReconnecting ? (
        <div className="flex flex-col items-center justify-center gap-4 text-center p-2">
          <h1 className="text-5xl font-bold">NFT Viewer</h1>
          <ConnectButton />

          {isLoadingNfts ? (
            <span>We`re getting your NFTs</span>
          ) : (
            <>
              {nfts.length === 0 ? (
                <span>We cannot found any NFT :(</span>
              ) : (
                <div className="flex flex-wrap gap-4 justify-center items-center m-3 md:flex-nowrap">
                  {nfts.map(nft => (
                    <NFTCardComponent
                      imageUrl={nft.image.pngUrl!}
                      key={`${nft.tokenId}-${nft.contract.address}`}
                      series={nft.collection?.name!}
                      status={nft.description!}
                      title={nft.name!}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>Please, connect your wallet</h1>
          <ConnectButton />
        </div>
      )}
    </main>
  )
}
