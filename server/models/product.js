module.exports = (sequelize, DataTypes) => {
    return sequelize.define("product", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            validate: {
                isUrl: true
            }
        },
    }, { underscored: true
        }/* ,
        {
            initialAutoIncrement: 1 } */
    );
};

//