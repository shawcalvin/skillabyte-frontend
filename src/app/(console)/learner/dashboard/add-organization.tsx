"use client"

import { registerOrganization } from "@/actions/organizations";
import { Button } from "@/components/ui/button";
import { Dialog, DialogActions, DialogBody, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { ErrorMessage, Field, Label } from "@/components/ui/fieldset";
import { InfoIcon } from "@/components/ui/info";
import { Input } from "@/components/ui/input";
import { useState } from "react";


export function AddOrganizationForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [addCode, setAddCode] = useState("");
    const [error, setError] = useState("");

    const handleAddOrganization = async (code: string) => {
        try {
            const res = await registerOrganization(code);
            if (res.code !== 201) {
                setError(res.message)
            } else {
                setIsOpen(false)
            }
        }
        catch (error) {
            setError("An unexpected error occurred. Please try again.")
        }
    }

    return (
        <>
            <div className="flex w-full h-full">
                <Button color='blue' onClick={() => setIsOpen(true)} className="w-full">
                    Add an organization
                </Button>
                <InfoIcon info="Adding an organization lets you join as part of a group. Use this if you’ve received an add code from your company or group administrator." position="bottom-center" />
            </div>
            <Dialog open={isOpen} onClose={setIsOpen}>
                <DialogTitle>Add an organization</DialogTitle>
                <DialogDescription>
                    Enter your organization&apos;s add code below. If you don&apos;t have an add code, reach out to your organization&apos;s facilitator.
                </DialogDescription>
                <DialogBody>
                    <Field>
                        <Label>Add code</Label>
                        <Input
                            value={addCode}
                            onChange={(e) => setAddCode(e.target.value)}
                            invalid={error.length > 0}
                        />
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                    </Field>
                </DialogBody>
                <DialogActions>
                    <Button plain onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button onClick={() => handleAddOrganization(addCode)}>Add Organization</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}