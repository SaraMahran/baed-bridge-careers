import { Layout } from "@/components/Layout";

const sections = [
  { title: "Information We Collect", body: "We collect information you provide when creating an account, such as your name, email address, and career preferences. We also collect usage data to improve your experience on the platform." },
  { title: "How We Use Your Information", body: "Your information is used to personalize your learning path, match you with relevant job opportunities, and connect you with mentors. We do not sell your personal data to third parties." },
  { title: "Accessibility & Disability Data", body: "Any information you share about your disability or accessibility needs is handled with the highest level of care and confidentiality. This data is used solely to tailor your experience and is never shared without your explicit consent." },
  { title: "Data Security", body: "We implement industry-standard security measures to protect your personal information. Your data is encrypted in transit and at rest." },
  { title: "Your Rights", body: "You have the right to access, correct, or delete your personal data at any time. To make a request, contact us at hello@baedconnect.com." },
  { title: "Contact Us", body: "If you have any questions about this Privacy Policy, please reach out to us at hello@baedconnect.com or through our Contact page." }
];

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#fefce8] to-[#faf5f0] py-20 px-4 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#9b2c5e] uppercase mb-3">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#3d1a2e] mb-4">Privacy Policy</h1>
        <p className="text-[#7c4a6e] text-lg">Last updated: April 2026</p>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          {sections.map((section, i) => (
            <div key={section.title}>
              <div className="py-8">
                <h2 className="text-base font-semibold text-[#9b2c5e] uppercase tracking-wide mb-3">
                  {section.title}
                </h2>
                <p className="text-[#3d1a2e] leading-relaxed">{section.body}</p>
              </div>
              {i < sections.length - 1 && (
                <hr className="border-[#e8d5e0]" />
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;