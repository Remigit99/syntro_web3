import { useState } from "react"

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false)

    return (
        <nav className="w-full h-16 bg-slate-500 flex items-center sticky">
            <div className="w-[80%] mx-auto my-0 flex justify-between relative items-center">
                <div >
                    <h2 className="text-orange-500 text-2xl font-semibold">Syn<span className="text-neutral-300">tro</span></h2>
                </div>

                {
                    isMobile ?   

                    <div className="flex gap-4 flex-col absolute top-[100%] mt-4 right-0 text-white bg-black px-8">
                    <ul className="flex gap-8 flex-col items-center">
                        <li>Market</li>
                        <li>Exchanges</li>
                        <li>Wallets</li>
                        <li>Tutorials</li>
                    </ul>

                    <button>Login</button>
                </div>
                    :

<div className="lg:flex lg:gap-4 items-center text-white">
                    <ul className="lg:flex lg:gap-8 lg:items-center">
                        <li>Market</li>
                        <li>Exchanges</li>
                        <li>Wallets</li>
                        <li>Tutorials</li>
                    </ul>

                    <button>Login</button>
                </div>
                }

                
            </div>

        </nav>
    )
}

export default Navbar