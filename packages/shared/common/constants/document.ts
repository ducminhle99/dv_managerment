export enum DocumentType {
  resource = 1,
  workplace = 2,
}

export const DocumentLabel: { [key: number]: string } = {
  [DocumentType.resource]: '人材に関する書類',
  [DocumentType.workplace]: '所属先に関する書類',
};

export const DocumentMasterOtherKey: number[] = [20, 39];
