import HeroSection from '@components/home/HeroSection'
import FeaturesSection from '@components/home/FeaturesSection'
import ConditionsDirectory from '@components/home/ConditionsDirectory'
import SuccessStories from '@components/home/SuccessStories'
import CallToAction from '@components/home/CallToAction'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ConditionsDirectory />
      <SuccessStories />
      <CallToAction />
    </>
  )
}
