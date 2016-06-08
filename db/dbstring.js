var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL ||'mongodb://localhost/test' ;
module.exports=connectionString;