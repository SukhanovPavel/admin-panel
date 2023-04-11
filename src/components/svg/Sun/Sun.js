export const Sun = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_162_54)">
        <circle cx="8" cy="8" r="4" fill={ color } />
        <path d="M15 9L16 8L15 7H13V9H15Z" fill={ color } />
        <path d="M1 9L0 8L1 7H3V9H1Z" fill={ color } />
        <path d="M7 15L8 16L9 15V13H7V15Z" fill={ color } />
        <path d="M7 1L8 0L9 1V3H7V1Z" fill={ color } />
        <path d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z" fill={ color } />
        <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" fill={ color } />
        <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" fill={ color } />
        <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" fill={ color } />
      </g>
      <defs>
        <clipPath id="clip0_162_54">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}