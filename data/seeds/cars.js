exports.seed = function(knex) {
    return knex('cars').del()
        .then(function () {
            return knex('cars').insert([
                {
                    "VIN": "12345678",
                    "make": "Toyota",
                    "model": "Camry",
                    "mileage": 48000,
                    "transmission": "Auto",
                    "status": "Used"
                }
            ]);
        });
};