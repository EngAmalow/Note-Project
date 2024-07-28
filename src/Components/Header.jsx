import { useState } from "react"
import From from "./From"

function Header(){
    const [isOpen, setIsOpen] = useState (false)

    const handleOpen = () => {
        setIsOpen(true)
    
}

 const handleClose = () => {
    setIsOpen(false)
 }


return <div>
 
        <div className="bg-purple-600 px-1 sm:px-10 py-4 text-4xl  flex justify-between">
            <h1 className="text-white font-bold">Nooty</h1>
            <button onClick={handleOpen} className="rounded  px-1 sm:px-3 py-2 text-black bg-orange-600  ">AddNote</button>
        </div>
 {
    isOpen == true ? <From close={handleClose} /> : ''
 }
       
    </div>
}

export default Header