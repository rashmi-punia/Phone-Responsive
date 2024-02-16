import React from 'react'

const AboutCompany = () => {
  return (
    <>
    <form className='text-sm pt-5 m-8 *:my-3'>
    <div className='*:my-1'>

        <h1 className='text-xl pb-4 font-bold font-rio'>Tell us about  
         <span className='text-orange-500'> your Comapany</span></h1>
         <h2 className='text-slate-800 font-semibold '>Comapany name*</h2>
<input id='email' name='email' type='email' required autoComplete='off' placeholder=''
className='w-full border text-slate-500 p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold'>Company website</h2>
    <input id='email' name='email' type='email' autoComplete='off' required placeholder=''
className='w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
    <p className=' italic text-sm font-thin tracking-wide'>Optional: Link to your public company website. This will be used in your company profile.</p>

    </div>
  
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold text-sm'>Company Logo</h2>
    <input id='email' name='email' type='file' autoComplete='off' required placeholder=''
className='w-full border  text-slate-500  p-2 text-xs focus:outline-none focus:border-orange-500 focus:border-2 focus:border-opacity-30 rounded-md' />
<p className=' italic text-sm font-thin tracking-wide'>PNG or JPG only, recommended size 400x400px</p>
    </div>
    <div className=' *:my-1'>
    <h2 className='text-slate-800 font-semibold text-sm'>Tell us more about your company</h2>
    <p className=' italic text-sm font-thin tracking-wide'>Optional: This will be used in your company profile as full company description </p>
    
    <textarea className='w-full shadow focus:outline-none capitalize p-2'
      name="message"
      rows="4"
      cols="50"
      placeholder="Company description goes here...."
    ></textarea>
    </div>
    </form>
      
    </>
  )
}

export default AboutCompany
