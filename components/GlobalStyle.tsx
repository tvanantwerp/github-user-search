import { createGlobalStyle } from 'styled-components';

// Includes CSS reset from https://piccalil.li/blog/a-modern-css-reset/
const GlobalStyle = createGlobalStyle`
/* nunito-regular - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/nunito-v16-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v16-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v16-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v16-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v16-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v16-latin-regular.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-italic - latin */
@font-face {
  font-family: 'Nunito';
  font-style: italic;
  font-weight: 400;
  src: url('/fonts/nunito-v16-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v16-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v16-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v16-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v16-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v16-latin-italic.svg#Nunito') format('svg'); /* Legacy iOS */
}

/* nunito-700 - latin */
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/nunito-v16-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/nunito-v16-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/nunito-v16-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/nunito-v16-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/nunito-v16-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/nunito-v16-latin-700.svg#Nunito') format('svg'); /* Legacy iOS */
}


/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Begin custom styles
body {
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, Oxygen-Sans, Ubuntu, Cantarell,
                "Helvetica Neue", sans-serif;
  margin: 0 auto;
  max-width: 1024px;
  padding: 1rem;
}

a {
  color: rgb(238, 130, 145);
  font-weight: 700;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: rgb(150, 228, 214);
  }
}
`;

export default GlobalStyle;
