import React from 'react'

const Current = () => {
  return (
    <div>
      <section className="py-40 bg-gray-200">
        <div className="px-6 py-12 md:px-1 text-[#215aa8] text-center lg:text-left">
          <div className="container mx-auto xl:px-20">
            <div className="lg:grid-cols-2 gap-12 sm:flex grid items-center">
              <div className="mt-12 lg:mt-0 px-10">
                <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-12">
                  CRACK-THE-CASE: <br />
                  <span class="text-blue-600 leading-none text-3xl">
                    Hands-On Business Workshop
                    &amp; Paragon Case Challenge
                  </span>
                </h1>
                <p className="my-10 font-semibold text-gray-600">
                  PT Paragon Technology and Innovation through Indonesia Peerleaders presents...
                  <br /><br />
                  💼 CRACK-THE-CASE: <br />
                  Hands-On Business Workshop &amp; Paragon Case Challenge 📚
                  <br /><br />
                  Crack-the-Case is an all-in-one event consisting of a hands-on workshop and Paragon business case challenge. The two events are conducted consecutively but are independently held. 
                  <br /><br />
                  The goal is to improve youth’s business logical thinking and achieve Indonesia Peerleaders’ goal of bridging the learning gap between Indonesian youth, especially students, and FMCG companies.
                  <br /><br />
                  👉Hands-On Workshop:
                  <br />
                  Business Logical Thinking in Corporation Perspective 💡
                  <br />
                  📅 May 20th, 2022...
                </p>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSewDxLXHyd5D4wN-nQM0TjnDa27WqhB5l9EAtkKk7Px0WRMKQ/viewform" target="_blank" rel="noreferrer"
                   className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                   data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Register Now</a>

                <a href="mailto:peerleadersindonesia@gmail.com"
                   className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                   data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">Contact Us</a>
              </div>
              <div className="mb-12 lg:mb-0 mt-10 sm:mt-0 mx-10 w-full">
                <img
                  src="https://i.postimg.cc/6p0RQm42/IPL-crack-the-case.jpg"
                  className="w-full rounded-lg shadow-lg"
                  alt="current event"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Current
