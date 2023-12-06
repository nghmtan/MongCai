
import './LocationCard.css'; // Make sure to create a corresponding CSS file for styling
import { Button } from 'flowbite-react';
const LocationCard = ({ imageSrc, title, description }) => {
    return (
        <div className="location-card">
            <img src={imageSrc} alt={title} className="location-image" />
            <div className="location-info">
                <h3 className="location-title">{title}</h3>
                <hr className="line" style={{
                    width: "100%", /* Adjust the width as needed */
                    /* Center the line horizontally */
                    border: 'none',
                    marginBottom: '17px',
                    borderTop: '2px solid #162e48'
                }} />
                <p className="location-description">{description}</p>
                <Button className="read-more-button">Đọc thêm</Button>
            </div>
        </div>
    );
};

export default LocationCard;
