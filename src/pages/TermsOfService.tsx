import { Layout } from "@/components/Layout";

const sections = [
  { title: "Acceptance of Terms", body: "By accessing or using Baed Connect, you agree to be bound by these Terms of Service. If you do not agree, please do not use the platform." },
  { title: "Use of the Platform", body: "Baed Connect is an educational and employment platform for people with disabilities. You agree to use it only for lawful purposes and in a manner that respects other users' dignity and accessibility needs." },
  { title: "User Accounts", body: "You are responsible for maintaining the confidentiality of your account credentials. Please notify us immediately of any unauthorized use of your account." },
  { title: "Content", body: "Course content, resources, and job listings on Baed Connect are provided for educational and employment purposes. We strive to keep all content accurate, accessible, and up to date." },
  { title: "Limitation of Liability", body: "Baed Connect is provided as-is. We are not liable for any indirect or consequential damages arising from your use of the platform, including employment outcomes." },
  { title: "Changes to Terms", body: "We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms." },
  { title: "Contact", body: "For questions about these terms, contact us at hello@baedconnect.com." }
];

const TermsOfService = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#fefce8] to-[#faf5f0] py-20 px-4 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#9b2c5e] uppercase mb-3">Legal</p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#3d1a2e] mb-4">Terms of Service</h1>
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

export default TermsOfService;