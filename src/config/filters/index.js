import numeral from 'numeral'

function numeralFormat (val) {
  return numeral(val).format('0,0.00');
}

export default {
  numeralFormat: numeralFormat
}
