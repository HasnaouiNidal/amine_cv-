import { cvData } from '../data/cvData';
import { projects } from '../data/projects';

// GitHub icon SVG
const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

// LinkedIn icon SVG
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="inline mr-2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Cv = () => {
  const { personal, experience, education, skills } = cvData;

  // Filter out relevant featured projects from projects data
  const cvProjects = projects.slice(0, 3); // Display top 3 projects

  return (
    <div className="cv-page min-h-screen bg-nidam-bgPrimary py-8 md:py-16 px-4 sm:px-6 lg:px-8 print:py-0 print:px-0">
      {/* Floating Action Bar (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <a 
          href="/" 
          className="inline-flex items-center gap-2 text-nidam-textMuted hover:text-nidam-accentNavy transition-colors text-sm font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 bg-nidam-accentNavy text-nidam-bgPrimary hover:bg-nidam-accentTeal transition-all duration-300 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          Print / PDF Export
        </button>
      </div>

      {/* Main CV Sheet Container */}
      <article className="max-w-4xl mx-auto bg-nidam-bgPrimary border border-[#1C1C1C]/10 rounded-2xl shadow-xl overflow-hidden cv-print-card print:border-none print:shadow-none print:rounded-none">
        
        {/* Header Block */}
        <header className="p-8 md:p-12 border-b border-[#1C1C1C]/10 bg-nidam-bgSecondary/20">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            <div>
              <h1 className="font-serif-nidam text-nidam-accentNavy text-4xl sm:text-5xl font-bold tracking-tight mb-2">
                {personal.name}
              </h1>
              <p className="font-sans-nidam text-nidam-accentTeal text-lg sm:text-xl font-medium tracking-wide uppercase">
                {personal.title}
              </p>
            </div>
            
            {/* Quick stats / overview (Figma Portfolio details) */}
            <div className="flex gap-4 print:hidden">
              <div className="bg-nidam-bgPrimary border border-[#1C1C1C]/5 rounded-xl px-4 py-2 text-center min-w-[90px]">
                <p className="font-serif-nidam text-nidam-accentNavy text-[18px] font-bold">5+</p>
                <p className="text-[10px] text-nidam-textMuted uppercase font-mono tracking-wider">Years Exp</p>
              </div>
              <div className="bg-nidam-bgPrimary border border-[#1C1C1C]/5 rounded-xl px-4 py-2 text-center min-w-[90px]">
                <p className="font-serif-nidam text-nidam-accentNavy text-[18px] font-bold">80+</p>
                <p className="text-[10px] text-nidam-textMuted uppercase font-mono tracking-wider">Projects</p>
              </div>
            </div>
          </div>

          {/* Editorial objective */}
          <div className="mt-8 max-w-3xl">
            <p className="font-serif-nidam text-nidam-accentNavy/90 text-md sm:text-lg italic leading-relaxed">
              "{personal.summary}"
            </p>
          </div>
        </header>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#1C1C1C]/5">
          
          {/* Left / Sidebar Column */}
          <aside className="md:col-span-1 bg-nidam-bgSecondary/30 p-8 border-r border-[#1C1C1C]/10 print:bg-transparent print:p-6 print:border-r">
            
            {/* OS Dark Contact Panel */}
            <div className="bg-nidam-panelDark text-nidam-bgPrimary rounded-xl p-5 mb-8 shadow-sm print:shadow-none print:bg-nidam-panelDark print:-mx-2">
              <h3 className="font-serif-nidam text-nidam-accentGold text-base font-bold mb-4 tracking-wide">
                Contact Details
              </h3>
              <ul className="flex flex-col gap-3 text-[13px] font-sans-nidam text-nidam-bgPrimary/80">
                <li className="flex items-center gap-2">
                  <span className="text-nidam-accentTeal" aria-hidden="true">✉</span>
                  <a href={`mailto:${personal.email}`} className="hover:text-nidam-accentGold transition-colors truncate">
                    {personal.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nidam-accentTeal" aria-hidden="true">🌐</span>
                  <span className="truncate">{personal.website}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-nidam-accentTeal" aria-hidden="true">📍</span>
                  <span>{personal.location}</span>
                </li>
                <li className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <GitHubIcon />
                  <a href={`https://${personal.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-nidam-accentGold transition-colors truncate">
                    {personal.github}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <LinkedInIcon />
                  <a href={`https://${personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-nidam-accentGold transition-colors truncate">
                    {personal.linkedin}
                  </a>
                </li>
              </ul>
            </div>

            {/* Skills: Design */}
            <section className="mb-8 print-no-break">
              <h3 className="font-serif-nidam text-nidam-accentNavy text-[16px] font-bold flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-nidam-accentTeal" />
                Design Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.design.map((skill) => (
                  <span
                    key={skill}
                    className="bg-nidam-bgSecondary border border-[#1c1c1c]/5 text-nidam-accentNavy text-[10px] font-mono tracking-wider uppercase rounded-full px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Skills: Development */}
            <section className="mb-8 print-no-break">
              <h3 className="font-serif-nidam text-nidam-accentNavy text-[16px] font-bold flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-nidam-accentTeal" />
                Dev Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.development.map((skill) => (
                  <span
                    key={skill}
                    className="bg-nidam-bgSecondary border border-[#1c1c1c]/5 text-nidam-accentNavy text-[10px] font-mono tracking-wider uppercase rounded-full px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section className="print-no-break">
              <h3 className="font-serif-nidam text-nidam-accentNavy text-[16px] font-bold flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-nidam-accentTeal" />
                Languages
              </h3>
              <ul className="flex flex-col gap-2 font-sans-nidam text-[13px] text-nidam-textMuted">
                {skills.languages.map((lang) => (
                  <li key={lang} className="flex justify-between items-center bg-nidam-bgPrimary/50 px-3 py-1.5 rounded border border-[#1c1c1c]/5">
                    <span className="font-medium text-nidam-accentNavy">{lang.split(' ')[0]}</span>
                    <span className="text-[11px] font-mono text-nidam-accentTeal">{lang.split(' ')[1] || ''}</span>
                  </li>
                ))}
              </ul>
            </section>

          </aside>

          {/* Right / Main Content Column */}
          <main className="md:col-span-2 p-8 print:p-6 print:pl-8">
            
            {/* Experience */}
            <section className="mb-10">
              <h2 className="font-serif-nidam text-nidam-accentNavy text-[22px] font-bold flex items-center gap-2 mb-6 border-b border-[#1C1C1C]/5 pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-nidam-accentTeal" />
                Experience
              </h2>
              
              <div className="flex flex-col gap-8">
                {experience.map((exp, idx) => (
                  <div key={exp.id} className="print-no-break flex gap-4">
                    {/* Thin monochrome step number */}
                    <span className="text-[18px] font-mono font-light text-nidam-accentNavy/20 select-none pt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h3 className="font-sans-nidam text-[#0f1e36] text-[17px] font-bold leading-snug">
                            {exp.role}
                          </h3>
                          <p className="font-sans-nidam text-nidam-textMuted text-[14px]">
                            {exp.company}
                          </p>
                        </div>
                        
                        {/* Date Badge */}
                        <span className="self-start sm:self-auto bg-nidam-accentTeal/10 text-nidam-accentTeal text-[12px] font-medium px-2.5 py-1 rounded inline-block">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="list-disc pl-4 mt-2 flex flex-col gap-1.5 text-nidam-textMuted text-[13px] leading-relaxed">
                        {exp.bullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="mb-10 print-no-break">
              <h2 className="font-serif-nidam text-nidam-accentNavy text-[22px] font-bold flex items-center gap-2 mb-6 border-b border-[#1C1C1C]/5 pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-nidam-accentTeal" />
                Education
              </h2>

              <div className="flex flex-col gap-6">
                {education.map((edu, idx) => (
                  <div key={edu.id} className="flex gap-4">
                    {/* Thin monochrome step number */}
                    <span className="text-[18px] font-mono font-light text-nidam-accentNavy/20 select-none pt-0.5">
                      0{idx + 1}
                    </span>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                        <div>
                          <h3 className="font-sans-nidam text-[#0f1e36] text-[16px] font-bold leading-snug">
                            {edu.degree}
                          </h3>
                          <p className="font-sans-nidam text-nidam-textMuted text-[14px]">
                            {edu.institution}
                          </p>
                        </div>
                        <span className="self-start sm:self-auto bg-nidam-accentTeal/10 text-nidam-accentTeal text-[12px] font-medium px-2.5 py-1 rounded inline-block">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-nidam-textMuted text-[13px] leading-relaxed italic mt-0.5">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Projects */}
            <section className="print-no-break">
              <h2 className="font-serif-nidam text-nidam-accentNavy text-[22px] font-bold flex items-center gap-2 mb-6 border-b border-[#1C1C1C]/5 pb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-nidam-accentTeal" />
                Selected Projects
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cvProjects.map((proj) => (
                  <article key={proj.id} className="bg-nidam-bgSecondary/20 border border-[#1c1c1c]/5 rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-sans-nidam text-nidam-accentNavy text-[15px] font-bold mb-1.5 leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-nidam-textMuted text-[12px] leading-relaxed mb-3">
                        {proj.description}
                      </p>
                    </div>
                    
                    {/* Project tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1c1c1c]/5">
                      {proj.tags.slice(0, 3).map((t) => (
                        <span key={t} className="text-[9.5px] font-mono tracking-wide text-nidam-accentNavy bg-nidam-bgSecondary px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

          </main>

        </div>

      </article>
    </div>
  );
};

export default Cv;
