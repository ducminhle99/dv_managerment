export const approveLabel: { [key: number]: string } = {
  1: '未承認',
  2: '',
  3: '',
};

export const contactPlanLabel: { [key: number]: string } = {
  1: 'ライトプラン',
  2: 'ベーシックプラン',
  3: 'ハイエンドプラン',
  99: 'その他',
};

export const contactPlanPriceLabel: { [key: number]: string | number } = {
  1: 10000,
  2: 30000,
  3: 50000,
  99: '',
};

export const employeeSizeLabel: { [key: number]: string } = {
  1: '～50名',
  2: '51～100名',
  3: '101名～300名',
  4: '300名以上',
};

export const profitTypeLabel: { [key: number]: string } = {
  1: '～5,000万',
  2: '5000万～1億',
  3: '1億～10億',
  4: '10億以上',
};

export const industryTypeLabel: { [key: number]: string } = {
  1: '介護業',
  2: 'ビルクリーニング業',
  3: '素形材産業',
  4: '産業機械製造業',
  5: '電気・電子情報関連産業',
  6: '建設業',
  7: '造船・舶用業',
  8: '自動車整備業',
  9: '航空業',
  10: '宿泊業',
  11: '農業',
  12: '漁業',
  13: '飲食料品製造業',
  14: '外食業',
  15: '登録支援機関（行政書士事務所含む）',
  16: 'その他',
};

export const contactPlanLabelColor: { [key: number]: { borderColor: string; bgColor: string; textColor: string } } = {
  1: {
    borderColor: 'border-primary',
    textColor: 'text-primary',
    bgColor: 'bg-primary-light-500',
  },
  2: {
    borderColor: 'border-orange-light-1',
    textColor: 'text-orange-light-1',
    bgColor: 'bg-orange-light-2',
  },
  3: {
    borderColor: 'border-pink-light-1',
    textColor: 'text-pink-light-1',
    bgColor: 'bg-pink-light-2',
  },
  99: {
    borderColor: 'border-yellow-light-1',
    textColor: 'text-yellow-light-1',
    bgColor: 'bg-yellow-light-2',
  },
};
