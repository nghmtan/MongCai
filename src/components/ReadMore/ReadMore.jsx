import { useState } from 'react';
import './ReadMore.css'; // Make sure to create this CSS file
import golftours from '../../assets/golftours.png'
const ReadMore = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="containerr w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px]"
            style={{ backgroundImage: `url(${image})`, borderRadius: '20px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className="full-overlay w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]  w-[100px] h-[100px] md:w-[200px] md:h-[200px] xl:w-[300px] xl:h-[300px]">
                    <div className="text-centerr text-base md:text-lg xl:text-xl">Read More</div>
                </div>
            )}
            {/* Content of the container, such as an image */}

        </div>
    );
};

export default ReadMore;
