const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl">Contact Us</h1>
      <form className="flex flex-col items-center">
        <label className="mb-2">
          Name:
          <input type="text" name="name" className="ml-2 border p-1" />
        </label>
        <label className="mb-2">
          Email:
          <input type="email" name="email" className="ml-2 border p-1" />
        </label>
        <label className="mb-2">
          Message:
          <textarea name="message" className="ml-2 border p-1"></textarea>
        </label>
        <button type="submit" className="mt-2 border p-2 bg-blue-500 text-white">Submit</button>
      </form>
    </div>
  );
};

export default Contact;