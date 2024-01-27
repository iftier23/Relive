import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Re:Live"
        content="Virtual Time Travel. Bring Nostalgic Memories To Life"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
