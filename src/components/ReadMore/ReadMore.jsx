import { useState } from 'react';
import './ReadMore.css'; // Make sure to create this CSS file
import golftours from '../../assets/golftours.png'
const ReadMore = ({ image }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="containerr "
            style={{ backgroundImage: `url(${image})`, borderRadius: '20px' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered && (
                <div className="full-overlay">
                    <div className="text-centerr">Read More</div>
                </div>
            )}
            {/* Content of the container, such as an image */}

        </div>
    );
};

export default ReadMore;
