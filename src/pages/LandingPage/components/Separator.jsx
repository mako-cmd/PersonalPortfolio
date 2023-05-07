let Separator = () => {
  return (
    <>
      <svg
        style={{ objectFit: "cover" }}
        id="my-svg"
        version="1"
        baseProfile="full"
        width="100%"
        height="auto"
        viewBox="0 0 1536 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1536" height="760" fill="#E5E7E1"></rect>
        <defs>
          <linearGradient id="linear-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffffff90"></stop>
            <stop offset="100%" stop-color="#8c8c8c90"></stop>
          </linearGradient>
        </defs>
        <path
          transform="scale(1, 1)"
          style={{ transformOrigin: "center" }}
          d="M 0,760 V 0,460 C 176,521.4285714285714 352,582.8571428571429 455,596 C 558,609.1428571428571 588.0000000000001,574 713,574 C 837.9999999999999,574 1058.0000000000002,609.1428571428571 1211,596 C 1363.9999999999998,582.8571428571429 1450,521.4285714285714 1536,460 C 1536,460 1536,760 1536,760 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#linear-gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
        <defs>
          <linearGradient id="linear-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffffffff"></stop>
            <stop offset="100%" stop-color="#8c8c8cff"></stop>
          </linearGradient>
        </defs>
        <path
          transform="scale(1, 1)"
          style={{ transformOrigin: "center" }}
          d="M 0,760 V 0,690 C 139.82142857142858,691.7857142857142 279.64285714285717,693.5714285714286 393,684 C 506.35714285714283,674.4285714285714 593.2499999999999,653.5 731,620 C 868.7500000000001,586.5 1057.357142857143,540.4285714285714 1200,550 C 1342.642857142857,559.5714285714286 1439.3214285714284,624.7857142857142 1536,690 C 1536,690 1536,760 1536,760 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#linear-gradient)"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
      </svg>
    </>
  );
};

export default Separator;
