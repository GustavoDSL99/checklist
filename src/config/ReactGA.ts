import ReactGA from 'react-ga';

export default function inicializarReactGa() {
  ReactGA.initialize(String(process.env.REACT_APP_ANALYTICS_TRACK_ID));
}
