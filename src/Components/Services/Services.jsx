import React from 'react';
import paralegalImg from '../../assets/Services/paralegal.jpg';
import pvtInvestigatorImg from '../../assets/Services/pvtInvestigator.jpg';
import courtImg from '../../assets/Services/court.jpg';
import bookkeepingImg from '../../assets/Services/bookkeeping.jpg';
import accountingImg from '../../assets/Services/accounting.jpg';
import businessConsultationImg from '../../assets/Services/businessConsultation.jpg';
import drugImg from '../../assets/Services/drug.jpg';
import fraudImg from '../../assets/Services/fraud.jpg';
import recklessDrivingImg from '../../assets/Services/recklessDriving.jpg';
import assaultImg from '../../assets/Services/assault.jpg';
import drugOffensesImg from '../../assets/Services/drugOffenses.jpg';
import personalPr from '../../assets/Services/personal.jpg';


// That being said, however, Kilian holdings Ltd as a paralegal firm cannot provide you paralegal advice we can provide you with our practical experience and knowledge gained throughout our years of experience. In any situation where paralegal advice is required, we are happy to refer you to our network of lawyers.

const Services = () => {
  const services = [

    {
      title: 'Paralegal',
      image: paralegalImg,
      description:
        'When you need paralegal services, you don’t always need a lawyer. We are professionally trained to understand all aspects of the law and paralegal procedures.',
    },
     {
      title: 'Personal PR Services',
      image: personalPr ,
      description: (
        <>
          We offer complete Personal PR & Branding services, including personal branding development, PR representation, digital marketing support, and other individual publicity services tailored to enhance your public presence and professional identity.
        </>
      ),
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
        'Meaningful, well-organized financial records ensure efficient business operations. Our qualified staff assists with daily bookkeeping tasks.',
    },
    {
      title: 'Accounting',
      image: accountingImg,
      description:
        'Accounting involves recording, classifying, and summarizing financial transactions for strategic growth and financial clarity.',
    },
    {
      title: 'Business Consultations',
      image: businessConsultationImg,
      description:
        'Professional or expert advice in various areas such as security, management, accountancy, HR, marketing, digital transformation, and more.',
    },
    {
      title: 'Driving offenses Involving the use of alcohol and Drug',
      image: drugImg,
      description:
        'Common offenses affecting immigration chances, related to driving under the influence of drugs and/or alcohol.',
    },
    {
      title: 'Fraud',
      image: fraudImg,
      description: (
        <>
          A broad category of offenses involving intentional violations depriving individuals or organizations of their rightful property.<br /><br />
          Theft under CAD 5000 is non-serious, while anything above is considered serious, especially with violence or weapons involved.
        </>
      ),
    },
    {
      title: 'Reckless Driving',
      image: recklessDrivingImg,
      description:
        'Reckless or irresponsible driving can result in inadmissibility to Canada, regardless of intent to drive while in the country.',
    },
    {
      title: 'Assault',
      image: assaultImg,
      description: (
        <>
          Any form of assault can make an applicant inadmissible to Canada, whether between strangers or acquaintances.<br /><br />
          Aggravating factors include use of a weapon or bodily harm.
        </>
      ),
    },
    {
      title: 'Drug Offenses',
      image: drugOffensesImg,
      description:
        'Charges involving purchasing, distributing, possessing, or consuming drugs can lead to inadmissibility to Canada.',
    },
  ];

  return (
    <div
      className='max-w-full mx-auto py-10 px-4 text-center sm:w-[100%]'
      style={{ paddingInline: '80px', padding: '32px' }}
    >
      <h2
        className='text-3xl font-bold text-teal-900 mb-8'
        style={{ marginBottom: '32px' }}
      >
        Consulting Services for Small Businesses
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {services.map((service, index) => (
          <div className='p-6' style={{ padding: '40px' }} key={index}>
            <h3
              className='text-xl font-semibold mb-3'
              style={{ marginBottom: '24px' }}
            >
              {service.title}
            </h3>

            {/* IMAGE ONLY IF PRESENT */}
            {service.image && (
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-48 object-cover mb-4'
                style={{ marginBottom: '32px' }}
              />
            )}

            <p className='text-gray-700 text-justify'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;