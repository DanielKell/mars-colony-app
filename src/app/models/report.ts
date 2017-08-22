export interface Report {

    id: number;
    date: string;
    action: string;
    colonist_id: number;
    atype: string;
}

export interface NewReport {

        date: string;
        colonist_id: string;
        atype: string;
        action: string;
}
