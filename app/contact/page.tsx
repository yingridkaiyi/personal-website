export default function ContactPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            I'm currently looking for internships and opportunities in Product Data Science or UX Research.
          </p>
        </div>

        <div className="bg-gray-50 py-8 px-6 shadow-sm rounded-lg border border-gray-100 text-center">
          <p className="text-gray-600 mb-6">
            The best way to reach me is via email or LinkedIn.
          </p>
          
          <div className="space-y-4">
            <a
              href="mailto:hello@example.com"
              className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Send me an Email
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

