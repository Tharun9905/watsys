import './WaterBubbles.css';

const WaterBubbles = () => {
    // Generate an array of 20 bubbles for the background
    const bubbles = Array.from({ length: 20 });

    return (
        <div className="water-bubbles-container">
            {bubbles.map((_, i) => (
                <div
                    key={i}
                    className="bubble"
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 40 + 10}px`,
                        height: `${Math.random() * 40 + 10}px`,
                        animationDuration: `${Math.random() * 10 + 5}s`,
                        animationDelay: `${Math.random() * 5}s`
                    }}
                ></div>
            ))}
        </div>
    );
};

export default WaterBubbles;
