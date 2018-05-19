const sanitize = value => {
  return String(value || '')
    .trim()
    .toUpperCase()
    .replace(/[-_\s]/g, '');
};

const isFixed = v => /^[589]{1}(\d){8}$/.test(sanitize(v));
const isMobile = v => /^[67]{1}(\d){8}$/.test(sanitize(v));
const isPhone = v => isFixed(v) || isMobile(v);
const isFreeCall = v => /^(900|800)(\d){6}$/.test(sanitize(v));
const isLowCost = v => /^(901|902)(\d){6}$/.test(sanitize(v));
const isHighCost = v => /^(905|907|803|806|807)(\d){6}$/.test(sanitize(v));
const isOther = v => /^(908|909|940)(\d){6}$/.test(sanitize(v));

module.exports = {
  isPhone,
  isFixed,
  isMobile,
  isFreeCall,
  isLowCost,
  isHighCost,
  isOther
};
