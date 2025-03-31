const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');

module.exports = async (event) => {
    try {
        const dessertVotes = await table.select().firstPage();
        const formattedDesserts = dessertVotes.map((dessert) => ({
            id: dessert.id,
            ...dessert.fields,
        }));
        return formattedReturn(200, formattedDesserts);
    } catch (err) {
        console.error(err);
        return formattedReturn(500, {msg: 'Something went wrong'});
    }
};