import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Code2, Database,
  Download, Github, Globe2, Heart, Linkedin, Mail, MapPin, Menu, Moon,
  Palette, Send, Sparkles, Sun, X, Zap,
} from 'lucide-react'
import './styles.css'

const content = {
  es: {
    nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Habilidades'],
    eyebrow: 'Ingeniera en computación · Desarrolladora full-stack',
    title: <>Creo productos digitales <em>claros, humanos</em> y memorables.</>,
    intro: 'Diseño y desarrollo productos digitales para organizaciones que necesitan claridad, orden y una experiencia que las personas quieran usar.',
    cta: 'Hablemos',
    secondary: 'Ver proyectos',
    location: 'San Carlos, Costa Rica',
    aboutTitle: 'Sobre mí',
    about: <>Soy una <strong>desarrolladora full-stack early-career con experiencia profesional</strong>, graduada en Ingeniería en Computación en Costa Rica. He participado en aplicaciones web y móviles, incluyendo sistemas ERP, plataformas de recursos humanos, facturación electrónica y soluciones omnicanal.</>,
    about2: <>Mis tecnologías principales son TypeScript, React, Next.js, Node.js y SQL. También tengo experiencia con Angular, Vue, Kotlin, Docker, Redis y AWS. Busco una oportunidad remota donde pueda seguir creciendo y contribuir a productos reales.</>,
    facts: [{ value: '3+', label: 'años creando soluciones' }, { value: '7+', label: 'proyectos y productos' }, { value: 'B1–B2', label: 'inglés profesional' }],
    experienceTitle: 'Experiencia profesional',
    experienceIntro: 'Construyendo software para problemas reales.',
    experiences: [
      { date: 'Feb 2026 — Jun 2026', role: 'Full-stack developer · Práctica profesional', company: 'CyberPro S.A. · Soluciones empresariales', text: 'Participé en el desarrollo y evolución de soluciones empresariales, trabajando en sistemas ERP y funcionalidades de facturación, contabilidad y gestión administrativa. Desarrollé funcionalidades, mejoré módulos e integré frontend, backend y bases de datos en un entorno ágil.', tags: ['React', 'TypeScript', 'Vue', 'Node.js', 'NestJS', 'Prisma', 'MySQL', 'Docker', 'Scrum'] },
      { date: 'Jul 2026 — Sep 2026', role: 'Full-stack developer · Freelance', company: 'CyberPro S.A. · Plataforma omnicanal con IA', text: 'Desarrollé funcionalidades para una plataforma omnicanal que centraliza conversaciones y procesos comerciales. Trabajé en integraciones externas, clientes, órdenes, cotizaciones, facturación y automatizaciones con inteligencia artificial.', tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'Redis', 'BullMQ', 'AWS'] },
      { date: 'Ago 2024 — Dic 2025', role: 'Full-stack developer', company: 'Tecnológico de Costa Rica · Sistemas institucionales', text: 'Participé en el mantenimiento y evolución de sistemas utilizados por el Campus Tecnológico, desarrollando funcionalidades y resolviendo incidencias. También trabajé en una solución para gestionar solicitudes de mantenimiento desde frontend, backend y bases de datos.', tags: ['Angular', 'React', 'Express', 'SQL Server', 'SQL', 'Git'] },
    ],
    projectsTitle: 'Proyectos que hablan por mí',
    projectsIntro: 'Un recorrido por productos reales, desde gestión empresarial hasta mensajería inteligente.',
    projects: [
      { number: '01', title: 'ERP empresarial', category: 'Gestión y operaciones', description: 'Ecosistema full-stack para centralizar procesos de negocio, con autenticación, reportes, exportaciones y flujos administrativos.', stack: ['Next.js', 'React', 'Express', 'Prisma', 'MySQL'], color: 'peach', icon: BriefcaseBusiness },
      { number: '02', title: 'Plataforma omnicanal', category: 'Mensajería e inteligencia artificial', description: 'Suite de comunicación para canales digitales con notificaciones, colas de trabajo, IA, búsqueda semántica y aplicaciones multiplataforma.', stack: ['Next.js', 'Express', 'Redis', 'OpenAI', 'Flutter'], color: 'lavender', icon: Sparkles },
      { number: '03', title: 'Sistema de gestión de recursos humanos', category: 'Planillas y talento', description: 'Sistema regional para procesos de recursos humanos, planillas, reportes oficiales, CCSS, ISR, aguinaldo y liquidaciones.', stack: ['Python', 'Frappe', 'Vue 3', 'MariaDB', 'Redis'], color: 'mint', icon: Database },
      { number: '04', title: 'Plataforma de monitoreo', category: 'Operaciones empresariales', description: 'Ecosistema web y móvil con mapas, automatizaciones y una experiencia consistente entre Next.js y Android nativo.', stack: ['Next.js', 'React', 'Kotlin', 'Compose', 'Room'], color: 'sky', icon: Globe2 },
      { number: '05', title: 'Sistema de facturación electrónica', category: 'Documentos y cumplimiento', description: 'Backend especializado en facturación electrónica, firma digital, documentos XML y almacenamiento seguro en la nube.', stack: ['NestJS', 'TypeScript', 'Prisma', 'XML', 'AWS'], color: 'rose', icon: Code2 },
      { number: '06', title: 'Sistema de reservas de laboratorios', category: 'Educación y gestión de espacios', description: 'Plataforma académica con reservas por horario, inventario de equipo, reportes de daños, dashboards por rol y generación de PDF.', stack: ['PHP', 'PostgreSQL', 'JavaScript', 'PHPMailer', 'FPDF'], color: 'butter', icon: Zap, link: 'https://github.com/Noealto90/ProyectoETAI' },
      { number: '07', title: 'Plataforma de reservas turísticas', category: 'Experiencia de compra', description: 'Construí componentes y flujos de compra para una plataforma de tours. Integré Firebase Remote Config para actualizar el producto sin nuevos despliegues.', stack: ['React', 'Firebase', 'UX'], color: 'peach', icon: Globe2 },
    ],
    skillsTitle: 'Mi caja de herramientas',
    skillsIntro: 'Tecnologías que convierto en experiencias confiables.',
    skillGroups: [
      { title: 'Frontend development', icon: Palette, items: ['React', 'Next.js', 'Angular', 'Vue 3', 'React Native', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
      { title: 'Backend development', icon: Code2, items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'PHP', 'Java', 'REST APIs'] },
      { title: 'Databases & services', icon: Database, items: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma'] },
      { title: 'Tools & testing', icon: Zap, items: ['Git & GitHub', 'Postman', 'Cypress', 'Jasmine', 'Karma', 'Jest', 'SCRUM', 'Jira'] },
    ],
    contactTitle: <>¿Buscas a alguien<br /><em>que haga que avance?</em></>,
    contactText: 'Estoy lista para aportar en un equipo donde pueda seguir creciendo, resolver problemas reales y construir productos de los que podamos sentirnos orgullosos.',
    contactButton: 'Enviar un mensaje',
    footer: 'Noelia Alpízar · 2026 · Full-Stack Software Developer',
    language: 'EN',
    download: 'Descargar CV',
  },
  en: {
    nav: ['About', 'Experience', 'Projects', 'Skills'],
    eyebrow: 'Computer engineer · Full-stack developer',
    title: <>I build digital products that are <em>clear, human</em> and memorable.</>,
    intro: 'I design and build digital products for organizations that need clarity, structure and experiences people enjoy using.',
    cta: "Let's connect",
    secondary: 'See projects',
    location: 'San Carlos, Costa Rica',
    aboutTitle: 'About me',
    about: <>I’m an <strong>early-career full-stack developer with professional experience</strong> and a Computer Engineering degree from Costa Rica. I have worked on web and mobile applications, including ERP systems, HR platforms, electronic invoicing solutions and omnichannel products.</>,
    about2: <>My main technologies are TypeScript, React, Next.js, Node.js and SQL. I also work with Angular, Vue, Kotlin, Docker, Redis and AWS. I’m particularly interested in remote software development roles where I can keep growing and contribute to real-world products.</>,
    facts: [{ value: '3+', label: 'years building solutions' }, { value: '7+', label: 'projects and products' }, { value: 'B1–B2', label: 'professional English' }],
    experienceTitle: 'Professional experience',
    experienceIntro: 'Building software for real-world problems.',
    experiences: [
      { date: 'Feb 2026 — Jun 2026', role: 'Full-stack developer · Internship', company: 'CyberPro S.A. · Business solutions', text: 'Contributed to enterprise solutions including ERP, invoicing, accounting and administrative management features. Built functionality, improved existing modules and integrated frontend, backend and databases in an agile environment.', tags: ['React', 'TypeScript', 'Vue', 'Node.js', 'NestJS', 'Prisma', 'MySQL', 'Docker', 'Scrum'] },
      { date: 'Jul 2026 — Sep 2026', role: 'Full-stack developer · Freelance', company: 'CyberPro S.A. · AI-powered omnichannel platform', text: 'Developed features for an omnichannel platform that centralizes conversations and business processes. Worked on external integrations, customers, orders, quotations, invoicing and AI-powered automation.', tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'Redis', 'BullMQ', 'AWS'] },
      { date: 'Aug 2024 — Dec 2025', role: 'Full-stack developer', company: 'Tecnológico de Costa Rica · Institutional systems', text: 'Maintained and evolved systems used by the Campus, building features and resolving issues. Also contributed to a maintenance-request solution across frontend, backend and databases.', tags: ['Angular', 'React', 'Express', 'SQL Server', 'SQL', 'Git'] },
    ],
    projectsTitle: 'Projects that speak for me',
    projectsIntro: 'A tour through real products, from enterprise management to intelligent messaging.',
    projects: [
      { number: '01', title: 'Enterprise ERP', category: 'Business management', description: 'Full-stack ecosystem for centralizing business processes with authentication, reports, exports and administrative workflows.', stack: ['Next.js', 'React', 'Express', 'Prisma', 'MySQL'], color: 'peach', icon: BriefcaseBusiness },
      { number: '02', title: 'Omnichannel platform', category: 'Messaging & artificial intelligence', description: 'Communication suite for digital channels with notifications, job queues, AI, semantic search and cross-platform apps.', stack: ['Next.js', 'Express', 'Redis', 'OpenAI', 'Flutter'], color: 'lavender', icon: Sparkles },
      { number: '03', title: 'Human resources management system', category: 'Payroll & people operations', description: 'Regional HR system for payroll, official reports, social security, taxes, annual bonuses and settlements.', stack: ['Python', 'Frappe', 'Vue 3', 'MariaDB', 'Redis'], color: 'mint', icon: Database },
      { number: '04', title: 'Monitoring platform', category: 'Business operations', description: 'Web and mobile ecosystem with maps, automations and a consistent experience across Next.js and native Android.', stack: ['Next.js', 'React', 'Kotlin', 'Compose', 'Room'], color: 'sky', icon: Globe2 },
      { number: '05', title: 'Electronic invoicing system', category: 'Documents & compliance', description: 'Specialized backend for e-invoicing, digital signatures, XML documents and secure cloud storage.', stack: ['NestJS', 'TypeScript', 'Prisma', 'XML', 'AWS'], color: 'rose', icon: Code2 },
      { number: '06', title: 'Laboratory reservation system', category: 'Education & space management', description: 'Academic platform with time-slot reservations, equipment inventory, damage reports, role-based dashboards and PDF generation.', stack: ['PHP', 'PostgreSQL', 'JavaScript', 'PHPMailer', 'FPDF'], color: 'butter', icon: Zap, link: 'https://github.com/Noealto90/ProyectoETAI' },
      { number: '07', title: 'Tour booking platform', category: 'Purchase experience', description: 'Built components and purchase flows for a tour platform with React. Integrated Firebase Remote Config to update the product without new deployments.', stack: ['React', 'Firebase', 'UX'], color: 'peach', icon: Globe2 },
    ],
    skillsTitle: 'My toolkit',
    skillsIntro: 'Technologies I turn into reliable experiences.',
    skillGroups: [
      { title: 'Frontend development', icon: Palette, items: ['React', 'Next.js', 'Angular', 'Vue 3', 'React Native', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
      { title: 'Backend development', icon: Code2, items: ['Node.js', 'Express.js', 'NestJS', 'Python', 'PHP', 'Java', 'REST APIs'] },
      { title: 'Databases & services', icon: Database, items: ['MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Firebase', 'Prisma'] },
      { title: 'Tools & testing', icon: Zap, items: ['Git & GitHub', 'Postman', 'Cypress', 'Jasmine', 'Karma', 'Jest', 'SCRUM', 'Jira'] },
    ],
    contactTitle: <>Looking for someone<br /><em>to move it forward?</em></>,
    contactText: 'I’m ready to join a team where I can keep growing, solve real problems and build products we can be proud of.',
    contactButton: 'Send a message',
    footer: 'Noelia Alpízar · 2026 · Full-Stack Software Developer',
    language: 'ES',
    download: 'Download CV',
  },
}

function CursorTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const particles = []
    let frame
    let width = window.innerWidth
    let height = window.innerHeight

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      const ratio = window.devicePixelRatio || 1
      canvas.width = width * ratio
      canvas.height = height * ratio
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    const addParticles = (event) => {
      for (let index = 0; index < 2; index += 1) {
        particles.push({
          x: event.clientX + (Math.random() - 0.5) * 8,
          y: event.clientY + (Math.random() - 0.5) * 8,
          radius: Math.random() * 2.5 + 1.5,
          alpha: 0.32,
          life: 1,
          drift: (Math.random() - 0.5) * 0.45,
        })
      }
    }
    const animate = () => {
      context.clearRect(0, 0, width, height)
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index]
        particle.y += 0.28
        particle.x += particle.drift
        particle.life -= 0.018
        if (particle.life <= 0) {
          particles.splice(index, 1)
          continue
        }
        context.beginPath()
        context.fillStyle = `rgba(231, 169, 184, ${particle.alpha * particle.life})`
        context.arc(particle.x, particle.y, particle.radius * particle.life, 0, Math.PI * 2)
        context.fill()
      }
      frame = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', addParticles)
    frame = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', addParticles)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="cursor-trail" aria-hidden="true" />
}

