interface Props{
  label: string
  className?: string
}

export const TextButton = ({ label }:Props) => {
  return (
    <button className="rounded-full bg-[#1d9bf0] items-center px-5 py-2 font-semibold text-zinc-50 w-full">{label}</button>
  )
}
