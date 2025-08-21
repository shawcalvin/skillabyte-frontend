import { Divider } from "@/components/ui/divider"
import { TextLink } from "@/components/ui/text"

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col items-center my-16">
            <div className="w-full max-w-5xl text-gray-800 space-y-8">
                <div className="font-bold text-xl">Skillabyte Terms of Service</div>
                <Divider />
                <div className="font-semibold text-lg">Program Information and Disclosures</div>
                <div className="space-y-2">
                    <div className="font-semibold text-lg">About Our CPE Programs</div>
                    <div>
                        Skillabyte LLC provides Qualified Assessment Self-Study (QAS) CPE programs for accounting
                        professionals. Our courses are designed to maintain and improve professional competence in
                        accordance with NASBA/AICPA Standards.
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Learning Activity Structure</div>
                    <ul className="list-disc list-inside">
                        <li>Each course includes clearly defined learning objectives.</li>
                        <li>All programs are self-study with qualified assessments.</li>
                        <li>Program knowledge level, prerequisites, and advance preparation requirements are listed with each course.</li>
                        <li>Detailed course descriptions and requirements are provided before purchase.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">CPE Credit Measurement</div>
                    <ul className="list-disc list-inside">
                        <li>Credits are awarded on a 50-minute hour basis.</li>
                        <li>The minimum initial credit is one-half (0.5) CPE credit.</li>
                        <li>Additional credits are awarded in one-fifth (0.2) or one-half (0.5) increments.</li>
                        <li>
                            Credit is awarded only upon:
                            <ul className="list-disc list-inside ml-5">
                                <li>Completion of all required course content.</li>
                                <li>Successful passage of a qualified assessment with a minimum score of 70%.</li>
                                <li>Completion of a course evaluation.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Registration and Access</div>
                    <ul className="list-disc list-inside">
                        <li>Upon purchase, participants receive immediate access to course materials.</li>
                        <li>Course access is valid for 12 months from the date of purchase.</li>
                        <li>One user license per purchase - sharing access is prohibited.</li>
                        <li>Course materials may not be reproduced or distributed.</li>
                    </ul>
                </div>

                <div id="refund-policy" className="space-y-2">
                    <div className="font-semibold text-lg">Pricing and Refund Policy</div>
                    <ul className="list-disc list-inside">
                        <li>All prices are clearly stated prior to purchase.</li>
                        <li>A full refund is available within 7 days of purchase if:
                            <ul className="list-disc list-inside ml-5">
                                <li>The course has not been completed.</li>
                                <li>The final examination has not been attempted.</li>
                            </ul>
                        </li>
                        <li>No refunds are available after 7 days or after the completion of the final examination.</li>
                        <li>Refund requests must be submitted to David Wood at <a href="mailto:david.a.wood@gmail.com">david.a.wood@gmail.com</a>.</li>
                    </ul>
                </div>

                <div id="refund-policy" className="space-y-2">
                    <div className="font-semibold text-lg">Cancellation Policy</div>
                    <div>If a course is cancelled in which you are enrolled, you will be notified by email.</div>
                    <div>
                        In the case that a course is cancelled and removed by Skillabyte LLC, individuals may be entitled to a refund if:
                    </div>
                    <ul className="list-disc list-inside">
                        <li>The course has not been completed.</li>
                        <li>The final examination has not been attempted.</li>
                        <li>The course was purchased within the last year.</li>
                    </ul>
                    <div>
                        Refund requests for cancellations must be submitted to David Wood at <a href="mailto:david.a.wood@gmail.com">david.a.wood@gmail.com</a>.
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Course Completion Requirements</div>
                    <ul className="list-disc list-inside">
                        <li>Review all required course materials.</li>
                        <li>Complete all interactive review questions.</li>
                        <li>Score a minimum of 70% on the qualified assessment.</li>
                        <li>Complete the course evaluation.</li>
                        <li>The assessment may be retaken until a passing score is achieved.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Documentation of Completion</div>
                    <div>
                        Certificates of completion are available immediately upon successful course completion and can
                        be accessed by logging into your account. Certificates include:
                    </div>
                    <ul className="list-disc list-inside">
                        <li>Skillabyte LLC name and NASBA sponsor ID.</li>
                        <li>Participant&apos;s name.</li>
                        <li>Course title.</li>
                        <li>Completion date.</li>
                        <li>Instructional delivery method (QAS Self-Study).</li>
                        <li>Number of CPE credits earned.</li>
                        <li>Field of study.</li>
                        <li>NASBA time statement (CPE credits are awarded on a 50-minute hour basis).</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Technical Requirements and Support</div>
                    <ul className="list-disc list-inside">
                        <li>Compatible with standard web browsers.</li>
                        <li>Internet connection required.</li>
                        <li>Technical support available Monday-Friday, 9:00 am - 5:00 pm EST.</li>
                        <li>Email support: <a href="mailto:david.a.wood@gmail.com">david.a.wood@gmail.com</a>.</li>
                        <li>Response time: within 72 business hours.</li>
                    </ul>
                </div>

                <div id="complaint-resolution-policy" className="space-y-2">
                    <div className="font-semibold text-lg">Complaint Resolution Policy</div>
                    <ul className="list-disc list-inside">
                        <li>Submit complaints to David Wood at <a href="mailto:david.a.wood@gmail.com">david.a.wood@gmail.com</a>.</li>
                        <li>Include the course name, purchase date, and specific concerns.</li>
                        <li>A response will be provided within 3 business days.</li>
                        <li>Escalation to management is available if needed.</li>
                        <li>All complaints are tracked and reviewed for quality improvement.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Record Retention</div>
                    <ul className="list-disc list-inside">
                        <li>Course completion records are maintained for 5 years.</li>
                        <li>Participants are encouraged to download and save certificates immediately.</li>
                        <li>Replacement certificates are available upon request at no charge.</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Content Quality Commitment</div>
                    <div>
                        Courses are developed by qualified subject matter experts in compliance with NASBA/AICPA standards. Materials are reviewed and updated regularly based upon regulatory changes and participant feedback. Courses are reviewed by qualified persons other than those who developed the courses. These reviews occur before the first presentation of the materials and again after each significant revision of the program. The participation of at least one licensed CPA (in good standing and holding an active license or the equivalent of an &quot;active&quot; license in a U.S. jurisdiction) is required in the development of every program in accounting and auditing. The participation of at least one licensed CPA, tax attorney, or IRS enrolled agent (in good standing and holding an active license or the equivalent of an &quot;active&quot; license in a U.S. jurisdiction) is required in the development of each course in taxes. In the case of the subject matter of international taxes, the participation of the equivalent of an &quot;active&quot; licensed CPA for the international jurisdiction involved is permitted. Standards reference: Standard No. 5.
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Privacy and Data Protection</div>
                    <ul className="list-disc list-inside">
                        <li>Personal information is protected in accordance with our privacy policy.</li>
                        <li>Course progress and completion data are securely stored.</li>
                        <li>Information is shared only as required for CPE verification.</li>
                        <li>The full privacy policy is available at [website].</li>
                    </ul>
                </div>

                <div className="space-y-2">
                    <div className="font-semibold text-lg">Contact Information</div>
                    <div className="font-semibold text-lg">Skillabyte LLC</div>
                    <div>Email: <a href="mailto:david.a.wood@gmail.com">david.a.wood@gmail.com</a></div>
                    <div>Address: 544 North 750 East, Orem, UT 84097 USA</div>
                    <div className="italic">
                        These terms of service are effective as of October 24, 2024. Skillabyte LLC reserves the right to
                        modify these terms with notice to participants. Continued use of our services constitutes acceptance
                        of any modifications.
                    </div>
                    <div>NASBA Registry Sponsor ID: </div>
                </div>
            </div>
        </div>
    )
}