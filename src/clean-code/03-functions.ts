(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById(movieId: string) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(ActorId: string) {
        console.log({ ActorId });
    }

    interface Movie {
        title: string,
        description: string,
        rating: number,
        cast: string[]
    }

    // Crear una película
    function createMovie({ title, description, rating, cast }: Movie) {

        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor(fullName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre <= Esto esta mal porque antes de esto se deberia de verificar si el Actor existe y posteriormente ejecutar esta funcion
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthDate);
        return true;

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {


        // if (isDead) {
        //     return 1500;
        // }

        // if (isSeparated) {
        //     return 2500;
        // }

        // if (isRetired) {
        //     return 3000;
        // }

        // return 4000;

        //Esta es la mejor opcion
        return isDead ? 1500 : isSeparated ? 2500 : isRetired ? 3000 : 4000;

    }


})();