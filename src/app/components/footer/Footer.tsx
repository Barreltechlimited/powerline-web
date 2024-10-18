import React from "react";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ handleNavigation }, ref) => {
    return (
      <footer ref={ref} className="bg-gray-800 text-white mt-[70px] py-8">
        <button onClick={() => handleNavigation("contactUsRef")}>
          Go to Contact Us
        </button>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-2">Powerline</h3>
              <p className="text-sm">
                Powering your convenience with secure, seamless electricity bill
                payments anytime, anywhere
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Links</h3>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    How it works
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Contact us
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Testimonial
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Legal</h3>
              <ul className="text-sm">
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Terms of use
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Privacy policy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:text-gray-300">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Newsletter</h3>
              <p className="text-sm mb-2">
                The platform is incredibly easy to use. I can pay my electricity
                bill in just a few clicks!
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l w-full"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition duration-200">
                  {/* <ArrowRight className="w-5 h-5" /> */}
                </button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm">
            <p>Privacy & Terms</p>
            <p>Copyright @2024 Powerline</p>
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
