import "../styles/metric.css";

const Metric = () => {
  return (
    <>
      <div className="wrap">
        <div className="wrap-parametric">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="87"
            height="486"
            viewBox="0 0 87 486"
            fill="none"
          >
            <path
              d="M2.00026 0.140625L2.00014 33.6594C2.00005 61.1454 12.3542 87.6227 31.0001 107.817V107.817C49.6458 128.011 60 154.489 60 181.974V301.805C60 329.591 49.6629 356.384 31.0001 376.969V376.969C12.3373 397.555 2.00022 424.347 2.00016 452.133L2.00009 485.141"
              stroke="url(#paint0_linear_179_40604)"
              strokeWidth="3"
            />
            <g filter="url(#filter0_dddd_179_40604)">
              <circle
                cx="6.43806"
                cy="6.43806"
                r="6.43806"
                transform="matrix(1 0 0 -1 53.3145 261.211)"
                fill="black"
              />
              <circle
                cx="6.43806"
                cy="6.43806"
                r="4.93806"
                transform="matrix(1 0 0 -1 53.3145 261.211)"
                stroke="white"
                strokeWidth="3"
              />
            </g>
            <defs>
              <filter
                id="filter0_dddd_179_40604"
                x="33.3145"
                y="228.335"
                width="52.876"
                height="52.876"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_179_40604"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_179_40604"
                  result="effect2_dropShadow_179_40604"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect2_dropShadow_179_40604"
                  result="effect3_dropShadow_179_40604"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="7.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.670588 0 0 0 0 0.705882 0 0 0 0 1 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect3_dropShadow_179_40604"
                  result="effect4_dropShadow_179_40604"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect4_dropShadow_179_40604"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_179_40604"
                x1="24"
                y1="0.140625"
                x2="22.5"
                y2="485.141"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0515742" stopColor="#33B3AE" stopOpacity="0" />
                <stop offset="0.441119" stopColor="#33B3AE" />
                <stop offset="0.601552" stopColor="#33B3AE" />
                <stop offset="1" stopColor="#33B3AE" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className="data">
            <div>
              <span className="border-data">Conectando y Creciendo Juntos</span>
            </div>
            <div>
              <h2 className="primary-data">Impulsando la Comunidad AWS para todos hacia Nuevas Alturas</h2>
            </div>
            <div>
              <p className="sub-data">¡Únete y lleva tu carrera en AWS para todos al siguiente nivel!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Metric;
