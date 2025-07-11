
import data from '../data/week-data.json';

const tagColor = (type, value) => {
  const map = {
    "chaos_risk": { Low: 'green', Medium: 'orange', High: 'red' },
    "depth_gap": { Low: 'green', Moderate: 'orange', High: 'red' }
  };
  return map[type]?.[value] || 'gray';
};

export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', background: '#111', color: '#fff' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>ATS Fallback Dashboard</h1>
      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {data.map((game, idx) => (
          <div key={idx} style={{
            border: '1px solid #333',
            padding: '1rem',
            borderRadius: '8px',
            backgroundColor: '#1c1c1c',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          }}>
            <h2 style={{ color: '#00e1ff' }}>{game.teams}</h2>
            <p><strong>Confidence:</strong> {game.confidence}%</p>
            <p><strong>Bet:</strong> {game.suggested_bet}</p>
            <p>
              <strong>Chaos Risk:</strong>{' '}
              <span style={{ color: tagColor('chaos_risk', game.chaos_risk) }}>{game.chaos_risk}</span>
              {' | '}
              <strong>Depth Gap:</strong>{' '}
              <span style={{ color: tagColor('depth_gap', game.depth_gap) }}>{game.depth_gap}</span>
            </p>
            <p><strong>CLV Edge:</strong> {game.clv_edge}</p>
            <p><strong>Tape Proxy:</strong> {game.tape_proxy}</p>
            <p><strong>Blindspot:</strong> {game.blindspot_alert ? '✅ Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
