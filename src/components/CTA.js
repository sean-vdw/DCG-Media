export default function CTA() {
  return (
    <div className="bg-sky-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Interested in collaborating?</span>
          <span className="block text-sky-700">Get in touch.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 md:justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="mailto:invest@drawingcapital.com"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
