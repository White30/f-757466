
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science, Computer Engineering',
      institution: 'Instituto Superior de Engenharia de Lisboa',
      period: '2015 - 2019',
      description: 'Focused on computer systems, networks, and software development. Completed coursework in cloud computing, distributed systems, and network security.'
    },
    {
      degree: 'AWS Certified Solutions Architect - Associate',
      institution: 'Amazon Web Services',
      period: '2021',
      description: 'Professional certification validating expertise in designing and deploying scalable systems on AWS.'
    },
    {
      degree: 'Azure Administrator Associate',
      institution: 'Microsoft',
      period: '2022',
      description: 'Certification for implementing, monitoring, and maintaining Microsoft Azure solutions.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.degree}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <span>{item.institution}</span>
                  <span className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    {item.period}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
