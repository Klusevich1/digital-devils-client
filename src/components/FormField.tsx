import React from 'react';

interface FormFieldProps {
    label: string;
    placeholder?: string;
    isTextArea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, placeholder, isTextArea = false }) => {
    const inputId = label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="flex flex-col grow shrink self-stretch my-auto w-60 min-w-[240px]">
            <label htmlFor={inputId} className="text-lg text-neutral-50">
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    id={inputId}
                    className="gap-2.5 self-stretch py-2.5 mt-1 w-full text-base border-b border-solid border-b-gray-200 text-neutral-400 bg-transparent outline-none resize-none h-[53px]"
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type="text"
                    id={inputId}
                    className="gap-2.5 self-stretch py-2.5 mt-1 w-full text-base border-b border-solid border-b-gray-200 text-neutral-400 bg-transparent outline-none"
                    placeholder={placeholder}
                />
            )}
        </div>
    );
};

export default FormField;