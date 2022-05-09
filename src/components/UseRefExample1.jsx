import React, {useRef} from 'react'


function UseRefExample1() {

    const inputRef = useRef()

    const paraRef = useRef()

    const onSubmit = e => {
        e.preventDefault()
        console.log(123)
        console.log(inputRef.current.value)
        inputRef.current.value = ""
        inputRef.current.style.backgroundColor = "blue"
        paraRef.current.innerText = "Thank you"
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" ref={inputRef} id="name" className="form-control mb-2" />
          <button type='submit' className='btn btn-primary'>Send</button>
          <p onClick={()=> inputRef.current.focus()} ref={paraRef}>Click send to submit</p>
      </form>
    </div>
  )
}

export default UseRefExample1
