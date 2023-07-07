import awsLambdaFastify from '@fastify/aws-lambda';
import { app } from './app.mjs';

export const handler = awsLambdaFastify(app);
