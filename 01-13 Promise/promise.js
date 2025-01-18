//new Promise()

// const promiseObject = new Promise((resolve, reject) =>
// {
//     if (false)
//     {
//         resolve('Success');
//     }
//     else
//     {
//         reject('Failed');
//     }
// });

// const promiseObject = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
//         if (true)
//         {
//             resolve('Success');
//         }
//         else
//         {
//             reject('Failed');
//         }
//     }, 2000);


// })

// promiseObject.then(resolveHandler).catch(rejectHandler);
// console.log(promiseObject);


// function resolveHandler(value)
// {
//     console.log('Handling resolve message', value)
// }

// function rejectHandler(value)
// {
//     console.log('Handling reject message', value)
// }


// Promise returning function

// function promiseReturning(age)
// {
//     return new Promise((resolve, reject) =>
//     {
//         if (age > 18)
//         {
//             resolve("You are permitted to vote");
//         }
//         else
//         {
//             reject("You are not permitted to vote");
//         }
//     });

// }

// promiseReturning(17)
//     .then((resolveValue) => console.log(resolveValue))
//     .catch((error) => console.error(error))
//     .finally(() => console.log('Promise is settled'));


function fetchFromAPI(url)
{

    return new Promise((resolve, reject) =>
    {
        const xmlRequest = new XMLHttpRequest();
        xmlRequest.open('GET', url);
        xmlRequest.onload = function ()
        {
            if (xmlRequest.status === 200)
            {
                resolve(xmlRequest.responseText);
            } else
            {
                reject('Error');
            }
        }
    })
}