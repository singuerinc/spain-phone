declare const isPhone: (value: string) => boolean;
declare const isFixed: (value: string) => boolean;
declare const isMobile: (value: string) => boolean;
declare const isFreeCall: (value: string) => boolean;
declare const isLowCost: (value: string) => boolean;
declare const isHighCost: (value: string) => boolean;
declare const isOther: (value: string) => boolean;
declare const statesByCode: (value: string) => string[];
declare const statesByNumber: (value: string) => string[];

export {
  isPhone,
  isFixed,
  isMobile,
  isFreeCall,
  isLowCost,
  isHighCost,
  isOther,
  statesByCode,
  statesByNumber
};
