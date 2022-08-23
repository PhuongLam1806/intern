import React from 'react';

function SliderContent({ activeIndex, sliderImage }) {
    return (
        <section>
            {sliderImage.map((slide, index) => (
                <div key={index} className={index === activeIndex ? 'slides active' : 'inactive'}>
                    <img className="form__right--img" src={slide.urls} alt="" />
                    <h3 className="form__right--title">{slide.title}</h3>
                    <span className="form__right--desc">{slide.description}</span>
                </div>
            ))}
        </section>
    );
}

export default SliderContent;
