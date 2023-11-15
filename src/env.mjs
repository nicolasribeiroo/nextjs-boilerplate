import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {
		NEXT_PUBLIC_LOCAL_DEV: z.string().optional(),
	},
	runtimeEnv: {
		NEXT_PUBLIC_LOCAL_DEV: process.env.NEXT_PUBLIC_LOCAL_DEV,
	},
});
