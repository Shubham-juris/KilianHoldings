import React from 'react';
import paralegalImg from '../../assets/Services/paralegal.jpg';
import pvtInvestigatorImg from '../../assets/Services/pvtInvestigator.jpg';
import courtImg from '../../assets/Services/court.jpg';
import bookkeepingImg from '../../assets/Services/bookkeeping.jpg';
import accountingImg from '../../assets/Services/accounting.jpg';
import businessConsultationImg from '../../assets/Services/businessConsultation.jpg';

const Services = () => {
  const services = [
    {
      title: 'Paralegal',
      image: paralegalImg,
      description:
        'When you need legal services, you don’t always need a lawyer. We are professionally trained to understand all aspects of the law and legal procedures. That being said, however, Kilian holdings Ltd as a paralegal firm cannot provide you legal advice we can provide you with our practical experience and knowledge gained throughout our years of experience. In  any situation where legal advice is required. we are happy to refer you to our network of lawyers.',
    },
    {
      title: 'Private Investigation',
      image: pvtInvestigatorImg,
      description:
        'Your most reliable private investigation agency in Calgary and Alberta, helping you understand what is really happening.',
    },
    {
      title: 'Court Agent',
      image: courtImg,
      description:
        'Civil Court Agency for claims up to $100,000 with judgment enforcement measures on judgments of any amount.',
    },
    {
      title: 'Bookkeeping',
      image: bookkeepingImg,
      description:
        'Meaningful, well-organized financial records ensure that your business operations will run more efficiently on a daily basis and are the foundation of a successful business. Our qualified staff can assist you with the day-to-day tasks associated with bookkeeping.',
    },
    {
      title: 'Accounting',
      image: accountingImg,
      description:
        'Accounting involves the process of recording, classifying, and summarizing financial transactions for strategic growth. It provides a clear picture of the financial health of your organization and its performance, which can serve as a catalyst for resource management and strategic growth.',
    },
    {
      title: 'Business Consultations',
      image: businessConsultationImg,
      description:
        'A business consultant is a professional who provides professional or expert advice or service in a particular area such as security, management, accountancy, law, human resources, marketing, financial control, engineering, science, digital transformation, exit planning or any of many other specialized fields.',
    },
  ];

  return (
    <div
      className='max-w-full mx-auto py-10 px-4 text-center'
      style={{ paddingInline: '80px', padding: '32px' }}
    >
      <h2
        className='text-3xl font-bold text-teal-900 mb-8'
        style={{ marginBottom: '64px' }}
      >
        Consulting Services for Small Businesses
      </h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <div className='p-6' style={{ padding: '48px' }} key={index}>
            <img
              src={service.image}
              alt={services.title}
              className='w-full h-48 object-fit mb-4'
              style={{ marginBottom: '32px' }}
            />
            <h3
              className='text-xl font-semibold mb-3'
              style={{ marginBottom: '24px' }}
            >
              {service.title}...
            </h3>
            <p className='text-gray-700 text-base'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
