import React from 'react';
import img from '../assets/AccountingBook/analysis.jpg';

const Services = () => {
  const services = [
    {
      title: 'Paralegal',
      image: img,
      description:
        "When you need legal services, you don't always need a lawyer. We provide practical experience and knowledge to assist you.",
    },
    {
      title: 'Private Investigation',
      image: img,
      description:
        'Your most reliable private investigation agency in Calgary and Alberta, helping you understand what is really happening.',
    },
    {
      title: 'Court Agent',
      image: img,
      description:
        'Civil Court Agency for claims up to $100,000 with judgment enforcement measures on judgments of any amount.',
    },
    {
      title: 'Bookkeeping',
      image: img,
      description:
        'Well-organized financial records ensure efficient business operations and a strong foundation for success.',
    },
    {
      title: 'Accounting',
      image: img,
      description:
        'Accounting involves the process of recording, classifying, and summarizing financial transactions for strategic growth.',
    },
    {
      title: 'Business Consultations',
      image: img,
      description:
        'Providing expert advice in various areas including security, management, finance, and digital transformation.',
    },
  ];

  return (
    <div className='container mx-auto px-4 py-12'>
      <h2 className='text-3xl font-bold text-center mb-10'>
        Consulting Services for Small Businesses
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl shadow-lg overflow-hidden'
          >
            <img
              src={service.image}
              alt={service.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-4'>{service.title}</h3>
              <p className='text-gray-600'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
