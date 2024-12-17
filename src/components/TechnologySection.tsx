import Aos from "aos";
import { Cpu, Gauge, Battery, Wind } from "lucide-react";
import { useEffect } from "react";

// TechFeature Component
interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TechFeature({ icon, title, description }: TechFeatureProps) {
  return (
    <div className="flex items-start space-x-4" data-aos="fade-up">
      <div className="bg-orange-100 p-3 rounded-lg">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

export function TechnologySection() {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS animations
  }, []);

  return (
    <section
      id="technology"
      className="h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "#191919" }} // Ensures background is #191919
    >
      <div
        className="shadow-xl p-12 relative flex flex-col justify-center"
        style={{
          width: "80vw", // Fixed width relative to the viewport
          height: "70vh", // Fixed height relative to the viewport
          backgroundColor: "#0d0c0c", // Updated card background color
          borderRadius: "25px", // Very round edges
          transform: "translateY(-20px)", // Floating effect
          transition: "all 0.3s ease-in-out",
        }}
        data-aos="fade-up"
      >
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Cutting-Edge Technology</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our blasters are powered by next-generation foam dart technology,
            delivering unmatched performance and reliability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <TechFeature
              icon={<Cpu className="w-6 h-6 text-orange-500" />}
              title="Smart Targeting System"
              description="Advanced microprocessors calculate trajectory and wind conditions in real-time for maximum accuracy."
            />
            <TechFeature
              icon={<Gauge className="w-6 h-6 text-orange-500" />}
              title="Velocity Control"
              description="Adjustable power settings let you customize dart velocity for different play environments."
            />
          </div>

          <div className="space-y-12">
            <TechFeature
              icon={<Battery className="w-6 h-6 text-orange-500" />}
              title="Extended Battery Life"
              description="High-capacity lithium polymer batteries provide up to 12 hours of continuous play."
            />
            <TechFeature
              icon={<Wind className="w-6 h-6 text-orange-500" />}
              title="Air Compression System"
              description="Proprietary air compression technology delivers consistent power with minimal noise."
            />
          </div>
        </div>
      </div>
    </section>
  );
}