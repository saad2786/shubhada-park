import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
      // Here you would typically send the data to an API
      sendWhatsappMsg(e)
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };
  const sendWhatsappMsg = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const phoneNumber = '+919172440986'; // Replace with your number (include country code)
      const whatsappMessage = 
        `Name: ${formData.name}%0A` +
        `Email: ${formData.email}%0A` +
        `Phone: ${formData.phone}%0A` +
        `Message: ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='border text-[28px] font-montserrat border-stone-300 w-96 max-md:w-[400px] max-sm:w-[340px] rounded-lg md:mx-10 mx-auto py-10 px-8 space-y-1.5 *:text-[12px] shadow-xl   bg-[#e3e3e3] backdrop-blur-3xl'>
      <div className='flex flex-col w-[100%] space-y-1'>
        <label htmlFor="name" className='font-light'>Name</label>
        <input 
          type='text' 
          name='name' 
          value={formData.name}
          onChange={handleChange}
          className='  rounded-sm px-3 py-2 
          shadow-lg bg-white  focus:ring-blue-300 focus:ring-2 focus:outline-none' 
          placeholder='Enter Your Name' 
        />
        {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
      </div>
      
      <div className='flex flex-col w-[100%] space-y-1'>
        <label htmlFor="email" className='font-light'>Email</label>
        <input 
          type='email' 
          name='email' 
          value={formData.email}
          onChange={handleChange}
          className='shadow-lg bg-white rounded-sm px-3 py-2   focus:ring-blue-300 focus:ring-2 focus:outline-none' 
          placeholder='Email Id' 
        />
        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
      </div>
      
      <div className='flex flex-col w-[100%] space-y-1'>
        <label htmlFor="phone" className='font-light'>Phone</label>
        <input 
          type='text' 
          name='phone' 
          value={formData.phone}
          onChange={handleChange}
          className='shadow-lg bg-white rounded-sm px-3 py-2   focus:ring-blue-300 focus:ring-2 focus:outline-none' 
          placeholder='Phone' 
        />
        {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
      </div>
      
      <div className='flex flex-col w-[100%] space-y-1'>
        <label htmlFor="message" className='font-light'>Message</label>
        <textarea 
          name='message' 
          value={formData.message}
          onChange={handleChange}
          className='shadow-lg bg-white rounded-sm px-3 py-2  text-sm  focus:ring-blue-300 focus:ring-2 focus:outline-none' 
          placeholder='Message'
          rows="3"
        />
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
      </div>
      
      <div className='flex flex-col w-[90%] mt-4'>
        <button type='submit' className='p-2 shadow-2xl rounded-sm flex text-white uppercase items-center gap-0.5 bg-green-600 font-semibold w-fit m-auto hover:bg-green-500 transition-colors'>
         <FaWhatsapp size={20}/>  
          Send Message
        </button>
      </div>
    </form>
  );
}