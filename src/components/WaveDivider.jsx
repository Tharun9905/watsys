import './WaveDivider.css';

const WaveDivider = ({ position = 'top', color = 'var(--color-bg)' }) => {
    return (
        <div className={`wave-divider-wrapper ${position}`}>
            <svg
                className="wave-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
            >
                <path
                    className="wave-path"
                    fill={color}
                    d="M0,50 C320,120 420,0 720,50 C1020,100 1120,-20 1440,50 L1440,100 L0,100 Z"
                ></path>
                <path
                    className="wave-path-2"
                    fill={color}
                    fillOpacity="0.5"
                    d="M0,70 C280,-10 400,110 720,70 C1040,30 1160,130 1440,70 L1440,100 L0,100 Z"
                ></path>
            </svg>
        </div>
    );
};

export default WaveDivider;
