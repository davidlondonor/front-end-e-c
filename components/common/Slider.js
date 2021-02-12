import nav from '../common/NavigationBar'
import Link from 'next/link'

const Slider = () => {
    return (
        <div className="flex flex-col items-center relative bg-primary">
           <Link className="" href="/">
            <a>
             <img className="ml-4 w-auto" src="/images/Main_image.png" alt="product"/>
            </a>
           </Link>  
           <button className="absolute left-15 -bottom-8 top-4/4  w-1/4">
               <img className="w-15" src="/images/CTA.png" alt="vf"/>
           </button>
        </div>
    )
}

export default Slider