function App() {
  const [lang, setLang] = useState('en')
  const [dark, setDark] = useState(false)
  const [menu, setMenu] = useState(false)
  const t = content[lang]

  useEffect(() => { document.documentElement.lang = lang; document.body.className = dark ? 'dark' : '' }, [lang, dark])

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false) }

  return (
    <div className="site-shell" onMouseMove={(event) => { document.documentElement.style.setProperty('--mx', `${event.clientX}px`); document.documentElement.style.setProperty('--my', `${event.clientY}px`) }}>
      <div className="grain" />
      <CursorTrail />
      <header className="navbar">
        <a className="brand" href="#top" onClick={() => scrollTo('top')}><span className="brand-mark">N</span><span>Noelia Alpízar</span></a>
        <nav className={menu ? 'nav-links open' : 'nav-links'}>
          {t.nav.map((item, i) => <a key={item} href={`#${['about', 'experience', 'projects', 'skills'][i]}`} onClick={() => setMenu(false)}>{item}</a>)}
          <a href="#contact" onClick={() => setMenu(false)}>{t.cta}</a>
        </nav>
        <div className="nav-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle dark mode">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
          <button className="lang-button" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}><Globe2 size={15} /> {t.language}</button>
          <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-content reveal">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions"><button className="button primary" onClick={() => scrollTo('contact')}>{t.cta} <ArrowUpRight size={17} /></button><button className="button text-button" onClick={() => scrollTo('projects')}>{t.secondary} <ChevronDown size={16} /></button></div>
            <div className="hero-meta"><span><MapPin size={15} /> {t.location}</span><span className="meta-line" /><span>© 2026</span></div>
          </div>
          <div className="hero-art reveal delay-one">
            <div className="portrait-card"><img src={`${import.meta.env.BASE_URL}noelia-alpizar.jpg`} alt="Noelia Alpízar" /><div className="portrait-overlay" /><div className="portrait-header"><span>01</span><span>PORTFOLIO / 2026</span></div><div className="portrait-caption"><span>Noelia Alpízar</span><small>{lang === 'es' ? 'Ingeniera en computación' : 'Computer engineer'}</small></div><div className="portrait-note"><Sparkles size={15} /> {lang === 'es' ? 'desarrollo con creatividad' : 'development with creativity'}</div></div>
            <div className="floating-card card-code"><Code2 size={17} /><span>{lang === 'es' ? 'Construye' : 'Build'}<br /><b>{lang === 'es' ? 'limpio' : 'Clean'}</b></span></div>
            <div className="floating-card card-heart"><Heart size={18} fill="currentColor" /><span>{lang === 'es' ? 'creado con' : 'crafted with'}<br /><b>{lang === 'es' ? 'creatividad' : 'creativity'}</b></span></div>
            <div className="art-star star-one">✦</div><div className="art-star star-two">✧</div>
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="section-label"><span>01</span><span>{t.aboutTitle}</span></div>
          <div className="about-grid">
            <div><h2>{t.aboutTitle}<br /><em>{lang === 'es' ? 'con criterio.' : 'with care.'}</em></h2><div className="accent-line" /></div>
            <div className="about-copy"><p>{t.about}</p><p>{t.about2}</p><div className="facts">{t.facts.map(f => <div className="fact" key={f.label}><strong>{f.value}</strong><span>{f.label}</span></div>)}</div></div>
          </div>
        </section>

        <section id="experience" className="experience-section section-pad">
          <div className="section-label"><span>02</span><span>{t.experienceTitle}</span></div>
          <div className="section-heading"><h2>{t.experienceTitle}</h2><p>{t.experienceIntro}</p></div>
          <div className="timeline">{t.experiences.map((item, i) => <article className="timeline-item reveal" key={item.company}><div className="timeline-dot">{String(i + 1).padStart(2, '0')}</div><div className="timeline-date">{item.date}</div><div className="timeline-content"><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.text}</p><div className="tag-list">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section id="projects" className="projects-section section-pad">
          <div className="section-label"><span>03</span><span>{t.projectsTitle}</span></div>
          <div className="section-heading"><h2>{t.projectsTitle}</h2><p>{t.projectsIntro}</p></div>
          <div className="project-grid">{t.projects.map(project => { const Icon = project.icon; return <article className={`project-card ${project.color} reveal`} key={project.title}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-icon"><Icon size={20} /></span></div><div className="project-visual"><div className="visual-window"><span /><span /><span /></div><Icon size={56} strokeWidth={1.2} /><span className="visual-label">{project.category}</span></div><div className="project-body"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-footer"><div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={15} /><ArrowUpRight size={14} /></a>}</div></div></article> })}</div>
        </section>

        <section id="skills" className="skills-section section-pad">
          <div className="section-label"><span>04</span><span>{t.skillsTitle}</span></div>
          <div className="section-heading"><h2>{t.skillsTitle}</h2><p>{t.skillsIntro}</p></div>
          <div className="skill-grid">{t.skillGroups.map(group => { const Icon = group.icon; return <div className="skill-card reveal" key={group.title} onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const rotateY = ((x / rect.width) - 0.5) * 8; const rotateX = ((y / rect.height) - 0.5) * -8; event.currentTarget.style.setProperty('--spot-x', `${x}px`); event.currentTarget.style.setProperty('--spot-y', `${y}px`); event.currentTarget.style.setProperty('--tilt-x', `${rotateX}deg`); event.currentTarget.style.setProperty('--tilt-y', `${rotateY}deg`) }} onMouseLeave={(event) => { event.currentTarget.style.setProperty('--tilt-x', '0deg'); event.currentTarget.style.setProperty('--tilt-y', '0deg') }}><div className="skill-icon"><Icon size={20} /></div><h3>{group.title}</h3><div className="skill-items">{group.items.map(item => <span key={item}><Check size={14} />{item}</span>)}</div></div> })}</div>
        </section>

        <section id="contact" className="contact-section section-pad"><div className="contact-decoration">✦</div><div className="contact-inner"><p className="eyebrow">05 · {t.cta}</p><h2>{t.contactTitle}</h2><p>{t.contactText}</p><div className="contact-actions"><a className="button primary" href="mailto:noealto28@gmail.com">{t.contactButton} <Mail size={17} /></a><a className="contact-email" href="mailto:noealto28@gmail.com">noealto28@gmail.com</a></div></div></section>
      </main>

      <footer className="footer"><div className="footer-brand"><span className="brand-mark">N</span><span>Noelia Alpízar</span></div><p>{t.footer}</p><div className="socials"><a href="https://github.com/Noealto90" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href="http://www.linkedin.com/in/noelia-alpizar-torres" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="mailto:noealto28@gmail.com" aria-label="Email"><Mail size={17} /></a></div></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
