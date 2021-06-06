import {DataType} from '@/admin-lib/util/dataType';


export const getHeadersFromDataType = (dataType: DataType) =>
    dataType === 'json' ? {'Content-Type': 'application/json'} : undefined;
