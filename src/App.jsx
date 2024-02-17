import About from './AboutPart/About'
import './App.css'
import Article from './ArticlePart/Article'
import Bottom from './FooterPart/Bottom'
import TopFront from './HomeTop/TopFront'

function App() {

  return (
   <div className='lg:w-[100vw] xl:w-[100vw] md:[100vw] sm:w-[100vw] w-auto min-w-[430px] h-[100vh]'>
    <TopFront />
    <About />
    <Article />
    <Bottom />
   </div>
  )
}

export default App
