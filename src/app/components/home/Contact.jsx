import Image from "next/image";
import bg from "@/assets/parallax_bg.jpg";

const Contact = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute top-0 w-full h-full bg-black opacity-30 -z-10">  </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="Note pb-4 flex justify-center items-center text-center flex-col text-white px-12 ">
              <h3 className="text-5xl font-bold"> Premium &amp; Elegant</h3>
              <p className="text-lg ">
                We’re only a message away. Let’s make your shopping experience
                even better!
              </p>
            </div>
            <div className="rounded-xl bg-gray-100 flex justify-center items-center">
              <form>
                <div className="text-center text-3xl font-semibold pt-4 ">
                  <h3>Contact Form</h3>
                </div>
                <div className="username px-6">
                  <label htmlFor="username" className="text-lg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your fullname"
                    id="username"
                    className="w-full rounded-lg p-1 border-1 border-slate-400"
                    required
                  />
                </div>
                <div className="username px-6">
                  <label htmlFor="username" className="text-lg">
                    E-mail Address
                  </label>
                  <input
                    type="email"
                    placeholder="E-mail Address"
                    id="username"
                    className="w-full rounded-lg p-1 border-1 border-slate-400"
                  />
                </div>
                <div className="username px-6">
                  <label htmlFor="username" className="text-lg">
                    Contact{" "}
                  </label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    id="username"
                    className="w-full rounded-lg p-1 border-1 border-slate-400"
                  />
                </div>
                <div className="username px-6">
                  <label htmlFor="username" className="text-lg">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject Here"
                    id="username"
                    className="w-full rounded-lg p-1 border-1 border-slate-400"
                  />
                </div>
                <div className="username px-6  pb-4">
                  <label htmlFor="username" className="text-lg">
                    Message
                  </label>
                  <textarea
                    placeholder="Your message Here"
                    id="username"
                    className="w-full rounded-lg p-1 border-1 border-slate-400"
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default Contact;
