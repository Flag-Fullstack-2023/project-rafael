export const toRem = (size) => `${size / 10}rem`;

export const breakpoints = {
  // 1920px
  largeDesktop: "(min-width: 120em)",

  // 1440px
  bigDesktop: "(min-width: 90em)",

  // 1120px
  desktop: "(min-width: 70em)",

  // 1024px
  laptop: "(min-width: 64em)",

  // 850px
  tabletSpec: "(min-width: 53.125em)",

  // 768px
  tablet: "(min-width: 48em)",

  // 600px
  phablet: "(min-width: 37.5em)",

  // 300px
  fromMobile: "(min-width: 18.75em)",

  // 400px
  smallmobileonly: "(max-width: 25em)",

  // 768px
  belowTablet: "(max-width: 48em)",

  // 600px
  mobileonly: "(max-width: 37.5em)",
};

export const fontSizes = {};
