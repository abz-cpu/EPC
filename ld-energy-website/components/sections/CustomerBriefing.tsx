import Link from 'next/link'
import { ArrowRight, Calculator, Check, Clock, FileText, GitCompareArrows, ReceiptText } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { govUk } from '@/lib/site'

/**
 * The message the assessor currently sends by hand on WhatsApp after a booking,
 * turned into a page section.
 *
 * This is the reason /preparing-for-your-epc exists as a link rather than only
 * as an article: a customer opens it on a phone, minutes after booking, and has
 * to understand the essentials in under a minute. So it sits directly under the
 * hero, above the contents nav, and nothing here is collapsed — a booked
 * customer should not have to tap anything to read their own instructions.
 *
 * Tone is deliberately closer to a text message than to marketing copy. Each
 * note ends with a link into the detailed section below rather than repeating
 * it, so the briefing stays short and the article stays authoritative.
 */
const prepare = [
  'Access to all rooms, radiators, windows, heating and hot-water systems.',
  'Supporting documents: if insulation or another improvement is hidden and I cannot access, measure and photograph it, please provide legitimate documentation showing what was installed — including the insulation thickness where applicable. Without suitable evidence I cannot assume hidden insulation is present, and the approved methodology requires the applicable RdSAP default to be used instead. Window installation details, hot-water-cylinder information, heat-pump flow-temperature information and solar or MCS documents may also be useful.',
]

const notes = [
  {
    Icon: Clock,
    title: 'Turnaround',
    body: 'The turnaround time for the EPC certificate after the assessment is within 72 hrs.',
  },
  {
    Icon: ReceiptText,
    title: 'Pricing',
    body: 'Your quote is based on the property details provided and assumes a standard property. If the property has a substantially more complex layout, significant extensions or other material features that were not discussed beforehand, any necessary price adjustment will be explained and agreed before the assessment begins.',
    href: '#quote-and-property-complexity',
    linkLabel: 'More about quotes and property complexity',
  },
  {
    Icon: Calculator,
    title: 'Ratings',
    body: 'I cannot manually adjust or influence your EPC rating. I collect and record the property data and any acceptable supporting evidence. The score itself is calculated by approved EPC software using the government-approved methodology.',
    href: '#how-your-epc-rating-is-calculated',
    linkLabel: 'How your EPC rating is calculated',
  },
  {
    Icon: GitCompareArrows,
    title: 'Older or neighbouring EPCs',
    body: null,
    href: '#why-your-epc-may-differ',
    linkLabel: 'Why your EPC may differ',
  },
]

export function CustomerBriefing() {
  return (
    <Container className="pt-8 md:pt-10">
      <div
        id="please-read"
        className="mx-auto max-w-4xl scroll-mt-24 overflow-hidden rounded-3xl border border-primary-200 bg-white shadow-premium md:scroll-mt-28"
      >
        {/* Navy header band: signals "instructions", not "warning". */}
        <div className="px-5 py-5 sm:px-7" style={{ background: 'linear-gradient(160deg, #0D1B33 0%, #142644 100%)' }}>
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: '#95BFAD' }}>
            Before your appointment
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-white md:text-3xl">
            Please read before your EPC
          </h2>
          <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: 'rgba(214,225,240,0.8)' }}>
            These points help the assessment run smoothly, and explain how quotes and EPC ratings
            work.
          </p>
        </div>

        <div className="p-5 sm:p-7">
          <h3 className="text-lg font-bold text-secondary-900">What to prepare</h3>
          <ul className="mt-3 space-y-2.5">
            {prepare.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-sm"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[15px] leading-snug text-secondary-800">{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#documents-and-evidence"
            className="mt-2 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800"
          >
            <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
            See which documents may be useful
          </Link>

          <h3 className="mt-6 border-t border-secondary-100 pt-6 text-lg font-bold text-secondary-900">
            Important notes
          </h3>
          <ul className="mt-3 space-y-3">
            {notes.map(({ Icon, title, body, href, linkLabel }) => (
              <li key={title} className="rounded-2xl border border-secondary-200 bg-secondary-50/60 p-4">
                <p className="flex items-center gap-2 text-[15px] font-bold text-secondary-900">
                  <Icon className="h-4 w-4 shrink-0 text-primary-600" aria-hidden="true" />
                  {title}
                </p>
                {body ? (
                  <p className="mt-1.5 text-[15px] leading-relaxed text-secondary-700">{body}</p>
                ) : (
                  <>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-secondary-700">
                      Existing homes have been assessed using RdSAP 10 since {govUk.rdsap10EffectiveFrom.replace('15 ', '')}.
                      It is an updated, more detailed methodology, so a new EPC should not be expected
                      to reproduce a pre-June-2025 certificate exactly. This does not mean an older
                      certificate was wrong, and the update does not always raise or lower a score.
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-secondary-700">
                      Ratings can also differ between neighbouring properties — because of whether a
                      home is mid-terrace or end-terrace, insulation, glazing, extensions, heating
                      systems, floor area and the evidence available during the assessment. Two homes
                      that look alike can legitimately score differently. Concealed insulation, in
                      particular, may not be recordable without evidence the assessor can accept.
                    </p>
                  </>
                )}
                {href && linkLabel && (
                  <Link
                    href={href}
                    className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary-700 underline underline-offset-2 hover:text-primary-800"
                  >
                    {linkLabel}
                    <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}
