import React from 'react'
import image from '../../assets/Blogs/HeroImage.jpg'
// import paralegal from '../../assets/Blogs/HeroImagecopy.jpg'
import fight from '../../assets/Blogs/MeetingImage.jpg'

const Blog = () => {
return (
    <div
        className='flex flex-col justify-center items-center p-6 bg-white rounded-xl shadow-md space-y-4 gap-[10px]'
        style={{ marginTop: '24px' }}
    >
        <h2
            className='text-3xl font-bold text-teal-900'
            style={{ marginTop: '12px' }}
        >
            Blogs & Subscribe
        </h2>
        <div
            className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-10 w-full'
            style={{ padding: '40px' }}
        >
            <img
                src= {image}
                alt='Paralegal'
                className='w-full md:w-24 h-24 object-cover rounded'
            />
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-500'>October 22, 2023</p>
                <h3 className='text-xl font-semibold'>Why Paralegal</h3>
                <p className='text-gray-700'>
                    Paralegals can provide legal services without a lawyer’s
                    supervision. Independent paralegals have the freedom to make their
                    own work hours, set their own fees, and choose their own clients.
                    They have flexibility that oth...
                </p>
            </div>
        </div>
        {/* <div
            className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 gap-10 w-full'
            style={{ padding: '50px' }}
        >
            <img
                src= {paralegal}
                alt='Paralegal'
                className='w-full md:w-24 h-24 object-cover rounded'
            />
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-500'>October 22, 2023</p>
                <h3 className='text-xl font-semibold'>Why Paralegal</h3>
                <p className='text-gray-700'>
                    Paralegals can provide legal services without a lawyer’s
                    supervision. Independent paralegals have the freedom to make their
                    own work hours, set their own fees, and choose their own clients.
                    They have flexibility that oth...
                </p>
            </div>
        </div> */}
        <div
            className='bg-teal-900 p-6 text-white flex flex-col md:flex-row items-center md:space-x-6 gap-6'
            style={{
                paddingInline: '50px',
                paddingTop: '100px',
                paddingBottom: '100px',
            }}
        >
            <img
                src= {fight}
                alt='Traffic Ticket'
                className='w-full md:w-1/3 rounded-lg object-cover'
            />
            <div className='flex-1 text-center md:text-left'>
                <h3 className='text-2xl font-bold'>Fight a traffic ticket</h3>
                <p className='text-lg font-semibold'>C$ 200.00</p>
                <button
                    className='mt-4 bg-white text-black px-4 py-2 rounded font-semibold shadow hover:bg-gray-200'
                    style={{
                        marginTop: '16px',
                        paddingInline: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px',
                    }}
                >
                    BUY NOW
                </button>
                <p className='mt-4 text-sm' style={{ marginTop: '20px' }}>
                    We Help Drivers Across Alberta Find The Help They Need To{' '}
                    <i>Fight</i> Their <i>Traffic Tickets</i>. <b>Speeding</b>, Careless
                    Driving, Driving While Suspended and uninsured & Hit & Run Charges.
                </p>
            </div>
        </div>
    </div>
)
}

export default Blog