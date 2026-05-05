import React, { useState } from 'react';
import './Sidebar.css';

/**
 * Sidebar Component
 * 
 * A fully-featured sidebar navigation component for RemoStream music application.
 * Includes main navigation, playlist management, and dynamic states.
 * 
 * Features:
 * - Home, Discover, Library, and Profile navigation
 * - Playlist creation and management
 * - Active state management
 * - Favorite playlists
 * - Responsive scrolling for long playlists
 * - Keyboard accessibility
 */
const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('home');
  const [playlists, setPlaylists] = useState([
    'Discover Weekly',
    'Release Radar',
    'Liked Songs',
    'Workout Mix',
    'Focus Session',
    'Late Night Vibes'
  ]);
  const [showNewPlaylist, setShowNewPlaylist] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const navItems = [
    { id: 'home', label: '🏠 Home', icon: '🏠' },
    { id: 'discover', label: '🔍 Discover', icon: '🔍' },
    { id: 'library', label: '📚 Library', icon: '📚' },
    { id: 'profile', label: '👤 Profile', icon: '👤' }
  ];

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      setPlaylists([...playlists, newPlaylistName]);
      setNewPlaylistName('');
      setShowNewPlaylist(false);
    }
  };

  const handleDeletePlaylist = (index) => {
    setPlaylists(playlists.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCreatePlaylist();
    } else if (e.key === 'Escape') {
      setShowNewPlaylist(false);
    }
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="sidebar-header">
        <h2 className="logo">🎧 RemoStream</h2>
        <p className="tagline">Music Discovery</p>
      </div>

      {/* Navigation Section */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeNav === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            aria-current={activeNav === item.id ? 'page' : undefined}
            aria-label={item.label}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="sidebar-divider"></div>

      {/* Playlist Section */}
      <div className="playlist-section" role="region" aria-label="Playlists">
        <div className="playlist-header">
          <h4>Your Playlists</h4>
          <button
            className="btn-add-playlist"
            onClick={() => setShowNewPlaylist(!showNewPlaylist)}
            title="Create new playlist"
            aria-label="Create new playlist"
          >
            +
          </button>
        </div>

        {/* New Playlist Input */}
        {showNewPlaylist && (
          <div className="new-playlist-form">
            <input
              type="text"
              className="playlist-input"
              placeholder="Playlist name..."
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
              aria-label="New playlist name"
            />
            <div className="form-actions">
              <button
                className="btn-create"
                onClick={handleCreatePlaylist}
                disabled={!newPlaylistName.trim()}
                aria-label="Confirm create playlist"
              >
                Create
              </button>
              <button
                className="btn-cancel"
                onClick={() => setShowNewPlaylist(false)}
                aria-label="Cancel playlist creation"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Playlists List */}
        <ul className="playlist-list" role="list">
          {playlists.length > 0 ? (
            playlists.map((playlist, index) => (
              <li key={`${playlist}-${index}`} className="playlist-item" role="listitem">
                <span className="playlist-name">📁 {playlist}</span>
                <button
                  className="btn-delete-playlist"
                  onClick={() => handleDeletePlaylist(index)}
                  title={`Delete ${playlist}`}
                  aria-label={`Delete ${playlist}`}
                >
                  ✕
                </button>
              </li>
            ))
          ) : (
            <li className="playlist-empty">No playlists yet</li>
          )}
        </ul>
      </div>

      {/* Footer Section */}
      <div className="sidebar-footer">
        <p className="footer-text">RemoStream © 2026</p>
        <div className="social-links">
          <a href="#" aria-label="GitHub" title="GitHub">🔗</a>
          <a href="#" aria-label="Twitter" title="Twitter">𝕏</a>
          <a href="#" aria-label="Discord" title="Discord">💬</a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
