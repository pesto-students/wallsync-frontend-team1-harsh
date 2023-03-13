import React from 'react'
import Button from '../../../../components/button/Button'
import '../../budget.css'

const NewUser = () => {
    // const handleSubmit =()=>{

    // }
  return (
    <div>
        <form action="" className='newUserBudget'>
            <input type="text" name="" placeholder='Income' />
            <input type="text" name="" placeholder='Limit' />
            <Button buttonName="Create a Budget"/>
        </form>
    </div>
  )
}

export default NewUser