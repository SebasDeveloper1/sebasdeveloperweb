import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${process.env.SERVICE_URL}`]: {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    },
  },
  documents: 'app/lib/api/queries/**/*.ts',
  generates: {
    'app/lib/api/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
};

export default config;
