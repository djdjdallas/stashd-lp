export const metadata = {
  title: 'Terms of Service - Stash\'d',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Last updated: December 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
        <p className="text-gray-300">
          By downloading, installing, or using Stash'd, you agree to be bound by these Terms of Service.
          If you do not agree to these terms, do not use the app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Description of Service</h2>
        <p className="text-gray-300">
          Stash'd is an AI-powered screenshot organization app designed for content creators.
          The app allows you to save, categorize, and analyze screenshots using artificial intelligence.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Subscriptions</h2>
        <p className="text-gray-300">
          Stash'd offers auto-renewable subscriptions for premium features.
          Payment will be charged to your Apple ID account at confirmation of purchase.
          Subscription automatically renews unless auto-renew is turned off at least 24 hours
          before the end of the current period. Your account will be charged for renewal within
          24 hours prior to the end of the current period. You can manage and cancel your
          subscriptions by going to your account settings on the App Store after purchase.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">User Content</h2>
        <p className="text-gray-300">
          You retain all rights to the screenshots and content you upload to Stash'd.
          By using our service, you grant us a limited license to process and analyze
          your content solely for the purpose of providing our services to you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Prohibited Uses</h2>
        <p className="text-gray-300">
          You agree not to use Stash'd to: upload illegal or harmful content,
          violate any applicable laws or regulations, infringe on intellectual property rights,
          attempt to gain unauthorized access to our systems, or use the service for any
          commercial purpose without our consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Disclaimer</h2>
        <p className="text-gray-300">
          Stash'd is provided "as is" without warranties of any kind. We do not guarantee
          that the service will be uninterrupted, secure, or error-free. AI-generated
          suggestions are for informational purposes only.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
        <p className="text-gray-300">
          To the maximum extent permitted by law, Stash'd shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages resulting
          from your use of or inability to use the service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
        <p className="text-gray-300">
          We reserve the right to modify these terms at any time. Continued use of
          the app after changes constitutes acceptance of the new terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-300">
          For questions about these Terms, contact us at: support@stashd.app
        </p>
      </section>
    </main>
  );
}
