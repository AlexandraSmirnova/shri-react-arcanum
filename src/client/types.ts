export interface ContentDirectoryData {
    name: string;
    isDirectory: boolean;
}

export type FileContent = string[];

export type ApiReposReponse = string[];

export type ApiTreeReponse = ContentDirectoryData[];
