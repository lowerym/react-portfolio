import React from 'react'

const Contact = () => {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <div name="contact" id="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Send me a message</p>
            </div>
            <form netlify name="contact" onSubmit={handleSubmit} className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' onChange={(e) => setName(e.target.value)} />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
              <button type="submit" className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    </div>
  )
}
export default Contact;
