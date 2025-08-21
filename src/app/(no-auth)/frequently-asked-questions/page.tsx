import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "How do I enroll in a course?",
        answer: "Courses can be purchased directly from the catalog page. If an organization is providing course access for you, you can register with the organization on the dashboard or catalog page to access its courses.",
    },
    {
        question: "How do I access courses provided by an organization?",
        answer: "Obtain an add code from your organization's facilitator. On the dashboard or catalog page, enter this code to gain access to the organization's available courses.",
    },
    {
        question: "How long do I have to complete a course after enrolling?",
        answer: "You have 1 year from the enrollment date to complete any course unless stated otherwise.",
    },
    {
        question: "How do I receive CPE credit for a course?",
        answer: "CPE credit is awarded upon successfully completing a course and passing the qualified assessment with at least a 70%. After completion, you can download your certificate from the certificates page.",
    },
    {
        question: "How many times can I take a qualified assessment?",
        answer: "You may take a qualified assessment an unlimited number of times. Only the highest scoring attempt will be considered.",
    },
    {
        question: "How can I view feedback on my qualified assessment?",
        answer: "After completing a qualified assessment with at least a 70%, all assessments for that couse will be made available for review and feedback. Access feedback by selecting the quiz attempt on the course preview page.",
    },
    {
        question: "Which browser should I use to complete trainings?",
        answer: "For the best experience, we recommend using the latest version of Google Chrome, Mozilla Firefox, or Safari. Ensure that your browser is up to date to avoid compatibility issues.",
    },
    {
        question: "Can I complete trainings on my mobile device?",
        answer: "Yes, our platform is mobile-friendly. However, for certain interactive elements, such as quizzes or simulations, we recommend using a tablet or computer for the best experience.",
    },
];


export default function FAQPage() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-4xl font-semibold tracking-tight text-primary-blue-500 sm:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure key={faq.question} as="div" className="pt-6">
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-base/7 font-semibold">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <PlusIcon aria-hidden="true" className="h-6 w-6 text-primary-orange-500 group-data-[open]:hidden" />
                                            <MinusIcon aria-hidden="true" className="h-6 w-6 text-primary-orange-500 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-base/7 text-gray-600">{faq.answer}</p>
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
