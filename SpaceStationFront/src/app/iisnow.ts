
    export interface IssPosition {
        latitude: string;
        longitude: string;
    }

    export interface IssNow {
        timestamp: number;
        iss_position: IssPosition;
        message: string;
    }