import Layout from "./Components/Layout/Layout"
import {Home , ListProduct} from "./Pages/Home"
const App = () => {
    return (
        <Layout>
            <Home />
            <ListProduct />
        </Layout>
    )
}

export default App