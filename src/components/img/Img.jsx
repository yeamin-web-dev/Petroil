import React from 'react'
import ban from '../../assets/ban.png'
import ban2 from '../../assets/ban2.png'
import ban3 from '../../assets/ban3.png'
import ban4 from '../../assets/ban4.png'
const Img = () => {
  return (
    <section className='pt-[70px]'>
        <div className='flex gap-3'>
            <div className='w-1/4'>
                <img src={ban} alt="" />
            </div>
            <div className='w-1/4'>
            <img src={ban2} alt="" />
            </div>
            <div className='w-1/4'>
            <img src={ban4} alt="" />
            </div>
            <div className='w-1/4'>
            <img src={ban3} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Img
