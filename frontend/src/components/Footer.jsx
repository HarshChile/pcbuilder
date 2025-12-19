import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-14 border-t border-gray-800">

    <div className="flex flex-col md:flex-row justify-between gap-10">
        <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

            <p className="text-gray-300 mb-2"><span className="font-semibold">Phone:</span> +91 98765 43210</p>
            <p className="text-gray-300 mb-2"><span className="font-semibold">Email:</span> support@pcbuild.com</p>

            <p className="text-gray-300">
                <span className="font-semibold">Address:</span><br/>
                123 Tech Street,<br/>
                Mumbai, Maharashtra, India
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>

            <div className="flex gap-6 text-3xl">
                <a href="#" className="hover:text-blue-500"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.google.com" className="hover:text-red-500"><i className="fa-brands fa-google"></i></a>
                <a href="https://github.com/stacknaik/saurabhprojects.git" className="hover:text-gray-400"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
    

    <hr className="border-gray-700 my-8"/>

    <p className="text-center text-gray-500 text-sm">
        © 2025 PCBUILD. All rights reserved.
    </p>

</footer>
  )
}

export default Footer
