import { useState } from 'react'
import './assets/react.svg'

export default function App()
{
  useState()

  return
  (
    <>
    <form className = "new-item-form">
      <div className = "form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>
    </form>
    </>
  )
}
