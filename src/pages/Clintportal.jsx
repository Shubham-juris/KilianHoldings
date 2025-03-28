const ClintPortal = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full h-full gap-[64px]'>
      <h1 className=' text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-green-900'>
        CLIENT PORTAL
      </h1>
      <div
        className='bg-white shadow-2xl  rounded-3xl w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start'
        style={{ padding: '100px' }}
      >
        {/* Left Side - Text */}
        <div
          className='md:w-1/2 w-full text-center md:text-left mb-6 md:mb-0 '
          style={{ paddingRight: '15px' }}
        >
          <h1 className='text-3xl md:text-3xl font-extrabold text-green-900 mb-4'>
            {' '}
            Welcome to Client Portal
          </h1>
          <p className='text-gray-700 text-base md:text-lg'>
            Enter your credentials to access the admin dashboard.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className='md:w-1/2 w-full space-y-5 px-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Username'
              className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pl-12'
              style={{ padding: '8px', paddingLeft: '50px' }}
            />
            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'>
              📧
            </span>
          </div>

          <div className='relative' style={{ marginTop: '24px' }}>
            <input
              type='password'
              placeholder='Password'
              className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pl-12'
              style={{ padding: '8px', paddingLeft: '50px' }}
            />
            <span className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'>
              🔒
            </span>
          </div>

          <button
            className='w-full bg-green-700 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-800 transition duration-300 shadow-md'
            style={{ padding: '8px', marginTop: '24px' }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default ClintPortal;
