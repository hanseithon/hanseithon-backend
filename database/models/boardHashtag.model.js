module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'boardHashtag',
    {
      pk: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      board_pk: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hashtag: {
        type: DataTypes.STRING(10),
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
