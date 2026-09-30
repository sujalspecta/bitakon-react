import { ThemeProvider } from 'next-themes'
import { useState } from 'react';
import Theme from '../components/common/Theme';
import SEO from '../components/seo';
import AppProvider from '../context/AppContext';
import '../index.scss';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  const [open, setIsOpen] = useState(false);
  return <ThemeProvider>
    <AppProvider>
   <SEO />
    <Theme open={open} setIsOpen={setIsOpen} />
      <Component {...pageProps} />
    </AppProvider>
  </ThemeProvider>
}

export default MyApp
