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
        <h1 className="text-5xl font-semibold text-primary">Annual sales </h1>
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
    At <span className="font-semibold text-primary">Businesment</span>, we’re passionate about helping businesses run better. Rather than just offering advice and walking away, we work right alongside our clients, getting hands-on and diving into the challenges they face. Our goal is pretty straightforward: to give organizations and entrepreneurs the tools and confidence they need to grow and thrive. Whether it’s through creative strategies, honest feedback, or rolling up our sleeves to help out, we’re here to make a real difference.
  </p>
  <p className="text-lg text-gray-700">
    We know every business is its own world. That’s why we don’t believe in cookie-cutter solutions. We listen, we ask questions, and we adapt our services so they actually fit your goals and hurdles. Our team’s been around the block and seen all kinds of situations, which helps us guide clients through whatever the current business climate throws their way. Ultimately, it’s not just about numbers for us—it’s about people, ideas, and supporting bold moves.
  </p>
</section>

<section className="grid md:grid-cols-2 gap-8">
  <div className="bg-white rounded-2xl shadow p-8">
    <h3 className="text-2xl font-semibold text-primary mb-3">Annual Sales Performance</h3>
    <div className="mb-6">
      <h4 className="font-bold text-lg mb-2">Last Year (2023)</h4>
      <p className="text-gray-700 mb-2">
        2023 was a year of steady progress for us at Businesment. Our client base expanded, and more importantly, we were able to deliver real value to more organizations. We finished the year with <span className="font-bold">$4.2 million</span> in sales, which is a 15% increase from 2022.
      </p>
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li>We helped businesses adapt to industry shifts with practical management advice.</li>
        <li>We started working with more up-and-coming companies, especially in new markets.</li>
        <li>Our “Empower Your Team” workshops brought together over 150 organizations and sparked some great conversations.</li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold text-lg mb-2">This Year (2024)</h4>
      <p className="text-gray-700 mb-2">
        2024 is shaping up to be even stronger. We’re on pace to hit around <span className="font-bold">$5.1 million</span> in sales by year’s end—a jump of about 21% over last year. It’s encouraging to see our clients sticking with us and coming back for more.
      </p>
      <ul className="list-disc ml-6 text-gray-700 space-y-1">
        <li>We introduced new AI-based management tools so clients can make decisions faster and smarter.</li>
        <li>We’ve teamed up with leaders in tech and HR to widen our service offering.</li>
        <li>Nearly 9 out of 10 organizations we worked with last year decided to stay on or expand our partnership.</li>
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
    When you’re picking a management partner, you have choices. Businesment works alongside big names like StratEdge Consulting, GrowthDrive Solutions, and ManageRight Partners. Here’s where we stand out:
  </p>
  <ul className="list-inside list-disc text-gray-700 space-y-1">
    <li>
      <span className="font-semibold">Client Satisfaction:</span> On average, our clients rate us 4.8 out of 5. We’re proud of that—it shows our focus on real results and growth stands out.
    </li>
    <li>
      <span className="font-semibold">Service Innovation:</span> We’ve been ahead of the curve with things like personalized coaching and AI analytics—others are just starting to catch up.
    </li>
    <li>
      <span className="font-semibold">Sales & Growth:</span> StratEdge is bigger (over $7 million), but our 21% growth rate is among the fastest. A lot of firms are growing, just not as quickly as we are right now.
    </li>
    <li>
      <span className="font-semibold">Client Retention:</span> 87% of our clients stick with us or expand services. We think that says more than any marketing pitch could.
    </li>
  </ul>
</section>

<section className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 shadow space-y-6">
  <h2 className="text-2xl font-semibold text-primary mb-4">Achievements We’re Proud Of</h2>
  <ul className="list-disc ml-6 text-gray-700 space-y-1">
    <li>Named “Top Innovator in Business Management” by the National Consultancy Association for 2024.</li>
    <li>Worked with more than 200 companies on transformation projects in the past two years.</li>
    <li>Launched our first “Empowerment Summit,” drawing over 500 business leaders.</li>
    <li>Our whitepaper, <em>The Future of Empowered Management</em>, is now referenced in university business classes.</li>
  </ul>
</section>

<section className="bg-white rounded-2xl shadow p-8 space-y-6">
  <h2 className="text-2xl font-semibold text-primary mb-4">What Our Clients Say</h2>
  <div className="space-y-4">
    <blockquote className="italic border-l-4 border-primary pl-4 text-gray-700">
      “Businesment completely changed how we handle team management. Their advice didn’t just look good on paper—it made a clear difference in morale and results.”
      <br />
      <span className="font-bold text-primary">— Jamie Perez, CEO, TechNova Inc.</span>
    </blockquote>
    <blockquote className="italic border-l-4 border-primary pl-4 text-gray-700">
      “The combination of AI tools and genuine, tailored coaching from Businesment really set them apart. I’d recommend them to anyone.”
      <br />
      <span className="font-bold text-primary">— Linda Thompson, COO, GreenLeaf Marketing</span>
    </blockquote>
  </div>
</section>

    </div>
  );
};

export default Sales;
