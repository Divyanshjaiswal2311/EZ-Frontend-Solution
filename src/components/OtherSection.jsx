import React from "react";

const testimonials = [
  {
    name: "Saif S. Khalid",
    position: "Head of Designs, Consulting Firm",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Sit back, relax, and let us make your presentation design shine. EZ was available round the clock and made this project a huge success in such a short period!"
  },
  {
    name: "Jacqueline Kingston",
    position: "Associate Director, Big 4",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "EZ delivered exceptional high-quality Arabic subtitles for our documentary. Their meticulous attention to detail and cultural sensitivity were instrumental to our success."
  },
  {
    name: "Sophia Greene",
    position: "CMO, Government Organization",
    img: "https://randomuser.me/api/portraits/women/54.jpg",
    quote: "EZ Market Research is a lifesaver, always there when you need them most. My project aced the deadline!"
  },
  {
    name: "Robin Davies",
    position: "Senior Consultant, Fintech Startup",
    img: "https://randomuser.me/api/portraits/men/15.jpg",
    quote: "Needed stunning background graphics to showcase industry growth across domains. EZ Design delivered exceptional visuals perfectly capturing the story. Highly recommended!"
  },
];

function OtherSection() {
  return (
    <section className="py-5 bg-light" id="testimonials">
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{color:'#213547'}}>What Our Clients Say</h2>
        <div className="row g-4 justify-content-center">
          {testimonials.map((t,i) => (
            <div className="col-md-6 col-lg-3" key={t.name}>
              <div className="card border-0 shadow-sm h-100 p-3 text-center" style={{borderRadius:'1em', background:'#fff'}}>
                <img src={t.img} alt={t.name} className="rounded-circle mb-3" style={{width:64, height:64, objectFit:'cover', border: '2.5px solid #3854a5'}}/>
                <blockquote className="blockquote mb-2 text-secondary">“{t.quote}”</blockquote>
                <footer className="blockquote-footer mt-2">{t.name}, <cite>{t.position}</cite></footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherSection;
