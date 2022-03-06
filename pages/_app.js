import '../styles/globals.css';
import Hero from '../lib/components/Hero';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Hero />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
