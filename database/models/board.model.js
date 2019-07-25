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
      board_pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      charset: 'utf8',
      collate: 'utf8_unicode_ci',
    }
  );
};
