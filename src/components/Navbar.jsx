import { useState } from "react"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
    <nav className="border-b-2">hey</nav>
  )
}

export default Navbar