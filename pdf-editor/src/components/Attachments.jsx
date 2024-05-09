import ImageContainer from '../containers/ImageContainer';
import DrawingContainer from '../containers/DrawingContainer';
import TextContainer from '../containers/TextContainer';
import * as constants from '../entities'

function Attachments({
    attachments,
    pdfName,
    pageDimensions,
    removeAttachment,
    updateAttachment,
}) {
    const handleAttachmentUpdate = (index) => (attachment) => updateAttachment(index, attachment);

    return attachments ? (
        <>
            {attachments.length
                ? attachments.map((attachment, index) => {
                    const key = `${pdfName}-${index}`;

                    if (attachment.type === constants.ATTACHMENT_TYPE_IMAGE) {
                        return (
                            <ImageContainer
                                key={key}
                                pageWidth={pageDimensions.width}
                                pageHeight={pageDimensions.height}
                                removeImage={() => removeAttachment(index)}
                                updateImageAttachment={handleAttachmentUpdate(index)}
                                {...(attachment)}
                            />
                        );
                    }

                    if (attachment.type === constants.ATTACHMENT_TYPE_DRAWING) {
                        return (
                            <DrawingContainer
                                key={key}
                                pageWidth={pageDimensions.width}
                                pageHeight={pageDimensions.height}
                                removeDrawing={() => removeAttachment(index)}
                                updateDrawingAttachment={handleAttachmentUpdate(index)}
                                {...(attachment)}
                            />
                        );
                    }

                    if (attachment.type === constants.ATTACHMENT_TYPE_TEXT) {
                        return (
                            <TextContainer
                                key={key}
                                pageWidth={pageDimensions.width}
                                pageHeight={pageDimensions.height}
                                updateTextAttachment={handleAttachmentUpdate(index)}
                                {...(attachment)}
                            />
                        );
                    }
                    return null;
                })
                : null}
        </>
    ) : null;
};

export default Attachments