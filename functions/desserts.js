const formattedReturn = require('./helpers/formattedReturn');
const getDesserts = require('./helpers/getDesserts.js');
const createDesserts = require('./helpers/createDesserts.js');
//const deleteCourse = require('./helpers/deleteCourse');

exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return await getDesserts(event);
    } else if (event.httpMethod === 'POST') {
        return await createDesserts(event);
    // } else if (event.httpMethod === 'DELETE') {
    //     return await deleteCourse(event);
    } else {
        return formattedReturn(405, {});
    }
};