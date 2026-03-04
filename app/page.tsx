'use client'

import { useState } from 'react'
import PixelButton from './components/ui/PixelButton'

export default function Home() {
  const [unlockedSections, setUnlockedSections] = useState({
    about: false,
    projects: false,
    secret: false,
    work: false,
    resume: false,
    contact: false
  })

  const unlockSection = (section: keyof typeof unlockedSections) => {
    setUnlockedSections(prev => ({ ...prev, [section]: true }))
  }

  return (
    <main className="game-container">
      {/* Header with HP Bar */}
      <div className="header-bar">
        <div className="player-tag">
          ⚔️ DEV探索 · LV.5
        </div>
        <div className="hp-bar">
          <span>HP</span>
          <div className="hp-fill">
            <div className="hp-fill-inner"></div>
          </div>
          <span>MP 24/24</span>
        </div>
      </div>

      {/* Main Quest Grid - 3 columns */}
      <div className="quest-grid">
        {/* About Card */}
        <div className="quest-card" onClick={() => unlockSection('about')}>
          <div className="task-badge">
            {unlockedSections.about ? '✅ TASK COMPLETE!' : '⚡ PRESS \'A\' + SPACE (CLICK HERE)'}
          </div>
          <h3 className="quest-title">ABOUT THE HERO</h3>
          {unlockedSections.about && (
            <div className="quest-content">
              <p className="mb-3">🧙‍♂️ Hey, I'm <span className="text-[#b6f9b6]">Pixel Warden</span> — a code adventurer who builds worlds with TypeScript & Rust.</p>
              <p className="mb-2">⚔️ class: frontend rogue / backend paladin</p>
              <p>✦ 8+ years slaying bugs</p>
            </div>
          )}
        </div>

        {/* Projects Card */}
        <div className="quest-card" onClick={() => unlockSection('projects')}>
          <div className="task-badge">
            {unlockedSections.projects ? '✅ SLIME DEFEATED!' : '⚡ DEFEAT SLIME (CLICK ME)'}
          </div>
          <h3 className="quest-title">PROJECT DUNGEON</h3>
          {unlockedSections.projects && (
            <div className="quest-content">
              <div className="list-item">🔮 <span className="font-bold">NecroDraw</span> – pixel editor</div>
              <div className="list-item">🏰 <span className="font-bold">DungeonChat</span> – game messenger</div>
              <div className="list-item">🐉 <span className="font-bold">bossfighter.tty</span> – terminal RPG</div>
              <p className="mt-3">⭐ github.com/pixelwarden</p>
            </div>
          )}
        </div>

        {/* Secret Card */}
        <div className="quest-card" onClick={() => unlockSection('secret')}>
          <div className="task-badge">
            {unlockedSections.secret ? '✅ SECRET FOUND!' : '⚡ FIND SECRET (CLICK)'}
          </div>
          <h3 className="quest-title">SECRET INDEX</h3>
          {unlockedSections.secret && (
            <div className="quest-content">
              <p className="mb-2">✨ you found the hidden room!</p>
              <p>🍪 have a cookie</p>
              <p className="mt-2 text-[#ffec9e]">⚡ 'PixelPort' won a jolt award</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Row - Work & Resume */}
      <div className="bottom-row">
        {/* Work Card */}
        <div className="bottom-card" onClick={() => unlockSection('work')}>
          <div className="task-badge text-[8px]">
            {unlockedSections.work ? '✅ TASK DONE!' : '▶ TASK: LOOT CORP. DATA'}
          </div>
          <h3 className="quest-title text-sm">🏢 PREVIOUS GUILDS</h3>
          {unlockedSections.work && (
            <div className="quest-content">
              <div className="list-item">🛡️ GameForge studio – frontend (2021-2024)</div>
              <div className="list-item">⚙️ RetroByte – pixel plumber (2018-2021)</div>
              <div className="list-item">📟 Indie moonlight – contracts</div>
            </div>
          )}
        </div>

        {/* Resume Card */}
        <div className="bottom-card" onClick={() => unlockSection('resume')}>
          <div className="task-badge text-[8px]">
            {unlockedSections.resume ? '✅ CHEST OPENED' : '▶ TASK: OPEN CHEST'}
          </div>
          <h3 className="quest-title text-sm">📜 SCROLL OF RESUME</h3>
          {unlockedSections.resume && (
            <div className="quest-content">
              <PixelButton size="sm" className="w-full mb-3">
                📥 DOWNLOAD PDF
              </PixelButton>
              <p className="mb-2 text-[10px]">resume.pixel.quest</p>
              <p className="text-[10px]">✦ skills: unity, react, pixelart, rust</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact Zone */}
      <div className="contact-zone">
        <div className="contact-task">
          {unlockedSections.contact ? '✅ CONTACT UNLOCKED!' : '⚡ TASK: CHANT "FRIEND" (CLICK ANY LINK)'}
        </div>
        <div className="social-links">
          <PixelButton 
            variant="primary" 
            onClick={() => unlockSection('contact')}
          >
            🐦 TWITTER
          </PixelButton>
          <PixelButton 
            variant="primary" 
            onClick={() => unlockSection('contact')}
          >
            📧 EMAIL
          </PixelButton>
          <PixelButton 
            variant="primary" 
            onClick={() => unlockSection('contact')}
          >
            🎮 DISCORD
          </PixelButton>
        </div>
      </div>

      {/* Contact Reveal Panel */}
      {unlockedSections.contact && (
        <div className="mt-4 bg-[#1e3825] border-4 border-[#68683e] p-4 text-xs">
          <p className="mb-2">✅ hey@PixelWarden.dev | +00 1234 567890</p>
          <p>🐦 twitter.com/pixelwarden · github.com/pixel-hero</p>
        </div>
      )}

      {/* Footer */}
      <div className="text-right mt-5 text-[8px] text-[#7c9a7c]">
        © 2025 PIXEL PORTFOLIO • PRESS START
      </div>
    </main>
  )
}