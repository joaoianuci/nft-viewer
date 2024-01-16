import { Hero } from './components/hero/Hero'
import { Navbar } from './components/nav/Navbar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 w-[100%] max-w-[1366px] ">
      <Navbar />
      <Hero />
    </main>
  )
}
