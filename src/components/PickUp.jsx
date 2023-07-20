import React from 'react'

function PickUp() {
  return (
    <div className='w-[90%] lg:w-full mx-5 my-4'>

    <div>
      <input type="radio" id="Pick-Up" name="fav_language" value="Pick-Up" checked />
     <label for="Pick-Up" className='font-bold pl-3'>Pick-Up</label>
<div>
  <form className='form-group'>
    {/* location */}
    <div>

    <p className='font-bold text-lg'> Location</p>
  
  <select name="location" className='cursor-pointer'>
    <option value="">Select your city</option>
    <option value="US">NewYork</option>
    <option value="AR">Argentina</option>
    <option value="BR">Brazil</option>
    <option value="FR">france</option>
    <option value="IN">India</option>
    <option value="KR">Korea</option>
    <option value="RU">Russia</option>
    <option value="JP">Japan</option>
    <option value="PT">Portugal</option>
    <option value="DE">Germany</option>

  </select>
    </div>
{/* date */}
<div>

<p className='font-bold text-lg'>Date</p>

  <input type="date"  name="date" className='cursor-pointer'></input>
</div>
  {/* time */}
  <div>

  <p className='font-bold text-lg'>Time</p>
  
  <input type="time"  name="Time" className='cursor-pointer'></input>
  </div>
</form>
</div>
    </div>
    </div>
  )
}

export default PickUp