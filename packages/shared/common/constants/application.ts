export const completeStatusLabel: { [key: string]: { borderColor: string; textColor: string; label: string } } = {
  Finish: {
    borderColor: 'border-primary',
    textColor: 'text-primary',
    label: '作成済み',
  },
  Processing: {
    borderColor: 'border-[#cccccc]',
    textColor: 'text-[#707070]',
    label: '作成途中',
  },
};
