import Image from 'next/image'

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center min-w-[100%]">
      <div className="flex flex-row gap-3 justify-center items-start cursor-pointer">
        <Image src="logo.svg" alt="logo" width={40} height={40} />
        <span className="text-white font-normal text-2xl jura">CodeNFT</span>
      </div>
      <ul className="flex flex-row justify-evenly items-center max-w-[480px] gap-5 jura">
        <li className="cursor-pointer text-white font-normal text-xl inter">Home</li>
        <li className="cursor-pointer text-white font-normal text-xl inter">NFT</li>
        <li className="cursor-pointer text-white font-normal text-xl inter">Holders</li>
        <li className="cursor-pointer text-white font-normal text-xl inter">FAQ</li>
      </ul>
    </nav>
  )
}
