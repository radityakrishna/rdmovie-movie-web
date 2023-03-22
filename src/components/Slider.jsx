import Banner from './Banner';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


const Slider = ({results}) => {
    

    return (
        <div className='mt-11'> 
            
            <Carousel autoPlay infiniteLoop showArrows={false} showIndicators={true} showThumbs={false} showStatus={false} interval={3000}>
            {results.map((result) => (
               <Banner key={result.id} result={result} />
            ))}
            </Carousel>
            <div className='w-100% h-[60px]'>

            </div>
            
        
        </div>
    )
}

export default Slider