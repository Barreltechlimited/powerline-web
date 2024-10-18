import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FooterProps {
  handleNavigation: (section: string) => void;
}

interface NewsletterFormValues {
  email: string;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ handleNavigation }, ref) => {
    const initialValues: NewsletterFormValues = { email: "" };

    const validationSchema = Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    });

    const handleSubmit = (
      values: NewsletterFormValues,
      { resetForm }: { resetForm: () => void }
    ) => {
      console.log("Newsletter Email:", values.email);
      resetForm();
    };

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
      <footer
        ref={ref}
        className="bg-white text-black w-11/12 max-w-screen-xl mx-auto pt-[70px]"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/">
                <Image
                  src="/img/powerline-logo.svg"
                  alt="Hivenify Logo"
                  width={241}
                  height={52}
                  className="w-[130px] h-auto mb-3"
                />
              </Link>
              <p className="text-sm">
                Powering your convenience with secure, seamless electricity bill
                payments anytime, anywhere.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-xl">Links</h3>
              <ul className="text-sm">
                <li
                  className="mb-2 hover:text-black/50 cursor-pointer"
                  onClick={() => {
                    handleNavigation("heroRef");
                  }}
                >
                  Home (Top)
                </li>
                <li
                  className="mb-2 hover:text-black/50 cursor-pointer"
                  onClick={() => {
                    handleNavigation("howItWorksRef");
                  }}
                >
                  How it works
                </li>

                <li
                  className="mb-2 hover:text-black/50 cursor-pointer"
                  onClick={() => {
                    handleNavigation("testimonialRef");
                  }}
                >
                  Testimonial
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-xl">Legal</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="#" className="hover:text-black/50">
                    Terms of use
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-black/50">
                    Privacy policy
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-black/50">
                    Cookie policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-xl">Newsletter</h3>
              <p className="text-sm mb-2">
                The platform is incredibly easy to use. I can pay my electricity
                bill in just a few clicks!
              </p>

              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="flex border border-[#0752E8] rounded-md">
                    <div className="flex-1 relative">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter Your Email Address"
                        className="bg-white text-black px-4 py-2 rounded-l-md  w-full focus:outline-none border-[#0752E8]"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs mt-1 absolute -bottom-4"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#0752E8] text-black px-4 py-2 rounded-r-md hover:bg-[#0752E8]/50 transition duration-200"
                      disabled={isSubmitting}
                    >
                      <Image
                        src="/icons/send.svg"
                        alt="Send Icon"
                        width={23}
                        height={26}
                        className="w-[23] h-auto"
                      />
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
          <div className="text-center text-sm border-t mt-5 py-6 flex flex-row justify-between items-center">
            <p className="font-medium hidden sm:block sm:text-sm">
              Privacy & Terms
            </p>
            <p className="font-medium text-xs sm:text-sm">
              Copyright @{currentYear} Powerline
            </p>
            <div className="flex flex-row gap-2 sm:gap-4 items-center">
              <Link href={"/"}>
                <Image
                  src="/icons/x.svg"
                  alt="Twitter (X) Logo"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/icons/facebook.svg"
                  alt="Facebook Logo"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px]"
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="/icons/instagram.svg"
                  alt="Instagram Logo"
                  width={25}
                  height={25}
                  className="w-[25px] h-[25px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

export default Footer;
