import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

const projects = [
  {
    title: 'Project One',
    img: '/images/project-one.png',
    description: 'Description of project one.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    img: '/images/project-two.png',
    description: 'Description of project two.',
    link: 'https://example.com/project-two',
  },
]

const Projects = () => {
  return (
    <>
      {projects.map(project => (
        <Card key={project.title}>
          <CardContent>
            <h2>{project.title}</h2>
            <Image
              width={500}
              height={300}
              src={project.img}
              alt={project.title}
            />
            <p>{project.description}</p>
            <Link href={project.link} target="_blank">
              View Project
            </Link>
          </CardContent>
        </Card>
      ))}
    </>
  )
}

export default Projects
