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
    {
      title: 'Driving offenses Involving the use of alcohol and Drug',
      image: drugImg,
      description:
        ' One of the most common offenses that affect the chances of immigrants looking to move to Canada is related to driving under the influence of drugs and/or alcohol. These offenses are designated according to aspects such as the circumstances in which the offense was committed and the location.',
    },
    {
      title: 'Fraud',
      image: fraudImg,
      description: (
        <>
          A broad category of offenses can be included under fraud. It also
          includes any violation willfully committed with the intent of
          depriving an individual or company/organization of anything of which
          they are the rightful owner. <br />
          <br />
          Theft is a common offense that comes under fraud. The type of theft
          committed and the amount stolen are taken into consideration to judge
          the seriousness of the offense. A theft of value less than CAD 5000 is
          regarded as a non-seriousoffense. A theft of an amount valuing more
          than CAD 5000 is considered a serious crime. If a weapon is involved
          or if there is a threat of violence, these too can come under serious
          offenses.
        </>
      ),
    },
    {
      title: 'Reckless Driving',
      image: recklessDrivingImg,
      description:
        'Reckless or irresponsible driving with scant regard to driving rules and disciplined on-road behavior can result in inadmissibility. When the offense is established, it can result in a denial of entry to the country. Dangerous driving also falls in the same category as far as offenses are concerned. A charge of serious driving violation can seriously hamper the ability of the applicant to enter Canada legally. It will apply even if the individual states they do not intend to drive while in Canada.',
    },
    {
      title: 'Assault',
      image: assaultImg,
      description: (
        <>
          An assault in almost any form can result in an applicant becoming
          inadmissible to Canada. It could be a physical altercation between
          strangers or a fight between people known to each other, resulting in
          injury. Regardless of where the assault has taken place, it can lead
          to inadmissibility to Canada. <br />
          <br />
          In this type of crime, there are aggravating factors such as the use
          of a weapon or the infliction of bodily harm. In such instances, the
          offense would be considered a serious crime.
        </>
      ),
    },
    {
      title: 'Drug Offenses',
      image: drugOffensesImg,
      description:
        'An individual charged with purchasing, distributing, possessing, and/or consuming drugs can be rendered inadmissible to Canada. The nature and extent of the offense will determine the chances of being denied entry to Canada.',
    },
  ];

  return (
    <div
      className='max-w-full mx-auto py-10 px-4 text-center'
      style={{ paddingInline: '80px', padding: '32px' }}
    >
      <h2
        className='text-3xl font-bold text-teal-900 mb-8'
        style={{ marginBottom: '32px' }}
      >
        Consulting Services for Small Businesses
      </h2>
      <div className='grid md:grid-cols-3 gap-'>
        {services.map((service, index) => (
          <div className='p-6' style={{ padding: '40px' }} key={index}>
            <h3
              className='text-xl font-semibold mb-3'
              style={{ marginBottom: '24px' }}
            >
              {service.title}
            </h3>
            <img
              src={service.image}
              alt={services.title}
              className='w-full h-48 object-fit mb-4'
              style={{ marginBottom: '32px' }}
            />

            <p className='text-gray-700 text-base'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
