export const metadata = {
  title: 'Privacy Policy - Stash\'d',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last updated: December 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Introduction</h2>
        <p className="text-gray-300">
          Stash'd ("we," "our," or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our mobile application.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
        <p className="text-gray-300">
          We collect information that you provide directly to us, including:
          account information (email address), screenshots and images you choose to save,
          AI-generated content based on your screenshots, notes and annotations you add,
          and usage data and app analytics.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
        <p className="text-gray-300">
          We use the information we collect to: provide, maintain, and improve our services;
          process and analyze your screenshots using AI; sync your data across devices;
          send you technical notices and support messages; and respond to your comments and questions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Data Storage</h2>
        <p className="text-gray-300">
          Your data is securely stored using industry-standard encryption.
          Screenshots and associated data are stored in secure cloud infrastructure.
          We retain your data for as long as your account is active or as needed to provide services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
        <p className="text-gray-300">
          We may use third-party services that collect information, including:
          authentication services (Supabase), cloud storage providers,
          payment processors (RevenueCat, Apple), and analytics services.
          These services have their own privacy policies governing the use of your information.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Your Rights</h2>
        <p className="text-gray-300">
          You have the right to: access your personal data, request deletion of your data,
          export your data, and opt out of certain data collection.
          To exercise these rights, please contact us at support@stashd.app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="text-gray-300">
          If you have questions about this Privacy Policy, please contact us at: support@stashd.app
        </p>
      </section>
    </main>
  );
}
