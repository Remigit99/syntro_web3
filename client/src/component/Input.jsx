

const Input = ({placeholder, type, name, value, handleChange}) => {
  return (
    <div className=" border-cyan-800 bg-slate-700 rounded-md p-3">
    <input type={type} name={name} id="" placeholder={placeholder} value={value} onChange={handleChange}
    className="font-['Poppins'] h-full w-full outline-none border-none bg-transparent"
    />
     {/* #2c0052 */}
  </div>

  )
}

export default Input