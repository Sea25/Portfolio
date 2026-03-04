export default function WorkSection() {
  const jobs = [
    { company: 'GameForge studio', role: 'frontend dev', period: '2021-2024' },
    { company: 'RetroByte', role: 'junior pixel plumber', period: '2018-2021' },
    { company: 'Indie moonlight', role: 'contract works', period: '2016-2018' },
  ]

  return (
    <ul className="space-y-2">
      {jobs.map((job, i) => (
        <li key={i} className="flex flex-col text-[0.55rem]">
          <span className="text-game-accent">🛡️ {job.company}</span>
          <span className="ml-4 text-game-text/80">{job.role} · {job.period}</span>
        </li>
      ))}
    </ul>
  )
}