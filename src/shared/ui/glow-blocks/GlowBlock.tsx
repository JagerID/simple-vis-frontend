import { Box } from '../box'

export const GlowBlock = ({
  fill,
  className
}: {
  fill: string
  className: string
}) => {
  return (
    <Box className={`blur-[250px] fill-[${fill}] ` + className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="748"
        height="768"
        viewBox="0 0 748 768"
        fill="none"
      >
        <g filter="url(#filter0_f_102_11)">
          <path d="M32 -147L247.5 -125L181 268H32V-147Z" fill="#087E69" />
        </g>
        <defs>
          <filter
            id="filter0_f_102_11"
            x="-468"
            y="-647"
            width="1215.5"
            height="1415"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="250"
              result="effect1_foregroundBlur_102_11"
            />
          </filter>
        </defs>
      </svg>
    </Box>
  )
}
