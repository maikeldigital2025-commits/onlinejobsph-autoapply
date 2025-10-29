import React, { useState } from 'react';

export default function Dashboard({ user }) {
  const [skills, setSkills] = useState('');
  const [jobs, setJobs] = useState([]);

  const searchJobs = () => {
    const mockJobs = [
      { id: 1, title: 'React Developer', company: 'ABC Tech' },
      { id: 2, title: 'PHP Backend Developer', company: 'XYZ Solutions' },
    ];
    const filtered = mockJobs.filter(job =>
      skills.split(',').some(skill => job.title.toLowerCase().includes(skill.toLowerCase()))
    );
    setJobs(filtered);
  };

  const generateCoverLetter = (job) => {
    return `Dear ${job.company}, I am very interested in the ${job.title} position. My skills include ${skills}. Looking forward to contributing!`;
  };

  const mockApply = (job) => {
    alert(`Applied to ${job.title} at ${job.company}\n\nCover Letter:\n${generateCoverLetter(job)}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Welcome, {user.email}</h1>
      <div className="mt-4">
        <input
          className="border p-2 mr-2"
          placeholder="Enter skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <button onClick={searchJobs} className="bg-blue-600 text-white px-4 py-2 rounded">
          Search Jobs
        </button>
      </div>

      <div className="mt-6">
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          <ul>
            {jobs.map(job => (
              <li key={job.id} className="mb-4 border p-2 rounded">
                <h2 className="font-semibold">{job.title} @ {job.company}</h2>
                <button
                  onClick={() => mockApply(job)}
                  className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                >
                  Apply (Mock)
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
