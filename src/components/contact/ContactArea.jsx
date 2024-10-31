import Reactt, {useState, useEffect} from 'react'
import img from "../../assets/Vectorzigzag (1).png"

const ContactArea = () => {
    const [animateH1, setAnimateH1] = useState(false);
  
    const [animateP, setAnimateP] = useState(false);

    useEffect(() => {
        // Start animations one by one with delays
        setTimeout(() => setAnimateH1(true), 500);
        setTimeout(() => setAnimateP(true), 1000); 
        
      }, []);
    return (
        <section className='mt-10 sm:mt-10 relative'>
            <img src={img} className=' w-full sm:h-[290px] sm:object-cover ' alt="happy driver" />
            <section className=' pb-20 pl-10 sm:pl-0  gap-4 absolute top-0 flex justify-center items-center flex-col w-full h-full'>
            <h2 className={` transition-all w-fit px-4 sm:text-sm py-1 font-medium text-5xl text-black sm:text-center rounded-[20px] mx-auto duration-700 ease-in-out ${
            animateH1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}> Contact us</h2>
              
                <p className={` font-normal text-base  sm:text-center sm:w-[80%] text-[#000000b3]  mt-3 sm:text-sm  my-5 transition-all duration-700 ease-in-out ${
            animateP ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} >We’re here to help and answer any questions you might have.
            </p>
            </section>
        </section>
    )
}

export default ContactArea