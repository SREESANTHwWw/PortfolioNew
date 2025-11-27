

const Contact = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col w-[75%] gap-9">

        <h2 className="group text-4xl text-white font-semibold transition duration-300 font-Saira">

          Contact Me
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"> </span>
        </h2>

        <div className="flex flex-col items-center w-full gap-10 p-10 mt-10 border-2 border-white rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="sm:w-96 w-62 h-10 rounded-lg px-4 border-2 text-white outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="sm:w-96 w-62 h-10 rounded-lg px-4 border-2 text-white outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="sm:w-96 w-62 h-32 rounded-lg px-4 py-2 border-2 text-white outline-none resize-none"
          ></textarea>
          <button className="sm:w-32 w-24 h-10 rounded-2xl bg-amber-50 text-black sm:text-xl border-2 text-xl font-Saira font-bold">
            Send
          </button>
        </div>

        <hr className="w-full h-0.5 bg-white mt-10" />

      </div>
    </div>
  );
};

export default Contact;
