import mongoose from 'mongoose';
import { MongoUri } from './base';

const InitiateMongoServer = async () => {
	try {
		await mongoose.connect(MongoUri);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export default InitiateMongoServer;