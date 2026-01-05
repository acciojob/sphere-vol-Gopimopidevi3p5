function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	const radius=Number(e.target.radius.value)
	const valume=e.target.volume
	if(isNaN(radius) || radius<=0){
		valume.value="NaN"
		return
}
	valume.value=(4/3 * Math.PI  * Math.pow(radius,3)).toFixed(4)
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
