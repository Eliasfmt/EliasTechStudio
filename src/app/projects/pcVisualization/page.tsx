// src/app/projects/pcVisualization/page.tsx

import Navbar from "@/components/Navbar";

export default function VisualizationProject() {
  return (   
    <div className="bg-blue-50">
    <Navbar />
    <section className="bg-blue-50 max-w-3xl mx-auto px-4 py-12">
        
  <h1 className="text-4xl font-bold mb-6 text-center">Database Creation and Visualization for a Pest Control Company</h1>

    <img
        src="/image/pcVisualizationImages/ants.png"
        alt="Pest Control Dashboard"
        className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
      />
<br/>
  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
  <p className="mb-6">During my time working in sales at a pest control company, I didn&rsquo;t have the opportunity the opportunity to build a database, as my responsibilities were focused on direct sales. However, after leaving that role, I decided to create a sample project using mock data to illustrate how the business could benefit from adopting modern data practices.</p>

  <h2 className="text-2xl font-semibold mb-4">Data Generation</h2>
  <p className="mb-4">Using Python, I generated synthetic data relevant to the pest control industry. The dataset includes three main tables: <strong>Customers</strong>, <strong>Sales</strong>, and <strong>Salesmen</strong>.</p>

  <h3 className="text-xl font-semibold mb-2">Customers Table</h3>
  <ul className="list-disc list-inside mb-4">
    <li><code>customer_id</code>: Unique identifier for each customer</li>
    <li><code>first_name</code>: Customer&rsquo;s first name</li>
    <li><code>last_name</code>: Customer&rsquo;s last name</li>
    <li><code>email</code>: Email address</li>
    <li><code>phone</code>: Phone number</li>
    <li><code>address</code>: Street address</li>
    <li><code>city</code>: City of residence</li>
    <li><code>state</code>: State or province</li>
    <li><code>zip_code</code>: Postal or ZIP code</li>
    <li><code>property_type</code>: Either &ldquo;Commercial&rdquo; or &ldquo;Residential&rdquo;</li>
  </ul>

  <h3 className="text-xl font-semibold mb-2">Sales Table</h3>
  <ul className="list-disc list-inside mb-4">
    <li><code>sale_id</code>: Unique ID for each transaction</li>
    <li><code>salesman_id</code>: ID of the salesperson who made the sale</li>
    <li><code>customer_id</code>: Foreign key linking the sale to a customer</li>
    <li><code>date_of_sale</code>: Date of the transaction</li>
    <li><code>service_type</code>: Type of service (&ldquo;Roach Only&rdquo;, &ldquo;Mosquito Treatment&rdquo;, or &ldquo;Full Pest Control&rdquo;)</li>
    <li><code>total_contract_value</code>: Dollar value of the contract</li>
    <li><code>payment_status</code>: &ldquo;Paid&rdquo;, &ldquo;Pending&rdquo;, or &ldquo;Partial&rdquo;</li>
    <li><code>years_agreement</code>: Duration of the contract in years</li>
  </ul>

  <h3 className="text-xl font-semibold mb-2">Salesmen Table</h3>
  <ul className="list-disc list-inside mb-6">
    <li><code>salesman_id</code>: Unique identifier for each salesperson</li>
    <li><code>first_name</code>: First name of the salesperson</li>
    <li><code>last_name</code>: Last name of the salesperson</li>
    <li><code>hire_date</code>: Date the salesperson was hired</li>
    <li><code>region</code>: Numeric code representing their geographic area</li>
  </ul>

  <h2 className="text-2xl font-semibold mb-4">Cloud Database Setup</h2>
  <p className="mb-6">I chose <strong>Google Cloud SQL</strong> to host the database—not because of any specific technical requirement, but due to its widespread use alongside AWS and Azure.
  <br/>The database was implemented in <strong>PostgreSQL</strong> with the following relationships:
  </p>
  <ul className="list-disc list-inside mb-6">
    <li>A <strong>one-to-one</strong> relationship between the <em>Customers</em> and <em>Sales</em> tables</li>
    <li>A <strong>one-to-many</strong> relationship between the <em>Salesmen</em> and <em>Sales</em> tables</li>
  </ul>

       <img
        src="/image/pcVisualizationImages/database.png"
        alt="Pest Control Dashboard"
        className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
      />

      <br/>

        <img
        src="/image/pcVisualizationImages/ERL.png"
        alt="Pest Control Dashboard"
        className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
      />
      <br/>

  <h2 className="text-2xl font-semibold mb-4">Data Visualization</h2>
  <p className="mb-6">For the visualization component, I used <strong>Power BI</strong> to connect directly to the Google Cloud-hosted PostgreSQL database. The dashboard provides visual insights into:</p>
  <ul className="list-disc list-inside mb-6">
    <li>Sales activity</li>
    <li>Types of pest control services</li>
    <li>Contract values</li>
    <li>Payment statuses</li>
  </ul>
  <p className="mb-6">Since the data is randomly generated, the visualizations don&rsquo;t reveal real business trends. However, this prototype demonstrates how a company could extract valuable insights using real operational data by tracking KPIs and performance metrics.</p>

        <img
        src="/image/pcVisualizationImages/PCDashboard.png"
        alt="Pest Control Dashboard"
        className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
      />

    <br/>

      <img
        src="/image/pcVisualizationImages/repPerformance.png"
        alt="Pest Control Dashboard"
        className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
      />

    <br/>

  <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
  <p>Even though real-world data was not used, this project simulates the full data pipeline—from database creation to cloud deployment and visualization. It illustrates how a pest control business (or any small-to-medium enterprise) could implement an <strong>ETL process</strong> and leverage tools like <strong>Power BI</strong> to improve decision-making through data.</p>

</section>

</div>

  );
}