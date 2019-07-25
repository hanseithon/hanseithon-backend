const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//모델정보를 읽어온다.
/* db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
 */
//모델간의 관계를 정의한다.
/* db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
db.Comment.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' }); */

db.User = require('./models/user.model')(sequelize, Sequelize);
db.Board = require('./models/board.model')(sequelize, Sequelize);
db.BoardLike = require('./models/boardLike.model')(sequelize, Sequelize);

db.User.hasMany(db.Board, { foreignKey: 'user_pk', sourceKey: 'pk' });
db.User.hasMany(db.BoardLike, { foreignKey: 'user_pk', sourceKey: 'pk' });
db.Board.hasMany(db.BoardLike, { foreignKey: 'board_pk', sourceKey: 'pk' });

db.Board.belongsTo(db.User, { foreignKey: 'user_pk', targetKey: 'pk' });
db.BoardLike.belongsTo(db.User, { foreignKey: 'user_pk', targetKey: 'pk' });
db.BoardLike.belongsTo(db.Board, { foreignKey: 'board_pk', targetKey: 'pk' });

module.exports = db;
