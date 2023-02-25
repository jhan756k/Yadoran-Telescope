import Homepage from './Page/Homepage.jsx';
import Loginpage from './Page/Loginpage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/login" element={<Loginpage />} />
			<Route />
		</Routes>
	</BrowserRouter>
	);
}

export default App;
