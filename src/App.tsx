import { useState, useEffect } from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds (2,000 ms)
    return () => clearTimeout(timer);
  }, []);

  const handleDownloadBusinessApk = () => {
    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.href = '/JazzCash%20Business.apk'; // URL-encoded for spaces
    link.download = 'JazzCash Business.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="w-24 h-24 mb-4">
            <img src="/images/jazzcash_business_logo.png" alt="JazzCash Business Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-[#006666] mb-8">JazzCash Business</h1>
          <div className="w-16 h-16 border-t-4 border-[#006666] border-solid rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading experience...</p>
        </div>
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 w-screen max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-8 box-border font-inter">
          {/* Header */}
          <header className="bg-white shadow-md fixed top-[48px] left-0 right-0 z-40">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <img src="/images/jazzcash_business_logo.png" alt="JazzCash Business Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold ml-2 text-[#006666] font-inter">JazzCash Business</span>
              </div>
              <button 
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#006666] lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
              <nav className="hidden lg:flex space-x-8">
                <a href="#features" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">Why Apply with JazzCash Business?</a>
                <a href="#maryam-nawaz-posters" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">Maryam Nawaz Loan Scheme Posters</a>
                <a href="#download" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">Download</a>
                <a href="#faq" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">FAQ</a>
                <button 
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="text-gray-700 hover:text-[#006666] transition-colors duration-200 flex items-center"
                >
                  Contact <FaChevronDown className="ml-1" />
                </button>
              </nav>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden bg-white shadow-lg rounded-b-lg overflow-hidden">
                <nav className="flex flex-col p-4 space-y-4">
                  <a href="#features" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">Why Apply with JazzCash Business?</a>
                  <a href="#maryam-nawaz-posters" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">Maryam Nawaz Loan Scheme Posters</a>
                  <a href="#download" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">Download</a>
                  <a href="#faq" className="text-gray-700 hover:text-[#006666] transition-colors duration-200">FAQ</a>
                  <button 
                    onClick={() => setIsContactOpen(!isContactOpen)}
                    className="text-left text-gray-700 hover:text-[#006666] transition-colors duration-200 flex items-center"
                  >
                    Contact <FaChevronDown className="ml-1" />
                  </button>
                </nav>
              </div>
            )}
            
            {/* Contact Dropdown */}
            {isContactOpen && (
              <div className="absolute right-4 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 p-4">
                <div className="flex items-center mb-4">
                  <img src="/images/jazzcash_business_logo.png" alt="JazzCash Business Logo" className="w-10 h-10 object-contain" />
                  <span className="text-xl font-semibold ml-2 text-[#006666] font-inter">JazzCash Business</span>
                </div>
                <div className="space-y-3">
                  <a href="mailto:info@qnb.qa" className="flex items-center text-gray-700 hover:text-[#006666]">
                    <FaEnvelope className="mr-2" /> info@qnb.qa
                  </a>
                  <a href="tel:+97444490000" className="flex items-center text-gray-700 hover:text-[#006666]">
                    <FaPhone className="mr-2" /> +974 4449 0000
                  </a>
                  <a href="https://maps.google.com" className="flex items-center text-gray-700 hover:text-[#006666]">
                    <FaMapMarkerAlt className="mr-2" /> Doha, Qatar
                  </a>
                  <div className="flex space-x-4 pt-2">
                    <a href="https://facebook.com/qnbqa" className="text-gray-700 hover:text-[#006666]">
                      <FaFacebook />
                    </a>
                    <a href="https://twitter.com/qnbqa" className="text-gray-700 hover:text-[#006666]">
                      <FaTwitter />
                    </a>
                    <a href="https://instagram.com/qnbqa" className="text-gray-700 hover:text-[#006666]">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/company/qatar-national-bank" className="text-gray-700 hover:text-[#006666]">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </header>

          {/* Download App Button below title under menu */}
          <div className="w-full flex justify-center mt-4">
            <button
              className="bg-[#006666] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 flex items-center justify-center border-2 border-[#006666] hover:bg-[#009999] hover:border-[#009999] focus:outline-none focus:ring-2 focus:ring-[#006666] focus:ring-opacity-50"
              onClick={handleDownloadBusinessApk}
            >
              <FaDownload className="mr-2 text-white text-xl" />
              <span className="text-lg text-blue-900">Download JazzCash Business App</span>
              <span className="absolute -right-1 -top-1 bg-white text-[#006666] text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold animate-pulse">Free</span>
            </button>
          </div>

          {/* Mobile-First Hero Section: CM Punjab Loan Scheme */}
          <section
            className="w-full py-10 px-3 text-white text-center rounded-2xl shadow-2xl mt-6 mx-auto max-w-sm mb-4"
            style={{ background: '#006666' }}
          >
            <div className="relative z-10">
              <h1 className="text-2xl font-extrabold mb-4 drop-shadow-lg leading-tight tracking-tight text-white">
                Apply for CM Punjab Asaan Karobar Loan
              </h1>
              <p className="text-base mb-3 max-w-xs mx-auto drop-shadow-md font-medium text-white">
                Interest-free loans up to <span className="font-bold text-[#F7B500]">PKR 30 Million</span>, powered by JazzCash Business.
              </p>
              <div className="border-b border-white/20 w-full mb-3"></div>
              <p className="text-base max-w-xs mx-auto drop-shadow-md font-medium text-white">
                This offer is for JazzCash app users to upgrade their app to JazzCash Business app to apply online for loan. Download application now.
              </p>
              <button
                className="bg-white text-green-800 font-extrabold px-6 py-3 rounded-full shadow-xl hover:bg-gray-50 transition-all duration-300 mb-6 border-2 border-green-300 text-base drop-shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 w-full relative z-10 hover:text-green-700 flex items-center justify-center hover:border-green-400"
                onClick={handleDownloadBusinessApk}
              >
                <FaDownload className="mr-2 text-green-800 text-xl" />
                Download Application
              </button>
              {/* Dashboard-like Loan Highlights - Horizontal for Mobile (inside hero) */}
              <div className="flex flex-row justify-between gap-3 mt-4">
                <div className="bg-[#004d40] flex-1 rounded-xl px-2 py-4 shadow-md flex flex-col items-center min-w-0">
                  <span className="block text-lg font-bold text-[#F7B500]">10,000+</span>
                  <span className="block text-xs font-medium text-white mt-1">Beneficiaries</span>
                </div>
                <div className="bg-[#004d40] flex-1 rounded-xl px-2 py-4 shadow-md flex flex-col items-center min-w-0">
                  <span className="block text-lg font-bold text-[#F7B500]">5 Years</span>
                  <span className="block text-xs font-medium text-white mt-1">Repayment</span>
                </div>
                <div className="bg-[#004d40] flex-1 rounded-xl px-2 py-4 shadow-md flex flex-col items-center min-w-0">
                  <span className="block text-lg font-bold text-[#F7B500]">0%</span>
                  <span className="block text-xs font-medium text-white mt-1">Interest</span>
                </div>
              </div>
            </div>
          </section>

          {/* CM Punjab Asaan Karobar Scheme Banner - Retry with fixed aspect ratio and fallback */}
          <section className="w-full max-w-sm mx-auto my-6 flex justify-center">
            <img 
              src="https://www.samaa.tv/images/asaan-karobar-punjab-maryam-latest-apply.jpg" 
              alt="CM Punjab Asaan Karobar Scheme Banner" 
              className="w-full max-h-52 rounded-xl shadow-lg object-cover bg-gray-100" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </section>

          {/* Hero Section with Image */}
          <section className="relative w-full py-12 md:py-24 bg-white">
            <div className="container mx-auto px-4">
              <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                <img
                  src="/images/hero_jazzcash.jpg"
                  alt="JazzCash Hero"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="mt-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-[#006666] mb-4">Welcome to JazzCash Business</h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                  Experience seamless digital banking with JazzCash. Manage your finances, transfer money, and much more—all in one secure app.
                </p>
              </div>
            </div>
          </section>

          {/* --- Other Components / Steps (Placeholder for 2 steps) --- */}
          <section className="my-8 max-w-sm mx-auto">
            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
              <h3 className="text-lg font-bold text-[#006666] mb-2">Step 1: Download JazzCash Business App</h3>
              <p className="text-gray-700 text-sm">Download and install the JazzCash Business app from the Play Store or App Store to start your application for the CM Punjab Asaan Karobar Loan.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-5">
              <h3 className="text-lg font-bold text-[#006666] mb-2">Step 2: Register & Apply</h3>
              <p className="text-gray-700 text-sm">Open the app, register your business account, and follow the instructions to apply for the loan scheme directly from your phone.</p>
            </div>
          </section>

          {/* Mobile-First Screenshots Section */}
          <section id="screenshots" className="py-8">
            <div className="mx-auto max-w-sm">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2 text-[#006666]">App Screenshots</h2>
                <p className="text-base text-gray-600 max-w-xs mx-auto">
                  Take a closer look at the sleek interface and powerful features of JazzCash Business
                </p>
              </div>
              <div className="flex overflow-x-auto pb-6 space-x-4 snap-x scrollbar-hide justify-start" style={{scrollbarWidth: 'none'}}>
                <img 
                  src="/cbq-assets/screenshot1.jpeg" 
                  alt="JazzCash Business App Preview 1" 
                  className="w-full max-w-[340px] h-[600px] rounded-lg shadow-lg snap-center bg-white object-contain flex-shrink-0" 
                  style={{minWidth: '340px', maxWidth: '340px'}}
                />
                <img 
                  src="/cbq-assets/screenshot2.png" 
                  alt="JazzCash Business App Preview 2" 
                  className="w-full max-w-[340px] h-[600px] rounded-lg shadow-lg snap-center bg-white object-contain flex-shrink-0" 
                  style={{minWidth: '340px', maxWidth: '340px'}}
                />
                <img 
                  src="/cbq-assets/screenshot3.png" 
                  alt="JazzCash Business App Preview 3" 
                  className="w-full max-w-[340px] h-[600px] rounded-lg shadow-lg snap-center bg-white object-contain flex-shrink-0" 
                  style={{minWidth: '340px', maxWidth: '340px'}}
                />
              </div>
            </div>
          </section>

          {/* Scheme Highlights Section */}
          <section className="my-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#f3f3f3] rounded-lg shadow p-6">
              <h3 className="text-[#006666] text-2xl font-bold mb-2">PKR 1,000,000 – 30,000,000</h3>
              <p className="text-gray-700">Loan Amount Range</p>
            </div>
            <div className="bg-[#f3f3f3] rounded-lg shadow p-6">
              <h3 className="text-[#006666] text-2xl font-bold mb-2">Interest-Free</h3>
              <p className="text-gray-700">No markup or interest for applicants</p>
            </div>
            <div className="bg-[#f3f3f3] rounded-lg shadow p-6">
              <h3 className="text-[#006666] text-2xl font-bold mb-2">Flexible Repayment</h3>
              <p className="text-gray-700">Up to 5 years (60 monthly installments)</p>
            </div>
          </section>

          {/* Loan Application Multi-Step Form */}
          <section id="loan-application-form" className="my-16 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#006666] mb-6 text-center">How to Apply</h2>
            <p className="text-gray-700 text-center mb-6">
              To apply for the CM Punjab Asaan Karobar Loan, please download the official JazzCash Business mobile app. The complete digital loan application form is available inside the app for your convenience and security.
            </p>
            <div className="flex flex-col items-center gap-4">
              <button
                className="bg-[#006666] text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-[#009999] transition flex items-center"
                onClick={handleDownloadBusinessApk}
              >
                <FaDownload className="mr-2 text-white text-xl" /> 
                <span className="text-lg text-blue-900">Download JazzCash Business App</span>
                <span className="absolute -right-1 -top-1 bg-white text-[#006666] text-xs px-2 py-1 rounded-bl-lg rounded-tr-lg font-bold animate-pulse">Free</span>
              </button>
              <span className="text-sm text-gray-500">Available for Android. Fill out your loan application securely in the app.</span>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-8">
            <div className="container mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#006666]">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Find answers to common questions about JazzCash Business Banking and the CM Punjab Asaan Karobar Loan Scheme
                </p>
              </div>
              
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(0)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">Is JazzCash Business Banking secure?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(0) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(0) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        Yes, JazzCash Business Banking uses state-of-the-art security measures including biometric authentication, encryption, and fraud monitoring systems to keep your information safe.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(1)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">How do I register for JazzCash Business Banking?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(1) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(1) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        Download the app, click on "Register," and follow the on-screen instructions. You'll need your JazzCash Business debit card details and registered mobile number to complete the registration.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(2)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">What features are available on JazzCash Business?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(2) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(2) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        JazzCash Business offers account management, fund transfers, bill payments, card controls, QR payments, real-time alerts, and many more features to make banking convenient.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(3)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">Who can apply for the loan?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(4) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(4) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        Any resident of Punjab with a valid CNIC, looking to start or expand a business, can apply.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(5)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">What documents are needed for the loan application?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(5) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(5) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        CNIC, business details, income proof, and supporting documents as required by the scheme.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(6)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">Is the loan really interest-free?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(6) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(6) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        Yes, the scheme offers 0% markup for all approved loans.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#f3f3f3] rounded-lg shadow-md overflow-hidden">
                  <button 
                    className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleFaq(7)}
                  >
                    <h3 className="text-lg font-semibold text-[#333333]">How long does loan approval take?</h3>
                    <span className="text-[#006666] transition-transform duration-300" style={{ transform: openFaqs.includes(7) ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <FaChevronDown />
                    </span>
                  </button>
                  {openFaqs.includes(7) && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>
                        Processing time may vary, but JazzCash Business aims to make it as fast and digital as possible.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          
          {/* Footer */}
          <footer className="bg-[#006666] text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center mb-6">
                    <img src="/images/jazzcash_business_logo.png" alt="JazzCash Business Logo" className="w-12 h-12 object-contain" />
                    <span className="text-2xl font-bold ml-3">JazzCash Business</span>
                  </div>
                  <p className="text-gray-200 mb-6 text-base">
                    Your trusted partner for digital banking solutions. Experience seamless, secure, and convenient banking with JazzCash Business.
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com/qnbqa" className="text-white hover:text-[#009999] transition-colors duration-200">
                      <FaFacebook className="text-xl" />
                    </a>
                    <a href="https://twitter.com/qnbqa" className="text-white hover:text-[#009999] transition-colors duration-200">
                      <FaTwitter className="text-xl" />
                    </a>
                    <a href="https://instagram.com/qnbqa" className="text-white hover:text-[#009999] transition-colors duration-200">
                      <FaInstagram className="text-xl" />
                    </a>
                    <a href="https://linkedin.com/company/qatar-national-bank" className="text-white hover:text-[#009999] transition-colors duration-200">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
                
                <div className="md:col-span-2 lg:col-span-1">
                  <div className="grid grid-cols-1 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <a href="#features" className="text-gray-200 hover:text-white transition-colors duration-200">Why Apply</a>
                          <a href="#download" className="text-gray-200 hover:text-white transition-colors duration-200">Download App</a>
                        </div>
                        <div className="flex flex-col">
                          <a href="#faq" className="text-gray-200 hover:text-white transition-colors duration-200">FAQ</a>
                          <a href="https://www.qnb.com/en/personal/ways-to-bank/mobile-and-internet-banking" className="text-gray-200 hover:text-white transition-colors duration-200">Learn More</a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-6">Loan Scheme</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                          <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">About the Scheme</a>
                          <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">Eligibility</a>
                        </div>
                        <div className="flex flex-col">
                          <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">Application Process</a>
                          <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">Benefits</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-6">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-200">
                      <FaPhone className="mr-3 text-xl" />
                      <a href="tel:+923001234567" className="hover:text-white transition-colors duration-200">+92 300 123 4567</a>
                    </div>
                    <div className="flex items-center text-gray-200">
                      <FaEnvelope className="mr-3 text-xl" />
                      <a href="mailto:info@jazzcash.com.pk" className="hover:text-white transition-colors duration-200">info@jazzcash.com.pk</a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-200 text-sm">
                <p>&copy; {new Date().getFullYear()} JazzCash Business. All rights reserved.</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">Privacy Policy</a>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">Terms of Service</a>
                  <a href="#" className="text-gray-200 hover:text-white transition-colors duration-200">Security</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
