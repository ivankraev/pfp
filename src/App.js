import React from 'react'
import { lightTheme } from './components/Themes'
import { ThemeProvider } from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './globalStyles'
import HomePage from './components/HomePage/HomePage'
import AboutPage from './components/AboutPage/AboutPage'
import MySkillsPage from './components/MySkillsPage/MySkillsPage'
import WorkPage from './components/WorkPage/WorkPage'
const App = () => {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path='/' element={<HomePage />}></Route>
          <Route exact path='/about' element={<AboutPage />}></Route>
          <Route exact path='/skills' element={<MySkillsPage />}></Route>
          <Route exact path='/work' element={<WorkPage />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
