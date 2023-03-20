function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bmi = weight / (height / 100) ** 2;
    var result = document.getElementById("result");
  
    if (isNaN(bmi)) {
      result.innerHTML = "Please enter valid values for height and weight";
      return;
    }
  
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    if (bmi < 1) {
      result.innerHTML = "Your BMI can't be zero or below";
    }
  
    else if (bmi < 18.5) {
      result.innerHTML += " ( You're Underweight, try to track your calories and make sure you eat enough calories daily.)";
    }
     else if (bmi < 25) {
      result.innerHTML += " ( You're  at a Normal weight, keep going like that!)";
    }
     else if (bmi < 30) {
      result.innerHTML += " (You're Overweight, Losing weight can be challenging, but It's up to you to track your calories and do exercises regularly.)";
    }
     else {
      result.innerHTML += " (You're Obese, if you feel stressed and can not loose weight on your own, You can go to A healthcare provider who can provide personalized advice and support, and may be able to help identify any underlying health conditions that may be contributing to your weight.)";
    }

  }



// 1REPMAX



function calculateOneRepMax() {
  var reps = document.getElementById("reps").value;
  var weight2 = document.getElementById("weight2").value;
  var oneRepMax = weight2 * (reps^0.1);
  var result2 = document.getElementById("result2");

  if (isNaN(oneRepMax)) {
    result2.innerHTML = "Please enter valid values for height and weight";
    return;
  }

  else {result2.innerHTML = "Your 1RM is: " + oneRepMax.toFixed(2) + "kg";


}

}











