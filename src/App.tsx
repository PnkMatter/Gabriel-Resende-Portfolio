import Nav from './components/Nav'
import Hero from './components/Hero'
import { Contact, Experience, Footer, Impact, OpenSource, Products, Stack, Work } from './components/Sections'

export default function App() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-fg focus:px-4 focus:py-2 focus:text-bg">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <Work />
        <Products />
        <OpenSource />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
