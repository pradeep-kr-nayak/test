const RefreshIcon = ({ strokeColor = "#354DBE", width = "16" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.7 14.2"
      width={width}
    >
      <path
        fill="none"
        stroke={strokeColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M14.1.6v4m-.5-.5h-4m4 .11111111-2.1666667-1.95600889C10.28333889 1.22584889 8.76479444.6 7.1.6 3.51015111.6.6 3.51015111.6 7.1c0 3.5898778 2.91015111 6.5 6.5 6.5 3.09342222 0 5.6820833-2.1608889 6.3389444-5.05555556"
      />
    </svg>
  );
};

export default RefreshIcon;
