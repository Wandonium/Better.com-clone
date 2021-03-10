import './App.css';
import Navigation  from './components/Navigation/Navigation'
import Showcase from './components/Showcase/Showcase'
import Testimonial from './components/Testimonials/testimonial'
import Services from './components/Services/services'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Navigation />
      <Showcase />
      <Testimonial />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
