import React, {useState} from 'react'
import Video from '../../Videos/vid.mp4'
import {Button} from '../ButtonElements'
import DateTime from '../DateTime/index.js';
import{
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements';
import ReactLoading from 'react-loading';


const HeroSection = () => {
    const [hover, setHover] = useState(false)
  
    const onHover = () => {
        setHover(!hover)
    }
    
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay={true} loop={true} src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
            <ReactLoading type="spokes" color="#ff4d4d"
            height={100} width={75} />
            </HeroH1>
            <HeroP>
                <DateTime></DateTime>
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/term' onMouseEnter={onHover} onMouseLeave={onHover}
                    primary='true' dark='true'>
                    入る{hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection