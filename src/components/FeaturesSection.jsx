import React from "react";

const services = [
  {
    icon: "🎨",
    title: "Graphics & Video",
    subtitle: "Creatives, Animation & Production",
    description:
      "Full-service graphic design and video production for branding, marketing, social campaigns, and executive presentations. Advanced animation, creative storyboarding, and world-class asset delivery for enterprise needs.",
    details: [
      "Corporate identity packages and presentations",
      "Promotional videos, explainers, and motion design",
      "Large-scale infographics and data visualization",
    ],
  },
  {
    icon: "📊",
    title: "Presentation Design",
    subtitle: "Executive Reports & Decks",
    description:
      "Stunning bespoke presentations for boardrooms, sales, training, and internal alignment—created by expert designers. Confidentiality, speed, and a unique brand-first approach.",
    details: [
      "Investor and sales presentations",
      "Content formatting, charting, template creation",
      "Pitch decks, case studies, impact reports",
    ],
  },
  {
    icon: "🤖",
    title: "AI Tools & Technology",
    subtitle: "Workflow Automation & Innovation",
    description:
      "Rapid prototyping and deployment of AI-powered business tools. Custom workflow automation, secure data processing, and technology consulting for future-forward organizations.",
    details: [
      "AI-powered reporting and analytics",
      "Workflow automation apps",
      "Data transformation, security, and ML consulting",
    ],
  },
  {
    icon: "🔎",
    title: "Research & Analytics",
    subtitle: "Surveys, Insights & Visualization",
    description:
      "In-depth market research, competitive analysis, survey administration, and advanced data visualization. Helping enterprises make data-driven decisions at scale.",
    details: [
      "Survey design and global deployment",
      "Competitor, market, sentiment and trend analysis",
      "Dynamic dashboards and visualization solutions",
    ],
  },
  {
    icon: "🌐",
    title: "Language Services",
    subtitle: "Translation, Localization & Content",
    description:
      "Multilingual content creation, localization, voice-over, transcription, and expert translation services—supporting 50+ languages for global brands.",
    details: [
      "Website and software localization",
      "Voice-over, dubbing, subtitling",
      "Certified legal, marketing, and technical translation",
    ],
  },
  {
    icon: "💼",
    title: "Business Support",
    subtitle: "Back-Office & Managed Services",
    description:
      "Comprehensive business support: HR, remote executive assistance, payroll, legal contracts, procurement, operations and process optimization.",
    details: [
      "Remote executive assistance (EA)",
      "Operations, HR, payroll, procurement management",
      "Document management and admin automation",
    ],
  },
];

function FeaturesSection() {
  return (
    <section
      className="features-section extended-services-page bg-white"
      id="features"
    >
      <div className="container-xl" style={{ maxWidth: "1200px" }}>
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "#252e4d", fontSize: "2.5rem" }}
        >
          Our Services
        </h2>
        <div className="row gy-5 gx-4 justify-content-center">
          {services.map((service, idx) => (
            <div
              className="col-12 col-md-6 col-lg-4 d-flex"
              key={service.title}
            >
              <div
                className="card h-100 shadow service-card border-0 flex-fill p-4 text-center"
                style={{
                  borderRadius: "1.5em",
                  minHeight: 410,
                  background: "#f7faff",
                }}
              >
                <div className="mb-3 display-3" aria-hidden>
                  {service.icon}
                </div>
                <h5
                  className="card-title fw-bold mb-2"
                  style={{ color: "#3854a5", fontSize: "1.5rem" }}
                >
                  {service.title}
                </h5>
                <p
                  className="card-subtitle text-muted mb-2"
                  style={{ fontWeight: 500 }}
                >
                  {service.subtitle}
                </p>
                <p
                  className="card-text text-muted mb-4"
                  style={{ fontSize: "1.1rem" }}
                >
                  {service.description}
                </p>
                <ul
                  className="text-start mx-auto service-features-list"
                  style={{ maxWidth: "18em" }}
                >
                  {service.details.map((point, ix) => (
                    <li key={ix} style={{ marginBottom: 8 }}>
                      <span style={{ color: "#3854a5", fontWeight: 600 }}>
                        &#10003;
                      </span>{" "}
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a
            href="#contact"
            className="btn btn-primary btn-lg px-5 rounded-pill shadow"
          >
            Request Service Info
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
