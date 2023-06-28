
import './App.css'
import Bio from './Bio'
import Footer from './Footer'
import Header from './Header'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header text= "Meu GitHub Search ♡" />
      <Bio />
      <Search />
      <Footer content="Feito com ♡ por Simara. E todos os direitos são reservados." />
    </>
  )
}

export default App
