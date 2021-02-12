
import Link from 'next/link'

const HeaderOpen = () => {
    return (
        <>
        <div className="flex w-full items-center justify-between bg-primary h-28">
                <div className="flex p-2">
                       <Link href="https://shop.elizabethandclarke.com/collections/dresses">
                    <a>
                        <img className="ml-4 w-7" src="/images/search.png" alt="Search"/>
                    </a>
                </Link> 
                <Link href="https://shop.elizabethandclarke.com/account/login">
                    <a >
                        <img className="ml-4 w-7" src="/images/user.png" alt="User"/>
                    </a>
                </Link>
                </div>
                <div >
                      <Link href="https://shop.elizabethandclarke.com">
                    <a>
                        <img  src="/images/logo.png" alt="Logo"/>
                    </a>
                </Link>
                </div>
                

                <Link href="/">
                    <a>
                        <img className="mr-6 w-7" src="/images/cart.png" alt="Card Store"/>
                    </a>
                </Link>
   
        </div>
        </>
    )
}

export default HeaderOpen
