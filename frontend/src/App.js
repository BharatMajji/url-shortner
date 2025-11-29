import { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();
    if (!url) {
      setMessage('Please enter a URL');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://url-shortner-backend-wek9.onrender.com/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl: url }),
      });

      const data = await response.json();
      if (response.ok) {
        setShortUrl(`http://localhost:3000/${data.url.shortUrl}`);
        setMessage('URL shortened successfully!');
        setUrl('');
      } else {
        setMessage(data.error || 'Error shortening URL');
      }
    } catch (err) {
      setMessage('Error: Could not connect to server');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setMessage('Copied to clipboard!');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>URL Shortener</h1>
        <form onSubmit={handleShorten}>
          <input
            type="url"
            placeholder="Enter your long URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        {shortUrl && (
          <div className="result">
            <p>Shortened URL:</p>
            <div className="short-url-box">
              <input type="text" value={shortUrl} readOnly />
              <button onClick={copyToClipboard}>Copy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
