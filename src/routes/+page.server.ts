import type { PageServerLoad } from './$types';
import logger from '$lib/logger';


export const load = (async () => {
    logger.info('Hello from the server!');


    return {};
}) satisfies PageServerLoad;