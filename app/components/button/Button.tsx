export const Button = ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <button
      className={`${className} bg-[var(--primary)] text-black font-bold rounded-lg px-6 py-3`}
    >
      {children}
    </button>
  )
}
