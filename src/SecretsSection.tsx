import { useState } from 'react'
import { secretsSections } from './secretsData'
import type { SecretsSection } from './secretsData'

function SecretsCard({ topic, isOpen, onToggle }: { topic: SecretsSection; isOpen: boolean; onToggle: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'insights' | 'tips' | 'watch'>('overview')

  return (
    <div className={`card ${isOpen ? 'card-open' : ''}`} style={{ borderLeftColor: topic.color }}>
      <button className="card-header" onClick={onToggle}>
        <div className="card-header-content">
          <h2 className="card-title">{topic.icon} {topic.name}</h2>
          <p className="card-tagline">{topic.tagline}</p>
        </div>
        <span className={`chevron ${isOpen ? 'chevron-open' : ''}`}>›</span>
      </button>

      {isOpen && (
        <div className="card-body">
          <div className="tabs">
            {(['overview', 'insights', 'tips', 'watch'] as const).map(tab => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
                style={activeTab === tab ? { background: topic.color } : {}}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'overview' ? '📖 Overview' : tab === 'insights' ? '💡 Key Insights' : tab === 'tips' ? '🛠 Practical Tips' : '⚠️ Watch Out'}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && <p>{topic.overview}</p>}
            {activeTab === 'insights' && (
              <ul>{topic.keyInsights.map((item, i) => <li key={i}>{item}</li>)}</ul>
            )}
            {activeTab === 'tips' && (
              <ul className="list-pro">{topic.practicalTips.map((item, i) => <li key={i}>{item}</li>)}</ul>
            )}
            {activeTab === 'watch' && (
              <ul className="list-risk">{topic.watchOut.map((item, i) => <li key={i}>{item}</li>)}</ul>
            )}
          </div>

          <blockquote className="quote" style={{ borderLeftColor: topic.color }}>
            "{topic.quote}"
            <cite>— {topic.quoteAuthor}</cite>
          </blockquote>
        </div>
      )}
    </div>
  )
}

export default function SecretsSectionComponent() {
  const [openCards, setOpenCards] = useState<Set<string>>(new Set())

  const toggleCard = (id: string) => {
    setOpenCards(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <main>
      <section>
        <h3 className="section-label" style={{ color: '#6a5f8e' }}>6 Dimensions of Trust & Secret-Keeping</h3>
        {secretsSections.map(t => (
          <SecretsCard key={t.id} topic={t} isOpen={openCards.has(t.id)} onToggle={() => toggleCard(t.id)} />
        ))}
      </section>
    </main>
  )
}
