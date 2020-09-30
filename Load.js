import Regform from './Regform'

var Loadder = (event) => {
  event.preventDefault();
  const dates = new Date().toLocaleDateString()
  const form = document.getElementById('form');
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value; 
  document.getElementById('puthere').innerHTML=fname +' '+ lname +' '+ dates
}
export default Loadder