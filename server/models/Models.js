module.exports = (sequelize, DataTypes) => {
    const Models ={}
    Models.gyms = sequelize.define('gym', {

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
    
    Models.equipments = sequelize.define('equipment', {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        desc:{
            type: DataTypes.STRING,
            allowNull: true
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        // Other model options go here
    });
    Models.slots = sequelize.define('slot', {

        slot_in: {
            type: DataTypes.TIME,
            allowNull: false
        },
        slot_out: {
            type: DataTypes.TIME,
            allowNull: false
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        },
        nop: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
    }, {
        // Other model options go here
    });
    Models.user = sequelize.define('users', {
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        slot_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //     model:Models.slots,
            //     key: 'id'
            // },
            defaultValue:-1
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
    return Models
}