import {useEffect, useState} from 'react';
import BackIcon from './icons/BackIcon';
import ForwardIcon from './icons/ForwardIcon';
import './Slider.css';

export default function Slider({images}) {
    const [slides, setSlides] = useState(images);
    const [activeIndex, setactiveIndex] = useState(0);

    function handleBack() {
        setactiveIndex(prevIndex => (prevIndex===0) ? slides.length-1 : prevIndex-1);
    }

    function handleForward() {
        setactiveIndex(prevIndex => (prevIndex===slides.length-1) ? 0 : prevIndex+1);
    }

    useEffect(() => {
        const interval = setInterval(handleForward, 6000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider'>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={index===activeIndex ?
                        'slider__slide slider__slide--active' :
                        'slider__slide'
                    }
                >
                    <img className='slider__slide__image' src={slide} />
                </div>
            ))}

            <button
                className='slider__button slider__button--back'
                onClick={handleBack}
            >
                <div className='slider__button__gradient slider__button__gradient--left' />
                <BackIcon className='slider__button__icon' />
            </button>

            <button
                className='slider__button slider__button--forward'
                onClick={handleForward}
            >
                <div className='slider__button__gradient slider__button__gradient--right' />
                <ForwardIcon className='slider__button__icon' />
            </button>
        </div>
    );
}