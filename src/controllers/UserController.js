const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            const users = await knex('users');
    
            return res.status(200).json(users);
        } catch (error) {
            next(error)
        } 
    },
    async create(req, res, next) {
        try {
            const { username } = req.body

            const users = await knex('users').insert({
                username
            });
    
            return res.status(201).json(users);
        } catch (error) {
            next(error);
        }    
    },
    async update(req, res, next){
        try {
            const { id } = req.params;
            const { username } = req.body;

            const users = await knex('users').update({
                username
            }).where({id});

            return res.json({message: "Alterado com Sucesso!"});
        } catch (error) {
            next(error)
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            
            await knex('users').delete().where({ id });

            return res.json({message: "Excluído com Sucesso!"});
        } catch (error) {
            next(error);
        }
    }
}