import { assets } from '../assets/frontend_assets/assets';
import NewsletterBox from '../components/NewsletterBox';
import Title from '../components/Title';

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col justify-center md:flex-row  gap-10 my-10 mb-28">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full sm:max-w-[480px]"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            7298 King Lodge
            <br />
            North Elton, Illinois 78154
          </p>

          <p className='text-gray-500'>Tel: (415) 555-0123
            <br />Email: admin@gmail.com
          </p>

          <p className="font-semibold text-xl text-gray-500">Careers at Forever</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button
            className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500 "
            onClick={scrollToTop}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default Contact;