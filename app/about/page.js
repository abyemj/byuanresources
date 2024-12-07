export default function AboutPage() {
    return (
      <div className="bg-white font-sans">
        {/* Header Section */}
        <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("/skyscraper.jpg")' }}>
          <div className="absolute inset-0 bg-navy-blue/80"></div>
          <div className="relative z-10 flex items-center justify-center h-full">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
          </div>
        </div>
  
        {/* About Us Content */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Byuan Resources Ltd (BRL) is a multi-business company incorporated as a limited liability in Abuja in September 2008,
            by its founder Dr. Mathias Byuan. The principal business of BRL are:
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-700 leading-relaxed">
            <li>Engineering &amp; General Construction</li>
            <li>Financial Consultation (Revenue &amp; Income Generation)</li>
            <li>Oil &amp; Gas</li>
            <li>Power Generation</li>
            <li>Freight &amp; Logistics (Clearing &amp; Forwarding)</li>
            <li>Property Consultants &amp; Developers</li>
            <li>ICT Solutions</li>
            <li>General Contractors</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-8">
            The Company started as a small and disciplined entity working mainly as a property consultant, developer, and subcontractor.
            Within a short period, her credibility and on-point delivery earned her an enviable reputation for customer service and satisfaction.
            In turn, BRL gradually morphed into the multi-chain of businesses and general contractors it is today.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            On inception, BRL started as a property developer and civil engineering construction company. However, today, it has become
            a major player in the building of Nigeria’s civil infrastructure, especially in the Federal Capital Territory (FCT), and professional
            in Revenue and Income Generation with her Revenue Assurance Platform (RAP).
          </p>
  
          {/* Mission Statement */}
          <h2 className="text-2xl md:text-3xl font-bold text-navy-blue mb-4">Mission Statement</h2>
          <p className="text-gray-700 leading-relaxed italic">
            “Executing projects with the utmost sense of quality using the latest cutting-edge technologies to give value for money employing international best practices which dives into the vision of the company in its undertaking.”
          </p>
        </div>
      </div>
    );
  }
  