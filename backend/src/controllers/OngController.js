const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body; // Body params

        const id = crypto.randomBytes(4).toString('HEX');
    
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf,
            });
        // console.log(data);
    
        //const params = request.query; // Query params
        const params = request.params; // Route params
        // console.log(params);
    
        return response.json({ id });
        //return response.send('Hello World');
    }
};