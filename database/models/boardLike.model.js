module.exports = (sequelize, DataTypes) => {
  return sequelize.define('boardLike', {
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
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  });
};
