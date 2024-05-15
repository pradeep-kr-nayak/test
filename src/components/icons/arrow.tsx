export const Arrow = ({ width = "16px", color = "#000", rotate = 0 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.9725265 14"
      width={width}
      transform={`rotate(${rotate})`}
    >
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.97252653 7H14.9725265M1 7l6-6M1 7l6 6"
      />
    </svg>
  );
};
