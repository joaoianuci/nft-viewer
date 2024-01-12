import Image from 'next/image'

interface INFTCardComponentProps {
  imageUrl: string
  title: string
  series: string
  status: string
  key: string
}

export function NFTCardComponent({
  imageUrl,
  title,
  series,
  status,
  key
}: INFTCardComponentProps) {
  return (
    <div
      key={key}
      className="flex flex-col justify-start py-5 w-[325px] h-[450px] rounded-xl overflow-hidden shadow-lg bg-[#120C18] relative border-solid border-[1px] border-[#b81e5e42]"
    >
      <div className="flex justify-center items-center max-h-[350px]">
        <Image
          width={300}
          height={300}
          src={imageUrl}
          alt={title}
          className="h-auto m-[10px] max-w-[200px] rounded-2xl"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{title}</div>
        <p className="text-gray-300 text-base">{series}</p>
      </div>
    </div>
  )
}
