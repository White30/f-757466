
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: 'Cloud Engineer',
      company: 'SMGRP',
      period: 'Oct 2021 - Present',
      description: 'Working with Infrastructure as Code to deploy highly available and scalable infrastructure in AWS. Developing CI/CD pipelines using GitHub Actions and Terraform.',
      skills: ['AWS', 'Terraform', 'CI/CD', 'GitHub Actions', 'Docker'],
    },
    {
      title: 'Systems Administrator',
      company: 'SAPO',
      period: 'Jan 2021 - Sep 2021',
      description: 'Responsible for maintaining and monitoring infrastructure. Implementing and managing Linux servers and network services.',
      skills: ['Linux', 'System Administration', 'Networking', 'Server Management'],
    },
    {
      title: 'IT Support Specialist',
      company: 'EVISO',
      period: 'Jan 2020 - Dec 2020',
      description: 'Provided technical support to users, troubleshooting hardware and software issues. Maintained and upgraded company IT equipment.',
      skills: ['Technical Support', 'Troubleshooting', 'Windows', 'Hardware'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((job, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription className="text-base">{job.company} | {job.period}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
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

export default Experience;
