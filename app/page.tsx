'use client'
import { useContext } from 'react'
import ConnectButton from './components/dapp/ConnectButton'
import { useAccount } from 'wagmi'
import { AlchemyContext, AlchemySdk } from './contexts/AlchemySdk'
import Image from 'next/image'

export default function Home() {
  const { address, isConnected, isReconnecting } = useAccount()
  const { alchemy, isLoadingNfts, nfts } = useContext(AlchemyContext)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isConnected && !isReconnecting ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>{address} is connected. You want disconnect?</h1>
          <ConnectButton />

          {isLoadingNfts ? (
            <span>We`re getting your NFTs</span>
          ) : (
            <>
              {nfts.length === 0 ? (
                <span>We cannot found any NFT :(</span>
              ) : (
                <div className="flex gap-4 justify-center items-center">
                  {nfts.map(nft => (
                    <div
                      key={`${nft.tokenId}-${nft.contract.address}`}
                      className="flex flex-col gap-4 justify-center items-center"
                    >
                      <div className="flex flex-wrap justify-center">
                        <Image
                          width={300}
                          height={300}
                          src={nft.image.pngUrl as string}
                          alt={nft.name as string}
                          className="h-auto m-[10px] max-w-[100%]"
                        />
                      </div>
                      <span>{nft.name}</span>
                    </div>
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
