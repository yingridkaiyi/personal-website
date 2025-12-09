export default function AboutPage() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
          About Me
        </h1>
        
        <div className="prose prose-lg prose-blue text-gray-500">
          <p>
            Hi, I'm a Data Science student with a passion for Product Design.
            I believe that the best products are built at the intersection of quantitative insights and qualitative user empathy.
          </p>
          <p>
            My journey began with a fascination for numbers and patterns. As I delved deeper into data science, I realized that data without context or usability often fails to make an impact. This led me to explore the world of User Experience (UX) design.
          </p>
          <p>
            Now, I strive to bridge the gap between these two fields. I use data to inform design decisions and design thinking to make data more accessible and actionable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Education</h2>
          <div className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r-lg">
            <h3 className="text-lg font-semibold text-gray-900">B.S. in Data Science</h3>
            <p className="text-gray-600">University Name, Class of 202X</p>
            <p className="text-gray-500 text-sm mt-1">Minor in Interaction Design / Human-Computer Interaction</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Science</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Python (Pandas, NumPy, Scikit-learn)</li>
                <li>R Programming</li>
                <li>SQL & Database Management</li>
                <li>Data Visualization (Tableau, Matplotlib)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Product & Design</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Figma & Prototyping</li>
                <li>User Research & Testing</li>
                <li>Frontend Dev (React, Tailwind CSS)</li>
                <li>Wireframing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

