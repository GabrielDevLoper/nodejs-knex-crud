const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id, page = 1 } = req.query;
            const projects =  knex('projects')
                .limit(5)
                .offset((page - 1) * 5)

            if(user_id) {
                projects
                    .where({ user_id })
                    .join('users', 'users.id', '=', 'projects.user_id')
                    .select('projects.id', 'users.username', 'projects.title')
            }

            const data = await projects;
    
            return res.json(data);
        } catch (error) {
            next(error)
        } 
    },
    async create(req, res, next) {
        try {
            const { title, user_id } = req.body;

            const projects = await knex('projects').insert({
                title,
                user_id
            });

            return res.json(projects);
        } catch (error) {
            next(error);
        }
       


    }
}