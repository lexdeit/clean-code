(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?
    function isRedFruit(fruit: string): boolean {

        //Antes
        // if (fruit === 'manzana' || fruit === 'cereza' || fruit === 'ciruela') {
        //     return true;
        // } else {
        //     return false;
        // }

        //Despues
        // return fruit === 'manzana' || fruit === 'cereza' || fruit == 'ciruela' ? true : false;

        //Mejor
        const redFruits = ['manzana', 'cereza']
        return redFruits.includes(fruit);
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores
    function getFruitsByColor(color: string): string[] {

        //Antes
        // if (color === 'red') {
        //     return ['manzana', 'fresa'];
        // } else if (color === 'yellow') {
        //     return ['piña', 'banana'];
        // } else if (color === 'purple') {
        //     return ['moras', 'uvas']
        // } else {
        //     throw Error('the color must be: red, yellow, purple');
        // }

        //Despues
        // return color === 'red' ? ['manzana', 'fresa'] :
        //     color === 'yellow' ? ['piña', 'banana'] :
        //         color === 'purple' ? ['moras', 'uvas'] :
        //             (() => { throw new Error('The color must be: red, yellow, purple'); })();

        //Mejor
        const FRUIT_COLORS: { [key: string]: string[] } = {
            'red': ['manzana', 'fresa'],
            'yellow': ['piña', 'banana'],
            'purple': ['moras', 'uvas']
        };

        if (!FRUIT_COLORS[color]) {
            throw new Error('The color must be: red, yellow, purple');
        }

        return FRUIT_COLORS[color];
    }


    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        //Antes
        // if (isFirstStepWorking === true) {
        //     if (isSecondStepWorking === true) {
        //         if (isThirdStepWorking === true) {
        //             if (isFourthStepWorking === true) {
        //                 return 'Working properly!';
        //             }
        //             else {
        //                 return 'Fourth step broken.';
        //             }
        //         }
        //         else {
        //             return 'Third step broken.';
        //         }
        //     }
        //     else {
        //         return 'Second step broken.';
        //     }
        // }
        // else {
        //     return 'First step broken.';
        // }

        //Después
        // return !isFirstStepWorking ? 'First step broken.' :
        //     !isSecondStepWorking ? 'Second step broken.' :
        //         !isThirdStepWorking ? 'Third step broken.' :
        //             !isFourthStepWorking ? 'Fourth step broken.' :
        //                 'Working properly!';

        //Mejor
        const steps = [
            { check: isFirstStepWorking, message: 'First step broken.' },
            { check: isSecondStepWorking, message: 'Second step broken.' },
            { check: isThirdStepWorking, message: 'Third step broken.' },
            { check: isFourthStepWorking, message: 'Fourth step broken.' }
        ];

        for (const step of steps) {
            if (!step.check) {
                return step.message;
            }
        }

        return 'Working properly!';
    }



    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
