import Homepage from './Page/Homepage.jsx';
import Loginpage from './Page/Loginpage.jsx';
import Aboutpage from './Page/Aboutpage.jsx';
import Registerpage from './Page/Registerpage.jsx';
import Mappage from './Page/Mappage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<Loginpage />} />
			<Route path="/about" element={<Aboutpage />}/>
			<Route path="/register" element={<Registerpage />} />
			<Route path="/map" element={<Mappage />} />
		</Routes>
	</BrowserRouter>
	);
}

export default App;
