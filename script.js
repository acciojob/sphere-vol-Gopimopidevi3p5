function volume_sphere(e) {
    //Write your code here
	e.preventDefault()
	const radius=Number(e.target.radius.value)
	const valumeEle=e.target.volume
	if(isNaN(radius) || radius<=0){
		valume.value="NaN"
		return
}
	const valume=(4/3 * Math.PI  * Math.pow(radius,3))
	const roundedVolume = Math.round(valume * 10000)/10000
	valumeEle.value=roundedVolume
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
