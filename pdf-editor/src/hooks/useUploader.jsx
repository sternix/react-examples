import { useState, createRef } from 'react';
import { readAsPDF, readAsDataURL, readAsImage } from '../utils/asyncReader';
import { ggID } from '../utils/helpers';
import { ATTACHMENT_TYPE_IMAGE } from '../entities';

export const
    UPLOAD_TYPE_PDF = 'pdf',
    UPLOAD_TYPE_IMAGE = 'image';

const handlers = {
    pdf: async (file) => {
        try {
            const pdf = await readAsPDF(file);
            return {
                file,
                name: file.name,
                pages: Array(pdf.numPages)
                    .fill(0)
                    .map((_, index) => pdf.getPage(index + 1)),
            };
        } catch (error) {
            console.log('Failed to load pdf', error);
            throw new Error('Failed to load PDF');
        }
    },
    image: async (file) => {
        try {
            const url = await readAsDataURL(file);
            const img = await readAsImage(url);
            const id = ggID();
            const { width, height } = img;

            const imageAttachemnt = {
                id,
                type: ATTACHMENT_TYPE_IMAGE,
                width,
                height,
                x: 0,
                y: 0,
                img,
                file,
            };
            return imageAttachemnt;
        } catch (error) {
            console.log('Failed to load image', error);
            throw new Error('Failed to load image');
        }
    },
};

function useUploader({
    use,
    afterUploadPdf,
    afterUploadAttachment,
}) {
    const [isUploading, setIsUploading] = useState(false);
    const inputRef = createRef();

    const onClick = (event) => {
        event.currentTarget.value = '';
    };

    const handleClick = () => {
        const input = inputRef.current;

        if (input) {
            setIsUploading(true);
            input.click();
        }
    };

    const upload = async (
        event
    ) => {
        if (!isUploading) {
            return;
        }

        const files =
            event.currentTarget.files ||
            (event.dataTransfer && event.dataTransfer.files);
        if (!files) {
            setIsUploading(false);
            return;
        }

        const file = files[0];

        const result = await handlers[use](file);

        if (use === UPLOAD_TYPE_PDF && afterUploadPdf) {
            afterUploadPdf(result);
        }

        if (use === UPLOAD_TYPE_IMAGE && afterUploadAttachment) {
            console.log('===> was this also called');
            afterUploadAttachment(result);
        }
        setIsUploading(false);
        return;
    };

    return {
        upload,
        onClick,
        inputRef,
        isUploading,
        handleClick,
    };
};

export default useUploader
