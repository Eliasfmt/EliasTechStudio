// src/app/projects/txWorkforce/page.tsx
import Navbar from "@/components/Navbar";

export default function TxWorkforceProject() {
  return (
    <div className="bg-blue-50">
      <Navbar />

      {/* ─────────────────────────  MAIN WRAPPER  ───────────────────────── */}
      <section className="max-w-3xl mx-auto px-4 py-12">

        {/* ----------  HERO  ---------- */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Texas Workforce Outlook
        </h1>

        {/* ----------  DASHBOARD SHOT #1  ---------- */}
        <img
          src="/image/texasJobs/jobHorn.png"         // ← replace
          alt="Texas Workforce Dashboard – Page 1"
          className="w-full max-w-4xl h-[400px] object-cover mx-auto rounded-md border border-gray-500"

        />
        <br />

        {/* ----------  OVERVIEW  ---------- */}
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-6">
          Texas continues to out‑pace most U.S. states in both population and job growth. To understand 
          where the Lone Star State&rsquo;s labour market is heading, I consolidated the Texas Workforce 
          Commission&rsquo;s Report on Texas Growth Occupations – 2024 (covering actual 2022‑2023 data and 2022‑2032 
          projections) into a single, analysis‑ready data set and built an interactive Power BI report.
          This document summarises the data pipeline, visual design choices, and the major insights surfaced 
          on the two report pages.
        </p>

        {/* ----------  DATA PIPELINE  ---------- */}
        <h2 className="text-2xl font-semibold mb-4">Data Source & Preparation</h2>
        <ul className="list-disc list-outside mb-4 space-y-1 pl-6">
        <li>
          <strong>Primary source:</strong> Report on Texas Growth Occupations – 2024 (TWC). The PDF contains 331 
          occupation rows spread across industry-specific tables.
        </li>
        <li>
          <strong>Extraction:</strong> PDF tables were converted to CSV using AI tools.
        </li>
        <li>
          <strong>Enrichment:</strong> Added an “Industry Sector” column so each occupation was tagged with its 
          parent NAICS industry (e.g., Accommodation & Food Services) to enable cross-sector analysis.
        </li>
      </ul>

      {/* ----------  SCREENSHOT 1  ---------- */}
      <img
        src="/image/texasJobs/jobReport.png"
        alt="Texas Workforce Job report"
        className="w-full max-w-4xl mx-auto rounded-md border border-gray-500 my-6"
      />

      <ul className="list-disc list-outside mb-4 space-y-1 pl-6">
        <li>
          <strong>Cleaning:</strong> Column names were standardised and numeric columns (e.g., job counts, wages, growth rates)
          were converted to proper number formats for analysis.
        </li>
        <li>
          <strong>Validation:</strong> Spot‑checked aggregates in Python (pandas / seaborn / matplotlib) to confirm 
          totals matched source of publications.
        </li>
      </ul>

        {/* ----------  Visualisation Workflow  ---------- */}
        <h2 className="text-2xl font-semibold mb-4">Visualisation Workflow</h2>
        <p className="mb-6">
          The polished visuals were built in Power BI (two pages). To double‑check every graphic,
           I recreated the core cuts in Python first. Once validated, visuals were themed in Power BI&rsquo;s 
           corporate blue palette and exported at 1366×768 for easy embedding.
        </p>
          {/* ----------  SCREENSHOT 2  ---------- */}
          <img
          src="/image/texasJobs/dashPython.png"         // ← replace
          alt="Texas Workforce Job report"
          className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
          />
<br />
        {/* ----------  PAGE-1 INSIGHTS  ---------- */}
        <h2 className="text-xl font-semibold mb-2">Dashboard&nbsp;Highlights — Page 1</h2>
        <ul className="list-disc list-outside pl-6 mb-6 space-y-2">
        <li>
          <strong>Explosive demand continues:</strong> Professional, Scientific & Technical Services alone is set to add +224K 
          jobs by 2032, with Healthcare close behind.
        </li>
        <li>
          <strong>Healthcare dominates pay:</strong> General Internal Medicine Physicians top the charts at $225K median pay; 
          eight of the ten best-paid occupations sit in healthcare, engineering, or finance.
        </li>
        <li>
          <strong>Largest absolute growth:</strong> Software Developers (+29 662), Registered Nurses (+29 336), and Heavy and 
          Tractor–Trailer Truck Drivers (+28 195) lead the pack.
        </li>
        <li>
          <strong>Fastest-growing jobs:</strong> Wind Turbine Service Technicians top the list with a projected 77.4 % increase, 
          followed by Information Security Analysts (69.0 %), Software Developers (68.7 %), and Nurse Practitioners (66.6 %).
        </li>
      </ul>

        {/* ----------  DASHBOARD SHOT #1  ---------- */}
        <img
          src="/image/texasJobs/dashpage1.png"         // ← replace
          alt="Texas Workforce Dashboard – Page 1"
          className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
        />
<br />
        {/* ----------  PAGE-2 INSIGHTS  ---------- */}
        <h2 className="text-xl font-semibold mb-2">Dashboard&nbsp;Highlights — Page 2</h2>
        <ul className="list-disc list-outside pl-6 mb-6 space-y-2">
      <li>
        <strong>Relationship between job concentration (LQ) and median wage:</strong> There is no strong correlation between
         how concentrated a job is in Texas compared to the national average and the wages it pays.
      </li>
      <li>
        <strong>Fastest-growing roles cluster in Tech & Health:</strong> Developers, nurses, and truck drivers together account
         for approximately 85,000 new jobs over the decade.
      </li>
      <li>
        <strong>Most concentrated jobs in Texas:</strong> Most highly concentrated jobs are in the mining, quarrying, and oil & 
        gas extraction sector — with Wellhead Pumpers reaching the highest location quotient (LQ) of 7.10.
      </li>
    </ul>

         {/* ----------  DASHBOARD SHOT #2  ---------- */}
        <img
          src="/image/texasJobs/dashpage2.png"         // ← replace
          alt="Texas Workforce Dashboard – Page 2"
          className="w-full max-w-4xl mx-auto rounded-md border border-gray-500"
        />

      </section>
    </div>
  );
}