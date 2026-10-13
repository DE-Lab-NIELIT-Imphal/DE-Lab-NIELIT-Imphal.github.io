import { Modal } from '../common/Modal'

interface TermsConditionsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const TermsConditionsModal = ({
  isOpen,
  onClose,
}: TermsConditionsModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Terms & Conditions — DE Lab, NIELIT Imphal"
      maxWidth="xl"
    >
      <div className="space-y-4 text-sm text-slate-700">
        <p>
          <strong>Last Revised:</strong> January 1, 2026
        </p>
        <p>
          Welcome to the official portal of the Drone Electronics Laboratory
          (DE Lab), an autonomous scientific research and training center under
          NIELIT Imphal (Ministry of Electronics and Information Technology,
          Govt. of India).
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          1. Intellectual Property
        </h4>
        <p>
          All technical publications, circuit schematics, hardware designs,
          photographic assets, and software firmware descriptions hosted on this
          site are the intellectual property of DE Lab, NIELIT Imphal and
          respective authors, protected under applicable Indian copyright and
          patent laws.
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          2. Academic & Non-Commercial Use
        </h4>
        <p>
          Information provided on this portal is intended for academic research,
          educational inquiry, and institutional collaboration. Unauthorized
          commercial reproduction or distribution is strictly prohibited.
        </p>

        <h4 className="font-bold text-slate-900 text-base">
          3. Drone Operations & Regulatory Compliance
        </h4>
        <p>
          All UAV flight operations, testing arenas, and field experiments
          undertaken by DE Lab strictly adhere to DGCA (Directorate General of
          Civil Aviation) Drone Rules 2021 and local airspace security protocols.
        </p>

        <h4 className="font-bold text-slate-900 text-base">4. Disclaimer</h4>
        <p>
          While we strive for absolute accuracy, NIELIT Imphal assumes no liability
          for technical discrepancies in non-official draft circulars. Official
          gazettes and signed notices remain the binding authority.
        </p>
      </div>
    </Modal>
  )
}
