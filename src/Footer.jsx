import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
        
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src="/vite.svg" className="h-6 md:h-7 me-3" alt="JobAI Logo"       loading='lazy' />
              <span className="self-center text-xl md:text-2xl  text-blue-500 font-semibold whitespace-nowrap dark:text-white">
                JobAI
              </span>
            </a>
            <video
              src="/jobvideo.mp4"
              autoPlay
              muted
              loop
              className="md:w-64 md:h-44 w-52 h-32 object-cover m-3  rounded-lg"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">JobAI</a>
                </li>
                <li>
                  <a href="/Jobs" className="hover:underline">Jobs</a>
                </li>
              </ul>
            </div>

            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-blue-400 sm:text-center dark:text-blue-400">
            © 2025 <a href="/" className="hover:underline">JobAI™</a>. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 8 19">
                <path d="M6.135 3H8V0H6.135A4.147 4.147 0 002 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 015.592 3h.543Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Discord</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 00-4.126-1.3 12.04 12.04 0 00-.529 1.1 15.175 15.175 0 00-4.573 0 11.585 11.585 0 00-.535-1.1A16.274 16.274 0 002.05.256 17.392 17.392 0 00.182 13.218a15.785 15.785 0 004.963 2.521 12.52 12.52 0 001.084-1.785 10.63 10.63 0 01-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0010.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 001.084 1.785 16.46 16.46 0 005.064-2.595 17.286 17.286 0 00-2.973-11.59ZM6.678 10.813a1.941 1.941 0 111.8-2.047 1.93 1.93 0 01-1.8 2.045Zm6.644 0a1.94 1.94 0 11-1.8-2.047 1.93 1.93 0 011.8 2.045Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 17">
                <path d="M20 1.892a8.178 8.178 0 01-2.355.635A4.074 4.074 0 0019.445.292a8.344 8.344 0 01-2.605.98A4.13 4.13 0 0013.85 0a4.068 4.068 0 00-4.1 4.038 4 4 0 00.105.919A11.705 11.705 0 011.4.734 4.006 4.006 0 002.668 6.126a4.165 4.165 0 01-1.859-.5v.05A4.057 4.057 0 004.1 9.635a4.19 4.19 0 01-1.856.07 4.108 4.108 0 003.831 2.807A8.36 8.36 0 010 14.184 11.732 11.732 0 006.291 16 11.502 11.502 0 0017.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0020 1.892Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
