import React, { useState, useEffect } from "react"
import Nav from "./Nav"

const Header = ({ setFilter }) => {
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])

  return (
    <>
      <div className={small ? "header small-header" : "header"}></div>
      <Nav 
        setFilter={setFilter}
        setSmall={setSmall}
        small={small}
      />
    </>
  )
}

export default Header