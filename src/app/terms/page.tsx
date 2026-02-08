import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Acuity",
  description: "Acuity Terms of Service - The terms governing your use of our service.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-bold text-black mb-2">Terms of Service</h1>
        <p className="text-neutral-500 mb-8">Last Updated: February 7, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral-600 leading-relaxed">
            By downloading, installing, or using the Acuity mobile application or teacher dashboard
            (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not
            agree to these Terms, do not use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Description of Service</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Acuity is a classroom management solution that:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Enables students to check into class by tapping NFC tags</li>
            <li>Provides teachers with real-time attendance tracking</li>
            <li>Optionally enables Focus Mode to limit distracting apps during class time</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Eligibility</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">The Service is intended for use by:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>K-12 students with their school&apos;s authorization</li>
            <li>Teachers and administrators at participating schools</li>
            <li>Schools that have agreed to our School Agreement</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            Students under 18 must have parental or school consent to use this Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. User Accounts</h2>

          <h3 className="text-xl font-medium text-black mt-6 mb-3">Students</h3>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>You must provide your real name when registering</li>
            <li>Your device identifier is automatically generated and stored</li>
            <li>You are responsible for maintaining the security of your device</li>
          </ul>

          <h3 className="text-xl font-medium text-black mt-6 mb-3">Teachers</h3>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>You must use a valid school email address</li>
            <li>You are responsible for maintaining the confidentiality of your password</li>
            <li>You must notify us immediately of any unauthorized use of your account</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Acceptable Use</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">You agree NOT to:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Provide false information during registration</li>
            <li>Attempt to check in for another student</li>
            <li>Tamper with NFC tags or create counterfeit tags</li>
            <li>Attempt to bypass Focus Mode restrictions through technical means</li>
            <li>Access data belonging to other schools</li>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to reverse engineer or hack the Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">6. Focus Mode</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">The Focus Mode feature:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Is optional and requires your explicit consent</li>
            <li>Uses Apple&apos;s Screen Time API</li>
            <li>Can be disabled at any time through the app</li>
            <li>Will notify your teacher if you disable it during class</li>
            <li>Does not access your personal content or messages</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            By enabling Focus Mode, you consent to temporary app restrictions during class periods.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">7. Data and Privacy</h2>
          <p className="text-neutral-600 leading-relaxed">
            Your use of the Service is also governed by our{" "}
            <a href="/privacy" className="text-black underline">Privacy Policy</a>, which is
            incorporated into these Terms by reference. We collect minimal data necessary for the
            Service, do not sell your data, and comply with FERPA and COPPA.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. School Responsibilities</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Schools using Acuity agree to:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Obtain necessary parental consents for student use</li>
            <li>Use the Service only for legitimate educational purposes</li>
            <li>Maintain appropriate access controls for teacher accounts</li>
            <li>Comply with applicable education privacy laws</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">9. Intellectual Property</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            The Service, including its design, features, and content, is owned by Acuity and
            protected by intellectual property laws. You may not:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Copy or modify the Service</li>
            <li>Create derivative works</li>
            <li>Reverse engineer the software</li>
            <li>Remove any proprietary notices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">10. Disclaimers</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">
            THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Uninterrupted or error-free operation</li>
            <li>That NFC tags will always work</li>
            <li>That Focus Mode will block all distracting apps</li>
            <li>The accuracy of attendance records</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            Schools remain responsible for verifying attendance records.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">11. Limitation of Liability</h2>
          <p className="text-neutral-600 leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW: We are not liable for any indirect, incidental,
            or consequential damages. Our total liability is limited to the amount paid for the
            Service. We are not liable for actions taken by schools or teachers based on attendance data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">12. Modifications to Service</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We reserve the right to:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Modify or discontinue the Service at any time</li>
            <li>Update these Terms with reasonable notice</li>
            <li>Add or remove features</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            Continued use after changes constitutes acceptance of new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">13. Termination</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We may terminate your access to the Service:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>For violation of these Terms</li>
            <li>At the request of your school</li>
            <li>If required by law</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            Upon termination, your right to use the Service ends immediately.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">14. Governing Law</h2>
          <p className="text-neutral-600 leading-relaxed">
            These Terms are governed by the laws of the Commonwealth of Massachusetts, United States,
            without regard to conflict of law principles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">15. Contact</h2>
          <p className="text-neutral-600 leading-relaxed">
            For questions about these Terms, email us at{" "}
            <a href="mailto:legal@acuity.app" className="text-black underline">legal@acuity.app</a>.
          </p>
        </section>

        <hr className="my-8 border-neutral-200" />

        <p className="text-neutral-500 text-sm">
          By using Acuity, you acknowledge that you have read, understood, and agree to be bound by
          these Terms of Service.
        </p>
      </article>
    </main>
  );
}
