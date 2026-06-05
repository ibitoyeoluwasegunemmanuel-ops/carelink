import React from 'react'
import Link from 'next/link'
import { FiStar, FiArrowRight } from 'react-icons/fi'

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      title: 'Amara\'s Speech Journey',
      author: 'Sarah, Lagos Nigeria',
      excerpt: 'Our daughter had speech delays that affected her confidence. Through CareLink Africa, we found an amazing speech therapist and supportive community.',
      rating: 5,
      image: '👧',
      condition: 'Speech Disorder',
    },
    {
      id: 2,
      title: 'School Success for David',
      author: 'Michael, Accra Ghana',
      excerpt: 'Finding the right educational support for our son with autism seemed impossible. CareLink connected us with specialized educators who changed everything.',
      rating: 5,
      image: '👦',
      condition: 'Autism',
    },
    {
      id: 3,
      title: 'Family Support Network',
      author: 'Zainab, Nairobi Kenya',
      excerpt: 'The community forums helped us realize we weren\'t alone. We found parents facing similar challenges and got practical advice that made a real difference.',
      rating: 5,
      image: '👨‍👩‍👧',
      condition: 'Multiple Conditions',
    },
    {
      id: 4,
      title: 'Therapy Accessibility',
      author: 'Emmanuel, Abuja Nigeria',
      excerpt: 'We struggled to find affordable therapy. CareLink helped us access quality therapists and connect with donors who supported our child\'s treatment.',
      rating: 5,
      image: '🏥',
      condition: 'Developmental Delay',
    },
  ]

  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <span className="badge text-sm">Success Stories</span>
        <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mt-4 mb-4">
          Real Stories from Real Families
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          See how CareLink Africa has made a difference in the lives of families across the continent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {stories.map((story) => (
          <div key={story.id} className="card p-6 sm:p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">{story.image}</div>
                <div>
                  <h4 className="font-semibold text-neutral-900">{story.author}</h4>
                  <span className="badge-accent text-xs">{story.condition}</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-3">{story.title}</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">{story.excerpt}</p>

            <div className="flex items-center space-x-1">
              {[...Array(story.rating)].map((_, i) => (
                <FiStar key={i} className="w-4 h-4 text-accent-500 fill-accent-500" />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-secondary-50 to-accent-50 rounded-2xl p-8 sm:p-12">
        <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-6">
          Share Your Story
        </h3>
        <p className="text-neutral-600 mb-8 max-w-xl">
          Have you found success with CareLink Africa? We\'d love to hear your story and inspire other families in our community.
        </p>
        <Link href="/stories/new" className="inline-flex items-center space-x-2 btn-secondary">
          <span>Share Your Story</span>
          <FiArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="text-center mt-12">
        <Link href="/stories" className="btn-outline">
          View All Stories
        </Link>
      </div>
    </section>
  )
}

export default SuccessStories
