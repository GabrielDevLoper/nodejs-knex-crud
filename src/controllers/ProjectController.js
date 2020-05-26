const knex = require('../database');

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id } = req.query;
            const projects =  knex('projects');

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
}