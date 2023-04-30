
const Button = ({texto}) => {
  return (
    <button className="transition text-white
   bg-emerald-500 hover:bg-emerald-700 hover:text-white rounded-full  px-3 py-2 text-sm font-medium" aria-current="page">{texto}</button>
  )
}

export default Button