import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';
import { logger } from '../lib/logger';
import TurnstileGate from '../components/TurnstileGate';

const About = () => {
  const { t } = useLanguage();
  const [userCount, setUserCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const { count: usersCount, error: usersError } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        if (!usersError && typeof usersCount === 'number') {
          setUserCount(usersCount);
          return;
        }

        const { count: creditsCount, error: creditsError } = await supabase
          .from('user_credits')
          .select('*', { count: 'exact', head: true });

        if (!creditsError && typeof creditsCount === 'number') {
          setUserCount(creditsCount);
        }
      } catch (err) {
        logger.error('Error fetching user count:', err);
      }
    };

    fetchUserCount();
  }, []);

  const formatUserCount = (count: number | null): string => {
    if (count === null) return '...';
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K+`;
    return `${count}+`;
  };

  return (
    <TurnstileGate>
      {/* Header */}
      <header className="page-header">
        <div className="container">
          <span className="section-badge">{t('about.header.badge')}</span>
          <h1>{t('about.header.title')}</h1>
          <p>{t('about.header.subtitle')}</p>
        </div>
      </header>

      {/* Mission */}
      <section className="content-section">
        <div className="container">
          <div className="about-mission-grid">
            <div className="about-mission-copy">
              <h2>{t('about.mission')}</h2>
              <p>{t('about.mission.text1')}</p>
              <p>{t('about.mission.text2')}</p>
              <p>{t('about.mission.text3')}</p>
            </div>

            <div className="about-mission-stats">
              <div className="about-stats-grid">
                <div className="about-stat">
                  <div className="about-stat-number">2025</div>
                  <div className="about-stat-label">{t('about.year')}</div>
                </div>

                <div className="about-stat">
                  <div className="about-stat-number">50+</div>
                  <div className="about-stat-label">{t('about.countries')}</div>
                </div>

                <div className="about-stat">
                  <div className="about-stat-number">
                    {formatUserCount(userCount)}
                  </div>
                  <div className="about-stat-label">{t('about.users')}</div>
                </div>

                <div className="about-stat">
                  <div className="about-stat-number">4</div>
                  <div className="about-stat-label">{t('about.members')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t('about.values.title')}</span>
            <h2 className="section-title">{t('about.values.subtitle')}</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>{t('about.security')}</h3>
              <p>{t('about.security.desc')}</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-eye"></i>
              <h3>{t('about.transparency')}</h3>
              <p>{t('about.transparency.desc')}</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-balance-scale"></i>
              <h3>{t('about.ethics')}</h3>
              <p>{t('about.ethics.desc')}</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-users"></i>
              <h3>{t('about.accessibility')}</h3>
              <p>{t('about.accessibility.desc')}</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-rocket"></i>
              <h3>{t('about.innovation')}</h3>
              <p>{t('about.innovation.desc')}</p>
            </div>

            <div className="feature-card">
              <i className="fas fa-handshake"></i>
              <h3>{t('about.support')}</h3>
              <p>{t('about.support.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">{t("about.team.title")}</span>
            <h2 className="section-title">{t("about.team.description")}</h2>
            <p className="section-description">
              {t("about.team.subtitle")}
            </p>
          </div>

          {/* 🔥 FIX CENTRAGE ICI */}
          <div
            className="team-grid about-team-grid"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap'
            }}
          >
            <div className="team-card about-team-card">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3>Crows</h3>
              <span className="about-role-chip">Founder</span>
            </div>

            <div className="team-card about-team-card">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
              <h3>zynkaa</h3>
              <span className="about-role-chip">Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>{t('about.join.title')}</h2>
            <p>{t('about.join.subtitle')}</p>

            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Voir les offres
                <i className="fas fa-arrow-right"></i>
              </Link>

              <Link to="/contact" className="btn btn-outline btn-lg">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TurnstileGate>
  );
};

export default About;