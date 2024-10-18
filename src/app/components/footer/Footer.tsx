import React from "react";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ handleNavigation }, ref) => {
    return (
      <footer ref={ref} className="my-20">
        Footer Here
        <button onClick={() => handleNavigation("contactUsRef")}>
          Go to Contact Us
        </button>
        <div className="min-h-screen bg-gray-100">
          <main className="container mx-auto px-4 py-8">


            <section className="bg-white p-6 rounded-lg shadow mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-4">
                    Never run out of power again!
                  </h2>
                  <p className="mb-4">
                    Stay connected with ease using our secure bill payment
                    service. Pay your electricity bills and enjoy continuous
                    service anytime, anywhere.
                  </p>
                  <div className="flex">
                    <input
                      type="text"
                      // value={token}
                      // onChange={(e) => setToken(e.target.value)}
                      placeholder="XXXXX-XXXXX"
                      className="border rounded-l px-4 py-2 w-full md:w-64"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition duration-200">
                      Get token
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Light bulb"
                    className="w-32 h-32 md:w-48 md:h-48"
                  />
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="font-bold mb-2">Powerline</h3>
                  <p className="text-sm">
                    Powering your convenience with secure, seamless electricity
                    bill payments anytime, anywhere
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
                    The platform is incredibly easy to use. I can pay my
                    electricity bill in just a few clicks!
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
        </div>
      </footer>
    );
  }
);

export default Footer;
