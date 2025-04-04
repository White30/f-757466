
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code']
    },
    {
      category: 'Languages & Frameworks',
      skills: ['Python', 'Bash', 'JavaScript', 'Node.js', 'React']
    },
    {
      category: 'System Administration',
      skills: ['Linux', 'Windows Server', 'Networking', 'Security', 'Monitoring', 'Automation']
    },
    {
      category: 'Tools & Platforms',
      skills: ['GitHub', 'GitLab', 'Jira', 'Jenkins', 'Prometheus', 'Grafana', 'ELK Stack']
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="px-3 py-1">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
