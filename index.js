// Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

        const convertFahrToCelsius = (parameter) => {
            //Variable Declarations
            let result = ((parameter - 32) * (5 / 9));
            let parameterType = typeof parameter;

            //Condition to check for arrays
            if (Array.isArray(parameter) === true) {
                return console.log(`[${parameter}] is not a valid number but a/an array.`);
            }

            //Condition to check for objects
            else if (parameterType === 'object') {

                let objectParameter = JSON.stringify(parameter)
                return console.log(`${objectParameter} is not a valid number but a/an object.`);
            }

            //Condition to check for datatypes that are not numbers
            else if (parameterType !== 'number' && isNaN(parameter)) {

                return console.log(`${parameter} is not a valid number but a/an ${parameterType}.`);
            } else {
                return result.toFixed(4);
            }
        }

        //Test Cases
        console.log(convertFahrToCelsius(0))
        console.log(convertFahrToCelsius('0'))
        console.log(convertFahrToCelsius([1, 2, 3]))
        console.log(convertFahrToCelsius({
            temp: 0
        }))



        // Write a function named "checkYuGiOh" that takes a number, n, as an argument, creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

        //Declaring the variables
        const checkYuGiOh = (n) => {
            let i = 1;
            let myArray = [];

            // checking parameter
            if (
                isNaN(n) ||
                JSON.stringify(n) == '[]' ||
                n == null ||
                JSON.stringify(n) == '""' ||
                n === true ||
                n === false
            ) {
                return `invalid parameter: ${JSON.stringify(n)}`;
            } else {
                // if parameter is valid then create an array of numbers from 1 to n
                while (i <= n) {
                    myArray.push(i);
                    i++;
                }
            }

            // Replace multiples of 2, 3, and 5 with "yu", "gi" and "oh" respectively
            myArray.forEach((array, index) => {
                //Condition to check for array items that are multiples of 2
                if (array % 2 == 0) {
                    myArray[index] = 'yu';
                }
                //Condition to check for array items that are multiples of 3
                if (array % 3 == 0) {
                    myArray[index] = 'gi';
                }
                //Condition to check for array items that are multiples of 5
                if (array % 5 == 0) {
                    myArray[index] = 'oh';
                }
                //Condition to check for array items that are multiples of 2 and 3
                if (array % 2 == 0 && array % 3 == 0) {
                    myArray[index] = 'yu-gi';
                }
                //Condition to check for array items that are multiples of 2 and 5
                if (array % 2 == 0 && array % 5 == 0) {
                    myArray[index] = 'yu-oh';
                }
                //Condition to check for array items that are multiples of 2, 3 and 5
                if (array % 2 == 0 && array % 3 == 0 && array % 5 == 0) {
                    myArray[index] = 'yu-gi-oh';
                }
            });

            return myArray;
        };


        //Test Cases
        console.log(checkYuGiOh(10))
        console.log(checkYuGiOh("5"))
        console.log(checkYuGiOh("fizzbuzz is meh"))
