$(document).ready(
    function() {
        // Object containing the validation rules
        var myRules =
            {
                numHeight:
                    {
                        min: 59,
                        max: 79,
                        digits: true

                    },
                numWeight:
                    {
                        min: 88,
                        max: 353,
                        digits: true
                    }


            };

        // Object containing the error messages
        var myMessages =
            {
                numHeight:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your height in inches between 59 and 79."
                    },

                numWeight:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your weight in pounds between 88 and 353."
                    }

            };

        // Pass the configuration to the form's validate() method
        // Needs submitHandler, rules, and messages properties
        $("form").validate(
            {
                submitHandler: calcBMI,
                rules: myRules,
                messages: myMessages
            }
        );

        //add event handlers
       // $("form").submit(calcBMI);
        $("#calcButton").click(calcBMI);



        //add program logic

        function calcBMI() {


            //get data from

            var calculateWeight = parseFloat($("#numWeight").val());
            var calculateHeight = parseFloat($("#numHeight").val());



            // do the math


            //Calculate BMI


            var calcBMI = (calculateWeight * 703) / (calculateHeight * calculateHeight);

            //put results in spans


            //show results

            if (calcBMI <= 18.5) {
                results.innerHTML = calcBMI.toFixed(1) + " - Underweight";
            } else if (calcBMI <= 25) {
                results.innerHTML = calcBMI.toFixed(1) + " - Healthy";
            } else if (calcBMI <= 30) {
                results.innerHTML = calcBMI.toFixed(1) + " - Overweight";
            } else if (calcBMI <= 32) {
                results.innerHTML = calcBMI.toFixed(1) + " - Obese";
            } else {
                results.innerHTML = " You must enter height and weight";
            }

            return false;
        }})





