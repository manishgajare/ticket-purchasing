export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validateCardNo(cardNo) {
  const re = /^[0-9\b]+$/;
  return cardNo.length === 16 && re.test(cardNo);
}

export function validateCVV(cardCVV) {
  const re = /^[0-9\b]+$/;
  return cardCVV.length === 3 && re.test(cardCVV);
}

export function validateZipcode(zipcode) {
  const re = /^[0-9\b]+$/;
  return zipcode.length === 5 && re.test(zipcode);
}

export function validateCardExp(cardExp) {
  const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  return cardExp.length === 5 && re.test(cardExp);
}
