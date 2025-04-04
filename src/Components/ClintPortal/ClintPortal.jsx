const ClintPortal = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full h-full gap-[64px] relative bottom-22 '>
      <h1 className=' text-3xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-green-900 '>
        CLIENT PORTAL
      </h1>
      <div
        className='bg-white shadow-2xl rounded-3xl max-w-4xl flex flex-col md:flex-row items-center md:items-start relative bottom-15'
        style={{ padding: '20px' }}
      >
       { /* Left Side - Text */}
          <div
            className='text-center md:text-left mb-6 md:mb-0 '
            style={{ paddingRight: '15px', width: '100%' }}
          >
            <h1 className='text-3xl sm:text-2xl md:text-3xl font-extrabold text-green-900 mb-4' style={{marginBottom:"0.8em"}}>
              Welcome to Client Portal
            </h1>
            <p className='text-gray-700 text-base sm:text-sm md:text-lg  'style={{marginBottom:"0.8em"}}>
              Enter your credentials to access the admin dashboard.
            </p>
          </div>

          {/* Right Side - Form */}
        <div className='md:w-1/2 w-full space-y-5 px-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Username'
              className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pl-12 sm:pl-10'
              style={{ padding: '8px', paddingLeft: '50px' }}
            />
            <span className='absolute left-4 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
              📧
            </span>
          </div>

          <div className='relative' style={{ marginTop: '24px' }}>
            <input
              type='password'
              placeholder='Password'
              className='w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pl-12 sm:pl-10'
              style={{ padding: '8px', paddingLeft: '50px' }}
            />
            <span className='absolute left-4 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-400'>
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
