export type SQLDataset = {
    metadata: {
        name: string
    }
    tables: {
        name: string;
        fields: {
            name: string;
            type: string;
        }[];
        rows: Record<string, any>[];
    }[];
}
export type SQLFlags = {
    correctColCount: boolean
    correctColValues: boolean
    correctRowCount: boolean
    correctRowValues: boolean
}

