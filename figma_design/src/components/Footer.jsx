
const Footer = () => {
  return (
    <footer className="bg-custom-radial text-white py-8 h-[250px]" >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold ">AI.GEN</h1>
          <p className="mt-2 text-gray-400">© 2024 Company. All rights reserved.</p>
        </div>
        <div className="mb-6 md:mb-0 flex flex-col md:flex-row items-center">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Home</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Services</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contact</a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.56v14.88c0 2.52-2.04 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.04 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM12 5.76c-3.46 0-6.24 2.78-6.24 6.24s2.78 6.24 6.24 6.24 6.24-2.78 6.24-6.24-2.78-6.24-6.24-6.24zm0 10.08c-2.11 0-3.84-1.72-3.84-3.84s1.72-3.84 3.84-3.84 3.84 1.72 3.84 3.84-1.72 3.84-3.84 3.84zm6.72-10.08c-0.97 0-1.76-0.79-1.76-1.76s0.79-1.76 1.76-1.76 1.76 0.79 1.76 1.76-0.79 1.76-1.76 1.76z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.18 3.16 9.59 7.6 11.21 0.56 0.1 0.76-0.24 0.76-0.54v-2c-3.1 0.68-3.74-1.5-3.74-1.5-0.5-1.24-1.22-1.57-1.22-1.57-1-0.68 0.08-0.66 0.08-0.66 1.1 0.08 1.68 1.12 1.68 1.12 0.98 1.68 2.58 1.2 3.2 0.92 0.1-0.7 0.38-1.2 0.68-1.48-2.5-0.28-5.12-1.26-5.12-5.62 0-1.24 0.44-2.24 1.14-3.02-0.12-0.28-0.5-1.42 0.1-2.96 0 0 0.96-0.3 3.16 1.14 0.92-0.26 1.9-0.38 2.88-0.38s1.96 0.12 2.88 0.38c2.2-1.44 3.16-1.14 3.16-1.14 0.6 1.54 0.22 2.68 0.1 2.96 0.7 0.78 1.14 1.78 1.14 3.02 0 4.36-2.62 5.34-5.12 5.62 0.4 0.34 0.72 1 0.72 2.02v3c0 0.3 0.2 0.64 0.76 0.54C20.84 21.59 24 17.18 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.49 4.97c-0.85 0.37-1.76 0.61-2.72 0.72 0.98-0.58 1.73-1.5 2.08-2.6-0.91 0.54-1.91 0.94-2.98 1.16-0.86-0.91-2.1-1.48-3.46-1.48-2.62 0-4.74 2.12-4.74 4.74 0 0.37 0.04 0.73 0.12 1.08-3.94-0.2-7.44-2.09-9.78-4.96-0.4 0.68-0.62 1.48-0.62 2.32 0 1.6 0.81 3.01 2.04 3.83-0.75-0.02-1.45-0.23-2.06-0.57v0.06c0 2.24 1.6 4.11 3.72 4.53-0.39 0.1-0.81 0.16-1.24 0.16-0.3 0-0.6-0.03-0.89-0.08 0.6 1.87 2.33 3.23 4.38 3.27-1.6 1.25-3.62 1.99-5.82 1.99-0.38 0-0.76-0.02-1.13-0.07 2.08 1.33 4.54 2.11 7.19 2.11 8.63 0 13.35-7.15 13.35-13.35 0-0.2-0.01-0.39-0.02-0.58 0.92-0.66 1.72-1.5 2.35-2.45z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
