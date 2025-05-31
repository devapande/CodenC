export const calculateSizes = (isSmall, isTablet, isMobile) => {
    return{
        robotscale: isSmall ? 2.0 : isTablet ? 3.0 : isMobile ? 2.5 : 3.76,
        robotposition: isSmall ? [4.5, -6.5, 1.7] : isTablet ? [7.0, -1.4, 4.0] : isMobile ? [4.6, -6.5, 2.7] : [12.4, -2.0, 4.7],
        robotrotation: isSmall ? [0.18, -0.06, 0] : isTablet ? [0.24, -0.20, 0.05] : isMobile ? [0.18, -0.06, 0] : [0.18, -0.60, 0],
    }
}
