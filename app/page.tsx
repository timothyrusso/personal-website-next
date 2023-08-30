import { Title } from '@/components/Title/Title';
import { Spacer } from '@/components/Spacer/Spacer';
import { Description } from '@/components/Description/Description';
import { ProjectsGrid } from '@/components/ProjectsGrid/ProjectsGrid';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 xl:px-64 2xl:px-96">
      <Title />
      <Spacer />
      <Description />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}
