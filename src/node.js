const {MongoClient} = require('mongodb');

async function main() {
	
    

const uri = "mongodb+srv://ashik:ashik@123@cluster0.ptovuaw.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);


try {
    await client.connect();

} 
catch (e) {
    console.error(e);
}

finally {
    await client.close();
}

}

main().catch(console.error);