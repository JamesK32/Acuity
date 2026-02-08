import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Acuity",
  description: "Acuity Privacy Policy - How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <h1 className="text-4xl font-bold text-black mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 mb-8">Last Updated: February 7, 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Overview</h2>
          <p className="text-neutral-600 leading-relaxed">
            Acuity (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides a classroom focus and attendance
            management solution for K-12 schools. This Privacy Policy explains how we collect, use,
            and protect information when you use our mobile application and teacher dashboard.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium text-black mt-6 mb-3">Student Information</h3>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li><strong>Name:</strong> Provided during registration</li>
            <li><strong>Device Identifier:</strong> A randomly generated ID unique to your device (not your Apple ID or phone number)</li>
            <li><strong>Attendance Records:</strong> Timestamps of when you check into classes via NFC tap</li>
            <li><strong>Focus Mode Status:</strong> Whether Screen Time restrictions are currently active</li>
          </ul>

          <h3 className="text-xl font-medium text-black mt-6 mb-3">Teacher Information</h3>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li><strong>Name and Email:</strong> Provided during account creation</li>
            <li><strong>Authentication Data:</strong> Securely managed by our authentication provider</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">How We Use Information</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Record classroom attendance when students tap NFC tags</li>
            <li>Enable Focus Mode to limit distracting apps during class time</li>
            <li>Provide teachers with attendance dashboards</li>
            <li>Improve app performance and reliability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Data Sharing</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We do <strong>NOT</strong>:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Sell your personal information to third parties</li>
            <li>Share student data with advertisers</li>
            <li>Track your location</li>
            <li>Access your messages, photos, or other personal content</li>
          </ul>

          <p className="text-neutral-600 leading-relaxed mt-4 mb-4">We <strong>DO</strong> share data with:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li><strong>Your School:</strong> Teachers and administrators can view attendance records for their classes</li>
            <li><strong>Service Providers:</strong> We use Supabase for secure data storage</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Data Security</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">We implement industry-standard security measures including:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Encrypted data transmission (HTTPS/TLS)</li>
            <li>Secure authentication</li>
            <li>Row-level security policies in our database</li>
            <li>Regular security reviews</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Children&apos;s Privacy (COPPA Compliance)</h2>
          <p className="text-neutral-600 leading-relaxed">
            Acuity is designed for use in K-12 schools. For students under 13, schools act as agents
            for parents in consenting to data collection under FERPA. We collect only the minimum
            information necessary for the service. Parents may request to review or delete their
            child&apos;s data through the school.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">FERPA Compliance</h2>
          <p className="text-neutral-600 leading-relaxed">
            Acuity is designed to comply with the Family Educational Rights and Privacy Act (FERPA).
            Student attendance records are considered education records. Access is limited to authorized
            school personnel. We act as a &quot;school official&quot; with a legitimate educational interest
            and do not use student data for any purpose other than providing the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Your Rights</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li><strong>Access:</strong> Request a copy of your data</li>
            <li><strong>Correction:</strong> Request correction of inaccurate data</li>
            <li><strong>Deletion:</strong> Request deletion of your data (subject to school record retention requirements)</li>
            <li><strong>Opt-Out:</strong> Decline to use the service (attendance may be taken manually)</li>
          </ul>
          <p className="text-neutral-600 leading-relaxed mt-4">
            To exercise these rights, contact your school administrator or email us at{" "}
            <a href="mailto:privacy@acuity.app" className="text-black underline">privacy@acuity.app</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Screen Time Feature</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">The optional Focus Mode feature:</p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Uses Apple&apos;s Screen Time API with your permission</li>
            <li>Only activates when you check into class</li>
            <li>Restricts access to distracting apps (social media, games, etc.)</li>
            <li>Allows access to educational and essential apps</li>
            <li>Can be disabled at any time (your teacher will be notified)</li>
            <li>Does not monitor your activity or content</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Contact Us</h2>
          <p className="text-neutral-600 leading-relaxed">
            For questions about this Privacy Policy, email us at{" "}
            <a href="mailto:privacy@acuity.app" className="text-black underline">privacy@acuity.app</a>.
          </p>
        </section>

        <hr className="my-8 border-neutral-200" />

        <p className="text-neutral-500 text-sm">
          By using Acuity, you acknowledge that you have read and understood this Privacy Policy.
        </p>
      </article>
    </main>
  );
}
