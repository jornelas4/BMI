$(document).ready(function()
{

    var myValidation = {


        height:
            {
                required: true,
                min:59,
                max:79,
                digits: true
            },
        weight:
            {
                required: true,
                min:88,
                max:353,
                digits: true
            },
    }

    var myMessages =
    {

    height:
    {
        required: " Please enter a value",
        min: " Must enter a number higher than 59",
        max: " Must enter a number lower than 80",
        digits: " Please enter some digits"
    },

    weight:
    {
        required: " Please enter a value",
        min: " Must enter a number higher than 88",
        max: " Must enter a number lower than 354",
        digits: " Please enter some digits"
    }

}
    $("form").validate(
        {
            submitHandler: calculateBmi,
            rules: myValidation,
            messages: myMessages
        });

    function calculateBmi()
    {
        var heightInput = $("#height").val();
        var weightInput = $("#weight").val();

        var bmiFormula = (weightInput / (heightInput * heightInput)) * 703;

        $("#bmiOutput").text(bmiFormula.toFixed(1));
    }



});