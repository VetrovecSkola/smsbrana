export default (number, text) => {
  if (!/^\d{9}$/.test(number)) {
    return 'Invalid telephone number';
  } else if (text.length > 128) {
    return 'SMS too long';
  }
  return false;
};
