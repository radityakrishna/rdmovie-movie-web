import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import { useState } from 'react';
import { signIn, useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CgProfile } from 'react-icons/cg';
import axios from 'axios';

function Navbar() {


    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    };
    const { data: session } = useSession();
    const router = useRouter();

    const multiSearch = async (q) => {
        const search = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${q}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`)
        return search.data
    }

    const search = async (q) => {
        if (q.length > 3) {

            const query = await multiSearch(q)
            console.log({query: query})

        }
    }

    return (
        <nav className='fixed top-0 z-50 bg-mainTheme w-full h-14 flex items-center px-6 md:px-8 lg:px-12 justify-between'>
            {/*Logo*/}
            <button
                onClick={() => router.push('/')}
                className={nav
                    ? 'opacity-0 ease-in duration-300'
                    : 'ease-in duration-500'
                }
            >
                <p className='text-white text-3xl'>RD<span className='text-yellowTheme'>Movie</span></p>
            </button>
            {/*Navigation Menu*/}
            <div className='hidden lg:mx-10 lg:flex items-center space-x-6'>
                <li className='header-link group'>
                    <Link href='/upcoming'>
                        <span className={`${router.pathname == '/upcoming'? 'text-yellowTheme' : 'span__link' }`}>Upcoming</span>
                    </Link>
                </li>
                <li className='header-link group'>
                    <Link href='/movies'>
                        <span className={`${router.pathname == '/movies'? 'text-yellowTheme' : 'span__link' }`}>Movies</span>
                    </Link>
                </li>
                <li className='header-link group'>
                    <Link href='/tvshows' >
                        <span className={`${router.pathname == '/tvshows'? 'text-yellowTheme' : 'span__link' }`}>TVShows</span>
                    </Link>
                </li>
                <li className='header-link group'>
                    <Link href='/bygenre'>
                        <span className={`${router.pathname == '/bygenre'? 'text-yellowTheme' : 'span__link' }`}>By Genre</span>
                    </Link>
                </li>
            </div>

            {/*Login and Search*/}
            <div className='hidden lg:flex'>

                <form className='text-end mr-9' action='' >
                    <div className='flex items-center'>
                        <button className='absolute ml-[160px]' onClick={() => router.push('/searchresults')} ><FaSearch color='white' /></button>
                        <input onChange={({ target }) => search(target.value)} type="text" className='border-b-2 outline-none bg-transparent text-sm text-gray-500 focus:text-gray-500 p-1' placeholder='Enter search keyword...' />
                    </div>
                </form>

                {!session
                    ? (<button
                        onClick={() => signIn()}
                        type='button'
                        className='border-yellowTheme border-[1px] border-solid 
                rounded text-sm mr-3 bg-yellowTheme '>
                        <p className='px-2 py-1 text-mainTheme tracking-wide'>LOGIN</p>
                    </button>)
                    : (
                        <button onClick={signOut}>
                            <Image alt='userimage' src={session.user.image} height={24} width={24} className='object-cover cursor-pointer rounded-full' />
                        </button>

                    )

                }

            </div>

            {/*Mobile Button*/}
            <div onClick={handleNav} className='lg:hidden block'>
                {
                    nav
                        ? <AiOutlineCloseCircle size={20} />
                        : <AiOutlineMenu size={16} />
                }
            </div>
            {/*Mobile Menu*/}
            <div className={
                nav
                    ? 'lg:hidden flex flex-col absolute top-0 left-0 right-0 bottom-0 justify-start w-3/4 h-screen ease-in duration-300 bg-mainTheme items-start pt-14 md:w-[60%] '
                    : 'lg:hidden flex flex-col absolute top-0 left-[-100%] right-0 bottom-0 justify-start w-3/4 md:w-[60%] h-screen ease-in duration-300 bg-mainTheme items-start pt-14'
            }>

                {!session
                    ?

                    <CgProfile size={30} color='white' className='ml-4 md:ml-7 mt-2 mb-4' />

                    :

                    <Image alt='userimage' src={session.user.image} width={30} height={30} className='ml-4 md:ml-7 mt-2 pb-2 object-cover cursor-pointer rounded-full outline-8 outline-mainTheme' />

                }

                <form className=' border-none' action=''>
                    <div className='relative'>
                    <button className='absolute ml-44 my-2.5'  onClick={() => router.push('/searchresults')} ><FaSearch color='black' /></button>

                        <input onChange={({ target }) => search(target.value)} type="text" placeholder='Search movie, actor...' className='text-gray-500 focus:text-gray-500 p-2 rounded-md text-sm justify-center ml-4 md:ml-7' />
                    </div>
                </form>

                <ul>
                    <li className='ml-4 md:ml-7 mt-2 text-xl md:text-2xl text-white'>
                        <Link href='/'>Upcoming</Link>
                    </li>
                    <li className='ml-4 md:ml-7 mt-2 text-xl md:text-2xl text-white'>
                        <Link href='/'>Movies</Link>
                    </li>
                    <li className='ml-4 md:ml-7 mt-2 text-xl md:text-2xl text-white'>
                        <Link href='/'>TV Shows</Link>
                    </li>
                    <li className='ml-4 md:ml-7 mt-2 text-xl md:text-2xl text-white'>
                        <Link href='/'>By Genre</Link>
                    </li>
                </ul>

                {!session
                    ? <button type='button' onClick={() => signIn()} className='bg-yellowTheme text-mainTheme text-xl rounded-md ml-4 md:ml-7 py-1 px-2 md:text-2xl mt-10'>
                        LOGIN
                    </button>
                    : <button onClick={signOut} className='bg-mainTheme text-xl rounded-md ml-4 md:ml-7 py-1 px-2 md:text-2xl mt-10'>LOGOUT</button>
                }

            </div>

        </nav>
    )
}

export default Navbar