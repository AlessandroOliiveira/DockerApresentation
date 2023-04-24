import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import GlobalStyle from './shared/styles/global'
import NavBar from './shared/components/NavBar'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
