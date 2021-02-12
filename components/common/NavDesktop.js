import Link from 'next/link'

const NavDesktop = () => {
    return (
        <>
        {/* <nav className=" w-full font-light bg-white h-9 text-gray-600 text-xl items-center flex justify-center">
            <Link href="/">
            <a className="p-4 hover:text-gray-500" >TOPS</a>
            </Link>
             <Link href="/">
            <a className="p-4">BOTTOMS</a>
            </Link>
             <Link href="/">
            <a className="p-4">JACKETS</a>
            </Link>
             <Link href="/">
            <a className="p-4">DESSES</a>
            </Link>
             <Link href="/">
            <a className="p-4">SUBSCRIBE & SAVE</a>
            </Link>
        </nav> */}
          <div className="flex w-full items-center justify-between bg-white h-28">
                <div className="flex p-2">
                       <Link href="https://shop.elizabethandclarke.com/collections/dresses">
                    <a>
                        <img className="ml-4 w-7" src="/images/searchgray.png" alt="Search"/>
                    </a>
                </Link> 
                <Link href="https://shop.elizabethandclarke.com/account/login">
                    <a >
                        <img className="ml-4 w-7" src="/images/usergray.png" alt="User"/>
                    </a>
                </Link>
                </div>
                <div >
                      <Link href="https://shop.elizabethandclarke.com">
                    <a>
                        <img  src="/images/logogray.png" alt="Logo"/>
                    </a>
                </Link>
                </div>
                

                <Link href="/">
                    <a>
                        <img className="mr-6 w-7" src="/images/cartgray.png" alt="Card Store"/>
                    </a>
                </Link>
   
        </div>

        </>
    )
}

export default NavDesktop