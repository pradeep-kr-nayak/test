export const ExternalLinkIcon = ({ color = "#161718", width = "16px" }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width={width}>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 1 7 7m6-6v3.375M13 1H9.625m2.625 6.375V10.6c0 .840075 0 1.26015-.1635 1.581-.143775.282225-.373275.511725-.6555.6555C11.11015 13 10.690075 13 9.85 13H3.4c-.840075 0-1.26012 0-1.580985-.1635-.2822475-.143775-.5117175-.373275-.6555225-.6555C1 11.86015 1 11.440075 1 10.6V4.15c0-.840075 0-1.26012.1634925-1.580985.143805-.2822475.373275-.5117175.6555225-.6555225C2.13988 1.75 2.5599175 1.75 3.4 1.75h3.225"
      />
    </svg>
  );
};
