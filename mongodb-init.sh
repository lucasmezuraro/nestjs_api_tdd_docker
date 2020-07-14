mongo -- "$MONGO_INITDB_DATABASE" <<EOF
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var user = '$MONGO_INITDB_ROOT_USERNAME';
    var passwd = '$MONGO_INITDB_ROOT_PASSWORD';
    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);
    db.createUser({user: user, pwd: passwd, roles: [{role:"readWrite",db:"$MONGO_INITDB_DATABASE"]});
EOF
