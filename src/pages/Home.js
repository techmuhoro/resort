import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'

const Home = () => {
    return (
        <div>
            <Hero children=''>
                <Banner
                    title='luxurious room'
                    subtitle='delux rooms starting at $299'
                >
                    <Link 
                        to='/rooms/' 
                        className='btn-primary'
                    >
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </div>
    )
}

export default Home
