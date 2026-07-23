import { useState } from 'react'
import './Journal.css'

interface JournalProps {
  onBack: () => void
}

function Journal({ onBack }: JournalProps) {
  const [entry, setEntry] = useState('')
  const [submitted, setSubmitted] = useState<string | null>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (entry.trim()) {
      setSubmitted(entry)
    }
  }

  return (
    <section id="journal">
      <button type="button" onClick={onBack} className="back-button">
        ← Back
      </button>
      <h1>Journal du Jour</h1>
      {submitted === null ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="Écrivez votre journal ici..."
            rows={10}
          />
          <button type="submit" className="service">Soumettre</button>
        </form>
      ) : (
        <div className="journal-entry">
          <h2>Votre entrée</h2>
          <p>{submitted}</p>
        </div>
      )}
    </section>
  )
}

export default Journal
