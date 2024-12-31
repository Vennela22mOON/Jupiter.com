import React from 'react'
import jupiter from '../icons/jupiter2.jpeg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import image1 from '../creditsIcons/award1.webp';
import image2 from '../creditsIcons/award2.webp';
import image3 from '../creditsIcons/award3.jpeg';
import CommonComponent from '../pages/CommonComponent';
function Footer() {
    return (
      <div>
        <CommonComponent />
       <div className='bg-blue-800'>
        <div className='flex justify-start ml-6 h-50 w-50'>
         <img src={jupiter} alt="jupiter" />
        </div>
        <hr className='text-white' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 p-6'>
            <div className='flex justify-center'>
                <ul className='list-none'>
                    <li><h1 className='text-blue-500 font-extrabold pb-3 pt-3'>SPECIALITY</h1></li>
                    <li className='text-white hover:text-orange-600'>Bariatric Surgery </li>
                    <li className='text-white hover:text-orange-600'>Breast Care Center </li>
                    <li className='text-white hover:text-orange-600'>Cardiac Surgery </li>
                    <li className='text-white hover:text-orange-600'>Cardiology </li>
                    <li className='text-white hover:text-orange-600'> Chest Medicine</li>
                    <li className='text-white hover:text-orange-600 underline'><a href='./'>View All</a></li>
                </ul>
            </div>
            <div className='flex justify-center'>
                <ul className='list-none'>
                <li><h1 className='text-blue-500 font-extrabold pb-3 pt-3'>About</h1></li>
                    <li className='text-white hover:text-orange-600'>Over View </li>
                    <li className='text-white hover:text-orange-600'>Leadership </li>
                    <li className='text-white hover:text-orange-600'>Awards & Accolades </li>
                    <li className='text-white hover:text-orange-600'>Infrastructure</li>
                </ul>
            </div>
            <div className='flex justify-center'>
                <ul className='list-none'>
                <li><h1 className='text-blue-500 font-extrabold pb-3 pt-3'>Appointment</h1></li>
                    <li className='text-white hover:text-orange-600'>Find a Doctor </li>
                    <li className='text-white hover:text-orange-600'>Health Checkup Plan </li>
                </ul>
            </div>
            <div className="flex justify-center p-6">
  <ul className="list-none space-y-3">
    <li>
      <h1 className="text-blue-500 font-extrabold pb-3 text-center">Follow</h1>
    </li>
    <li className="text-white hover:text-orange-600 flex items-center">
      <FaLinkedin size={25} className="pr-2" />
      <a href="https://www.linkedin.com/company/jupiter-hospital/" className="hover:underline">LinkedIn</a>
    </li>
    <li className="text-white hover:text-orange-600 flex items-center">
      <FaYoutube size={25} className="pr-2" />
      <a href="https://www.youtube.com/c/JupiterHospitalOfficial" className="hover:underline">YouTube</a>
    </li>
    <li className="text-white hover:text-orange-600 flex items-center">
      <FaInstagram size={25} className="pr-2" />
      <a href="https://www.instagram.com/jupiterhospital/" className="hover:underline">Instagram</a>
    </li>
    <li className="text-white hover:text-orange-600 flex items-center">
      <FaTwitter size={25} className="pr-2" />
      <a href="https://x.com/JupiterLifeline" className="hover:underline">Twitter</a>
    </li>
    <li className="text-white hover:text-orange-600 flex items-center">
      <FaFacebook size={25} className="pr-2" />
      <a href="https://www.facebook.com/JupiterHospitalOfficial/" className="hover:underline">Facebook</a>
    </li>
  </ul>
</div>
<div className='flex justify-center'>
                <ul className='list-none'>
                    <li><h1 className='text-blue-500 font-extrabold pb-3 pt-3'>Gallery</h1></li>
                    <li className='text-white hover:text-orange-600'>International Patients</li>
                    <li className='text-white hover:text-orange-600'>Careers</li>
                    <li className='text-white hover:text-orange-600'>Contact </li>
                    <li className='text-white hover:text-orange-600'>Jupiter Foundation</li>
                    <li className='text-white hover:text-orange-600'> Newsletter</li>
                    <li className='text-white hover:text-orange-600'> Academics Programs</li>
                    <li className='text-white hover:text-orange-600'>Investore Relations</li>
                    
                </ul>
            </div>
          <hr  className='text-white'/>
        </div>
        <div className="flex flex-wrap justify-around p-5 bg-blue-800">
  <div className="flex flex-col items-center gap-4">
    <h1 className="text-blue-400 font-extrabold text-lg">Accreditations</h1>
    <div className="flex gap-4">
      <img src={image1} alt="Accreditation 1" className="h-10 w-10" />
      <img src={image2} alt="Accreditation 2" className="h-10 w-10" />
      <img src={image3} alt="Accreditation 3" className="h-10 w-10" />
    </div>
  </div>
  <div className="flex flex-col items-start text-left">
    <ul className="list-none mb-4">
      <li className="p-2">
        <h1 className="text-blue-400 font-extrabold">LOCATIONS</h1>
      </li>
      <li className="p-2">
        <h1 className="text-white font-extrabold">Thane</h1>
      </li>
    </ul>
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt size={25} className="text-orange-600" />
      <p className="text-white leading-relaxed">
        Eastern Express Highway, <br />
        Service Rd, next to Viviana Mall, <br />
        Thane, Maharashtra - 400601
      </p>
    </div>
    <a href='https://www.google.com/maps/place/Thane,+Maharashtra/@19.2138735,72.9190584,12z/data=!3m1!4b1!4m6!3m5!1s0x3be7b8fcfe76fd59:0xcf367d85f7c50283!8m2!3d19.2183307!4d72.9780897!16zL20vMDE2bXA5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
    <button className="bg-gradient-to-r m-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300">
  View Map
</button>
    </a>
<div className="flex items-start gap-3">
  <FaPhoneAlt size={25} className="text-orange-600" />
  <div className="text-white leading-relaxed">
    <a href="tel:+912262975555" className="block hover:underline">
      +91-22 6297 5555
    </a>
    <a href="tel:+912221725650" className="block hover:underline">
      +91-22 2172 5650
    </a>
    <a href="tel:+912221725555" className="block hover:underline">
      +91-22 2172 5555
    </a>
  </div>
</div>
<div className="flex items-start gap-3 m-5">
  <FaEnvelope size={25} className="text-orange-600" />
  <a href="mailto:info@jupiterhospital.com" className="text-white hover:underline">
    info@jupiterhospital.com
  </a>
</div>
  </div>
  <div className="flex flex-col items-start text-left mt-10">
    <ul className="list-none mb-4">
      <li className="p-2">
        <h1 className="text-white font-extrabold">Pune</h1>
      </li>
    </ul>
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt size={25} className="text-orange-600" />
      <p className="text-white leading-relaxed">
        Eastern Express Highway, <br />
        Service Rd, next to Viviana Mall, <br />
        Thane, Maharashtra - 400601
      </p>
    </div>
    <a href='https://www.google.com/maps/place/Pune,+Maharashtra/@18.5245986,73.7805654,12z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D'>
    <button className="bg-gradient-to-r m-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300">
  View Map
</button>
    </a>
<div className="flex items-start gap-3">
  <FaPhoneAlt size={25} className="text-orange-600" />
  <div className="text-white leading-relaxed">
    <a href="tel:+912262975555" className="block hover:underline">
      +91-20 2799 2799
    </a>
    <a href="tel:+912221725650" className="block hover:underline">
      +91-20 6637 5555
    </a>
  </div>
</div>
<div className="flex items-start gap-3 m-5">
  <FaEnvelope size={25} className="text-orange-600" />
  <a href="mailto:info@jupiterhospital.com" className="text-white hover:underline">
    info@jupiterhospital.com
  </a>
</div>
  </div>
  <div className="flex flex-col items-start text-left mt-10">
    <ul className="list-none mb-4">
      <li className="p-2">
        <h1 className="text-white font-extrabold">Indore</h1>
      </li>
    </ul>
    <div className="flex items-start gap-3">
      <FaMapMarkerAlt size={25} className="text-orange-600" />
      <p className="text-white leading-relaxed">
        Eastern Express Highway, <br />
        Service Rd, next to Viviana Mall, <br />
        Thane, Maharashtra - 400601
      </p>
    </div>
    <a href='https://www.google.com/maps/place/Indore,+Maharashtra+422202/@20.1655842,73.7887609,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdde64981221c13:0x5d55fae9fadd1a73!8m2!3d20.1654827!4d73.7886013!16s%2Fg%2F1hc3v3cvv?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D'>
    <button className="bg-gradient-to-r m-5 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300">
  View Map
</button>
    </a>
<div className="flex items-start gap-3">
  <FaPhoneAlt size={25} className="text-orange-600" />
  <div className="text-white leading-relaxed">
    <a href="tel:+912262975555" className="block hover:underline">
      +91-73 1471 8111
    </a>
  </div>
</div>
<div className="flex items-start gap-3 m-5">
  <FaEnvelope size={25} className="text-orange-600" />
  <a href="mailto:info@jupiterhospital.com" className="text-white hover:underline">
    info@jupiterhospital.com
  </a>
</div>
  </div>
</div>
       </div>
       <hr className="text-white" />
<div className="flex bg-blue-800 text-white p-4 justify-between">
  <ul className="list-none flex flex-row space-x-6 items-center">
    <li>© 2024 Jupiter. All Rights Reserved</li>
    <li><a href="#" className="underline">ODR Portal Link</a></li>
    <li><a href="#" className="underline">Privacy Policy</a></li>
    <li><a href="#" className="underline">Compliance</a></li>
    <li><a href="#" className="underline">Administration Policies</a></li>
    <li><a href="#" className="underline">Patient Policies</a></li>
  </ul>
</div>
       </div>
    )
}

export default Footer
