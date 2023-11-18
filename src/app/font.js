import { Open_Sans , PT_Sans , Poppins } from 'next/font/google';

const open_sans = Open_Sans({
    weight:["300",'400','500','600','700','800'],
    style:['normal','italic'],
    subsets:['latin'],
    display:'swap'
  })

const pt_sans = PT_Sans({
    weight:['400','700'],
    style:['normal','italic'],
    subsets:['latin'],
    display:'swap'
  })

const poppins = Poppins({
    weight:["300",'400','500','600','700','800'],
    style:['normal','italic'],
    subsets:['latin'],
    display:'swap'
  })
  
export {
  open_sans,
  pt_sans,
  poppins
}