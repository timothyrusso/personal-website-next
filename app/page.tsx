import { Title } from '@/components/Title/Title'
import { Description } from '@/components/Description/Description'
import { ProjectsGrid } from '@/components/ProjectsGrid/ProjectsGrid'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <Title />
      <Description />
      <ProjectsGrid />
    </main>
  )
}
