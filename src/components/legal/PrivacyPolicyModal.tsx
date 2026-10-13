import { Modal } from '../common/Modal'

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export const PrivacyPolicyModal = ({
  isOpen,
  onClose,
}: PrivacyPolicyModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Privacy Policy — DE Lab, NIELIT Imphal"
      maxWidth="xl"
    >
      <div className="space-y-4 text-sm text-slate-700">
        <p>
          <strong>Effective Date:</strong> January 1, 2026
        </p>
        <p>
          The Drone Electronics Laboratory (DE Lab) at the National Institute of
          Electronics & Information Technology (NIELIT) Imphal is committed to
          protecting the privacy of our website visitors, student applicants,
          research partners, and participants.
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          1. Information We Collect
        </h4>
        <p>
          When you use our portal, submit inquiries through our contact forms,
          or register for training programs, we may collect personal details
          including your name, email address, institutional affiliation, and
          academic background.
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          2. Use of Information
        </h4>
        <p>
          Information collected is solely utilized to process laboratory visit
          requests, coordinate workshop registrations, deliver updates on
          academic circulars, and facilitate collaborative UAV research. We do
          not sell, rent, or lease personal information to third parties.
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          3. Data Security & Storage
        </h4>
        <p>
          All collected data is stored securely adhering to Government of India
          cyber-security directives and MeitY information security guidelines.
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          4. Contact Information
        </h4>
        <p>
          For queries regarding this privacy notice, contact us at{' '}
          <a
            href="mailto:imphal@nielit.gov.in"
            className="text-blue-700 underline font-medium"
          >
            imphal@nielit.gov.in
          </a>
          .
        </p>
      </div>
    </Modal>
  )
}
