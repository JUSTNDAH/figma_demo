import {useState} from 'react';
import logo from '../assets/logo.png';
import { navlinks } from '../Constant';
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from 'react-icons/bi';
import { AnimatePresence, motion } from "framer-motion";
import {itemVariants, sideVariants} from '../Utils/motion';
import { Link } from "react-router-dom";


const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    //HANDLES OUR TOGGLING EVENT
    const handleMenuClick = () => {
      setMenuOpen((prevState) => !prevState);
    };



  return (
    <>
    {/* {/*navbar section impletation}; */}

      <nav className='z-10 hidden md:flex lg:flex justify-around fixed w-full bg-[#181818]'>
        <Link to={'/'} className='w-[12%] h-12 cursor-pointer mt-1'>
        <img src={logo} alt="website logo"/>
        </Link>

        <div className='flex items-center justify-between lg:w-[30%] md:w-[40%]'>
            {navlinks.map ((link, index)=> {
                return(
                    <div key={index}>
                        <Link to={link.url} className='list-none'>{link.title}</Link>
                    </div>
                )
            })}
        </div>
        <button className='w-[139px] h-[50px] rounded-[3px] border-[1px] mt-2'>Login</button>
      </nav>

      {/* mobile navbar */}
      <nav className='z-10 md:hidden flex justify-center w-[90vw] bg-[#181818] pd-[10px] fixed'>
        <div className='pt-5 px-2 flex justify-around'>

          <div className='w-[40%]'>
          <img src={logo} alt="" className='w-[100%] pt-2'/>
          </div>
          <button className='w-[130px] h-[45px] rounded-[3px] border-[1px] mt-2'> Login </button>
        </div>
        
        <div className="w-[10%] pt-3  pl-4" onClick={handleMenuClick}>
        {isMenuOpen ? (
           <AiOutlineClose size='40px' cursor="pointer" />
         ) : (
          <BiMenuAltRight  size='40px' cursor="pointer"   style={{color: '#fff'}} />
         )}
        </div>
      </nav>

         <AnimatePresence>
            {
              isMenuOpen && (
                <motion.aside   initial={{ width: 0 }}
                animate={{
                width: 500
                }}
                exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 }
                }}
                >
                  <motion.div 
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={sideVariants}
                    className="nav-container md:hidden border flex flex-col fixed text-white w-[55vw]  mt-[120px] h-[350px] justify-around items-end  pr-[18vw] ml-[28%] z-10 rounded-2xl pt-4 bg-[#181818]"
                    >
                      <div className='flex flex-col   items-center w-[30%]'>
                          {
                            navlinks.map((link)=>{
                              return (
                                <motion.div className="flex flex-col pr-7 text-[16px]" key={link.name}>
                                    <Link to={link.url }>
                                    <motion.div variants={itemVariants} className='list-none p-3'>{link.title}</motion.div>
                                    </Link>
                                </motion.div>
                              )
                            })
                          }
                      </div>
                      <motion.button
                      variants={itemVariants}
                      className="w-[150px] h-[48px] text-black bg-white font-bold rounded-xl mb-7 text-[14px] mr-[-2.8em]"
                      >
                      Get Started
                      </motion.button>

                  </motion.div>
                </motion.aside>
              )
            }
         </AnimatePresence>
    </>
  )
}

export default Navbar
