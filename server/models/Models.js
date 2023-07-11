module.exports = (sequelize, DataTypes) => {

    const Gyms = sequelize.define('gym', {

        opening_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        closing_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        // Other model options go here
    });
    
    const Equipments = sequelize.define('equipment', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        // Other model options go here
    });
    const Slots = sequelize.define('slot', {

        slot_in: {
            type: DataTypes.TIME,
            allowNull: false
        },
        slot_out: {
            type: DataTypes.TIME,
            allowNull: false
        },
        nop: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        // Other model options go here
    });
    const User = sequelize.define('users', {

        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slot_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model:Slots,
                key: 'id'
            }
        },
        check_in: {
            type: DataTypes.TIME,
            allowNull: true
        },
        check_out: {
            type: DataTypes.TIME,
            allowNull: true

        }
    }, {
        // Other model options go here

    });
    // Slots.hasMany(User)
}