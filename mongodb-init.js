db.createUser(
    {
        user: "aaa",
        pwd: "123",
        roles: [ { role: "readAnyDatabase", db: "admin" }, { role: "dbAdminAnyDatabase", db: "admin" }, { role: "userAdminAnyDatabase", db: "admin" }]
    });