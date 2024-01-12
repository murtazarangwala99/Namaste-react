const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <Header /> */}
      <h1 className="font-bold text-3xl">Countact Us Page</h1>
      <form className="border-black border-2 flex flex-col gap-4 m-4 p-4 rounded-md">
        <input
          type="text"
          className="border-black border-2 rounded-md px-3 py-1"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-black border-2 rounded-md px-3 py-1"
          placeholder="Message"
        />
        <button className="py-2 px-4 hover:underline font-semibold hover:text-white hover:bg-slate-600 bg-gray-300 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
