
import './LocationCard.css'; // Make sure to create a corresponding CSS file for styling
import { Button } from 'flowbite-react';
const LocationCard = ({ imageSrc, title, description }) => {
    return (
        <div className="location-card w-[90%] md:w[200px] xl:w-[400px] ">
            <img src={imageSrc} alt={title} className="location-image h-[100px] md:h[200px] xl:h-[400px]" />
            <div className="location-info">
                <h3 className="location-title text-xs xl:text-lg md:text-base sm:text-sm">{title}</h3>
                <hr className="line" style={{
                    width: "100%", /* Adjust the width as needed */
                    /* Center the line horizontally */
                    border: 'none',
                    marginBottom: '17px',
                    borderTop: '2px solid #162e48'
                }} />
                <p className="location-description">{description}</p>
                <Button className="read-more-button xl:text-lg md:text-base sm:text-sm text-xs">Đọc thêm</Button>
            </div>
        </div>
    );
};

export default LocationCard;
