import { useState } from 'react'
import './App.css'
import NavBar from './Components/Header/navigationBar'
import HeroSection from './Components/LandingPage/heroSection'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Destinations from './Components/Destinations/destinations'
import Packages from './Components/Packages/packages'

function App() {

 const destinations = [
    {
        id: 1,
        name: 'Babusar Top',
        country: 'Pakistan',
        price: '20k',
        img: 'https://images.pexels.com/photos/13892153/pexels-photo-13892153.jpeg',
        description: 'Babusar Top is a breathtaking mountain pass at 4,173m in the Himalayas, connecting Kaghan Valley to Chilas. Famous for its snow-capped peaks and stunning views of Nanga Parbat.'
    },
    {
        id: 2,
        name: 'Skardu',
        country: 'Pakistan',
        price: '25k',
        img: 'https://images.pexels.com/photos/33784883/pexels-photo-33784883.jpeg',
        description: 'Skardu is the gateway to some of the world\'s highest peaks including K2. Known for its crystal clear lakes, ancient forts, and vast cold deserts surrounded by mighty mountains.'
    },
    {
        id: 3,
        name: 'Hunza Valley',
        country: 'Pakistan',
        price: '28k',
        img: 'https://images.pexels.com/photos/35326794/pexels-photo-35326794.jpeg',
        description: 'Hunza Valley is a paradise on earth, famous for its stunning landscapes, ancient Baltit Fort, and warm hospitality. Known for its cherry blossoms in spring and golden autumn colors.'
    },
]

const packages = [
    {
        id: 1,
        name: 'Kaghan Valley Tour',
        duration: '5 Days / 4 Nights',
        groupSize: 'Max 12 People',
        price: '35k',
        img: 'https://images.pexels.com/photos/13892153/pexels-photo-13892153.jpeg',
        description: 'Experience the breathtaking beauty of Kaghan Valley including Naran, Saiful Malook Lake, and Babusar Top. Perfect for nature lovers and adventure seekers.',
        includes: ['Hotel', 'Transport', 'Guide', 'Meals']
    },
    {
        id: 2,
        name: 'Skardu & K2 Base Camp',
        duration: '7 Days / 6 Nights',
        groupSize: 'Max 8 People',
        price: '65k',
        img: 'https://images.pexels.com/photos/33784883/pexels-photo-33784883.jpeg',
        description: 'An unforgettable journey to Skardu, Shangrila Resort, Deosai Plains, and K2 Base Camp. A dream trip for every mountaineer and explorer.',
        includes: ['Hotel', 'Transport', 'Guide', 'Meals', 'Camping Gear']
    },
    {
        id: 3,
        name: 'Hunza & Khunjerab Pass',
        duration: '6 Days / 5 Nights',
        groupSize: 'Max 10 People',
        price: '45k',
        img: 'https://images.pexels.com/photos/35326794/pexels-photo-35326794.jpeg',
        description: 'Explore the magical Hunza Valley, visit Baltit Fort, Attabad Lake, and reach the top of Khunjerab Pass — the highest paved international border crossing in the world.',
        includes: ['Hotel', 'Transport', 'Guide', 'Meals']
    },
    {
        id: 4,
        name: 'Fairy Meadows & Nanga Parbat',
        duration: '4 Days / 3 Nights',
        groupSize: 'Max 10 People',
        price: '30k',
        img: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
        description: 'Trek to the world famous Fairy Meadows and witness the stunning views of Nanga Parbat — the Killer Mountain. One of the most scenic treks in Pakistan.',
        includes: ['Camping', 'Transport', 'Guide', 'Meals']
    },
]




const router=createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout/>}>
     <Route path='' element={<HeroSection/>}/>
     <Route path='/destinations' element={<Destinations data={destinations}/>}/>
     <Route path='/packages' element={<Packages data={packages}/>}/>
   </Route>
    


  )
)


  return (
  <RouterProvider router={router}/>
  )
}

export default App
