import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import Home from "./Pages/Home"
import Search from "./Pages/Search"
import Product from "./Pages/Product"
const App = () => {
	const routes = [
		{ path: '/', element: <Home /> },
		{ path: '/search', element: <Search /> },
		{ path: '/product', element: <Product /> }

	]

	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, index) => {
					return (
						<Route key={index}
							path={route.path}
							element={
								<Layout>
									{route.element}
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</BrowserRouter>
	)
}

export default App