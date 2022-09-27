import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Survey from './pages/Survey';
import Results from './pages/Results';
import Freelances from './pages/Freelances';
import Header from './components/Header';
import Error from './components/Error';
import Footer from './components/Footer';
import { SurveyProvider, ThemeProvider } from './utils/context/ThemeProvider';
import GlobalStyle from './utils/style/GlobalStyle';
import MaPage from './pages/MaPages';
import Details from './pages/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
		<Router>
			<ThemeProvider>
				<SurveyProvider>
					<GlobalStyle />
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/survey/:questionNumber" element={<Survey />} />
						<Route path="/results" element={<Results />} />
						<Route path="/freelances" element={<Freelances />} />
						<Route path="/freelances/:id" element={<Details />} />
						<Route path='/mapage' element={<MaPage />} />
						<Route path="*" element={<Error />} />
					</Routes>
					<Footer />
				</SurveyProvider>
			</ThemeProvider>
		</Router>
    </React.StrictMode>
);


