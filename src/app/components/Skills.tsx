import { Code, Lightbulb } from "lucide-react";

export function Skills() {
  const hardSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React & Next.js", level: 85 },
    { name: "Node.js & Express", level: 80 },
    { name: "Python & Django", level: 75 },
    { name: "SQL & NoSQL", level: 85 },
    { name: "Git & DevOps", level: 80 },
    { name: "HTML & CSS", level: 95 },
    { name: "UI/UX Design", level: 70 },
  ];

  const softSkills = [
    { name: "Comunicação", level: 90 },
    { name: "Trabalho em Equipe", level: 95 },
    { name: "Resolução de Problemas", level: 88 },
    { name: "Gestão de Tempo", level: 85 },
    { name: "Criatividade", level: 90 },
    { name: "Adaptabilidade", level: 92 },
    { name: "Liderança", level: 80 },
    { name: "Pensamento Crítico", level: 87 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center mb-12">Habilidades</h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Code className="text-white" size={28} />
              </div>
              <h3 className="text-2xl">Hard Skills</h3>
            </div>
            <div className="space-y-4">
              {hardSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Lightbulb className="text-white" size={28} />
              </div>
              <h3 className="text-2xl">Soft Skills</h3>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
