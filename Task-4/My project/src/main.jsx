
import { createRoot } from 'react-dom/client'
import {Header,Footer} from './Navbar'
import ShuffleHero from './stat'



createRoot(document.getElementById('root')).render(
  <div  >

    <Header  />
    <Footer />
    <ShuffleHero />
  </div>
)

