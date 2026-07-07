export default function Research() {
  const interests = [
    {
      title: 'Machine Learning',
      desc: 'Exploring representation learning, few-shot learning, and model efficiency.',
    },
    {
      title: 'Natural Language Processing',
      desc: 'Large language models, text generation, and multilingual understanding.',
    },
    {
      title: 'Software Engineering',
      desc: 'Developer tools, program analysis, and automated software testing.',
    },
  ];

  return (
    <section id="research" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-2">Research Interests</h2>
        <div className="section-divider mb-8" />

        <div className="space-y-6">
          {interests.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
