module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'board',
    {
      pk: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_pk: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    }
  );
};
