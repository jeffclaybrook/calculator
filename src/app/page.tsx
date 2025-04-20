"use client"

import { useEffect, useState } from "react"
import { Dark, Light } from "@/components/icons"

export default function Home() {
 const [input, setInput] = useState("0")
 const [theme, setTheme] = useState<"light" | "dark">("light")

 useEffect(() => {
  const storedTheme = localStorage.getItem("theme")
  if (storedTheme === "dark") setTheme("dark")
 }, [])

 useEffect(() => {
  localStorage.setItem("theme", theme)
 }, [theme])

 const append = (value: string) => setInput((prev) => (prev === "0" ? value : prev + value))

 const clear = () => setInput("0")

 const calculate = () => {
  try {
   const result = eval(input)
   setInput(String(result))
  } catch {
   setInput("Error")
  }
 }

 const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"))

 const bgColor = theme === "light" ? "#f1f4fb" : "#202a30"
 const inputColor = theme === "light" ? "#1b1b1f" : "#e1e3df"
 const themeButtonColor = theme === "light" ? "#454d54" : "#abb3ba"
 const numberBgColor = theme === "light" ? "#ffffff" : "#ffffff14"
 const numberTextColor = theme === "light" ? "#181818" : "#ffffff"
 const operatorBgColor = theme === "light" ? "#c4e8ff" : "#a8c6ff"
 const operatorTextColor = theme === "light" ? "#181818" : "#082d6d"
 const buttonClass = `flex items-center justify-center w-[75px] h-[75px] rounded-full text-3xl shadow-xs cursor-pointer`

 return (
  <main
   className="min-h-screen flex items-center justify-center transition-colors duration-300"
   style={{ backgroundColor: bgColor }}
  >
   <div className="flex flex-col gap-4 max-w-md w-full h-screen mx-auto p-4">
    <button
     onClick={toggleTheme}
     aria-label="Toggle theme"
     className="inline-flex mr-auto p-2 rounded-full transition cursor-pointer"
     style={{ color: themeButtonColor }}
    >
     {theme === "light" ? <Dark className="w-[28px] h-[28px]" /> : <Light className="w-[28px] h-[28px]" />}
    </button>
    <input
     value={input}
     readOnly
     className="w-full h-44 p-3 text-end text-6xl outline-none"
     style={{ color: inputColor }}
    />
    <div className="grid grid-cols-4 gap-3 justify-items-center">
     <button
      onClick={clear}
      aria-label="Clear"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      C
     </button>
     <button
      onClick={() => append("(")}
      aria-label="Parentheses open"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {"("}
     </button>
     <button
      onClick={() => append(")")}
      aria-label="Parentheses close"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {")"}
     </button>
     <button
      onClick={() => append("/")}
      aria-label="Divide"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {"÷"}
     </button>
     <button
      onClick={() => append("7")}
      aria-label="7"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"7"}
     </button>
     <button
      onClick={() => append("8")}
      aria-label="8"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"8"}
     </button>
     <button
      onClick={() => append("9")}
      aria-label="9"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"9"}
     </button>
     <button
      onClick={() => append("*")}
      aria-label="Multiply"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {"x"}
     </button>
     <button
      onClick={() => append("4")}
      aria-label="4"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"4"}
     </button>
     <button
      onClick={() => append("5")}
      aria-label="5"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"5"}
     </button>
     <button
      onClick={() => append("6")}
      aria-label="6"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"6"}
     </button>
     <button
      onClick={() => append("+")}
      aria-label="Add"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {"+"}
     </button>
     <button
      onClick={() => append("1")}
      aria-label="1"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"1"}
     </button>
     <button
      onClick={() => append("2")}
      aria-label="2"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"2"}
     </button>
     <button
      onClick={() => append("3")}
      aria-label="3"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"3"}
     </button>
     <button
      onClick={() => append("-")}
      aria-label="Subtract"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {"-"}
     </button>
     <button
      onClick={() => append("%")}
      aria-label="Percent"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"%"}
     </button>
     <button
      onClick={() => append("0")}
      aria-label="0"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"0"}
     </button>
     <button
      onClick={() => append(".")}
      aria-label="Decimal"
      className={`${buttonClass}`}
      style={{ backgroundColor: numberBgColor, color: numberTextColor }}
     >
      {"."}
     </button>
     <button
      onClick={() => calculate()}
      aria-label="Equals"
      className={`${buttonClass}`}
      style={{ backgroundColor: operatorBgColor, color: operatorTextColor }}
     >
      {"="}
     </button>
    </div>
   </div>
  </main>
 )
}