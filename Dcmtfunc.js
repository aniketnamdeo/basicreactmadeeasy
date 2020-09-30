// import Icmtdcmt from './Icmtdcmt'

var Dcmtfunc = (event) => {
  event.preventDefault();
  var numm = String(Number(document.getElementById('number').innerHTML)-5);
  document.getElementById('number').innerHTML=numm
}
export default Dcmtfunc