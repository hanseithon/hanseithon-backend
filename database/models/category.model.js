module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'category',
    {
      pk: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    }
  );
};
