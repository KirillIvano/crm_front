export type DataType = 'json' | 'multipart';

const DATA_TYPE_TO_CONTENT_TYPE: Record<DataType, string> = {
    'json': 'application/json',
    'multipart': 'multipart/form-data',
};

export const getContentTypeFromDataType = (dataType: DataType) =>
    DATA_TYPE_TO_CONTENT_TYPE[dataType];
