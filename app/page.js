'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [currentScript, setCurrentScript] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scripts = [
    {
      title: "Dream Career Hook",
      emotion: "Hope & Aspiration",
      hook: "POV: You're scrolling job sites at 2 AM... again 😔",
      body: [
        "I was stuck in the same loop - sending resumes into the void.",
        "Then I discovered CAD design.",
        "3 months at [Institute Name] later?",
        "I'm designing products companies actually WANT.",
        "From job hunting to job offers.",
        "The plot twist? I'm making 60% more than my old role."
      ],
      cta: "Your turn. Link in bio 👆",
      entertainment: "Relatable struggle → transformation story",
      bgColor: "#1a1a2e"
    },
    {
      title: "Behind The Scenes Hook",
      emotion: "Curiosity & Entertainment",
      hook: "Nobody tells you this about learning CAD... 🤯",
      body: [
        "*shows messy first design vs polished final*",
        "Week 1: I couldn't even draw a straight line",
        "Week 4: Made my first 3D model (it looked like a potato)",
        "Week 8: Designed a phone case that actually WORKS",
        "Week 12: Got hired before I even graduated",
        "The secret? Hands-on projects from DAY ONE."
      ],
      cta: "Ready to design your future? 🚀 Tap link",
      entertainment: "Before/after progression with humor",
      bgColor: "#16213e"
    },
    {
      title: "Social Proof Hook",
      emotion: "FOMO & Value",
      hook: "Why are so many people switching to CAD? 👀",
      body: [
        "✨ Real student results:",
        "→ Priya: Data entry clerk → Product Designer (₹8L/year)",
        "→ Rahul: Unemployed grad → Automotive CAD Engineer",
        "→ Sneha: Teacher → Freelance CAD artist (₹50k/month)",
        "What changed? They learned industry-standard CAD.",
        "AutoCAD • SolidWorks • CATIA",
        "100% placement support • Portfolio building • Live projects"
      ],
      cta: "Join 5000+ success stories 💼",
      entertainment: "Transformation reveals with numbers",
      bgColor: "#0f3460"
    },
    {
      title: "Pain Point Hook",
      emotion: "Empathy & Value",
      hook: "Spending ₹50k on a course that got you ZERO jobs? 😤",
      body: [
        "I feel you. I wasted 2 years on 'certifications' that meant nothing.",
        "Here's what actually worked:",
        "→ Learning SOFTWARE companies actually use",
        "→ Building a portfolio while learning",
        "→ Getting mentored by industry pros",
        "→ Interview prep + placement support",
        "Not just theory. REAL skills. REAL projects."
      ],
      cta: "Stop wasting time. Start here 👇",
      entertainment: "Honest take with practical solutions",
      bgColor: "#e94560"
    },
    {
      title: "Day In Life Hook",
      emotion: "Aspiration & Entertainment",
      hook: "A day as a CAD designer: *Chef's kiss* 👨‍💻✨",
      body: [
        "9 AM: Coffee + opening my design project",
        "11 AM: Client call (from my HOME OFFICE)",
        "1 PM: Lunch break (no office politics!)",
        "3 PM: 3D printing my design concept",
        "5 PM: Submitting work, client loves it 💰",
        "6 PM: Logging off. ACTUALLY logging off.",
        "This could be you in 3-6 months."
      ],
      cta: "Ready for this life? Start learning 🎯",
      entertainment: "Aspirational lifestyle showcase",
      bgColor: "#2d4059"
    }
  ];

  const currentScriptData = scripts[currentScript];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>🎬 CAD Training UGC Reel Scripts</h1>
        <p>Professional UGC-style advertisement scripts for social media</p>
      </header>

      <div className={styles.phoneFrame}>
        <div className={styles.phoneNotch}></div>
        <div
          className={styles.reelContainer}
          style={{ backgroundColor: currentScriptData.bgColor }}
        >
          <div className={styles.reelContent}>
            <div className={styles.hookSection}>
              <h2 className={styles.hook}>{currentScriptData.hook}</h2>
            </div>

            <div className={styles.bodySection}>
              {currentScriptData.body.map((line, idx) => (
                <p key={idx} className={styles.bodyLine}>
                  {line}
                </p>
              ))}
            </div>

            <div className={styles.ctaSection}>
              <p className={styles.cta}>{currentScriptData.cta}</p>
            </div>

            <div className={styles.metadata}>
              <span className={styles.tag}>💎 {currentScriptData.emotion}</span>
              <span className={styles.tag}>🎭 {currentScriptData.entertainment}</span>
            </div>
          </div>

          <div className={styles.reelSidebar}>
            <div className={styles.sidebarBtn}>
              <div className={styles.avatar}>👤</div>
              <div className={styles.plusIcon}>+</div>
            </div>
            <div className={styles.sidebarBtn}>
              ❤️
              <span>24.5K</span>
            </div>
            <div className={styles.sidebarBtn}>
              💬
              <span>892</span>
            </div>
            <div className={styles.sidebarBtn}>
              ↗️
              <span>3.2K</span>
            </div>
            <div className={styles.sidebarBtn}>
              ⋯
            </div>
          </div>

          <div className={styles.reelBottom}>
            <div className={styles.username}>@cad_training_institute</div>
            <div className={styles.caption}>
              Transform your career with CAD training 🚀 #CADDesign #CareerGrowth
            </div>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={styles.navBtn}
          onClick={() => setCurrentScript((prev) => (prev - 1 + scripts.length) % scripts.length)}
        >
          ← Previous
        </button>
        <div className={styles.scriptInfo}>
          <h3>{currentScriptData.title}</h3>
          <p>Script {currentScript + 1} of {scripts.length}</p>
        </div>
        <button
          className={styles.navBtn}
          onClick={() => setCurrentScript((prev) => (prev + 1) % scripts.length)}
        >
          Next →
        </button>
      </div>

      <div className={styles.scriptDetails}>
        <h3>📝 Full Script Copy</h3>
        <div className={styles.scriptBox}>
          <div className={styles.scriptSection}>
            <strong>HOOK:</strong>
            <p>{currentScriptData.hook}</p>
          </div>
          <div className={styles.scriptSection}>
            <strong>BODY:</strong>
            {currentScriptData.body.map((line, idx) => (
              <p key={idx}>• {line}</p>
            ))}
          </div>
          <div className={styles.scriptSection}>
            <strong>CTA:</strong>
            <p>{currentScriptData.cta}</p>
          </div>
        </div>
      </div>

      <div className={styles.tips}>
        <h3>🎥 Production Tips</h3>
        <ul>
          <li><strong>Visual:</strong> Use screen recordings, before/after clips, or talking head format</li>
          <li><strong>Pacing:</strong> 7-15 seconds per key point, 30-60 seconds total</li>
          <li><strong>Music:</strong> Trending audio or upbeat motivational background track</li>
          <li><strong>Text:</strong> Add captions synced with speech for accessibility</li>
          <li><strong>CTA:</strong> Make the link clickable in bio, pin comment with details</li>
        </ul>
      </div>

      <footer className={styles.footer}>
        <p>🚀 Each script combines 2+ elements: Emotion, Value, Entertainment</p>
      </footer>
    </div>
  );
}
