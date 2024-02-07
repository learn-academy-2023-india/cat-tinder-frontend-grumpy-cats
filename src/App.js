import React, { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import mockCat from "./mockCat.js"

const App = () => {
  const [cats, setCats] = useState(mockCat)

  console.log(cats)
  return (
    <>
    <header><Header /></header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex />} />
        <Route path="/catshow" element={<CatShow />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer><Footer /></footer>
    </>
  )
}

export default App