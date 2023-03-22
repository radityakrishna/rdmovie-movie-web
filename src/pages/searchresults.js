import Head from 'next/head';
import Navbar from '@/components/Navbar';
import { useSession, getSession } from "next-auth/react";
import axios from 'axios';
import Footer from '@/components/Footer';

function Searchresults() {
    const { data: session } = useSession();
    return (

        <div>
            <Head>
                <title>Search Results </title>
            </Head>
            <Navbar />
            <Footer />
        </div>
    )
}

export default Searchresults