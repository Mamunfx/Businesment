import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis,ResponsiveContainer } from "recharts";

const data = [
  {
    "name": "2018",
    "businesment": 1000,
    "others": 2400
  },
  {
    "name": "2019",
    "businesment": 900,
    "others": 1398
  },
  {
    "name": "2020",
    "businesment": 2000,
    "others": 7000
  },
  {
    "name": "2021",
    "businesment": 3000,
    "others": 3908
  },
  {
    "name": "2022",
    "businesment": 4000,
    "others": 4800
  },
  {
    "name": "2023",
    "businesment": 5000,
    "others": 3800
  },
  {
    "name": "2024",
    "businesment": 8000,
    "others": 4300
  }
]

const Sales = () => {
  return (
    <div className="space-y-12 mt-12 mb-12 w-11/12 mx-auto">
        <h1 className="text-5xl font-semibold text-primary">Annual sales :</h1>
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
   
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="businesment" fill="#0542c7" />
            <Bar dataKey="others" fill="#D3D3D3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    <section className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 shadow space-y-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Company Overview</h2>
        <p className="text-lg text-gray-700">
          At <span className="font-semibold text-primary">Businesment</span>, we believe in the power of effective management to transform businesses and change lives. We’re not just consultants—we’re partners in your growth. Our mission is simple: empower organizations and entrepreneurs to reach their highest potential. Through innovative strategies, real-world guidance, and hands-on support, our team helps you unlock new levels of success.
        </p>
        <p className="text-lg text-gray-700">
          We know every business is unique. That’s why we tailor our services to fit your goals, challenges, and dreams. With years of experience and industry know-how, we’re equipped to guide you through today’s fast-paced, ever-changing business landscape. Our approach is about more than just numbers—it’s about people, ideas, and the confidence to take bold steps forward.
        </p>
      </section>

     <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-8">
          <h3 className="text-2xl font-semibold text-primary mb-3">Annual Sales Performance</h3>
          <div className="mb-6">
            <h4 className="font-bold text-lg mb-2">Last Year (2023)</h4>
            <p className="text-gray-700 mb-2">
              2023 was a year of momentum for Businesment. Our community of clients grew, and so did the value we delivered. We reached <span className="font-bold">$4.2 million</span> in sales—a 15% leap from the year before.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Businesses looked to us for practical management as they adapted to big changes.</li>
              <li>We stepped into new markets, especially with ambitious smaller companies.</li>
              <li>Our “Empower Your Team” workshops brought together over 150 organizations, sparking real change.</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">This Year (2024)</h4>
            <p className="text-gray-700 mb-2">
              This year is already on track to top the last. We’re expecting to close out 2024 with <span className="font-bold">$5.1 million</span> in sales—a 21% rise over last year. It’s a sign that our approach is working and our clients are coming back for more.
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>We’ve rolled out new AI-driven management tools, helping clients make smart, timely decisions.</li>
              <li>Our partnerships with tech and HR leaders broadened what we offer.</li>
              <li>Most importantly, 87% of the businesses we worked with last year chose to continue with us or expanded their engagement.</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-100 to-white rounded-2xl shadow p-8 flex flex-col">
          <h4 className="text-xl font-bold mb-4">Sales at a Glance</h4>
          <table className="min-w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-blue-200 rounded-l-lg">Year</th>
                <th className="py-2 px-4 bg-blue-200">Annual Sales</th>
                <th className="py-2 px-4 bg-blue-200 rounded-r-lg">% Growth YoY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white shadow">
                <td className="py-2 px-4 rounded-l-lg">2022</td>
                <td className="py-2 px-4">$3.65 million</td>
                <td className="py-2 px-4 rounded-r-lg">—</td>
              </tr>
              <tr className="bg-white shadow">
                <td className="py-2 px-4 rounded-l-lg">2023</td>
                <td className="py-2 px-4">$4.20 million</td>
                <td className="py-2 px-4 rounded-r-lg">15%</td>
              </tr>
              <tr className="bg-white shadow">
                <td className="py-2 px-4 rounded-l-lg">2024</td>
                <td className="py-2 px-4">$5.10 million</td>
                <td className="py-2 px-4 rounded-r-lg">21%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">How We Stack Up</h2>
        <p className="text-gray-700">
          You’ve got choices when it comes to management partners. Businesment stands alongside well-known names like StratEdge Consulting, GrowthDrive Solutions, and ManageRight Partners. Here’s how we measure up:
        </p>
        <ul className="list-inside list-disc text-gray-700 space-y-1">
          <li><span className="font-semibold">Client Satisfaction:</span> Our average rating is 4.8 out of 5, reflecting our attention to real empowerment and development. It’s the highest among our peers.</li>
          <li><span className="font-semibold">Service Innovation:</span> We’re at the forefront with personalized coaching and AI analytics, while others are just starting to move in this direction.</li>
          <li><span className="font-semibold">Sales & Growth:</span> StratEdge may be bigger (over $7 million), but our 21% growth rate is among the fastest out there. Others are growing, but not at our pace.</li>
          <li><span className="font-semibold">Client Retention:</span> 87% of clients renew with us—a clear sign we’re delivering value that lasts.</li>
        </ul>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 shadow space-y-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">Achievements We’re Proud Of</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>Recognized as “Top Innovator in Business Management” by the National Consultancy Association in 2024.</li>
          <li>Supported over 200 businesses in their transformation journey over the last two years.</li>
          <li>Hosted our first “Empowerment Summit,” drawing over 500 business leaders.</li>
          <li>Our whitepaper, <em>The Future of Empowered Management</em>, is now being used in university business courses.</li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl shadow p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">What Our Clients Say</h2>
        <div className="space-y-4">
          <blockquote className="italic border-l-4 border-primary pl-4 text-gray-700">
            “Businesment helped us revolutionize our approach to team management. Their guidance was transformative, directly boosting both morale and performance.”
            <br />
            <span className="font-bold text-primary">— Jamie Perez, CEO, TechNova Inc.</span>
          </blockquote>
          <blockquote className="italic border-l-4 border-primary pl-4 text-gray-700">
            “The AI tools and personalized coaching from Businesment set them apart from any consulting firm we’ve worked with. Highly recommended!”
            <br />
            <span className="font-bold text-primary">— Linda Thompson, COO, GreenLeaf Marketing</span>
          </blockquote>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-100 to-white rounded-2xl p-8 shadow space-y-4">
        <h2 className="text-2xl font-semibold text-primary mb-2">Looking Ahead</h2>
        <p className="text-gray-700">
          We’re just getting started. Businesment is always exploring new ways to help clients grow, whether it’s with new technology or by building a stronger team. We’re here for the long run, committed to helping you reach your next milestone.
        </p>
        <p className="text-gray-700">
          If you want more than minor improvements—if you’re ready for a real leap forward—let’s make it happen together. Discover what sets Businesment apart.
        </p>
      </section>

    </div>
  );
};

export default Sales;
