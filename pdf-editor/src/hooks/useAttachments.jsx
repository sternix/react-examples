import { useReducer, useCallback } from 'react';

const ACTION_TYPE_RESET = 'RESET';
const ACTION_TYPE_ADD_ATTACHMENT = 'ADD_ATTACHMENT';
const ACTION_TYPE_REMOVE_ATTACHMENT = 'REMOVE_ATTACHMENT';
const ACTION_TYPE_UPDATE_ATTACHMENT = 'UPDATE_ATTACHMENT';
const ACTION_TYPE_UPDATE_PAGE_INDEX = 'UPDATE_PAGE_INDEX';

const initialState = {
    pageIndex: -1,
    allPageAttachments: [],
    pageAttachments: [],
};

function reducer(state, action) {
    const { pageIndex, allPageAttachments, pageAttachments } = state;

    switch (action.type) {
        case ACTION_TYPE_ADD_ATTACHMENT: {
            const newAllPageAttachmentsAdd = allPageAttachments.map(
                (attachments, index) =>
                    pageIndex === index
                        ? [...attachments, action.attachment]
                        : attachments
            );

            return {
                ...state,
                allPageAttachments: newAllPageAttachmentsAdd,
                pageAttachments: newAllPageAttachmentsAdd[pageIndex],
            };
        }
        case ACTION_TYPE_REMOVE_ATTACHMENT: {
            const newAllPageAttachmentsRemove = allPageAttachments.map(
                (otherPageAttachments, index) =>
                    pageIndex === index
                        ? pageAttachments.filter(
                            (_, _attachmentIndex) =>
                                _attachmentIndex !== action.attachmentIndex
                        )
                        : otherPageAttachments
            );

            return {
                ...state,
                allPageAttachments: newAllPageAttachmentsRemove,
                pageAttachments: newAllPageAttachmentsRemove[pageIndex],
            };
        }
        case ACTION_TYPE_UPDATE_ATTACHMENT: {
            if (pageIndex === -1) {
                return state;
            }

            const newAllPageAttachmentsUpdate = allPageAttachments.map(
                (otherPageAttachments, index) =>
                    pageIndex === index
                        ? pageAttachments.map((oldAttachment, _attachmentIndex) =>
                            _attachmentIndex === action.attachmentIndex
                                ? { ...oldAttachment, ...action.attachment }
                                : oldAttachment
                        )
                        : otherPageAttachments
            );

            return {
                ...state,
                allPageAttachments: newAllPageAttachmentsUpdate,
                pageAttachments: newAllPageAttachmentsUpdate[pageIndex],
            };
        }
        case ACTION_TYPE_UPDATE_PAGE_INDEX: {
            return {
                ...state,
                pageIndex: action.pageIndex,
                pageAttachments: allPageAttachments[action.pageIndex],
            };
        }
        case ACTION_TYPE_RESET: {
            return {
                pageIndex: 0,
                pageAttachments: [],
                allPageAttachments: Array(action.numberOfPages).fill([]),
            };
        }
        default: {
            return state;
        }
    }
};

function useAttachments() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { allPageAttachments, pageAttachments } = state;

    const add = (newAttachment) =>
        dispatch({ type: ACTION_TYPE_ADD_ATTACHMENT, attachment: newAttachment });

    const remove = (attachmentIndex) =>
        dispatch({ type: ACTION_TYPE_REMOVE_ATTACHMENT, attachmentIndex });

    const update = (attachmentIndex, attachment) =>
        dispatch({
            type: ACTION_TYPE_UPDATE_ATTACHMENT,
            attachmentIndex,
            attachment,
        });

    const reset = (numberOfPages) =>
        dispatch({ type: ACTION_TYPE_RESET, numberOfPages });

    const setPageIndex = useCallback(
        (index) =>
            dispatch({ type: ACTION_TYPE_UPDATE_PAGE_INDEX, pageIndex: index }),
        [dispatch]
    );

    return {
        add,
        reset,
        remove,
        update,
        setPageIndex,
        pageAttachments,
        allPageAttachments,
    };
};

export default useAttachments