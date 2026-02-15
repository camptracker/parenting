import { useState, useMemo } from 'react'
import { styles, allTags } from './data'
import type { ParentingStyle } from './data'
import FriendshipSection from './FriendshipSection'
import RomanticSection from './RomanticSection'
import './App.css'

function StyleCard({ style, isOpen, onToggle }: { style: ParentingStyle; isOpen: boolean; onToggle: () => void }) {
  const [activeTab, setActiveTab] = useState<'what' | 'how' | 'pros' | 'risks'>('what')

  return (
    <div className={`card ${isOpen ? 'card-open' : ''}`} style={{ borderLeftColor: style.color }}>
      <button className="card-header" onClick={onToggle}>
        <div className="card-header-content">
          <h2 className="card-title">{style.name}</h2>
          <p className="card-tagline">{style.tagline}</p>
          <div className="card-meta">
            <span className="badge" style={{ background: style.color + '22', color: style.color }}>{style.founder}</span>
            <span className="badge badge-era">{style.era}</span>
          </div>
        </div>
        <span className={`chevron ${isOpen ? 'chevron-open' : ''}`}>›</span>
      </button>

      {isOpen && (
        <div className="card-body">
          <div className="tabs">
            {(['what', 'how', 'pros', 'risks'] as const).map(tab => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? 'tab-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'what' ? '📖 What & Why' : tab === 'how' ? '🛠 How & When' : tab === 'pros' ? '✅ Pros & Cons' : '⚠️ Risks'}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === 'what' && (
              <div>
                <p>{style.what}</p>
                <h4>Why this approach?</h4>
                <p>{style.why}</p>
              </div>
            )}
            {activeTab === 'how' && (
              <div>
                <h4>Practical steps</h4>
                <ul>{style.how.map((h, i) => <li key={i}>{h}</li>)}</ul>
                <h4>Best for</h4>
                <p>{style.when}</p>
              </div>
            )}
            {activeTab === 'pros' && (
              <div className="two-col">
                <div>
                  <h4>✅ Pros</h4>
                  <ul className="list-pro">{style.pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
                </div>
                <div>
                  <h4>❌ Cons</h4>
                  <ul className="list-con">{style.cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
                </div>
              </div>
            )}
            {activeTab === 'risks' && (
              <div>
                <ul className="list-risk">{style.risks.map((r, i) => <li key={i}>{r}</li>)}</ul>
              </div>
            )}
          </div>

          <blockquote className="quote" style={{ borderLeftColor: style.color }}>
            "{style.quote}"
            <cite>— {style.quoteAuthor}</cite>
          </blockquote>
        </div>
      )}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState<'parenting' | 'friendship' | 'romantic'>('parenting')
  const [openCards, setOpenCards] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())

  const toggleCard = (id: string) => {
    setOpenCards(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => {
      const next = new Set(prev)
      next.has(tag) ? next.delete(tag) : next.add(tag)
      return next
    })
  }

  const filtered = useMemo(() => {
    return styles.filter(s => {
      const matchesSearch = !search || 
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.tagline.toLowerCase().includes(search.toLowerCase()) ||
        s.founder.toLowerCase().includes(search.toLowerCase())
      const matchesTags = selectedTags.size === 0 || 
        s.tags.some(t => selectedTags.has(t))
      return matchesSearch && matchesTags
    })
  }, [search, selectedTags])

  const recommended = filtered.filter(s => !s.tags.includes('cautionary'))
  const cautionary = filtered.filter(s => s.tags.includes('cautionary'))

  return (
    <div className="app">
      <header className="hero">
        <h1>{activeSection === 'parenting' ? 'Parenting Styles Guide' : activeSection === 'friendship' ? 'The Friendship Guide' : 'Romantic Relationships Guide'}</h1>
        <p className="subtitle">{activeSection === 'parenting' ? '12 approaches compared — what works, what doesn\'t, and why' : activeSection === 'friendship' ? 'Research-backed strategies for building & keeping real friendships' : '9 dimensions of building and maintaining romantic love'}</p>
        <div className="section-toggle">
          <button className={`section-btn ${activeSection === 'parenting' ? 'section-btn-active' : ''}`} onClick={() => setActiveSection('parenting')}>👶 Parenting</button>
          <button className={`section-btn ${activeSection === 'friendship' ? 'section-btn-active' : ''}`} onClick={() => setActiveSection('friendship')}>🤝 Friendship</button>
          <button className={`section-btn ${activeSection === 'romantic' ? 'section-btn-active' : ''}`} onClick={() => setActiveSection('romantic')}>💕 Romantic</button>
        </div>
      </header>

      {activeSection === 'friendship' ? (
        <FriendshipSection />
      ) : activeSection === 'romantic' ? (
        <RomanticSection />
      ) : (<>
      <div className="controls">
        <input
          type="search"
          placeholder="Search styles, founders..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search"
        />
        <div className="tags">
          {allTags.map(tag => (
            <button
              key={tag}
              className={`tag ${selectedTags.has(tag) ? 'tag-active' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
          {selectedTags.size > 0 && (
            <button className="tag tag-clear" onClick={() => setSelectedTags(new Set())}>
              ✕ clear
            </button>
          )}
        </div>
      </div>

      <main>
        {recommended.length > 0 && (
          <section>
            <h3 className="section-label">Recommended Approaches</h3>
            {recommended.map(s => (
              <StyleCard key={s.id} style={s} isOpen={openCards.has(s.id)} onToggle={() => toggleCard(s.id)} />
            ))}
          </section>
        )}

        {cautionary.length > 0 && (
          <section>
            <h3 className="section-label section-label-caution">Cautionary Patterns</h3>
            {cautionary.map(s => (
              <StyleCard key={s.id} style={s} isOpen={openCards.has(s.id)} onToggle={() => toggleCard(s.id)} />
            ))}
          </section>
        )}

        {filtered.length === 0 && (
          <p className="empty">No styles match your search.</p>
        )}
      </main>

      </>)}
      <footer>
        <p>Built with care · Not medical or professional advice · Sources include Baumrind, Sears, Montessori, Gerber, Nelsen, and others</p>
      </footer>
    </div>
  )
}

export default App
