import Image from 'next/image'
import { Button } from '../button/Button'

export const Hero = () => {
  return (
    <section className="flex flex-row justify-center items-center min-w-[100%] mt-32 gap-24">
      <div className="flex flex-col gap-6 max-w-[42%]">
        <h1 className="text-white font-semibold text-6xl text-start">
          See all your {' '}
          <span className="text-[var(--primary)]">digital arts</span> in one place.
        </h1>
        <p className="text-white font-thin text-[16px w-[90%]">
          With NFT Gallery, you can see all your digital arts in one place. From all collections, all in one place.
          You can also transfer your digital arts to another.
        </p>

        <Button className="w-[50%]">GO TO NFTS</Button>
      </div>
      <div className="hero-box">
        <div className="hero-fill"></div>
        <div className="hero-lights"></div>
        <div className="mt-[-15%] z-10">
          <Image src="hero.svg" alt="hero" width={400} height={400} />
        </div>
        <div className="flex flex-row justify-between items-center p-6 w-[100%] bg-[#FFFFFF] bg-opacity-15 ">
          <div className="flex flex-col gap-2">
            <div className='flex flex-col'>
              <span>Apple Muu</span>
              <span>By Steve Jobs</span>
            </div>
            <div className="flex gap-3 justify-center items-start">
              <Image src="logo.svg" alt="logo" width={40} height={40} />
              <span className="text-white font-semibold text-2xl">17 ETH</span>
            </div>
          </div>
          <Button className="w-[40%]">BUY</Button>
        </div>
      </div>
    </section>
  )
}
