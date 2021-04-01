import React from 'react';

const Slid = () => {
    let src_slidePhoto = state.sliderPhoto.map(s =>  
        <img className='slider__img' src={s.src} key={s.id} 
    alt="slider_photo" />);
    return (
        <div>
            {src_slidePhoto}
        </div>
    
    );
    
}

export default Main_Content;