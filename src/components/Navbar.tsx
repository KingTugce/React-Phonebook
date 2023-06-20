import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isVisible, setIsVisible ] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
        
    }
return (
    <nav className='flex item-center justify-between flex-wrap bg-teal-900 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to= '/' className='font-semibold text-xl tracking-tight'>Digit</Link>
        </div>
        <div className="block">
            <button 
            onClick={dropDown}
            className="flex item-center px-3 py-2 text-teal-300 
            border rounded border-teal-500 hover:text-white hover:border-white"
            >
                <i className="fa-solid fa-bars"></i>
            </button>
        </div>
        { isVisible ? (<div>It is Visible</div>) : (<div>It is not Visible</div>)}
    </nav>
    )
}

export default Navbar
