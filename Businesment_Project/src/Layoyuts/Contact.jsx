import {useState} from "react";

const Contact = () => {
  const [form,setForm] = useState({ name:"", email:"",message: ""});
    const [submitted,setSubmitted] =useState(false);
    const handleChange = (event)=>{
    setForm(
        {...form, [event.target.name]: event.target.value}
    );
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false),6000)
    setForm({ name: "",message: "",email: "" })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 ">
      <div className="w-full flex flex-col md:flex-row gap-20 max-w-5xl bg-white p-8 md:p-16  border-t-2">
        <div className=" flex flex-1  flex-col justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-purple-700">Let's Connect!
            </h1>
            <p className=" text-lg mb-6 text-gray-600">
              Whether you have a question, want to know more, or just want to say hi, our inbox is always open for you. We will do our best to get back to you as soon as possible!
            </p>
            <div className="mb-8 space-y-4 ">
              <div className="flex gap-3 items-center ">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l11.985-7.713-1.741-2.56-10.244 6.606-10.244-6.606-1.741 2.56z"/><path d="M0 5.383v13.234l9.803-6.312z"/><path d="M14.197 12.305l9.803 6.312v-13.234z"/><path d="M12 14.587l-10.244 6.606 1.741 2.56 8.503-5.482 8.503 5.482 1.741-2.56z"/></svg>
                <span className="text-gray-700 font-medium">contact@businesment.com</span>
              </div>
              <div className=" gap-3 flex items-center ">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c-5.523 0-10 4.477-10 10 0 4.418 2.917 8.166 7 9.542v-6.755h-2.121v-2.787h2.121v-1.863c0-2.099 1.272-3.253 3.175-3.253.921 0 1.885.164 1.885.164v2.07H15.11c-1.016 0-1.333.631-1.333 1.278v1.604h2.266l-.363 2.787h-1.903v6.755c4.083-1.376 7-5.124 7-9.542 0-5.523-4.477-10-10-10z"/></svg>
                <span className="text-gray-700 font-medium">+2 (444) 90907888</span>
              </div>
              <div className="flex gap-3 items-center ">
                <svg className="w-6 h-6 text-Primary" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487c1.44.387 2.648 1.362 3.204 2.777.387 1.028.387 2.154.387 4.406v2.66c0 2.252 0 3.378-.387 4.406-.556 1.415-1.764 2.39-3.203 2.777C14.733 21 12 21 12 21s-2.733 0-4.862-.487c-1.44-.387-2.648-1.362-3.204-2.777C3 17.04 3 15.914 3 13.662v-2.66c0-2.252 0-3.378.387-4.406C3.943 5.849 5.151 4.874 6.591 4.487 8.719 4 12 4 12 4s3.281 0 5.409.487z" /></svg>
                <span className="text-gray-700 font-medium">Uttara, Dhaka-1230.</span>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2 text-secondary">About Our Company</h2>
              <p className="text-gray-600">
                At <span className="font-semibold text-secondary">YourCompany</span>, we believe in building digital experiences that delight users and empower businesses. Our team is passionate about modern web technologies and dedicated to delivering solutions that make a difference. Let's create something amazing together!
              </p>
            </div>
          </div>

          <div className="flex gap-6 mt-6">
            <a
              href=""
              className="text-primary hover:text-purple-600 transition-colors text-xl"
              aria-label="Send Email"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 6.91v10.18C2.01 19.12 3.9 21 6.09 21h11.82c2.19 0 4.08-1.88 4.08-4.09V6.91c0-2.2-1.89-4.09-4.08-4.09H6.09C3.9 2.82 2.01 4.7 2.01 6.91zm16.9-.9c.61 0 1.09.5 1.09 1.09v.06L12 13.09 3.99 7.16v-.06C3.99 6.5 4.48 6 5.09 6h13.82zM4 8.51l7.41 5.22a1 1 0 001.18 0L20 8.5v7.41c0 1.13-.91 2.09-2.09 2.09H6.09A2.09 2.09 0 014 15.91V8.51z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/md-moonzoor-mamun-munna-266050335"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-purple-600 transition-colors text-xl"
              aria-label="LinkedIn"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.994 3H4.007A1.007 1.007 0 003 4.009v15.982C3 20.993 4.007 22 5.007 22h15.986C20.993 22 22 20.993 22 19.991V4.009C22 3.007 20.993 3 19.994 3zM8.481 18.34H5.743v-7.034h2.738v7.034zm-1.37-8.034a1.59 1.59 0 110-3.179 1.59 1.59 0 010 3.179zm11.189 8.034h-2.738v-3.413c0-.816-.014-1.867-1.138-1.867-1.139 0-1.314.89-1.314 1.808v3.472h-2.738v-7.034h2.63v.962h.037c.367-.693 1.267-1.426 2.607-1.426 2.788 0 3.302 1.834 3.302 4.221v4.277z"/>
              </svg>
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-purple-600 transition-colors text-xl"
              aria-label="Twitter"
            >
              <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 5.924c-.793.352-1.644.59-2.54.698a4.513 4.513 0 001.98-2.49 9.01 9.01 0 01-2.84 1.085A4.505 4.505 0 0016.11 4c-2.491 0-4.512 2.014-4.512 4.493 0 .35.04.692.116 1.02C7.728 9.36 4.1 7.58 1.67 4.99c-.383.657-.604 1.423-.604 2.24 0 1.546.791 2.913 2.004 3.715-.736-.023-1.43-.225-2.037-.561v.056c0 2.162 1.546 3.967 3.597 4.374a4.52 4.52 0 01-2.025.076c.571 1.769 2.229 3.057 4.193 3.09A9.055 9.055 0 012 19.293c-.658 0-1.3-.038-1.937-.113A12.825 12.825 0 007.29 21c8.293 0 12.84-6.864 12.84-12.82 0-.195-.006-.388-.016-.579a9.178 9.178 0 002.346-2.352z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center">
          {submitted && (
            <div className="mb-6 w-full bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg shadow-sm text-center transition-all">
              Thank you for reaching out! We'll be in touch soon. 
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6"
            autoComplete="off"
          >
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="name">
                Name
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-semibold" htmlFor="message">
                Message
              </label>
              <textarea
                required
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows="5"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-bold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-blue-600 transition-transform duration-200"
              disabled={submitted}
            >
              {submitted ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;