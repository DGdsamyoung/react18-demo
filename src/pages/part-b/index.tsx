import { useState, useRef, MutableRefObject,useEffect } from 'react'

/** hooks写法 */
function App () {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState('123')
  const setcount = (value: number) => {
    setCount(value + 1)
  }

  const changeInputEvent = (event: any) => {
    setInput(event.target.value)
  }

  /** 绑定元素 */
  const inputEl: MutableRefObject<HTMLInputElement | null> = useRef(null)

  const handleFocus = () => {
    inputEl.current?.focus()
  }

  useEffect(() => {
    handleFocus()
  })



  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        input-双向绑定:{input}
        <input value={input} onInput={(event) => changeInputEvent(event)} ref={inputEl} />
        <button onClick={() => setcount(count)} >
          点击
          </button>
        count is {count}
      </div>
    </div>
  )
}

export default App
