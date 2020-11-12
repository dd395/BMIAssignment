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


            //parse to numbers

            // do the math


            //Calculate BMI


            var bmi = (calculateWeight * 703) / (calculateHeight * calculateHeight);

            //put results in spans


            //show results

            if (bmi <= 18.5) {
               results.innerHTML = bmi.toFixed(1) + " - Underweight";
            } else if (bmi <= 25) {
               results.innerHTML = bmi.toFixed(1) + " - Healthy";
            } else if (bmi <=30) {
               results.innerHTML = bmi.toFixed(1) + " - Overweight";
           } else {
               results.innerHTML = bmi.toFixed(1) + " - Obese";
           }
            return false;


        }
        });

