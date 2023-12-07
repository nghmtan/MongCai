import './VideoBanner.css';
import golf from '../../assets/videos/golf.mp4'
const VideoBanner = () => {
    return (
        <div className="video-banner">
            <div className="video-banner__video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="video-banner__video"
                >
                    <source src={golf} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="video-banner__content">
                {/* Your content (e.g., text, buttons) can go here */}
                <h1 className='text-3xl md:text-4xl lg:text-6xl xl:text-7xl'>WELCOME TO MÓNG CÁI</h1>
            </div>
        </div>
    );
};
export default VideoBanner;
