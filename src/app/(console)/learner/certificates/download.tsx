"use client"

import { PDFDocument, TextAlignment } from "pdf-lib";

import { TokenHandler } from "@/lib/tokens"
import { CompletedCourse } from "@/lib/types/course";
import { useState } from "react";
import { LoadingIcon } from "@/components/ui/loading-icon";

export function CertificatesDownload({ course, text }: { course: CompletedCourse; text: string }) {
    const [loading, setLoading] = useState(false);

    const firstName = TokenHandler.getFirstName();
    const lastName = TokenHandler.getLastName();
    const fieldsOfStudyList = course.course.fields_of_study.map((field) => field.name).join(", ");

    const formattedTitle = course.course.title.toLowerCase().replace(/\s+/g, "_");
    const filename = `${formattedTitle}_completion_certificate.pdf`;

    const fetchPDF = async () => {
        const response = await fetch('https://skillabyte-public.s3.us-west-1.amazonaws.com/static/Skillabyte+Certificate+-+Fillable.pdf');
        const pdfBytes = await response.arrayBuffer();
        const bytes = new Uint8Array(pdfBytes);

        const pdfDoc = await PDFDocument.load(bytes);
        const form = pdfDoc.getForm();

        const nameField = form.getTextField('Name');
        const programField = form.getTextField('Program');
        const dateField = form.getTextField('Date');
        const deliveryField = form.getTextField('Delivery');
        const locationField = form.getTextField('Location');
        const fieldField = form.getTextField('Field');
        const creditsField = form.getTextField('Credits');

        if (nameField) {
            nameField.setText(`${firstName} ${lastName}`);
        }
        if (programField) {
            programField.setText(course.course.title);
        }
        if (dateField) {
            const date = new Date(course.completed_date);
            const dateString = new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }).format(date);
            dateField.setText(dateString.toUpperCase());
            dateField.setAlignment(TextAlignment.Right);
        }
        if (deliveryField) {
            deliveryField.setText("QAS SELF STUDY");
            deliveryField.setAlignment(TextAlignment.Right);
        }
        if (locationField) {
            locationField.setText("COMPLETED REMOTELY");
            locationField.setAlignment(TextAlignment.Right);
        }
        if (fieldField) {
            fieldField.setText(fieldsOfStudyList.toUpperCase());
            fieldField.setAlignment(TextAlignment.Right);
        }
        if (creditsField) {
            creditsField.setText(`${course.course.cpe_credits} CPE CREDIT${course.course.cpe_credits === 1 ? "" : "S"}`);
            creditsField.setAlignment(TextAlignment.Right);
        }

        form.flatten();

        const newPdfByes = await pdfDoc.save();

        const blob = new Blob([newPdfByes], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${filename}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <button onClick={fetchPDF} disabled={loading}>
            {loading ? <LoadingIcon /> : text}
        </button>
    )
}