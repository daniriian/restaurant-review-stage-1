/**
 * Register seviceWorker.
 */

if (navigator.serviceWorker) {

    navigator.serviceWorker.register('sw.js')
        .then(function () {
            console.log('Registration successfull !');
        })
        .catch(function () {
            console.log('Registration Failed');
        })
}
