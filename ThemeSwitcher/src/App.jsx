import { useEffect, useState } from 'react'
import { ThemeContextProvider } from './theme'
import ThemeBtn from './ThemeBtn'
import Card from './Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")


  function darkTheme() {
    setThemeMode("dark")
  }

  function lightTheme() {
    setThemeMode("light")
  }

  useEffect(() => {
    const html_tag = document.querySelector("html")
    html_tag.classList.remove("light", "dark")
    html_tag.classList.add(themeMode)
  }, [themeMode])



  return (
    <ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeContextProvider >
  )
}

export default App
